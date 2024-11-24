import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from './mens_kurta';
import { sareePage1 } from './sareePage1';

const HomePage = () => {

  return (
    <div>
      <MainCarousel />
    
      <div className='py-5 space-y-5 flex flex-col sm:px-5 lg:px-10'>
        {/* Render Men's Kurta section */}
        {mens_kurta.length > 0 ? (
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        ) : (
          <p>No kurtas available at the moment.</p> // Handle empty state for men's kurtas
        )}
        
        {/* Render Saree section */}
        {sareePage1.length > 0 ? (
          <HomeSectionCarousel data={sareePage1} sectionName={"Saree"} />
        ) : (
          <p>No sarees available at the moment.</p> // Handle empty state for sarees
        )}
      </div>

      {/* AuthModal will be shown if the user is not logged in */}
      
    </div>
  );
};

export default HomePage;
