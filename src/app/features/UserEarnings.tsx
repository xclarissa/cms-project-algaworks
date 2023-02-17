import styled from "styled-components"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"

export default function UserEarnings() {
  return (
    <UserEarningsWrapper>
      <ValueDescriptor color="primary" description="ganhos no mês" value={56054.32} isCurrency />
      <ValueDescriptor color="primary" description="ganhos na semana" value={56054.32} isCurrency /> 
      <ValueDescriptor color="default" description="ganhos de sempre" value={56054.32} isCurrency /> 
      <ValueDescriptor color="default" description="Total de palavras" value={2_334_455} isCurrency /> 
    </UserEarningsWrapper>
  )
}


const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`