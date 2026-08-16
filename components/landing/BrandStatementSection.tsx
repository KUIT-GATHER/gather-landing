const brandChips = [
  ["발견", "border-[#82d3ca] bg-[#f1fffd] text-[#00c77b]"],
  ["연결", "border-[#a6ccf4] bg-[#f1f8ff] text-[#398ed8]"],
  ["참여", "border-[#d197d1] bg-[#fff3ff] text-[#bf62bb]"],
  ["성장", "border-[#fade9e] bg-[#fffbf1] text-[#db9c16]"],
] as const;

export function BrandStatementSection() {
  return (
    <section className="bg-white py-20 text-center xl:h-[724px] xl:py-0" data-motion-section="brand">
      <div className="mx-auto flex w-[calc(100%-40px)] max-w-[473px] flex-col items-center xl:h-full xl:justify-center">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-7">
            <h2 className="text-[clamp(44px,5vw,72px)] font-bold leading-[1.2] tracking-[-0.04em] text-[#101110] xl:leading-[normal] xl:tracking-normal">
              <span className="block" data-motion="brand-line">발견은 더 쉽게.</span>
              <span className="block" data-motion="brand-line">참여는 <span className="text-brand">함께.</span></span>
              <span className="block" data-motion="brand-line">경험은 <span className="text-brand">성장</span>으로.</span>
            </h2>
            <span className="h-[5px] w-14 rounded-full bg-brand" aria-hidden="true" data-motion="brand-bar" />
          </div>
          <p
            className="text-lg leading-8 text-[#5e5e5d] sm:text-2xl sm:leading-normal"
            data-motion="brand-description"
          >
            Gather는 공고를 보여주는 데서 멈추지 않습니다.
            <br className="hidden sm:block" />
            {" "}관심 있는 봉사를 발견하고, 함께할 사람을 만나고,
            <br className="hidden sm:block" />
            {" "}나만의 참여 경험을 쌓아갈 수 있도록 돕습니다.
          </p>
        </div>
        <div className="mt-[60px] grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center">
          {brandChips.map(([item, style]) => (
            <span
              key={item}
              className={`inline-flex h-11 w-[75px] items-center justify-center rounded-full border text-lg font-semibold leading-[22px] ${style}`}
              data-motion="brand-chip"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
