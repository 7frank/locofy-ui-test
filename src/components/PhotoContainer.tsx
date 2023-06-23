import { FunctionComponent } from "react";

const PhotoContainer: FunctionComponent = () => {
  return (
    <div className="relative rounded-21xl bg-white box-border w-[407px] h-[844px] overflow-hidden shrink-0 text-center text-xs text-white font-patrick-hand-body border-[16px] border-solid border-black">
      <img
        className="absolute top-[92px] left-[8px] w-[359px] h-[722px]"
        alt=""
        src="/group-92.svg"
      />
      <div className="relative bg-gray-1 w-[375px] h-[60px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-1 w-[375px] h-[76px]" />
        <div className="absolute top-[44px] left-[0px] rounded-2xl bg-silver w-[375px] h-[74px]" />
      </div>
      <div className="absolute top-[53px] left-[145px] w-[84.3px] h-6 flex flex-row items-center justify-end gap-[7px] text-lg text-black">
        <div className="relative tracking-[0.01em] leading-[24px]">
          All photos
        </div>
        <img
          className="relative w-[10.54px] h-[6.25px]"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="absolute bottom-[767px] left-[calc(50%_-_183.5px)] text-lg tracking-[0.01em] leading-[24px] text-black text-right">
        Cancel
      </div>
      <div className="absolute top-[101px] left-[212px] rounded-21xl bg-black flex flex-col p-1.5 items-start justify-start font-font-awesome-6-pro">
        <div className="relative flex items-center justify-center w-3">1</div>
      </div>
      <div className="absolute top-[224px] left-[333px] rounded-21xl bg-black flex flex-col p-1.5 items-start justify-start font-font-awesome-6-pro">
        <div className="relative flex items-center justify-center w-3">2</div>
      </div>
      <div className="absolute top-[465px] left-[212px] rounded-21xl bg-black flex flex-col p-1.5 items-start justify-start font-font-awesome-6-pro">
        <div className="relative flex items-center justify-center w-3">3</div>
      </div>
      <div className="absolute top-[730px] left-[20px] rounded-lg bg-black box-border w-[335px] overflow-hidden flex flex-row py-3 px-6 items-center justify-center text-3xl border-[4px] border-solid border-black">
        <div className="relative leading-[28px]">Confirm photos</div>
      </div>
    </div>
  );
};

export default PhotoContainer;
