import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import "../i18n.js";
import { useHistory, Link } from 'react-router-dom'
import './home.css';
import FeatureCard from '../components/FeatureCard/feature-card'
import Question1 from '../components/question1'
import './home.css'
//import MyForm from '../components/Form'
import PropertyCard from '../components/property_cards/feature-card.js'
import PropertyMap from '../components/map/map.js'
import { useState } from 'react';
import SearchBar from '../components/SearchBar/searchbar.js';
const MumbaiDemo = (props) => {
  const history = useHistory();

  const isUserLoggedIn = !!localStorage.getItem('user');

  const handleClick = () => {
    {!isUserLoggedIn&&(
      history.push('/log')
    )}
    {isUserLoggedIn&&(
      history.push('/predictor')
    )}
  };

  const handleClick1 = () => {
    history.push('/guide')
  }


  const { t} = useTranslation()
  const properties = [
    {
      image: 'images/img_2.jpg',
      projectName: 'Project One',
      price: '500,000',
      type: 'Apartment',
      location: 'Thane'
    },
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Mumbai'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
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
    <div className="home-container">
      {/* <Helmet>
        <title>CroPhecy</title>
        <meta property="og:title" content="Fitting Devoted Jackal" />
      </Helmet> */}
      <div className="home-hero">
        <div className="heroContainer_mumbai home-hero1">



      {/* <h1>Ready to find your dream property? Choose your perfect location:</h1> */}
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              {/* {t("greeting")}  */} Mumbai
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  {/* <span>{t("sub_greeting")}</span> */}


                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                      />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                      />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                      />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                      />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              {/* <button className="buttonFilled" onClick={handleClick}>{t("sub_greeting_btn1")}</button>
              <button className="buttonFlat" onClick={handleClick1}>{t("sub_greeting_btn2")}→</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                {/* <span>{t("features")}</span> */}
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                {/* {t("features_heading")} */} Mumbai's Latest Real Estate Developments
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                      {/* ****************************************************************** */}
                      {/* <div className='map'>

                              <PropertyMap></PropertyMap>
                      </div> */}
                      
                      {/* ************************************************************************* */}
                <span>
                  <span>
                    <span>
                     {t("features_heading_sub")}

       

            <div className="property_container">

            {properties.map((property, index) => (
            <Link
              to={{
                pathname: '/property',
                search:`?property=${encodeURIComponent(JSON.stringify(property))}`,
              }}
              key={index}
            >
              <PropertyCard
                image={property.image}
                projectName={property.projectName}
                price={property.price}
                type={property.type}
                location={property.location}
              />
            </Link>
            ))}
    </div>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            {/* <div className="home-container03">
              <FeatureCard
                heading={t("soil_analysis")} 
                subHeading={t("soil_analysis_guidance")}
              ></FeatureCard>
              <FeatureCard
                heading={t("crop_recommendation")}
                subHeading={t("crop_recommendation_guidance")}
              ></FeatureCard>
              <FeatureCard
                heading={t("seasonal_crop_recommendation")}
                subHeading={t("seasonal_crop_recommendation_guidance")}
              ></FeatureCard>
              <FeatureCard
                heading={t("optimal_crops")}
                subHeading={t("optimal_crops_guidance")}
              ></FeatureCard>
            </div> */}
          </div>
        </div>
     {/* .. */}
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
           {t("home_page_empower")}
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                
                 {t("home_page_empower_sub")}
                
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
         
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text85 heading2">{t("common_question")}</h2>
              <span className="home-text86 bodyLarge">
                <span>
                  {t("comm_here_Are")}
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container30">
              <Question1
                answer={t("a1")}
                question={t("q1")}
              ></Question1>
              <Question1
                answer={t("a2")}
                question={t("q2")}
              ></Question1>
              <Question1
                answer={t("a3")}
                question={t("q3")}
              ></Question1>

            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-separator"></div>
          <div className="home-container32">
            <span className="bodySmall home-text89">
              © Crophecy, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MumbaiDemo
