import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

const BLACK = "#1D1D1B";
const WHITE = "#FFFFFF";
const YELLOW = "#FFE600";

const TOP_PATHS = [
  "M-1.14092e-05 126.364L14.0144 122.51V129.595L35.0361 123.833V109.663L6.96828 117.332V110.247L-0.0389404 112.155V83.8142L6.96828 81.9067V74.8216L42.0433 65.2061V72.2912L49.0506 70.3837V84.5538L35.0361 88.4078V81.3227L14.0144 87.0842V101.254L42.0823 93.5854V100.67L49.0895 98.7629V127.103L42.0823 129.011V136.096L7.00721 145.711V138.626L-1.14092e-05 140.534V126.364Z",
  "M70.1111 71.7462L56.0966 75.6002V61.43L98.1789 49.907V64.0772L84.1644 67.9312V124.573L70.15 128.427V71.7852L70.1111 71.7462Z",
  "M133.254 89.8871L140.261 87.9796V38.423L154.276 34.569V98.2958L147.269 100.203V107.288L112.194 116.904V109.819L105.186 111.726V47.9995L119.201 44.1455V93.7022L126.208 91.7947V98.8797L133.215 96.9722V89.8871H133.254Z",
  "M161.283 32.6226L203.365 21.0996V28.1847L210.372 26.2771V82.9189L203.365 84.8264V91.9115L161.283 103.434V32.6226ZM189.351 74.5102L196.358 72.6027V44.2623L189.351 46.1699V39.0848L175.336 42.9388V85.4103L189.351 81.5564V74.4713V74.5102Z",
  "M217.38 17.2845L231.394 13.4306V84.2424L217.38 88.0964V17.2845Z",
  "M238.44 18.6081L245.448 16.7006V9.61547L280.523 0V7.08508L287.53 5.17756V61.8193L280.523 63.7268V70.8119L245.448 80.4274V73.3423L238.44 75.2498V18.6081ZM266.469 53.4106L273.476 51.5031V23.1628L266.469 25.0703V17.9852L259.462 19.8927V26.9778L252.455 28.8853V57.2257L259.462 55.3181V62.4032L266.469 60.4957V53.4106Z",
];

const BOTTOM_BG = "M85.6439 146.373L362.974 68.6708V146.568L85.6439 224.27V146.373Z";
const BOTTOM_BORDER = "M355.188 78.9091V140.612L93.4296 213.993V152.29L355.188 78.9091ZM370.76 58.3935L77.858 140.456V234.508L370.76 152.446V58.3935Z";

const BOTTOM_PATHS = [
  "M107.133 170.859L128.154 165.098V179.268L107.133 185.029V213.37L93.1182 217.224V146.412L135.2 134.889V149.059L107.133 156.728V170.898V170.859Z",
  "M142.208 154.198L149.215 152.29V145.205L156.222 143.298V136.213L163.229 134.305V127.22L170.236 125.313V132.398L177.244 130.49V137.575L184.251 135.668V142.753L191.258 140.845V190.402L177.244 194.256V180.086L156.222 185.847V200.017L142.208 203.871V154.315V154.198ZM156.222 171.599L177.244 165.838V151.667L170.236 153.575V146.49L163.229 148.397V155.483L156.222 157.39V171.56V171.599Z",
  "M233.341 157.546L247.355 153.692V167.862L240.348 169.769V176.854L205.273 186.47V179.385L198.266 181.292V124.651L205.273 122.743V115.658L240.348 106.043V113.128L247.355 111.22V125.39L233.341 129.244V122.159L219.326 126.013V133.098L212.319 135.006V163.346L219.326 161.439V168.524L233.341 164.67V157.585V157.546Z",
  "M254.401 102.228L268.416 98.3736V169.185L254.401 173.039V102.228Z",
  "M289.437 149.293L310.459 143.531V157.701L275.384 167.317V96.466L289.398 92.6121V149.254L289.437 149.293Z",
  "M331.52 137.77L359.587 130.101V144.271L317.505 155.794V84.9431L359.587 73.4201V87.5902L331.52 95.2593V109.429L352.541 103.668V117.838L331.52 123.6V137.77Z",
];

