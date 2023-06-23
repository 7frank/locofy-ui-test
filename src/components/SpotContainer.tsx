import { FunctionComponent } from "react";

const SpotContainer: FunctionComponent = () => {
  return (
    <div className="relative rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 text-center text-lg text-black font-patrick-hand-body border-[16px] border-solid border-black">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] w-[375px] h-20 text-right">
        <div className="absolute bottom-[14px] left-[calc(50%_+_122.5px)] tracking-[0.01em] leading-[24px]">
          Cancel
        </div>
        <img
          className="absolute top-[44px] left-[20px] w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowsarrowleft.svg"
        />
        <div className="absolute bottom-[12px] left-[calc(50%_-_43.5px)] text-3xl leading-[28px] text-center">
          Add photos
        </div>
      </div>
      <div className="absolute top-[328px] left-[72px] text-5xl">
        Add photos from your spot
      </div>
      <div className="absolute top-[371px] left-[44px] tracking-[0.01em] leading-[24px] text-gray-5 inline-block w-[286px]">
        Adding photos of your location or results from your shoot can help
        others see its full potential
      </div>
      <div className="absolute top-[646px] left-[20px] rounded-lg bg-black box-border w-[335px] overflow-hidden flex flex-row py-3 px-6 items-center justify-center text-3xl text-white border-[4px] border-solid border-black">
        <div className="relative leading-[28px]">Add photos</div>
      </div>
      <div className="absolute top-[706px] left-[20px] rounded-lg bg-white w-[335px] overflow-hidden flex flex-row py-3 px-6 box-border items-center justify-center text-3xl">
        <div className="relative leading-[28px]">Skip for now</div>
      </div>
      <img
        className="absolute top-[259px] left-[164px] w-12 h-12 overflow-hidden"
        alt=""
        src="/upload-image-438840-2452.svg"
      />
    </div>
  );
};

export default SpotContainer;
