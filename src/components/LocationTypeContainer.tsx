import { FunctionComponent } from "react";

const LocationTypeContainer: FunctionComponent = () => {
  return (
    <div className="relative w-[283px] h-28 text-center text-base text-black font-patrick-hand-body">
      <div className="absolute top-[32px] left-[0px] flex flex-row items-start justify-start gap-[8px]">
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">Forrest</div>
        </div>
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">City</div>
        </div>
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">Cabin</div>
        </div>
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">Street</div>
        </div>
      </div>
      <div className="absolute top-[78px] left-[0px] flex flex-row items-start justify-start gap-[8px]">
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">Woods</div>
        </div>
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">Downtown</div>
        </div>
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">Alley</div>
        </div>
        <div className="rounded-13xl bg-white flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] border-[2px] border-solid border-black">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/nature--weatherthunderstorm1.svg"
          />
          <div className="relative tracking-[0.02em]">Street</div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] text-lg tracking-[0.01em] leading-[24px] text-left">
        Location Type
      </div>
    </div>
  );
};

export default LocationTypeContainer;
