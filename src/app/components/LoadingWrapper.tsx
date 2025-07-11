
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Loader } from '../components/loader/loader';

export const LoadingWrapper = ({ 
  children,
  delay = 3000 // Default 3 second delay
}: {
  children: ReactNode;
  delay?: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};