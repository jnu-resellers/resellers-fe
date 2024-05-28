import { useState } from 'react';

interface useAuctionProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handlePriceUnit: (priceUnit: number) => void;
  restTimeChecker: (endAt: string) => string;
  timeFormatter: (time: string) => string;
}

export const useAuction = () => {
  const [isModalOpen, setIsModalOpen] =
    useState<useAuctionProps['isModalOpen']>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const timeFormatter = (time: string) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const formatTime = `${year}년 ${month < 10 ? `0${month}` : month}월 ${
      day < 10 ? `0${day}` : day
    }일 ${hour < 10 ? `0${hour}` : hour}시 ${
      minute < 10 ? `0${minute}` : minute
    }분 ${second < 10 ? `0${second}` : second}초`;

    return formatTime;
  };

  const restTimeChecker = (endAt: string) => {
    const now = new Date();
    const end = new Date(endAt);
    const diff = end.getTime() - now.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const formatTime = `${day}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    return formatTime;
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    restTimeChecker,
    timeFormatter,
  };
};
