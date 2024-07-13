import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Css/Video.css";
import Negative from "../assets/video/negative.mp4";
import KidsImage from "../assets/img/kid2.png";

const Video = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Mind Scape</title>
        </Helmet>

        {/* Content */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-4">
          <div className="w-full md:w-2/3 p-4 pt-0 rounded-xl md:rounded-3xl">
            <div className="video-container">
              <iframe
                className="w-full rounded-xl md:rounded-3xl" // Adjust border-radius for smaller screens
                src={Negative}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Paragraph content */}
        {/* <div className="container mx-auto p-4 md:p-6 flex flex-col md:flex-row items-center">
          <img
            src={KidsImage}
            alt="Kids"
            className="w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
           
            <p className="text-lg md:text-xl leading-relaxed">
              आज की तेज़-तर्रार डिजिटल दुनिया में, बच्चों की ध्यान केंद्रित करने
              और गंभीर रूप से सोचने की क्षमता को अक्सर चुनौती दी जाती है। बच्चों
              में संज्ञानात्मक विकास को बढ़ाने और मजबूत मानसिक सहनशक्ति के
              निर्माण के लिए प्रारंभिक हस्तक्षेप महत्वपूर्ण है।
            </p>
          </div>
        </div> */}
      </>
    </HelmetProvider>
  );
};

export default Video;
