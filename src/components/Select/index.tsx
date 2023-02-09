import { InputHTMLAttributes, useState } from 'react';
import { SelectWrapper } from './Select.styles';

export interface SelectProps {
  label?: string
  value: string;
}

export default function Select({ label, value }: SelectProps) {
  const voucherType = [
    { label: 'Masculino', value: '1' },
    { label: 'Feminino', value: '2' },
    { label: 'Outro', value: '3' },
  ]

  return (
    <SelectWrapper>
      {voucherType.map((type, index) => (
        <option key={index}value={type.value}>{type.label}</option>
      ))}
    </SelectWrapper>
  );
}
