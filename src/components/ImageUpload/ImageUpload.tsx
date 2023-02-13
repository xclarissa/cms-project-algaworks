import { mdiUpload } from "@mdi/js";
import Icon from "@mdi/react";
import { ChangeEvent, useState } from "react";
import * as IU from "./ImageUpload.styles";

export interface ImageUploadProps {
  label: string;
}

export function ImageUpload({ label }: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", (e) =>
        setFilePreview(String(e.target?.result))
      );

      reader.readAsDataURL(file);
    }

    if (filePreview) {
      <img src={filePreview} alt="Arquivo" />;
    }
  }

  return (
    <IU.Wrapper>
      <IU.Label>
        <Icon size={"24px"} path={mdiUpload} />
        {label}
        <IU.Input type="file" onChange={handleChange} />
      </IU.Label>
    </IU.Wrapper>
  );
}
