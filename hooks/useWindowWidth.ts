import { useLayoutEffect, useState } from 'react';

export default function useWindowWidth() {
  const [getWindowWidth, setGetWindowWidth] = useState(0);

  useLayoutEffect(() => {
    setGetWindowWidth(window.innerWidth);
  }, []);

  return getWindowWidth;
}
