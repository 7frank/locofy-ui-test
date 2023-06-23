import { FunctionComponent } from "react";
import NatureContainer from "./NatureContainer";

const ScoutmasterContainer: FunctionComponent = () => {
  return (
    <div className="relative rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 text-center text-base text-gray-3 font-patrick-hand-body border-[16px] border-solid border-black">
      <div className="absolute top-[127px] left-[20px] w-[335px] h-[1271px] flex flex-col items-center justify-start gap-[32px] text-left">
        <NatureContainer
          locationDescription="Nature"
          locationName="Cozy wooded corner - great for creative photo shoot"
        />
        <NatureContainer
          locationDescription="Urban"
          locationName="Vibey alley in Lincoln Park"
        />
        <NatureContainer
          locationDescription="Public Park"
          locationName="Shady corner at Winstead Hill"
        />
      </div>
      <img
        className="absolute bottom-[32px] left-[0px] w-[375px] h-24"
        alt=""
        src="/tab-bar.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] w-[375px] h-20 text-3xl text-black">
        <div className="absolute bottom-[12px] left-[calc(50%_-_50.5px)] leading-[28px]">
          Scoutmaster
        </div>
      </div>
      <div className="absolute top-[93px] left-[111px] tracking-[0.02em] text-gray-5">
        Loading fresh locations...
      </div>
    </div>
  );
};

export default ScoutmasterContainer;
