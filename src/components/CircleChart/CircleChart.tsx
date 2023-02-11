import { useEffect, useState } from "react";
import * as CC from "./CircleChart.styles";

export interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "default" | "primary";
  strokeWidth?: number;
}

export function CircleChart({
  size,
  progress,
  caption,
  theme,
  strokeWidth,
}: CircleChartProps) {
  //função que recupera a cor do chart com base no tema
  const getThemeColor = () => (theme === "primary" ? "#09f" : "#274060");

  //setup (configurações de cor, borda, etc)
  const THEME = getThemeColor();
  const STROKE_WIDTH = strokeWidth || 8;
  const STROKE_COLOR = THEME;

  //matematica do componente
  const CENTER = size / 2;
  const RADIUS = size / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  //estado de offset  (do svg)
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  //observador para animar o offset
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * CIRCUMFERENCE;
    setOffset(progressOffset);
  }, [setOffset, CIRCUMFERENCE, progress, offset]);

  return (
    <CC.Wrapper>
      <CC.SvgWrapper style={{ width: size, height: size }}>
        <CC.Svg width={size} height={size}>
          <CC.CircleBG cy={CENTER} cx={CENTER} r={RADIUS} />
          <CC.Circle
            fill="none"
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </CC.Svg>
        <CC.Percentage>{progress}%</CC.Percentage>
      </CC.SvgWrapper>
      {caption && <CC.Caption>{caption}</CC.Caption>}
    </CC.Wrapper>
  );
}
