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
          <h2 className='bodyLarge goldText'>Lodha Amara</h2>
          <div className='news'>
              <p className="bodySmall">Lodha Amara is a premium residential development located in Thane, near Mumbai, India. Known for its modern amenities and lush green surroundings, it offers a range of apartments with contemporary designs. The complex includes facilities such as a clubhouse, swimming pools, fitness centers, and landscaped gardens. It is designed to provide a high-quality lifestyle with excellent connectivity to major parts of Mumbai and nearby areas, making it a sought-after choice for homebuyers.</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>
        </ParallaxComponent>
        
        <ParallaxComponent image="/images/hiranandani-emitence.jpg" alignment="right" bg_align="left">
          <h2 className='bodyLarge goldText'>Dosti West County</h2>
          <div className='news'>
              <p className="bodySmall">Dosti West County is a residential project located in Thane, near Mumbai, India. It offers a variety of apartments with modern amenities and thoughtfully designed layouts. The development features extensive green spaces, recreational facilities, a clubhouse, swimming pool, and sports areas. With its strategic location, Dosti West County provides easy access to major transportation hubs, shopping centers, and educational institutions, making it an attractive option for families and professionals seeking a comfortable and convenient lifestyle.</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/dholera_3.jpg" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Raunak Maximum City</h2>
          <div className='news'>
              <p className="bodySmall">Raunak Maximum City is a residential project in Thane, near Mumbai, India. It features modern apartments with various configurations, designed to cater to different lifestyle needs. The development includes amenities such as a clubhouse, swimming pool, landscaped gardens, and recreational areas. Located strategically, it offers good connectivity to key areas of Mumbai and Thane, making it a desirable option for homebuyers seeking comfort and convenience in a well-planned community.</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/dholera_3.jpg" alignment="left" bg_align="left">
          <h2 className='bodyLarge goldText'>JP Infra</h2>
          <div className='news'>
              <p className="bodySmall">JP Infra is a prominent real estate developer in Mumbai, India, known for its innovative and sustainable residential and commercial projects. The company focuses on creating modern living spaces with high-quality construction and thoughtful designs. JP Infra offers a range of amenities in its developments, including landscaped gardens, fitness centers, and recreational areas. With a commitment to customer satisfaction and timely delivery, JP Infra has established a strong presence in the Mumbai real estate market.</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/dholera_3.jpg" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Runwal 25 Hour's</h2>
          <div className='news'>
              <p className="bodySmall">Raunak 25 Hour's is a residential project located in Thane, near Mumbai, India. It offers a range of modern apartments designed to maximize space and comfort. The project includes amenities like a clubhouse, swimming pool, fitness center, and landscaped gardens, catering to a contemporary lifestyle. Strategically positioned, it provides excellent connectivity to major parts of Mumbai and surrounding areas, making it an appealing choice for those seeking a vibrant community and convenient living.</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/dholera_3.jpg" alignment="left" bg_align="left">
          <h2 className='bodyLarge goldText'>Y Square</h2>
          <div className='news'>
              <p className="bodySmall">Y Square is a commercial and residential development located in a prime area, offering a blend of modern office spaces and contemporary living options. It features amenities such as shopping areas, dining options, and recreational facilities, designed to provide a convenient and vibrant environment for both residents and businesses. The strategic location ensures excellent connectivity to major hubs and transportation networks, making it an attractive choice for professionals and families seeking a dynamic urban lifestyle.</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>
        </ParallaxComponent>
      </div>
      
      
    </ParallaxProvider>
  );
};

export default Mumbai;
