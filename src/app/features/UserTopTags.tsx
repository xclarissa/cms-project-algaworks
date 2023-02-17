import styled from 'styled-components'
import { CircleChart } from '../components/CircleChart'

export default function UserTopTags() {
  return (
    <UserTopTagsWrapper>
      <CircleChart progress={80} size={100} caption="HTML" theme='primary' />
      <CircleChart progress={70} size={100} caption="CSS" theme='default' />
      <CircleChart progress={95} size={100} caption="Javascript" theme='default' />
    </UserTopTagsWrapper>
  )
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`