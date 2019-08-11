import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SampleTest, { SampleTestProps } from '../SampleTest';

describe('<SampleTest />', () => {
  const setup = (props: Partial<SampleTestProps> = {}) => {
    const initialProps: SampleTestProps = {
      title: 'hello',
    };
    return render(<SampleTest {...initialProps} {...props} />);
  };

  it('sampleTest render properly', () => {
    setup();
  });

  it('shows title props properly', () => {
    const { getByText } = setup({
      title: 'test',
    });
    const titleDiv = getByText('test');
    expect(titleDiv.textContent).toBe('test');
  });

  it('shows changed value when occured onChange', () => {
    const { getByTestId } = setup();
    const testInput = getByTestId('test__input');
    fireEvent.change(testInput, { target: { value: 'hello' } });
    expect(testInput).toHaveValue('hello');
  });
});
