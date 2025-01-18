import { useState, useEffect, useLayoutEffect } from "react";

/**
 * Custom hook to detect if the screen is mobile-sized.
 * @returns {boolean} isMobile - true if the screen width is less than or equal to 768px, false otherwise.
 */
const useMobile = (): boolean | undefined => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth <= 640);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;
