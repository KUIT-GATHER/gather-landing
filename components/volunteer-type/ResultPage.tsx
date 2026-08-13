import type { VolunteerType } from "@/data/volunteer-test";
import { volunteerResultData } from "@/data/volunteer-results";
import { Recommendations } from "./Recommendations";
import { ResultActions } from "./ResultActions";
import { ResultContent } from "./ResultContent";
import { ResultSummary } from "./ResultSummary";
import { VolunteerTypeHeader } from "./VolunteerTypeHeader";

type ResultPageProps = {
  type: VolunteerType;
  matchCount: number | null;
};

export function ResultPage({ type, matchCount }: ResultPageProps) {
  const result = volunteerResultData[type];

  return (
    <main className="min-h-screen bg-background" style={{ "--result-accent": result.accent } as React.CSSProperties}>
      <VolunteerTypeHeader backHref="/volunteer-type" />
      <div className="mx-auto w-full max-w-[1232px] px-5 py-10 sm:px-8 sm:py-14">
        <ResultSummary result={result} />
        <ResultContent result={result} matchCount={matchCount} />

        <Recommendations result={result} />

        <div className="mt-6 space-y-6">
          <ResultActions type={type} />
        </div>
      </div>

      <div aria-hidden="true" className="fixed left-[-10000px] top-0 w-[1233px] bg-background">
        <div id={`result-export-${type}`} className="w-[1233px] bg-background pb-10">
          <ResultSummary result={result} exportMode />
          <ResultContent result={result} matchCount={matchCount} exportMode includeCampaigns={false} />
        </div>
      </div>
    </main>
  );
}
