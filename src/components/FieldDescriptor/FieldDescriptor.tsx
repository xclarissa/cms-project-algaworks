import * as FD from './FieldDescriptor.styles';

export interface FieldDescriptorProps {
  description: string;
  date: string;
}

export default function FieldDescriptor({ description, date }: FieldDescriptorProps) {
  return (
    <FD.Wrapper>
      <label className="Description">{description}</label>
      <div>
        <span className='Date'>{date}</span>
      </div>
    </FD.Wrapper>
  );
}
