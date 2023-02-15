import { mdiTrashCan, mdiUpload } from "@mdi/js";
import Icon from "@mdi/react";
import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import * as IU from "./ImageUpload.styles";

export interface ImageUploadProps {
  label: string;
}

export function ImageUpload({ label }: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0]; // event para selecionar arquivo
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", (e) =>
        setFilePreview(String(e.target?.result))
      );

      reader.readAsDataURL(file); //precisa ler o arquivo como urldata
    }
  }

  if (filePreview) {
    return (
      <IU.ImagePreviewWrapper>
        <IU.ImagePreview preview={filePreview}>
          <Button variant="primary" label="Remover Imagem" onClick={() => setFilePreview(null)}/>
          {/* <Icon path={mdiTrashCan} size="24px" /> */}
        </IU.ImagePreview>
      </IU.ImagePreviewWrapper>
    );
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
