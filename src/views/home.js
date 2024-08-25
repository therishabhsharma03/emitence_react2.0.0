import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import "../i18n.js";
import { useHistory } from 'react-router-dom'
import AutoPlayCarousel from '../components/videos/Carousel_video'
import FeatureCard from '../components/FeatureCard/feature-card'
import Question1 from '../components/question1'
import PhotoCollage from '../components/clients_collage/PhotoCollage.js';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
// import './home.css'
// import '../style.css';
//import MyForm from '../components/Form'

const Home = (props) => {
  const photos = Array.from({ length: 27 }, (_, i) => `images/clients/${i + 1}.jpeg`);
  const history = useHistory();
  const videos = [
    { videoId: '_7SMZ60byps?rel=0', title: 'Emitence Realty' },
    { videoId: 'J5kvFv1MUcE?rel=0', title: 'Dholera SIR' },
    { videoId: 'smZN9CW39YY?rel=0', title: 'YouTube Video 2' },
    // Add more videos as needed
  ];
  const isUserLoggedIn = !!localStorage.getItem('user');
  {/* <iframe width="469" height="833" src="https://www.youtube.com/embed/_7SMZ60byps" title="Emitence Realty/Logo Reviled/@Hiranandani Estate Thane (Mumbai)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }
  const handleClick = () => {
    {
      !isUserLoggedIn && (
        history.push('/log')
      )
    }
    {
      isUserLoggedIn && (
        history.push('/predictor')
      )
    }
  };

  const handleClick1 = () => {
    history.push('/guide')
  }


  const { t } = useTranslation()



  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          {/* ****************************************************************** */}


          {/* ************************************************************************* */}



          {/* <h1>Ready to find your dream property? Choose your perfect location:</h1> */}
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              {t("greeting")}
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
              {/* <button className="buttonFlat" onClick={handleClick1}>{t("sub_greeting_btn2")}→</button> */}
              {/* <button className="buttonFilled" onClick={handleClick}>{t("sub_greeting_btn1")}</button> */}
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
              <h2 className="home-features-heading heading3">
                {t("features_heading")}
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      {t("features_heading_sub")}

                      <section className='choose_location'>

                        <div class="locations">
                          <div class="location">
                            <a href="dholera">
                              <img src="images/dhol1.png" alt="Dholera" />
                              <h2 className='bodyMedium ls'>Dholera</h2>
                              <div class="line-container">
                                <div class="line"></div>
                                <h3 className='bodySmall'>Gujarat</h3>
                                <div class="line"></div>
                              </div>
                            </a>
                          </div>
                          <div class="location">

                            <a href="mumbai">
                              <img src="images/mum.png" alt="Mumbai" />
                              <h2 className='bodyMedium ls' >Mumbai</h2>

                            </a>

                            {/* <a href="mumbai"> */}
                            {/* </a> */}
                          </div>
                        </div>
                      </section>
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
            <div className="home-container03_HOME">
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
            </div>
          </div>
          <AutoPlayCarousel videos={videos} />
        </div>
      </div>

      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            {t("home_page_empower")}
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span className='justify'>
                We are committed to turning your real estate dreams into reality with unwavering dedication and precision. Our expert team ensures every detail is meticulously handled, providing you with the best possible experience in finding your perfect property. Whether you're buying, selling, or investing, trust Emitenc Realty to guide you every step of the way.
                {/* {t("home_page_empower_sub")} */}
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





      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <span className="home-banner-sub-heading bodySmall">
            <span>
          <h1 className="home-banner-heading heading2 gold">
          " Emitence: Where Dreams Are Delivered with a Smile "
          </h1>
                  
              <span className='justify'>
              <PhotoCollage photos={photos} />
              
           
             
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
      <div className="home-photos">
      <h1 className="home-banner-heading heading2">
            dsfa
          </h1>
{/* <PhotoCollage photos={photos} /> */}
      </div>

    </div>
  )
}

export default Home
