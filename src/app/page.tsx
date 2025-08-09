import FooterLinks from '@/components/homepage/footer-links';
import HeroSection from '@/components/homepage/hero-section';
import Tabs from '@/components/homepage/tabs';

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center pb-16 scrollbar-hide">
            <HeroSection />
            <Tabs />
            <FooterLinks />
        </div>
    );
}
