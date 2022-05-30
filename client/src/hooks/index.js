import { useEffect, useState } from 'react';

export const useTagAnimation = ({ label, speed }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(0), [label]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < label.length) setIndex(index + 1);
    }, speed);
    return () => clearInterval(interval);
  }, [index]);

  return label.split('').slice(0, index).join('');
};

export const useArrayInterval = ({ tags, speed }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (tags[index + 1]) setIndex((old) => old + 1);
        else setIndex(0);
      },
      typeof speed === 'function' ? speed(tags[index]) : speed,
    );

    return () => clearInterval(interval);
  }, [index]);

  return {
    current: tags[index],
  };
};
