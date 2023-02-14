import * as P from './Profile.styles';
import Avatar from '../../assets/avatar.jpg';

export interface ProfileProps {
  title: string;
  description: string;
}

export default function Profile({ title, description }: ProfileProps) {
  return (
    <P.Wrapper>
      <P.Image src={Avatar} alt="Profile Photo" />  
      <P.Info>
        <P.Title>{title}</P.Title>
        <P.Description>{description}</P.Description>
      </P.Info>
    </P.Wrapper>
  )
}
