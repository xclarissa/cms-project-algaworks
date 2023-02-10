import * as CC from "./CircleChart.styles";

export interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: 'default' | 'primary';
  strokeWidth?: number;
}

function CircleChart({ size, progress, caption, theme, strokeWidth }: CircleChartProps) {
  return (
    <CC.Wrapper>CircleChart</CC.Wrapper>
  )
}

export default CircleChart;