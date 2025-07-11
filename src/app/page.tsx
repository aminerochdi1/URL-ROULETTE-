
import { 
  NewsLetter
} from './components/newsletter/newsletter';
import {
  BlendedGrid,
  TopBanner,
  MiddleBanner,
  LeftBanner,
  CenterBanner,
  RightBanner,
  BottomBanner
} from './components/ui/BlendedGrid';

export default function Home() {
  return (
    <BlendedGrid>
      <TopBanner>
        {/* <h1>Top Page</h1> */}
      </TopBanner>
      
      <MiddleBanner>
        <p>Main content area</p>
      </MiddleBanner>

      <div className="flex w-full">
        <LeftBanner>Left Column</LeftBanner>
        <CenterBanner>
          Center Column
          </CenterBanner>
        <RightBanner>Right Column</RightBanner>
      </div>

      <BottomBanner>
      <NewsLetter>
            {/* <h2 style={{ color: 'black' }}>Stay Updated</h2> */}
            <p style={{ color: '#a8a29e' , marginBottom:'8px' }}>Join our newsletter for updates and announcement.</p>
          </NewsLetter>
        <footer>Footer Content</footer>
      </BottomBanner>
    </BlendedGrid>
  );
}