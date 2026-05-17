import { useEffect, useState } from "react";
import type { Region } from "@/data/regions";

type Step = "threat" | "signals" | "quiz" | "defense";
const STEPS: Step[] = ["threat", "signals", "quiz", "defense"];

const LABELS: Record<Step, string> = {
  threat: "01 · A Ameaça",
  signals: "02 · Sinais",
  quiz: "03 · Teste-se",
  defense: "04 · Defesa",
};

export function RegionPanel({ region, onClose }: { region: Region; onClose: () => void }) {
  const [step, setStep] = useState<Step>("threat");
  const [pick, setPick] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const idx = STEPS.indexOf(step);
  const goNext = () => idx < STEPS.length - 1 && setStep(STEPS[idx + 1]);
  const goPrev = () => idx > 0 && setStep(STEPS[idx - 1]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-md sm:items-center sm:p-4"
      style={{ background: "oklch(0.1 0.03 260 / 0.75)" }}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-primary/30 bg-card shadow-2xl glow-gold animate-fade-in sm:max-h-[90vh] sm:rounded-2xl">
        {/* Drag handle on mobile */}
        <div className="flex justify-center pt-2 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-border" />
        </div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-border/60 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-2xl glow-gold sm:h-14 sm:w-14 sm:text-3xl">
              {region.icon}
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">
                Região · nível {region.level}
              </div>
              <h2 className="mt-1 font-display text-xl leading-tight text-glow-gold text-foreground sm:text-2xl">
                {region.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{region.short}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full border border-border/60 px-3 py-1 font-mono text-xs hover:border-primary hover:text-primary"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Stepper */}
        <div className="flex gap-1 px-4 pt-3 sm:px-6 sm:pt-4">
          {STEPS.map((s, i) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`h-1.5 flex-1 rounded-full transition-all ${i <= idx ? "bg-primary" : "bg-border"}`}
              aria-label={LABELS[s]}
            />
          ))}
        </div>
        <div className="px-4 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70 sm:px-6 sm:pt-3">
          {LABELS[step]}
        </div>

        {/* Body — scrollable */}
        <div className="min-h-[220px] flex-1 overflow-y-auto p-4 sm:p-6">
          {step === "threat" && (
            <p className="text-lg leading-relaxed text-foreground/90 animate-fade-in">
              {region.threat}
            </p>
          )}

          {step === "signals" && (
            <ul className="space-y-3 animate-fade-in">
              {region.signals.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 font-mono text-xs text-destructive">
                    !
                  </span>
                  <span className="text-sm text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          )}

          {step === "quiz" && (
            <div className="animate-fade-in">
              <p className="text-base font-medium text-foreground">{region.quiz.q}</p>
              <div className="mt-4 space-y-2">
                {region.quiz.options.map((opt, i) => {
                  const isPicked = pick === i;
                  const isCorrect = i === region.quiz.correct;
                  const showState = pick !== null;
                  return (
                    <button
                      key={i}
                      onClick={() => setPick(i)}
                      disabled={pick !== null}
                      className={`w-full rounded-xl border p-3 text-left text-sm transition-all ${
                        !showState
                          ? "border-border hover:border-primary hover:bg-primary/5"
                          : isCorrect
                            ? "border-safe/60 bg-safe/10 text-foreground glow-safe"
                            : isPicked
                              ? "border-destructive/60 bg-destructive/10 text-foreground"
                              : "border-border/40 opacity-60"
                      }`}
                    >
                      <span className="mr-2 font-mono text-xs text-primary/70">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {pick !== null && (
                <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm text-foreground/90 animate-fade-in">
                  {pick === region.quiz.correct ? "✓ Boa. " : "✕ Quase. "}
                  {region.quiz.explain}
                </div>
              )}
            </div>
          )}

          {step === "defense" && (
            <div className="space-y-3 animate-fade-in">
              {region.defense.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-safe/30 bg-safe/5 p-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe/20 font-mono text-xs text-safe">
                    ✓
                  </span>
                  <span className="text-sm text-foreground/90">{d}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-border/60 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4">
          <button
            onClick={goPrev}
            disabled={idx === 0}
            className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            ← Voltar
          </button>
          {idx < STEPS.length - 1 ? (
            <button
              onClick={goNext}
              className="rounded-md bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-primary-foreground glow-gold"
            >
              Avançar →
            </button>
          ) : (
            <button
              onClick={onClose}
              className="rounded-md bg-safe px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-primary-foreground glow-safe"
            >
              Concluir região
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
