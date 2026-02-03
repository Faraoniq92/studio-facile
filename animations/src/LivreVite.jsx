import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
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

const TASKS = [
  { label: "Brief client", day: "J1" },
  { label: "Wireframes", day: "J2" },
  { label: "Maquette UI", day: "J3" },
  { label: "Intégration", day: "J4" },
  { label: "Code front", day: "J5" },
  { label: "Tests & QA", day: "J6" },
  { label: "Mise en ligne", day: "J7" },
];

const Checkmark = ({ progress, size = 22 }) => {
  const pathLength = 20;
  const drawn = progress * pathLength;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx={12} cy={12} r={11} fill={GREEN} opacity={progress} />
      <polyline
        points="7 12.5 10.5 16 17 9"
        stroke={WHITE}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength - drawn}
      />
    </svg>
  );
};

const EmptyCircle = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx={12} cy={12} r={11} stroke={GRAY_200} strokeWidth={1.5} fill={WHITE} />
  </svg>
);

export const LivreVite = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const DAY_START = 10;
  const DAY_DURATION = 18;
  const TOTAL = DAY_DURATION * 7;

  const dayFloat = interpolate(frame, [DAY_START, DAY_START + TOTAL], [0, 7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const activeDay = Math.min(7, Math.ceil(dayFloat) || 1);
  const allDone = dayFloat >= 7;
  const progressPct = (dayFloat / 7) * 100;

  const getDayProgress = (i) =>
    interpolate(dayFloat, [i, i + 1], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  const doneCount = TASKS.filter((_, i) => getDayProgress(i) >= 1).length;

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
      {/* Card */}
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
        {/* Card header */}
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
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: BLACK, lineHeight: 1.2 }}>
                Sprint livraison
              </div>
              <div style={{ fontSize: 11, color: GRAY_400, fontWeight: 500, marginTop: 2 }}>
                {allDone ? "Terminé" : `${doneCount}/7 tâches`}
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "4px 12px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 700,
              background: allDone ? GREEN_LIGHT : YELLOW_LIGHT,
              color: allDone ? GREEN : BLACK,
            }}
          >
            {allDone ? "✓ Done" : `J${activeDay}`}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ padding: "12px 24px 0" }}>
          <div style={{ width: "100%", height: 4, borderRadius: 2, background: GRAY_100 }}>
            <div
              style={{
                width: `${progressPct}%`,
                height: "100%",
                borderRadius: 2,
                background: allDone ? GREEN : YELLOW,
              }}
            />
          </div>
        </div>

        {/* Task list */}
        <div style={{ padding: "14px 16px 18px" }}>
          {TASKS.map((task, i) => {
            const dp = getDayProgress(i);
            const isDone = dp >= 1;
            const isActive = dp > 0 && !isDone;
            const checkProgress = isDone
              ? 1
              : interpolate(dp, [0.55, 0.95], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "9px 10px",
                  borderRadius: 10,
                  background: isActive ? "rgba(255, 230, 0, 0.08)" : "transparent",
                  marginBottom: 2,
                }}
              >
                {checkProgress > 0 ? (
                  <Checkmark progress={checkProgress} size={22} />
                ) : (
                  <EmptyCircle size={22} />
                )}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: isDone ? 500 : 600,
                    color: isDone ? GRAY_400 : BLACK,
                    textDecoration: isDone ? "line-through" : "none",
                    flex: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {task.label}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: 6,
                    background: isDone ? GREEN_LIGHT : isActive ? YELLOW_LIGHT : GRAY_100,
                    color: isDone ? GREEN : isActive ? BLACK : GRAY_300,
                  }}
                >
                  {isDone ? "Fait" : task.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
