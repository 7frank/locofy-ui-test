import { FunctionComponent } from "react";

const SpotContainer1: FunctionComponent = () => {
  return (
    <div className="rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[26px] text-right text-lg text-black font-patrick-hand-body border-[16px] border-solid border-black">
      <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] w-[375px] h-20">
        <div className="absolute bottom-[14px] left-[calc(50%_+_122.5px)] tracking-[0.01em] leading-[24px]">
          Cancel
        </div>
        <img
          className="absolute top-[44px] left-[20px] w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowsarrowleft.svg"
        />
        <div className="absolute bottom-[12px] left-[calc(50%_-_33.5px)] text-3xl leading-[28px] text-center">
          Location
        </div>
      </div>
      <div className="relative text-5xl text-center flex items-center justify-center w-[266px]">
        What’s the general location of your spot?
      </div>
      <div className="relative rounded-lg bg-white box-border w-[335px] h-12 text-left text-gray-5 border-[2px] border-solid border-black">
        <div className="absolute top-[calc(50%_-_12px)] left-[46px] tracking-[0.01em] leading-[24px]">
          Brooklyn
        </div>
        <img
          className="absolute top-[calc(50%_-_12px)] left-[12px] w-6 h-6 overflow-hidden"
          alt=""
          src="/actions--uisearch.svg"
        />
      </div>
    </div>
  );
};

export default SpotContainer1;
