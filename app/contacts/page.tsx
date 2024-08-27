import { CustomSection } from '@/components/custom-section';
import { HeroSectionStatic } from './hero-section-static';
import { Map } from '@/components/main-page/map';
import { SquareLinksSection } from '@/components/main-page/square-links-section';
// import { heroData } from "@/components/main-page/hero-data"; // Предполагается, что heroData экспортируется из отдельного файла
import { TypeLines } from '@/lib/definitions';
import { TopRounder } from '@/components/top-rounder';
import { ContactsInfo } from './contacts-info';
import { BigRectLinkProps } from '@/components/main-page/big-rect-link';
import { BigRectLink } from '@/components/main-page/big-rect-link';
import { simpleHeroData } from './hero-data';

const bigRectLinkData: BigRectLinkProps = {
  url: '/legal',
  title: 'Юридическим лицам',
  url: '/legal',
  title: 'Юридическим лицам',
  start: {
    mobile: '1',
    tablet: '1',
    desktop: '9',
    mobile: '1',
    tablet: '1',
    desktop: '9',
  },
  end: {
    mobile: '13',
    tablet: '7',
    desktop: '13',
    mobile: '13',
    tablet: '7',
    desktop: '13',
  },
  image: {
    src: '/images/icons/briefcase.svg',
    alt: 'Юридическим лицам',
    src: '/images/icons/briefcase.svg',
    alt: 'Юридическим лицам',
    width: 40,
    height: 38,
  },
};

export default function Contacts() {
  return (
    <>
      <CustomSection>
        <HeroSectionStatic heroData={simpleHeroData} />
        <TopRounder />
      </CustomSection>
      <Map />
      <CustomSection className='gap-0'>
        <ContactsInfo />
        <BigRectLink link={bigRectLinkData} />
        <SquareLinksSection />
      </CustomSection>
    </>
  );
}
