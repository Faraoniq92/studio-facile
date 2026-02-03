import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

const YELLOW = "#FFE600";
const YELLOW_LIGHT = "#FFF9CC";
const BLACK = "#1D1D1B";
const WHITE = "#FFFFFF";
const GRAY_50 = "#FAFAFA";
const GRAY_100 = "#F5F5F5";
const GRAY_200 = "#E8E8E8";
const GRAY_300 = "#D4D4D4";
const GRAY_400 = "#ABABAB";
const GREEN = "#22C55E";
const GREEN_LIGHT = "#DCFCE7";
const RED = "#EF4444";

const FUNNEL_STEPS = [
  { label: "Visiteurs", value: 12480, width: 100 },
  { label: "Scroll 50%", value: 8920, width: 82 },
  { label: "CTA vu", value: 6200, width: 64 },
  { label: "Clic CTA", value: 3100, width: 46 },
  { label: "Formulaire", value: 1860, width: 32 },
  { label: "Conversion", value: 940, width: 22 },
];

const KPI = [
  { label: "Taux conv.", value: "7.5%", prev: "3.2%", up: true },
  { label: "Coût/lead", value: "12€", prev: "28€", up: false },
  { label: "Temps page", value: "2m40", prev: "1m10", up: true },
];

export const Conversion = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const STEP_START = 8;
  const STEP_INTERVAL = 14;

  const globalProgress = interpolate(
    frame,
    [STEP_START, STEP_START + STEP_INTERVAL * FUNNEL_STEPS.length],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: GRAY_50,
        fontFamily: "'Manrope', -apple-system, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: 16,
        position: "relative",
      }}
    >
      <div
        style={{
          width: 420,
          background: WHITE,
          borderRadius: 20,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.06)",
          border: `1px solid ${GRAY_100}`,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid ${GRAY_100}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: YELLOW,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={BLACK} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={10} />
                <circle cx={12} cy={12} r={6} />
                <circle cx={12} cy={12} r={2} />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: BLACK, lineHeight: 1.2 }}>
                Funnel conversion
              </div>
              <div style={{ fontSize: 11, color: GRAY_400, fontWeight: 500, marginTop: 2 }}>
                Analyse en temps réel
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "4px 12px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 700,
              background: GREEN_LIGHT,
              color: GREEN,
            }}
          >
            +134%
          </div>
        </div>

        {/* Funnel */}
        <div style={{ padding: "16px 24px" }}>
          {FUNNEL_STEPS.map((step, i) => {
            const stepProgress = interpolate(
              frame,
              [STEP_START + i * STEP_INTERVAL, STEP_START + i * STEP_INTERVAL + 10],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
            );
            const barWidth = step.width * stepProgress;
            const animValue = Math.round(step.value * stepProgress);
            const isLast = i === FUNNEL_STEPS.length - 1;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 8,
                  opacity: stepProgress,
                  transform: `translateY(${(1 - stepProgress) * 6}px)`,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: isLast && stepProgress >= 1 ? BLACK : GRAY_400,
                    width: 76,
                    flexShrink: 0,
                    textAlign: "right",
                  }}
                >
                  {step.label}
                </span>
                <div style={{ flex: 1, position: "relative" }}>
                  <div
                    style={{
                      height: 22,
                      width: `${barWidth}%`,
                      borderRadius: 6,
                      background: isLast
                        ? `linear-gradient(90deg, ${YELLOW}, ${YELLOW})`
                        : `linear-gradient(90deg, ${GRAY_100}, ${GRAY_200})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingRight: 8,
                      minWidth: barWidth > 5 ? 50 : 0,
                    }}
                  >
                    {stepProgress > 0.3 && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: isLast ? BLACK : GRAY_400,
                        }}
                      >
                        {animValue.toLocaleString("fr-FR")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: GRAY_100, margin: "0 24px" }} />

        {/* KPIs */}
        <div style={{ padding: "14px 20px 18px", display: "flex", gap: 8 }}>
          {KPI.map((kpi, i) => {
            const kpiStart = STEP_START + FUNNEL_STEPS.length * STEP_INTERVAL - 10 + i * 8;
            const kpiProgress = interpolate(
              frame,
              [kpiStart, kpiStart + 12],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
            );

            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: GRAY_50,
                  borderRadius: 10,
                  padding: "10px 10px",
                  opacity: kpiProgress,
                  transform: `translateY(${(1 - kpiProgress) * 8}px)`,
                }}
              >
                <div style={{ fontSize: 8, fontWeight: 600, color: GRAY_400, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>
                  {kpi.label}
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: BLACK, lineHeight: 1 }}>
                  {kpi.value}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <span style={{ fontSize: 9, color: GRAY_300, textDecoration: "line-through" }}>
                    {kpi.prev}
                  </span>
                  <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke={kpi.up ? GREEN : GREEN} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points={kpi.up ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
