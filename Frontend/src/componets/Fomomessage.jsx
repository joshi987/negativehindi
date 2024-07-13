import React from "react";
import kid1 from "../assets/img/kid1.png";
import kid2 from "../assets/img/kid2.png";

function Fomomessage() {
  return (
    <div className="relative p-8 m-4 md:m-8 rounded-2xl bg-gradient-to-r from-white to-gray-100 text-black min-w-full md:min-w-96 shadow-lg" style={{ background: "#f7f7f7" }}>
      {/* Content */}
      <div className="relative text-black flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="flex flex-col justify-center mb-4 md:mb-0 md:order-2 w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-indigo-600">
            मानसिक ताकत को नजरअंदाज करने के खतरे
          </h2>
          <p className="font-semibold text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
            आज की तेज़-तर्रार डिजिटल दुनिया में, बच्चों की ध्यान केंद्रित करने
            और गंभीर रूप से सोचने की क्षमता अक्सर खतरे में पड़ जाती है। इन
            चुनौतियों की उपेक्षा करने से लंबे समय तक संज्ञानात्मक घाटे और खराब
            शैक्षणिक प्रदर्शन हो सकता है।
          </p>
        </div>
        <div className="flex justify-center items-center md:order-1 w-full md:w-1/2">
          <div className="w-90 h-72 md:w-104 md:h-104 flex justify-center items-center">
            <img src={kid2} alt="Kid2" className="max-w-full max-h-full rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="relative text-black flex flex-col md:flex-row md:justify-between items-center gap-8 mt-8">
        <div className="flex flex-col justify-center mb-4 md:mb-0 md:order-1 w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-indigo-600">लाभ</h3>
          <p className="font-semibold text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
            1. बढ़ी हुई मेमोरी: इंटरैक्टिव गेम जो मेमोरी रिटेंशन को बढ़ावा देते हैं<br />
            2. बेहतर फोकस: मजेदार गतिविधियां जो धीरे-धीरे फोकस अवधि को बढ़ाती हैं<br />
            3. गंभीर सोच: पहेलियाँ और चुनौतियाँ जो समस्या-समाधान कौशल विकसित करती हैं
          </p>
        </div>
        <div className="flex justify-center items-center md:order-2 w-full md:w-1/2">
          <div className="w-100 h-82 md:w-104 md:h-104 flex justify-center items-center">
            <img src={kid1} alt="Kid1" className="max-w-full max-h-full rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fomomessage;
