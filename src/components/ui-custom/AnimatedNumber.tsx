
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  endValue: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  endValue,
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [endValue]);

  const animate = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateValue = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easeOutExpo for smoother animation at the end
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      
      // Calculate the current value
      let currentValue = Math.floor(startValue + easeOutExpo * (endValue - startValue));
      
      // Ensure we reach the exact endValue when animation completes
      if (progress === 1) {
        currentValue = endValue;
      }
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  };

  return (
    <div ref={counterRef} className={className}>
      <span>{displayValue}</span>
      <span>{suffix}</span>
    </div>
  );
};

export default AnimatedNumber;
