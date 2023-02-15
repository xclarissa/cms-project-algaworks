import { transparentize } from "polished";
import styled from "styled-components";

export interface ProgressProps {
  theme: "primary" | "secondary";
  progress: number;
  title: string;
  width?: number;
}

export default function ProgressBar({
  theme,
  progress,
  title,
  width,
}: ProgressProps) {
  return (
    <ProgressWrapper style={{ width: width || "auto" }}>
      <TextShadow progress={progress} theme={theme}>
        {title}
      </TextShadow>
      <CurrentProgress progress={progress} theme={theme}>
        <span>{title}</span>
      </CurrentProgress>
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.div`
  height: 24px;
  color: #fff;
  background-color: ${transparentize(0.85, "#244060")};
  position: relative;
`;

const TextShadow = styled.span<{
  theme: "primary" | "secondary";
  progress: number;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
  color: "#244060";
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  padding-left: 4px;
  white-space: nowrap; 
`;

const CurrentProgress = styled.div<{
  theme: "primary" | "secondary";
  progress: number;
}>`
  height: 100%;
  background-color: ${(props) =>
    props.theme === "primary" ? "#0099ff" : "#244060"};
  width: ${(props) => props.progress}%;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;
  ${(props) => (props.progress > 0 ? "padding: 4px" : "")};
  transition: .25s ease;
  z-index: 2; 
  position: relative;
  
`;
