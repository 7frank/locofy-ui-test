import { FunctionComponent } from "react";
import ScoutmasterContainer from "../components/ScoutmasterContainer";
import AddSpotContainer from "../components/AddSpotContainer";
import SpotContainer1 from "../components/SpotContainer1";
import SpotContainer2 from "../components/SpotContainer2";
import LocationContainer from "../components/LocationContainer";
import SpotContainer from "../components/SpotContainer";
import PhotoContainer from "../components/PhotoContainer";
import MoodsVibesContainer from "../components/MoodsVibesContainer";
import LocationTypeContainer from "../components/LocationTypeContainer";
import CharacteristicsContainer from "../components/CharacteristicsContainer";
import YourSpotContainer from "../components/YourSpotContainer";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[816px] flex flex-row items-start justify-start gap-[120px] text-left text-lg text-white font-patrick-hand-body">
      <ScoutmasterContainer />
      <AddSpotContainer />
      <SpotContainer1 />
      <SpotContainer2 />
      <LocationContainer />
      <SpotContainer />
      <PhotoContainer />
      <div className="relative rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 border-[16px] border-solid border-black">
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] w-[375px] h-20 text-right text-black">
          <div className="absolute bottom-[14px] left-[calc(50%_+_122.5px)] tracking-[0.01em] leading-[24px]">
            Cancel
          </div>
          <img
            className="absolute top-[44px] left-[20px] w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowsarrowleft.svg"
          />
          <div className="absolute bottom-[12px] left-[calc(50%_-_19.5px)] text-3xl leading-[28px] text-center">
            Tags
          </div>
        </div>
        <div className="absolute top-[100px] left-[20px] rounded bg-white box-border w-[335px] flex flex-row py-3 px-3.5 items-start justify-start text-gray-5 border-[2px] border-solid border-black">
          <div className="flex-1 relative tracking-[0.01em] leading-[24px]">
            Add custom tags
          </div>
        </div>
        <div className="absolute top-[160px] left-[20px] flex flex-row items-start justify-start gap-[7px] text-base">
          <div className="rounded-13xl bg-black flex flex-row py-1.5 pr-[9px] pl-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/nature--weatherthunderstorm.svg"
            />
            <div className="relative tracking-[0.02em]">alley</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/actions--uiclearx.svg"
            />
          </div>
          <div className="rounded-13xl bg-black flex flex-row py-1.5 pr-[9px] pl-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/nature--weatherthunderstorm.svg"
            />
            <div className="relative tracking-[0.02em]">moody</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/actions--uiclearx.svg"
            />
          </div>
          <div className="rounded-13xl bg-black flex flex-row py-1.5 pr-[9px] pl-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/nature--weatherthunderstorm.svg"
            />
            <div className="relative tracking-[0.02em]">vibey</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/actions--uiclearx.svg"
            />
          </div>
        </div>
        <div className="absolute top-[244px] left-[20px] flex flex-col items-start justify-start gap-[24px]">
          <MoodsVibesContainer />
          <LocationTypeContainer />
          <CharacteristicsContainer />
        </div>
        <div className="absolute top-[728px] left-[20px] rounded-lg bg-black box-border w-[335px] overflow-hidden flex flex-row py-3 px-6 items-center justify-center text-center text-3xl border-[4px] border-solid border-black">
          <div className="relative leading-[28px]">Continue</div>
        </div>
      </div>
      <YourSpotContainer />
    </div>
  );
};

export default FrameComponent;
