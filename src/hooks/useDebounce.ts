import { useState, useEffect } from "react";

export default function useDebounce(keyword: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(keyword);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(keyword);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword, delay]);

  return debouncedValue;
}
