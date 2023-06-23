import { FunctionComponent } from "react";
import KeyboardAlphabetContainer from "./KeyboardAlphabetContainer";

const SpotContainer2: FunctionComponent = () => {
  return (
    <div className="relative rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 text-left text-lg text-black font-patrick-hand-body border-[16px] border-solid border-black">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] w-[375px] h-20 text-right">
        <div className="absolute bottom-[14px] left-[calc(50%_+_122.5px)] tracking-[0.01em] leading-[24px]">
          Cancel
        </div>
        <div className="absolute bottom-[12px] left-[calc(50%_-_33.5px)] text-3xl leading-[28px] text-center">
          Location
        </div>
        <img
          className="absolute top-[44px] left-[20px] w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowsarrowleft.svg"
        />
      </div>
      <div className="absolute top-[164px] left-[20px] w-[225px] h-[273px]">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[133px] h-[26px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/location.svg"
            />
            <div className="relative tracking-[0.01em] leading-[24px]">
              Aurora, Illinois
            </div>
          </div>
          <div className="w-[225px] h-[46px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/location.svg"
            />
            <div className="w-[189px] flex flex-col items-start justify-start">
              <div className="relative tracking-[0.01em] leading-[24px]">
                Aurora University
              </div>
              <div className="relative text-base tracking-[0.02em] text-gray-5">
                347 S Gladstone Ave, Aurora, IL
              </div>
            </div>
          </div>
          <div className="w-[149px] h-[26px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/location.svg"
            />
            <div className="relative tracking-[0.01em] leading-[24px]">
              Aurora, Colorado
            </div>
          </div>
          <div className="w-[209px] h-[45px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/location1.svg"
            />
            <div className="w-[173px] h-[45px] flex flex-col items-start justify-start">
              <div className="relative tracking-[0.01em] leading-[24px]">
                Downtown Aurora
              </div>
              <div className="relative text-base tracking-[0.02em] text-gray-5 mt-[-1px]">
                43 W. Galena Blvd, Aurora, IL
              </div>
            </div>
          </div>
          <div className="w-[141px] h-[26px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/location.svg"
            />
            <div className="relative tracking-[0.01em] leading-[24px]">
              Aurora, Ontario
            </div>
          </div>
        </div>
        <div className="absolute top-[249px] left-[5px] tracking-[0.01em] leading-[24px] text-gray-5">
          See more results
        </div>
      </div>
      <KeyboardAlphabetContainer
        dimensions="/frame-101751.svg"
        dimensionsId="/emotionsemojigrin1.svg"
        dimensionsIds="/tech--mediamicrophone1.svg"
      />
      <div className="absolute top-[96px] left-[16px] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] box-border w-[335px] h-12 border-[2px] border-solid border-black">
        <div className="absolute top-[calc(50%_-_12px)] left-[46px] tracking-[0.01em] leading-[24px]">
          aurora
        </div>
        <img
          className="absolute top-[calc(50%_-_12px)] left-[12px] w-6 h-6 overflow-hidden"
          alt=""
          src="/actions--uisearch.svg"
        />
        <img
          className="absolute top-[calc(50%_-_12px)] right-[12px] w-6 h-6 overflow-hidden"
          alt=""
          src="/close.svg"
        />
      </div>
    </div>
  );
};

export default SpotContainer2;
