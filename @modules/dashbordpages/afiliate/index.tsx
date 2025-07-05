import React from 'react';
import { FaLink, FaImage, FaCode, FaPlus } from 'react-icons/fa';

const AffiliateProgram = () => {
  const affiliateLink = "https://eco.rafinternational.com/?reff=df1fc2fcdafeed694ea75d573ac9e99a";
  const bannerImage = "https://eco.rafiinternational.com/assets/images/15587771131554048228onepiece.jpeg";

  const Field = ({
    icon,
    title,
    description,
    rightContent,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    rightContent: React.ReactNode;
  }) => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start py-4 ">
      <div className="flex flex-col items-start md:col-span-2">
        <div className="flex items-center gap-2 font-semibold text-[#767678]">
          <span className="text-gray-600">{icon}</span>
          {title}
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="md:col-span-3">{rightContent}</div>
    </div>
  );

  return (
    <div className="p-6  shadow-md bg-[#f8f8f8]  mx-auto">

          <div className="flex items-center mb-4 py-5">
              <h3 className="font-semibold text-[24px] text-[#121926] gap-3 border-[#141926] py-3 w-13 border-b-2  mb-6">
                AffiliateProgram
              </h3>
              <button className="flex items-center px-4 py-2 bg-gray-700 shadow mb-4 text-white rounded hover:bg-gray-700 ml-40">
                <FaPlus className="mr-2" />
                Affiliate History
              </button>
            </div>

      <Field
        icon={<FaLink />}
        title="Your Affiliate Link *"
        description="This is your affiliate link. Just copy the link and paste anywhere you want."
        rightContent={
          <input
            readOnly
            value={affiliateLink}
            className="w-full p-2  bg-[#E9ECE8] "
          />
        }
      />

      <Field
        icon={<FaImage />}
        title="Affiliate Banner *"
        description="This is your affiliate banner preview."
        rightContent={<img src={bannerImage} alt="Banner" className="w-64 h-auto " />}
      />

      <Field
        icon={<FaCode />}
        title="Affiliate Banner HTML Code *"
        description="Copy this HTML code and paste anywhere you want."
        rightContent={
          <textarea
            readOnly
            rows={4}
            className="w-full p-4 bg-white "
            value={`<a href="${affiliateLink}" target="_blank"><img src="${bannerImage}"></a>`}
          />
        }
      />
    </div>
  );
};

export default AffiliateProgram;
