import { useState } from 'react';

export const useAuction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [restTime, setRestTime] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const restTimeChecker = (startAt: string, endAt: string) => {
    const startAtDate = new Date(startAt);
    const endAtDate = new Date(endAt);
    const timeDifference = endAtDate.getTime() - startAtDate.getTime();
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const days = Math.floor(timeDifference / millisecondsInDay);
    const hours = Math.floor(
      (timeDifference % millisecondsInDay) / millisecondsInHour
    );
    const minutes = Math.floor(
      (timeDifference % millisecondsInHour) / millisecondsInMinute
    );
    const seconds = Math.floor(
      (timeDifference % millisecondsInMinute) / millisecondsInSecond
    );

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    const formattedTime = `${days}일 ${formatNumber(hours)}:${formatNumber(
      minutes
    )}:${formatNumber(seconds)}`;
    return formattedTime;
  };

  return { isModalOpen, openModal, closeModal, restTimeChecker };
};
