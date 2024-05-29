import { patchAuctionPrice, patchAuctionBidRes } from 'src/apis/auctions';
import { useMutation, MutateOptions } from '@tanstack/react-query';

export const useAuctionMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['auction'],
    mutationFn: patchAuctionPrice,
  });

  return {
    patchAuctionPrice: (
      auctionId: number,
      price: number,
      mutateOption?: Omit<
        MutateOptions<patchAuctionBidRes, Error, unknown>,
        'onSuccess' | 'onError'
      >
    ) => {
      mutate(
        { auctionId, price },
        {
          ...mutateOption,
          onSuccess: (data) => {
            if (!data) throw new Error('data is undefined');
            alert('입찰이 완료되었습니다.');
          },
          onError: (error) => {
            alert(error);
            console.error(error);
          },
        }
      );
    },
  };
};
