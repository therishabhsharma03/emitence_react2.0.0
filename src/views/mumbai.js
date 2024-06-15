import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from '../components/parallex/ParallaxComponent';
import PropertyCard from '../components/property_cards/feature-card';
import './home.css';

const Mumbai = (props) => {
  const history = useHistory();
  const isUserLoggedIn = !!localStorage.getItem('user');

  const handleClick = () => {
    if (!isUserLoggedIn) {
      history.push('/log');
    } else {
      history.push('/predictor');
    }
  };

  const handleClick1 = () => {
    history.push('/guide');
  };

  const { t } = useTranslation();
  const properties = [
    // Your properties data
  ];

  const [results, setResults] = useState([]);
  const data = [
    'apple',
    'banana',
    'grape',
    'orange',
    'pineapple',
    'strawberry',
    'watermelon'
  ];

  const handleSearch = (query) => {
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <ParallaxProvider>

      <div className="home-hero">
        <div className="heroContainer_mumbai home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading2"></h1>
            <span className="home-hero-sub-heading bodyLarge"></span>
            <div className="home-btn-group"></div>
            <h2 className="home-features-heading heading11">
              Mumbai
            </h2>
          </div>
        </div>
      </div>


      <div className="App">
        <div className="home-features_dholera">
          <div className="featuresContainer">
            <h2 className='bodyLarge goldText'>Why To Invest In Dholera?</h2>
            <div className='news'>
              <p className="bodySmall">Dholera is a city located in the Indian state of Gujarat. It is known for being
                part of the ambitious Dholera Special Investment Region (DSIR), which is one of
                the key projects under the Delhi-Mumbai Industrial Corridor (DMIC)</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>
          </div>
        </div>

        <ParallaxComponent image="/images/lodha-township-emitence3.jpg" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Lodha Township</h2>
          <div>
          <PropertyCard
                image="images/img_2.jpg"
                projectName="Project One"
                price='500,000'
                type='Apartment'
                location='Thane'
              />
          </div>
        </ParallaxComponent>
        
        <ParallaxComponent image="/images/hiranandani-emitence.jpg" alignment="right" bg_align="left">
          <h2 className='bodyLarge goldText'>Hiranandani Estate</h2>
          <div className='news'>
            {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" /> */}
            <p className="bodySmall justify">Hiranandani Estate in Thane, developed by the Hiranandani Group over 200 acres, is a premium community with excellent road connectivity, including the Eastern Express Highway and Ghodbunder Road. It features upscale architecture and key projects like Attena and Barca. The area offers good schools, a hospital, shopping complexes, and educational institutions. Nearby employment hubs host numerous companies, providing ample job opportunities in and around Thane.</p>
          </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/dholera_3.jpg" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Godrej</h2>
          <div className='news'>
            {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" /> */}
            <p className="bodySmall"> Godrej Emerald in Bhayanderpada, Thane, features excellent luxury residences. Godrej Emerald, Bhayanderpada, Thane is a magnificent Godrej Properties residential complex. The gorgeous design and excellent amenities will allow you to leave behind your stressful life and rest in the tranquil setting of your home. The project is enriched & fully equipped with the latest amenities and is located in Thane West, Mumbai.</p>
          </div>
        </ParallaxComponent>
      </div>
      
      {/* <div className="home-features_dholera">
        <div className="featuresContainer">
          <h2 className='bodyLarge goldText'>Latest News Updates</h2>
          <div className='news1'>
            <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
            <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" />
          </div>
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline"><br /></span>
              <span className="home-features-sub-heading bodyLarge"></span>
            </div>
          </div>
        </div>
      </div> */}
    </ParallaxProvider>
  );
};

export default Mumbai;
