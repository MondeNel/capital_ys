// src/components/FundingPage.jsx
import { useState } from 'react';
import { FiZap, FiUpload, FiSend, FiFileText, FiCheckCircle, FiClock, FiShield, FiArrowRight } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';

const FundingPage = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { number: 1, title: "Upload Profile", icon: <FiFileText size={16} /> },
    { number: 2, title: "Upload Plan", icon: <HiOutlineDocumentText size={16} /> },
    { number: 3, title: "Review & Submit", icon: <FiCheckCircle size={16} /> }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Get funding</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight">
          Do you have what it takes to take your business to greater heights?
        </h1>
        <p className="text-[#185FA5] text-sm mt-2 flex items-center justify-center gap-1">
          <FiZap size={14} /> Let us source funding for you. Premium subscribers qualify automatically.
        </p>
      </div>

      {/* Step Progress Indicator */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="flex items-center justify-between">
          {steps.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  step >= s.number
                    ? 'bg-[#185FA5] text-white shadow-md'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > s.number ? <FiCheckCircle size={20} /> : s.icon}
              </div>
              <span className="text-xs text-gray-500 mt-2 hidden sm:block">{s.title}</span>
            </div>
          ))}
        </div>
        {/* Progress line */}
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 h-1 bg-gray-200 rounded-full w-full"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-[#185FA5] rounded-full transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-xl mx-auto">
        {step === 1 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Upload Business Profile</h2>
              <p className="text-sm text-gray-500">Tell us about your business</p>
            </div>
            <div className="border-2 border-dashed border-[#185FA5]/30 rounded-xl p-8 text-center cursor-pointer hover:border-[#185FA5] transition bg-[#185FA5]/5">
              <FiUpload className="mx-auto text-[#185FA5] mb-3" size={32} />
              <div className="font-medium text-gray-900 text-sm">Click or drag to upload</div>
              <div className="text-xs text-gray-500 mt-1">PDF, DOCX up to 10MB</div>
            </div>
            <button
              onClick={handleNext}
              className="mt-6 w-full bg-[#185FA5] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#0C447C] transition"
            >
              Continue <FiArrowRight size={14} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Upload Business Plan</h2>
              <p className="text-sm text-gray-500">Share your growth strategy</p>
            </div>
            <div className="border-2 border-dashed border-[#185FA5]/30 rounded-xl p-8 text-center cursor-pointer hover:border-[#185FA5] transition bg-[#185FA5]/5">
              <HiOutlineDocumentText className="mx-auto text-[#185FA5] mb-3" size={32} />
              <div className="font-medium text-gray-900 text-sm">Click or drag to upload</div>
              <div className="text-xs text-gray-500 mt-1">PDF, DOCX up to 10MB</div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePrev}
                className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-[#185FA5] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#0C447C] transition"
              >
                Continue <FiArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Review & Submit</h2>
              <p className="text-sm text-gray-500">We'll review your application</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FiFileText size={16} /> Business Profile: <span className="text-[#185FA5] font-medium">uploaded.pdf</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <HiOutlineDocumentText size={16} /> Business Plan: <span className="text-[#185FA5] font-medium">plan.pdf</span>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800 mb-6">
              <FiClock className="inline mr-1" size={14} />
              If we cannot source funding for you, we can help you raise your own funds within 3–9 months.
              <button className="block text-[#185FA5] text-xs mt-1 flex items-center gap-1 hover:underline">
                Read the document to learn more <FiArrowRight size={10} />
              </button>
            </div>
            <button className="w-full bg-[#185FA5] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#0C447C] transition shadow-md">
              <FiSend size={14} /> Submit Application
            </button>
          </div>
        )}
      </div>

      {/* Trust Badge */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2 text-xs text-gray-400">
          <FiShield size={12} /> Your information is secure and confidential
        </div>
      </div>
    </div>
  );
};

export default FundingPage;