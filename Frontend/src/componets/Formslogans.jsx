import React from "react";
import Form from "./Form";
import Download from '../assets/gif/Download.gif'

function Formslogans() {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:justify-between items-center md:space-x-6">
      <p className="text-lg font-semibold mb-9 md:mb-0 md:w-1/2 md:mr-50">
        हमारा शैक्षिक गेम डिजिटल विकर्षणों से निपटने और मनोरंजक तथा वैज्ञानिक
        रूप से सिद्ध गतिविधियों के माध्यम से संज्ञानात्मक क्षमताओं को बढ़ाने के
        लिए डिज़ाइन किया गया है
      </p>
      <div className="md:w-1/2 flex justify-end">
  <img src={Download} alt="error" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
</div>
    </div>
  );
}

export default Formslogans;
