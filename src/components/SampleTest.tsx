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
      <style jsx>
        {`
          input[data-testid='test__input'] {
            font-size: 16px;
            background-color: rgb(255, 255, 255);
            border-radius: 15px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(229, 229, 229);
            padding: 10px 10px;
          }
        `}
      </style>
    </div>
  );
};

export default SampleTest;
