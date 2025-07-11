import { ReactNode } from 'react';
import styles from '../ui/style/BlendedGrid.module.css';

interface BannerProps {
  children?: ReactNode;
  className?: string;
}

export const BlendedGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.blended_grid}>
      {children}
    </div>
  );
};

export const TopBanner = ({ children }: BannerProps) => (
  <div className={styles.topBanner}>
    {children}
    <div className={styles.navbar}>
        <div className={styles.buttonContainer}>
      <button className={styles.button}>
        <p>Home</p>
      </button>
      <button className={styles.button}>
         <p>Second</p>
      </button>
      <button className={styles.button}>
           <p>Third</p>
      </button>
      <button className={styles.button}>
           <p>Forth</p>
      </button>
        </div>
    </div>
  </div>
);

export const MiddleBanner = ({ children }: BannerProps) => (
  <div className={styles.middleBanner}>{children}</div>
);

export const LeftBanner = ({ children }: BannerProps) => (
  <div className={styles.leftBanner}>{children}</div>
);

export const CenterBanner = ({ children }: BannerProps) => (
  <div className={styles.centerBanner}>{children}</div>
);

export const RightBanner = ({ children }: BannerProps) => (
  <div className={styles.rightBanner}>{children}</div>
);

export const BottomBanner = ({ children }: BannerProps) => (
  <div className={styles.bottomBanner}>{children}</div>
);