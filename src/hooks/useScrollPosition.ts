import { useEffect, useMemo, useState } from 'react';

const useScrollPosition = (top = 60) => {
  const [isMount, setIsMount] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState(
    (typeof window !== 'undefined' && window.pageYOffset) || 0
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMount(false);
    }

    return () => {
      setIsMount(false);
    };
  }, []);

  const detached = useMemo(() => {
    return scrollPosition > top;
  }, [scrollPosition, top]);

  return {
    detached,
    loading: isMount
  };
};

export default useScrollPosition;
