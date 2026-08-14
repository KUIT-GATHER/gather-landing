import Image from "next/image";

import { exploreInfoCards, explorePostings, interestCategories } from "@/components/landing/landing-data";

export function ExploreSection() {
  return (
    <section className="py-20 xl:h-[1148px] xl:py-0" data-motion-section="explore">
      <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1170px] xl:h-full">
        <div className="text-center xl:absolute xl:left-1/2 xl:top-[160px] xl:-translate-x-1/2">
          <span className="inline-flex h-[29px] items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 text-sm font-semibold leading-[16.5px] text-brand" data-motion="explore-heading">이용 방법</span>
          <h2 className="mt-[23px] text-[30px] font-bold leading-[46px] text-[#101110] sm:text-4xl xl:whitespace-nowrap" data-motion="explore-heading">Gather에서 시작하는 방법</h2>
          <p className="mt-2 text-sm leading-5 text-[#5e5e5d]" data-motion="explore-heading">아직 초기 단계지만, 투명하고 친근하게 여러분께 다가갑니다.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 xl:absolute xl:left-0 xl:top-[374px] xl:mt-0 xl:h-[178px] xl:w-full xl:grid-cols-[376.66px_376.67px_376.66px]">
          {exploreInfoCards.map(([kind, title, description]) => (
            <article key={kind} className="h-[178px] rounded-2xl border border-[#e8ebe7] bg-white p-[25px]" data-motion="explore-card">
              {kind === "browse" ? <Image src="/assets/icons/explore-browse.svg" alt="" width={48} height={48} /> : (
                <span className={`flex h-12 w-12 items-center justify-center rounded-full ${kind === "interest" ? "bg-[#e2f8ee]" : "bg-[#eef1ff]"}`}>
                  <Image src={kind === "interest" ? "/assets/icons/timeline-interest.svg" : "/assets/icons/explore-external.svg"} alt="" width={kind === "interest" ? 26 : 25} height={kind === "interest" ? 26 : 25} />
                </span>
              )}
              <h3 className="mt-4 text-[15px] font-bold leading-[21px] text-[#101110]">{title}</h3>
              <p className="mt-2 text-[13px] leading-[21.45px] text-[#70746f]">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#e8ebe7] bg-white p-[25px] shadow-[0_1px_1.5px_rgba(0,0,0,.1),0_1px_1px_rgba(0,0,0,.1)] xl:absolute xl:left-1/2 xl:top-[600px] xl:mt-0 xl:h-[270px] xl:w-[790px] xl:-translate-x-1/2" data-motion="explore-panel">
          <div className="flex h-[18px] items-center justify-between">
            <strong className="text-base leading-6 text-[#101110]">Gather</strong>
            <span className="text-xs leading-[18px] text-[#70746f]">봉사 탐색</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-[5px]">
            {interestCategories.map((category) => (
              <span key={category.label} className="flex h-[31px] items-center justify-center gap-[3px] rounded-[21px] border-[0.7px] px-[11px]" style={{ backgroundColor: category.background, borderColor: category.border }} data-motion="explore-chip">
                <Image src={category.icon} alt="" width={13} height={13} />
                <span className="whitespace-nowrap text-[9.75px] font-semibold leading-[11px] text-[#5e5e5d]">{category.label}</span>
              </span>
            ))}
          </div>
          <div className="mt-[17px] grid gap-6 md:grid-cols-2">
            {explorePostings.map((posting) => (
              <div key={posting.title} className="relative min-h-[138px] rounded-xl border border-[#d9d9d9] bg-white p-3 pl-[90px] md:h-[138px] md:p-[15px] md:pl-[118px]" data-motion="explore-listing">
                <div className="absolute left-[9px] top-3 h-[90px] w-[68px] overflow-hidden rounded-[10px] md:left-[11px] md:top-[15px] md:h-[106px] md:w-[91px]">
                  <Image src={posting.image} alt="" fill sizes="91px" className="object-cover" />
                </div>
                <h4 className="text-base font-semibold leading-5 text-[#0a0a0a] md:whitespace-nowrap md:text-lg">{posting.title}</h4>
                <p className="mt-2 text-sm leading-4 text-[#5e5e5d] md:whitespace-nowrap md:text-[15px]">{posting.description}</p>
                <p className="mt-1 text-sm leading-4 text-[#5e5e5d]">
                  {posting.region} · {posting.date}
                  {posting.dDay ? <> · <strong className="font-semibold text-[#f76073]">{posting.dDay}</strong></> : null}
                </p>
                <span className="mt-[10px] inline-flex h-[23px] items-center gap-1 rounded-[30px] border px-4 text-sm leading-4 text-[#5e5e5d]" style={{ backgroundColor: posting.background, borderColor: posting.border }}><Image src={posting.icon} alt="" width={12} height={12} />{posting.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
