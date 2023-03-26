import './aboutsection.styles.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import CustomButton from '../customButton/customButton';
import Title from '../titleComponent/title.component';
import image_1 from '../../assets/C360_2022-11-11-07-06-42-042-01.jpeg';

const AboutSection = ({ isAboutPage }) => {
  const [showSectionSlide, setShowSectionSlide] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(false);
  const [aboutMobileSlide, setAboutMobileSlide] = useState(false);
  const [mobileSlide2, setMobileSlide2] = useState(false);
  const [aboutMobileSlide2, setAboutMobileSlide2] = useState(false);
  const [mobileSlideButton, setMobileSlideButton] = useState(false);
  const navigate = useNavigate();

  const showSection = () => {
    if (window.scrollY >= 250) {
      setShowSectionSlide(true);
    } else {
      setShowSectionSlide(false);
    }
    if (window.scrollY >= 700) {
      setMobileSlide(true);
    } else {
      setMobileSlide(false);
    }
    if (window.scrollY >= 250) {
      setAboutMobileSlide(true);
    } else {
      setAboutMobileSlide(false);
    }
    if (window.scrollY >= 1000) {
      setMobileSlide2(true);
    } else {
      setMobileSlide2(false);
    }
    if (window.scrollY >= 500) {
      setAboutMobileSlide2(true);
    } else {
      setAboutMobileSlide2(false);
    }
    if (window.scrollY >= 1100) {
      setMobileSlideButton(true);
    } else {
      setMobileSlideButton(false);
    }
  };
  window.addEventListener("scroll", showSection);

  return (
    <section className='wrapper'>
      <Title heading={"about"} title={"the Author"} isAbout />
      <div className='contentBox'>
        <div
          className={`${showSectionSlide ? 'showBackground' : ""
            } ${isAboutPage && 'showBackground'} background`}
          style={{
            backgroundImage: `url(${image_1})`,
          }}
        >

        </div>
        <div
          className={`${showSectionSlide ? 'showBackground' : ""
            } ${isAboutPage && 'showBackground'} content`}
        >
          <span
            className={`${mobileSlide ? 'mobileShow' : ""
              } ${isAboutPage && aboutMobileSlide ? 'mobileShow' : ""} spanMobile`}
          >
            Rachel Fredrick is a Copywriter and a  Creative Content Creator who authored “The Pot And The Chess”— a prose poetry chapbook.
            <br/>

            She is artistically and aesthetically inclined. Her passion for creative writing and arts drew her into content
            creation where she works with clients across a range of brands.
            She is a highly motivated art enthusiast who loves to take in challenges and explore new frontiers.

            In her free time, she delights in reviewing books, seeing great movies and conversing art with the weird people on Tumblr.
          </span>

          {/* <span
            className={`${mobileSlide2 ? 'mobileShow' : ""
              } ${isAboutPage && aboutMobileSlide2 ? 'mobileShow' : ""} spanMobile`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            asperiores aspernatur in molestiae, ratione laudantium recusandae
            iusto excepturi odio, voluptatem commodi placeat adipisci. Deleniti
            repudiandae pariatur dicta tempora facere voluptatum itaque
            distinctio impedit non obcaecati dolore, accusantium quidem quasi
          </span> */}
          <div
            className={`${mobileSlideButton ? 'mobileShow' : ""
              } ${isAboutPage && 'hide'} buttonBox`}
          >
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;