import React from 'react';
import Header from '../../layout/header';
import NavBar from '../../layout/navBar';
import BigSection from '../../layout/bigSection';
import ItSection from '../../layout/itSection';
import TechSection from '../../layout/techSection';
import PortofolioSection from '../../layout/portofolioSection';
import BannerForm from '../../layout/bannerForm';
import Footer from '../../layout/footer';

const Index = () => {
  return ( 
    <div>
    <NavBar/>
    <Header/>
    <BigSection/>
    <ItSection/>
    <TechSection/>
    <PortofolioSection/>
    <BannerForm/>
    <Footer/>
    </div>
   );
}
 
export default Index;