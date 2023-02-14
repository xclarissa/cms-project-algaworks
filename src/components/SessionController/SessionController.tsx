import * as SC from "./SessionController.styles";
import Button from "../Button/Button";
import Avatar from '../../assets/avatar.jpg';

export interface SessionControllerProps {
  title: string;
  description: string;
  onLogout?: () => void;
}

export function SessionController({ title, description, onLogout }: SessionControllerProps) { 

  return (
    <SC.Wrapper>
      <SC.Avatar src={Avatar} />
      <SC.Name>{title}</SC.Name>
      <SC.Description>{description}</SC.Description>
      <Button label="Logout" variant="danger" onClick={onLogout} />
    </SC.Wrapper>
  )
}
