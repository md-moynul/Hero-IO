import HeroSection from '../../components/Home/HeroSection';
import TrustedByMillions from '../../components/Home/TrustedByMillions';
import TrendingApps from '../../components/Home/TrendingApps';
import InstallationsPage from '../installations/InstallationsPage';
import { InstalledAppContext } from '../../context/InstalledAppContext';

const HomePage = () => {
   
    
    return (
        <div className='py-10 md:py-15 lg:20 bg-base-200'>
           <HeroSection/>
           <TrustedByMillions/>
           <TrendingApps/>
        </div>
    );
};

export default HomePage;