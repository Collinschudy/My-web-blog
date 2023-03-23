import { useState } from "react";
import './title.styles.css';

const Title = ({ heading, title, isService, isAbout, isAboutPage, isContact, isTestimonial }) => {
  const [showAboutTitle, setShowAboutTitle] = useState(false);
  const [showServicestTitle, setShowServicesTitle] = useState(false);
  const [showTestimonialTitle, setShowTestimonialTitle] = useState(false);
  const [showContactTitle, setShowContactTitle] = useState(false);

  const showSection = () => {
    if (window.scrollY >= 200) {
      setShowAboutTitle(true);
    } else {
      setShowAboutTitle(false);
    }
    if (window.scrollY >= 900) {
      setShowServicesTitle(true);
    } else {
      setShowServicesTitle(false);
    }
     if (window.scrollY >= 1500) {
       setShowTestimonialTitle(true);
     } else {
       setShowTestimonialTitle(false);
     }
    if (window.scrollY >= 1900) {
      setShowContactTitle(true);
    } else {
      setShowContactTitle(false);
    }
  };
  window.addEventListener("scroll", showSection);

  return (
    <div className='titleBox'>
      <h1
        className={`${isAboutPage ? 'title2' : 'title'} ${
          isAbout && showAboutTitle ? 'showTitle' : ""
        }  ${isService && showServicestTitle ? 'showTitle' : ""} ${
          isContact && showContactTitle ? 'showTitle' : ""
        } ${isTestimonial && showTestimonialTitle ? 'showTitle' : ""}`}
      >
        {" "}
        <span>{heading}</span> {title}
      </h1>
    </div>
  );
};

export default Title;