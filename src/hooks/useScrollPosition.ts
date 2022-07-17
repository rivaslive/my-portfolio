import { useEffect, useMemo, useState } from 'react';

const useScrollPosition = (top = 60) => {
  const [scrollPosition, setScrollPosition] = useState(
    (typeof window !== 'undefined' && window.pageYOffset) || 0,
  );

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll.bind(this));
    return () => {
      window.removeEventListener('scroll', onScroll.bind(this));
    };
  }, []);

  const detached = useMemo(() => {
    return scrollPosition > top;
  }, [scrollPosition, top]);

  return {
    detached,
  };
};

export default useScrollPosition;
