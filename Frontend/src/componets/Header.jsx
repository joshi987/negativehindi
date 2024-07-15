import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../assets/img/Brain.png';
import Boy from '../assets/img/boy.png';
import Girl from '../assets/img/girl.png';
import Form from './Form';


const Header = () => {
 
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Mind Scape</title>
          <meta name="description" content="Engaging activities designed to improve focus, memory, and cognitive skills in kids" />
          <meta name="keywords" content="Brain Voyage, kids learning, cognitive skills, educational activities, improve focus, memory, learning fun" />
          <meta name="author" content="Mind Scape"/>
        </Helmet>

        {/* Header Section */}
        <div className="relative flex flex-col items-center justify-center inset-0">
          <div className="flex items-center space-x-2 md:space-x-4">
            <img src={Logo} alt="QuizQuest Logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-red-800 to-yellow-900 md:text-2xl lg:text-2xl text-center shadow-lg">
            क्या डिजिटल विकर्षण आपके बच्चे के ध्यान और दिमागी विकास को नुकसान पहुंचा रहे हैं?
            </h1>
          </div>
<Form/>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Header;