export const LogoReveal = () => {
  const frame = useCurrentFrame();

  // === FLASH: white flash on frame 2-5, like a power-on burst ===
  const flashOpacity = interpolate(
    frame,
    [1, 3, 6],
    [0, 0.9, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // === Phase 1: ALL top letters SLAM in together (frames 3-8) ===
  // Each letter has tiny stagger (1 frame) but snaps in hard
  const TOP_START = 3;
  const TOP_STAGGER = 1;

  // === Phase 2: Bottom block PUNCHES in (frames 10-16) ===
  const BOTTOM_BG_START = 10;
  const BOTTOM_BG_DUR = 6;

  // === Phase 3: Bottom letters rapid-fire (frames 14-22) ===
  const BOTTOM_START = 14;
  const BOTTOM_STAGGER = 1;

  // === Global scale punch: everything starts slightly big, snaps to 1 ===
  const globalScale = interpolate(
    frame,
    [2, 8],
    [1.15, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.exp) }
  );

  // Bottom BG — fast wipe
  const bgProgress = interpolate(
    frame,
    [BOTTOM_BG_START, BOTTOM_BG_START + BOTTOM_BG_DUR],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.exp) }
  );

  const borderProgress = interpolate(
    frame,
    [BOTTOM_BG_START + 2, BOTTOM_BG_START + BOTTOM_BG_DUR + 2],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.exp) }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: YELLOW,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* White flash overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: WHITE,
          opacity: flashOpacity,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      <svg
        viewBox="0 0 371 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${globalScale})`,
        }}
      >
        <defs>
          <clipPath id="clip0_hero">
            <rect width="287.491" height="145.672" fill="white" />
          </clipPath>
          <clipPath id="clip1_hero">
            <rect
              width="292.902"
              height="176.115"
              fill="white"
              transform="translate(77.858 58.3935)"
            />
          </clipPath>
        </defs>

        {/* Top group: STUDIO — slam in */}
        <g clipPath="url(#clip0_hero)">
          {TOP_PATHS.map((d, i) => {
            const letterStart = TOP_START + i * TOP_STAGGER;
            const progress = interpolate(
              frame,
              [letterStart, letterStart + 4],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.exp) }
            );

            // Letters slam down from above
            const y = (1 - progress) * -30;
            const scale = interpolate(progress, [0, 1], [1.3, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <path
                key={`top-${i}`}
                d={d}
                fill={BLACK}
                opacity={Math.min(progress * 2, 1)}
                style={{
                  transform: `translateY(${y}px) scale(${scale})`,
                  transformOrigin: "center center",
                }}
              />
            );
          })}
        </g>

        {/* Bottom group: FACILE block */}
        <g clipPath="url(#clip1_hero)">
          {/* Black parallelogram — fast horizontal wipe */}
          <path
            d={BOTTOM_BG}
            fill={BLACK}
            opacity={Math.min(bgProgress * 3, 1)}
            style={{
              clipPath: `inset(0 ${(1 - bgProgress) * 100}% 0 0)`,
            }}
          />

          {/* Border */}
          <path
            d={BOTTOM_BORDER}
            fill={BLACK}
            opacity={Math.min(borderProgress * 3, 1)}
            style={{
              clipPath: `inset(0 ${(1 - borderProgress) * 100}% 0 0)`,
            }}
          />

          {/* White letters — rapid fire */}
          {BOTTOM_PATHS.map((d, i) => {
            const letterStart = BOTTOM_START + i * BOTTOM_STAGGER;
            const progress = interpolate(
              frame,
              [letterStart, letterStart + 3],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.exp) }
            );

            // Snap up from below
            const y = (1 - progress) * 15;

            return (
              <path
                key={`bot-${i}`}
                d={d}
                fill={WHITE}
                opacity={Math.min(progress * 2.5, 1)}
                style={{
                  transform: `translateY(${y}px)`,
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
