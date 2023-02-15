import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";

export interface ErrorDisplayProps {
  title?: string;
  message?: string;
  small?: boolean;
}

export function ErrorDisplay({
  title,
  message,
  small,
}: ErrorDisplayProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "8px",
        color: "#274060"
      }}
    >
      <Icon path={mdiAlert} size={small ? "24px" : "48px"} />
      <h3 style={{fontSize: "18px", fontWeight: 400}}>{title}</h3>
      <p style={{fontSize: "12px", fontWeight: 400}}>{message}</p>
    </div>
  );
}
