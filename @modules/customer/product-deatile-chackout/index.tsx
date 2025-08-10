import React from 'react';

const ProDuctDetileToChackOut = () => {
    return (
        <div>
             {/* Right Column */}
          <div className="md:w-[456px] lg:w-[456px] w-full border border-[#BDCCDB]  mx-auto  py-6 px-[70px] shadow-sm  transition-all duration-300 ease-in-out">
            <h2 className="font-bold text-[16px] text-[#142350] mb-4">
              PRICE DETAILS
            </h2>
            <div className="flex justify-between text-[#767678] text-[16px] mb-2 w-2xs h-11 border-b   border-[#BDCCDB]">
              <span>Total MRP</span>
              <span>$200</span>
            </div>
            <div className="flex justify-between w-2xs h-11   text-[16px] text-[#767678] font-bold mb-4">
              <span>Total</span>
              <span>${}</span>
            </div>
            <a
              href="#"
              className="text-[#767678] text-[14px] underline mb-5 mt-4 ml-[60px] font-bold  "
            >
              Have a promotion code?
            </a>

            <div className="mt-4">
              <h3 className="font-bold text-[#142350] text-[16px] mb-2">
                Shipping Method
              </h3>
              <div className="space-y-2">
                <label className="flex items-start gap-2 mt-6">
                  <input
                    className=" w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
                  />
                  <span className="text-[16px] font-bold text-[#767678]">
                    Free Shipping (10 - 12 days)
                  </span>
                </label>
                <label className="flex items-start gap-2 mt-6">
                  <input
                    className=" w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
                  />
                  <span className=" text-[16px] font-bold text-[#767678]">
                    Express Shipping + $10 (5 - 6 days)
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h3 className="font-bold text-[#142350] text-[16px] mb-3 mt-3">
                Packaging
              </h3>
              <div className="space-y-2">
                <label className="flex items-start gap-2 mt-6">
                  <input
                    className="mt-4 w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
                  />
                  <span className=" text-[16px] font-bold text-[#767678]">
                    Default Packaging
                    <br />
                    <span className="text-[16px] font-bold text-[#767678]">
                      Default packaging by store
                    </span>
                  </span>
                </label>
                <label className="flex items-start gap-2 mt-6">
                  <input
                    className="mt-4 w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
                  />
                  <span className="text-[16px] font-bold text-[#767678] ">
                    Gift Packaging + $15
                    <br />
                    <span className="text-[16px] font-bold text-[#767678] mt-4">
                      Exclusive Gift packaging
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-between font-semibold mt-6 w-2xs h-11 border-t  border-[#BDCCDB] ">
              <span className=" text-[16px] font-bold pt-2 text-[#767678]">
                Final Price :
              </span>
              <span className=" text-[16px] font-bold pt-2 text-[#767678]">
                {" "}
                ${}
              </span>
            </div>
          </div>
        </div>
    );
};

export default ProDuctDetileToChackOut;