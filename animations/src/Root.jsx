import { Composition } from "remotion";
import { LivreVite } from "./LivreVite";
import { CodePropre } from "./CodePropre";
import { Conversion } from "./Conversion";
import { LogoReveal } from "./LogoReveal";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="LivreVite"
        component={LivreVite}
        durationInFrames={150}
        fps={30}
        width={560}
        height={560}
      />
      <Composition
        id="CodePropre"
        component={CodePropre}
        durationInFrames={150}
        fps={30}
        width={560}
        height={560}
      />
      <Composition
        id="Conversion"
        component={Conversion}
        durationInFrames={150}
        fps={30}
        width={560}
        height={560}
      />
      <Composition
        id="LogoReveal"
        component={LogoReveal}
        durationInFrames={45}
        fps={30}
        width={420}
        height={235}
      />
    </>
  );
};
