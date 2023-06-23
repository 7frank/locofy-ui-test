import { FunctionComponent } from "react";

const YourSpotContainer: FunctionComponent = () => {
  return (
    <div className="relative rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 text-left text-lg text-black font-patrick-hand-body border-[16px] border-solid border-black">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] w-[375px] h-20 flex flex-row py-10 px-5 box-border items-start justify-start gap-[105px] text-center text-3xl">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowsarrowleft.svg"
        />
        <div className="w-[206px] h-7 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[84px]">
          <div className="relative leading-[28px]">Your Spot</div>
          <div className="relative text-lg tracking-[0.01em] leading-[24px] text-right">
            Cancel
          </div>
        </div>
      </div>
      <img
        className="absolute top-[105px] left-[135px] w-[104.6px] h-[104.6px]"
        alt=""
        src="/group-113.svg"
      />
      <div className="absolute top-[calc(50%_-_190px)] left-[20px] text-5xl flex items-center w-[335px]">
        Low Lit Alley
      </div>
      <div className="absolute top-[calc(50%_-_149px)] left-[20px] tracking-[0.01em] leading-[24px] text-gray-5 flex items-center w-[335px]">
        Add a description
      </div>
      <img
        className="absolute top-[113px] left-[331px] w-6 h-6 overflow-hidden"
        alt=""
        src="/actions--uieditalt.svg"
      />
      <img
        className="absolute top-[344px] left-[331px] w-6 h-6 overflow-hidden"
        alt=""
        src="/actions--uieditalt.svg"
      />
      <img
        className="absolute top-[406px] left-[331px] w-6 h-6 overflow-hidden"
        alt=""
        src="/actions--uieditalt.svg"
      />
      <div className="absolute top-[406px] left-[20px] w-[238px] h-6 flex flex-row items-center justify-start gap-[7px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/navigation--transportationlocationpoint.svg"
        />
        <div className="flex-1 relative tracking-[0.01em] leading-[24px]">
          347 S Gladstone Ave, Aurora, IL
        </div>
      </div>
      <div className="absolute top-[338px] left-[20px] flex flex-row items-start justify-start gap-[7px] text-center text-base text-white">
        <div className="rounded-13xl bg-black flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm.svg"
          />
          <div className="relative tracking-[0.02em]">alley</div>
        </div>
        <div className="rounded-13xl bg-black flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm.svg"
          />
          <div className="relative tracking-[0.02em]">moody</div>
        </div>
        <div className="rounded-13xl bg-black flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm.svg"
          />
          <div className="relative tracking-[0.02em]">vibey</div>
        </div>
        <div className="rounded-13xl bg-black flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm.svg"
          />
          <div className="relative tracking-[0.02em]">+3</div>
        </div>
      </div>
      <div className="absolute top-[728px] left-[20px] rounded-lg bg-black box-border w-[335px] overflow-hidden flex flex-row py-3 px-6 items-center justify-center text-center text-3xl text-white border-[4px] border-solid border-black">
        <div className="relative leading-[28px]">Share</div>
      </div>
      <img
        className="absolute top-[470px] left-[299px] w-[54px] h-[38px]"
        alt=""
        src="/toggle-switch.svg"
      />
      <img
        className="absolute top-[518px] left-[299px] w-[54px] h-[38px]"
        alt=""
        src="/toggle-switch.svg"
      />
      <img
        className="absolute top-[566px] left-[299px] w-[54px] h-[38px]"
        alt=""
        src="/toggle-switch.svg"
      />
      <div className="absolute top-[475px] left-[20px] tracking-[0.01em] leading-[24px]">
        Allow comments
      </div>
      <div className="absolute top-[523px] left-[20px] tracking-[0.01em] leading-[24px]">
        Allow sharing
      </div>
      <div className="absolute top-[567px] left-[20px] [text-decoration:underline] tracking-[0.01em] leading-[24px] flex items-center w-[206px]">
        Would you like to mark this as a paid location?
      </div>
    </div>
  );
};

export default YourSpotContainer;
