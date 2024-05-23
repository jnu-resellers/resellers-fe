import ApexCharts from 'apexcharts';
import { useEffect, useRef } from 'react';
import { getTradePrice } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';

export const PriceCheck = () => {
  const chartRef = useRef<ApexCharts | null>(null);
  const { data } = useQuery({
    queryKey: ['tradePrice'],
    queryFn: getTradePrice,
  });

  useEffect(() => {
    const dates = data?.map((entry) => entry.date) ?? [];
    const lowestPrices = data?.map((entry) => entry.lowest) ?? [];
    const averagePrices = data?.map((entry) => entry.average) ?? [];

    const options = {
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: '최저가',
          data: lowestPrices,
        },
        {
          name: '평균가',
          data: averagePrices,
        },
      ],
      xaxis: {
        categories: dates,
      },
    };

    if (!chartRef.current) {
      chartRef.current = new ApexCharts(
        document.querySelector('#chart'),
        options
      );
      chartRef.current.render();
    } else {
      chartRef.current.updateOptions(options);
    }
  }, [data]);

  return <div id="chart" />;
};
