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
        'onSettled'
      >
    ) => {
      mutate(
        { auctionId, price },
        {
          ...mutateOption,
          onSettled: (data) => {
            if (!data) throw new Error('data is undefined');
          },
        }
      );
    },
  };
};
