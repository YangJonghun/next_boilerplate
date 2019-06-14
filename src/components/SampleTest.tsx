import React, { useState } from 'react';

export interface SampleTestProps {
  title: string;
}

const SampleTest: React.FC<SampleTestProps> = ({ title }) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>{title}</div>
      <input data-testid="test__input" value={value} onChange={onChange} />
    </div>
  );
};

export default SampleTest;
