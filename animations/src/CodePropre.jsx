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
const BLUE = "#3B82F6";
const BLUE_LIGHT = "#DBEAFE";
const PURPLE = "#8B5CF6";
const PURPLE_LIGHT = "#EDE9FE";
const ORANGE = "#F97316";
const ORANGE_LIGHT = "#FFEDD5";

const CODE_LINES = [
  { indent: 0, tag: "html", color: ORANGE, width: 90 },
  { indent: 1, tag: "header", color: BLUE, width: 110 },
  { indent: 2, tag: "nav", color: PURPLE, width: 70 },
  { indent: 2, tag: "logo", color: PURPLE, width: 80 },
  { indent: 1, tag: "main", color: BLUE, width: 100 },
  { indent: 2, tag: "hero", color: PURPLE, width: 75 },
  { indent: 2, tag: "features", color: PURPLE, width: 120 },
  { indent: 2, tag: "cta", color: PURPLE, width: 60 },
  { indent: 1, tag: "footer", color: BLUE, width: 100 },
  { indent: 0, closing: true, tag: "html", color: ORANGE, width: 90 },
];

const METRICS = [
  { label: "Lighthouse", value: 98, color: GREEN },
  { label: "Accessibilité", value: 100, color: GREEN },
  { label: "SEO", value: 95, color: GREEN },
  { label: "Performance", value: 97, color: GREEN },
];

export const CodePropre = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const LINE_START = 8;
  const LINE_INTERVAL = 10;
  const TOTAL_LINES = LINE_START + LINE_INTERVAL * CODE_LINES.length;

  const globalProgress = interpolate(frame, [LINE_START, TOTAL_LINES], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

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
                background: BLACK,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: BLACK, lineHeight: 1.2 }}>
                Structure HTML
              </div>
              <div style={{ fontSize: 11, color: GRAY_400, fontWeight: 500, marginTop: 2 }}>
                Code sémantique
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 5, background: "#FF5F57" }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, background: "#FFBD2E" }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, background: "#28CA41" }} />
          </div>
        </div>

        {/* Code block */}
        <div style={{ padding: "14px 20px", fontFamily: "'SF Mono', 'Fira Code', monospace" }}>
          {CODE_LINES.map((line, i) => {
            const lineProgress = interpolate(
              frame,
              [LINE_START + i * LINE_INTERVAL, LINE_START + i * LINE_INTERVAL + 8],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
            );

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 0",
                  paddingLeft: line.indent * 20,
                  opacity: lineProgress,
                  transform: `translateX(${(1 - lineProgress) * 15}px)`,
                }}
              >
                <span style={{ fontSize: 10, color: GRAY_300, width: 18, textAlign: "right", flexShrink: 0 }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 12, color: GRAY_400 }}>
                  {line.closing ? "</" : "<"}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: line.color,
                    background: `${line.color}12`,
                    padding: "1px 6px",
                    borderRadius: 4,
                  }}
                >
                  {line.tag}
                </span>
                <span style={{ fontSize: 12, color: GRAY_400 }}>{">"}</span>
                {!line.closing && (
                  <div
                    style={{
                      height: 6,
                      width: line.width * lineProgress,
                      borderRadius: 3,
                      background: GRAY_100,
                      marginLeft: 4,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: GRAY_100, margin: "0 20px" }} />

        {/* Metrics */}
        <div style={{ padding: "14px 20px 18px" }}>
          <div style={{ display: "flex", gap: 8 }}>
            {METRICS.map((m, i) => {
              const metricStart = TOTAL_LINES - 20 + i * 6;
              const metricProgress = interpolate(
                frame,
                [metricStart, metricStart + 12],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
              );
              const value = Math.round(m.value * metricProgress);

              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: GRAY_50,
                    borderRadius: 10,
                    padding: "10px 8px",
                    textAlign: "center",
                    opacity: metricProgress,
                    transform: `translateY(${(1 - metricProgress) * 8}px)`,
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 800, color: value >= 95 ? GREEN : BLACK, lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ fontSize: 8, fontWeight: 600, color: GRAY_400, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {m.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
