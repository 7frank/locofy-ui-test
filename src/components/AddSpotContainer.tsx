import { FunctionComponent } from "react";
import KeyboardAlphabetContainer from "./KeyboardAlphabetContainer";

const AddSpotContainer: FunctionComponent = () => {
  return (
    <div className="relative rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 text-center text-5xl text-black font-patrick-hand-body border-[16px] border-solid border-black">
      <KeyboardAlphabetContainer
        dimensions="/frame-10175.svg"
        dimensionsId="/emotionsemojigrin.svg"
        dimensionsIds="/tech--mediamicrophone.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16)] w-[375px] h-20 flex flex-row py-10 pr-5 pl-[165px] box-border items-start justify-start gap-[100px] text-3xl">
        <div className="relative leading-[28px]">Name</div>
        <div className="relative text-lg tracking-[0.01em] leading-[24px] text-right">
          Cancel
        </div>
      </div>
      <div className="absolute top-[106px] left-[54px] flex items-center justify-center w-[266px]">
        Give your spot a name and short description
      </div>
      <div className="absolute top-[196px] left-[16px] rounded bg-white box-border w-[335px] flex flex-row py-3 px-3.5 items-start justify-start text-left text-lg border-[2px] border-solid border-black">
        <div className="flex-1 relative tracking-[0.01em] leading-[24px]">
          Low Lit Alley
        </div>
      </div>
      <div className="absolute top-[260px] left-[16px] rounded bg-white box-border w-[335px] h-[151px] flex flex-row py-3 px-3.5 items-start justify-start text-left text-lg text-gray-5 border-[2px] border-solid border-black">
        <div className="flex-1 relative tracking-[0.01em] leading-[24px]">
          Describe your spot
        </div>
      </div>
      <div className="absolute top-[447px] left-[20px] rounded-lg bg-black box-border w-[335px] overflow-hidden flex flex-row py-3 px-6 items-center justify-center text-3xl text-white border-[4px] border-solid border-black">
        <div className="relative leading-[28px]">Continue</div>
      </div>
    </div>
  );
};

export default AddSpotContainer;
