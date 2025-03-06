import { useEffect } from "react";

export const useDebouncer = ({
  value,
  handleCallback,
  duration,
}: {
  value: Record<string, string>;
  handleCallback: () => void;
  duration: number;
}) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      handleCallback();
    }, duration);

    return () => clearTimeout(timerId);
  }, [value, duration]);
};

/*
  useDebouncer({
    value: { query }, // Value to debounce
    handleCallback: fetchSearchResults, // Function to execute
    duration: 1000, // 1-second delay
  });
*/
