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
    <main
      className="min-h-screen bg-background"
      style={{
        "--result-accent": result.accent,
        "--result-background": result.background,
        "--result-strong": result.strong,
      } as React.CSSProperties}
    >
      <VolunteerTypeHeader backHref="/volunteer-type" />
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1233px] pb-20 pt-10 xl:pb-[500px] xl:pt-[60px]">
        <ResultSummary result={result} />
        <ResultContent result={result} matchCount={matchCount} />
        <Recommendations result={result} />
        <ResultActions type={type} />
      </div>

      <div aria-hidden="true" className="fixed left-[-10000px] top-0 w-[1233px] bg-background">
        <div id={`result-export-${type}`} className="h-[1907px] w-[1233px] overflow-hidden bg-background">
          <ResultSummary result={result} exportMode />
          <ResultContent result={result} matchCount={matchCount} exportMode includeCampaigns={false} />
        </div>
      </div>
    </main>
  );
}
