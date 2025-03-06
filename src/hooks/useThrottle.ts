import { useEffect, useRef } from "react";

export const useThrottle = ({
  value,
  handleCallback,
  duration,
}: {
  value: Record<string, string>;
  handleCallback: () => void;
  duration: number;
}) => {
  const lastExecutionRef = useRef<number>(0);

  useEffect(() => {
    const currentTime = Date.now();
    if (currentTime - lastExecutionRef.current >= duration) {
      // ✅ Corrected condition
      handleCallback();
      lastExecutionRef.current = currentTime;
    }
  }, [value]); // ✅ Runs when `value` changes
};

/*
  useThrottle({
    value: { query }, // Value to watch
    handleCallback: fetchSearchResults, // API call function
    duration: 1000, // 1-second throttle
  });
*/
