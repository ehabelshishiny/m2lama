
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  blurhash?: string;
  lazyLoad?: boolean;
  aspectRatio?: number;
  containerClassName?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/placeholder.svg',
  blurhash,
  lazyLoad = true,
  aspectRatio,
  className,
  containerClassName,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(lazyLoad ? '' : src);
  const [isLoaded, setIsLoaded] = useState<boolean>(!lazyLoad);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (lazyLoad) {
      // Use Intersection Observer for lazy loading
      const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImgSrc(src);
            observer.unobserve(entry.target);
          }
        });
      }, { 
        rootMargin: '50px 0px',
        threshold: 0.1
      });
      
      const element = document.getElementById(`img-${alt.replace(/\s+/g, '-').toLowerCase()}`);
      if (element) {
        imgObserver.observe(element);
      }
      
      return () => {
        if (element) {
          imgObserver.unobserve(element);
        }
      };
    }
  }, [src, alt, lazyLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setImgSrc(fallbackSrc);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio ? { 
      paddingBottom: `${(1 / aspectRatio) * 100}%` 
    } : {})
  };

  const imgStyle: React.CSSProperties = {
    ...(aspectRatio ? { 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    } : {})
  };

  return (
    <div 
      className={cn('relative overflow-hidden', containerClassName)}
      style={aspectRatio ? containerStyle : undefined}
      id={`img-${alt.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse">
          {blurhash && <div className="absolute inset-0" style={{ 
            backgroundImage: `url(${blurhash})`,
            backgroundSize: 'cover',
            filter: 'blur(20px)',
            transform: 'scale(1.2)'
          }} />}
        </div>
      )}
      
      <img
        src={imgSrc || fallbackSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazyLoad ? "lazy" : "eager"}
        className={cn(
          'transition-opacity duration-300',
          !isLoaded ? 'opacity-0' : 'opacity-100',
          className
        )}
        style={aspectRatio ? imgStyle : undefined}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
