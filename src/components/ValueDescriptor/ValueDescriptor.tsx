import * as VD from './ValueDescriptor.styles';

export interface ValueDescriptorProps {
  description: string;
  value: number;
  color: 'primary' | 'default';
  isCurrency?: boolean;
}

export default function ValueDescriptor({
  description,
  value,
  color,
  isCurrency
}: ValueDescriptorProps) {
  return (
    <VD.Wrapper color={color}>
      <span className="Description">{description}:</span>
      <div>
        {isCurrency && <span className="Currency">{'R$'}</span>}
        <span className="Value">{value.toLocaleString('pt-br')}</span>
      </div>
    </VD.Wrapper>
  );
}
