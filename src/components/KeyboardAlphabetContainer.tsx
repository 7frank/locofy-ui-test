import { FunctionComponent } from "react";

type KeyboardAlphabetContainerType = {
  dimensions?: string;
  dimensionsId?: string;
  dimensionsIds?: string;
};

const KeyboardAlphabetContainer: FunctionComponent<
  KeyboardAlphabetContainerType
> = ({ dimensions, dimensionsId, dimensionsIds }) => {
  return (
    <div className="absolute top-[521px] left-[0px] bg-gray-1 box-border w-[375px] h-[291px] overflow-hidden text-center text-5xl text-black font-patrick-hand-body border-t-[2px] border-solid border-gray-2">
      <div className="absolute top-[172px] left-[8px] w-[359px] flex flex-row items-start justify-start gap-[8px] text-3xl">
        <div className="flex-1 rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] h-11 overflow-hidden flex flex-col pt-1 px-1 pb-2 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] flex items-center justify-center">
            123
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-[182px] h-11 overflow-hidden shrink-0 flex flex-col pt-1 px-1 pb-2 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] flex items-center justify-center">
            space
          </div>
        </div>
        <div className="flex-1 rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] h-11 overflow-hidden flex flex-col pt-1 px-1 pb-2 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] flex items-center justify-center">
            return
          </div>
        </div>
      </div>
      <div className="absolute top-[11px] left-[10px] flex flex-row items-start justify-start gap-[4px]">
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            q
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            w
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            e
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            r
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            t
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            y
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            u
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            i
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            o
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            p
          </div>
        </div>
      </div>
      <div className="absolute top-[64px] left-[28px] flex flex-row items-start justify-start gap-[4px]">
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            a
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            s
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            d
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            f
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            g
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            h
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            j
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            k
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            l
          </div>
        </div>
      </div>
      <div className="absolute top-[117px] left-[64px] flex flex-row items-start justify-start gap-[4px]">
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            z
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            x
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            c
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            v
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            b
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            n
          </div>
        </div>
        <div className="rounded-md bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-8 h-11 overflow-hidden shrink-0 flex flex-col p-1 box-border items-center justify-center">
          <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px] flex items-center justify-center">
            m
          </div>
        </div>
      </div>
      <div className="absolute top-[117px] left-[8px] rounded-lg bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-[43px] h-11 overflow-hidden flex flex-col p-1 box-border items-center justify-center">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowsarrowup.svg"
        />
      </div>
      <div className="absolute top-[117px] left-[324px] rounded-lg bg-white shadow-[0px_4px_0px_rgba(51,_51,_51,_0.16)] w-[43px] h-11 overflow-hidden flex flex-col p-1 box-border items-center justify-center">
        <img
          className="relative w-[22.67px] h-[17.5px]"
          alt=""
          src={dimensions}
        />
      </div>
      <img
        className="absolute top-[238px] left-[25px] w-7 h-7 overflow-hidden"
        alt=""
        src={dimensionsId}
      />
      <img
        className="absolute top-[238px] left-[322px] w-7 h-7 overflow-hidden"
        alt=""
        src={dimensionsIds}
      />
    </div>
  );
};

export default KeyboardAlphabetContainer;
