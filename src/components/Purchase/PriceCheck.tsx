import ApexCharts from 'apexcharts';
import { useEffect, useRef } from 'react';

interface PriceCheckProps {
  data: { date: string; lowest: number; average: number }[];
}

export const PriceCheck = ({ data }: PriceCheckProps) => {
  const chartRef = useRef<ApexCharts | null>(null);

  useEffect(() => {
    const dates = data.map((entry) => entry.date);
    const lowestPrices = data.map((entry) => entry.lowest);
    const averagePrices = data.map((entry) => entry.average);

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
