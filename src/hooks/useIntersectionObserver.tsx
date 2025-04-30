
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false,
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean, IntersectionObserverEntry | null] {
  const ref = useRef<T>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    
    // Early return if ref is not attached or no IntersectionObserver support
    if (!node || typeof IntersectionObserver !== 'function') {
      return;
    }

    // Observer callback function
    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);
      
      // If triggerOnce is true and the element is intersecting, disconnect the observer
      if (triggerOnce && entry.isIntersecting && observer) {
        observer.disconnect();
      }
    };

    // Create observer with options
    const observer = new IntersectionObserver(updateEntry, {
      root,
      rootMargin,
      threshold,
    });

    // Observe the node
    observer.observe(node);

    // Cleanup function to disconnect observer
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isIntersecting, entry];
}

export default useIntersectionObserver;
