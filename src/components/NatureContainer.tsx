import { FunctionComponent } from "react";

type NatureContainerType = {
  locationDescription?: string;
  locationName?: string;
};

const NatureContainer: FunctionComponent<NatureContainerType> = ({
  locationDescription,
  locationName,
}) => {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col items-start justify-start text-left text-base text-gray-3 font-patrick-hand-body border-[3px] border-solid border-black">
      <img
        className="relative w-[335px] h-[231px]"
        alt=""
        src="/frame-10134.svg"
      />
      <div className="w-[335px] flex flex-col pt-[11px] px-[21px] pb-[21px] box-border items-start justify-start gap-[7px]">
        <div className="self-stretch relative tracking-[0.02em]">
          {locationDescription}
        </div>
        <div className="self-stretch relative text-3xl leading-[28px] text-black">
          {locationName}
        </div>
        <div className="self-stretch relative tracking-[0.02em]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed consequat amet massa laor...
        </div>
      </div>
    </div>
  );
};

export default NatureContainer;
