import * as P from './Profile.styles';
import Avatar from '../../../assets/avatar.jpg';

export interface ProfileProps {
  name: string;
  description: string;
  editorId: number;
  avatarUrl: string; 
}

export default function Profile({ name, description, editorId, avatarUrl }: ProfileProps) {
  return (
    <P.Wrapper to={`/editores/${editorId}`}>
      <P.Image src={avatarUrl} alt="Profile Photo" />  
      <P.Info>
        <P.Title>{name}</P.Title>
        <P.Description>{description}</P.Description>
      </P.Info>
    </P.Wrapper>
  )
}
