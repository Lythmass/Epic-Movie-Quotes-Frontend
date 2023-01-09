import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  const [getWindowWidth, setGetWindowWidth] = useState(0);

  useEffect(() => {
    setGetWindowWidth(window.innerWidth);
  }, []);

  return getWindowWidth;
}
