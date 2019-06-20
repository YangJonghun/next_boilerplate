import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import SampleTest from 'components/SampleTest';

storiesOf('For Test', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('SampleTest', () => <SampleTest title={text('title', 'Hello Storybook')} />)
  .add('Dynamic variables with addon-knobs', () => {
    const name = text('Name', 'Kevin');
    const age = number('Age', 46);
    const content = `My name is [${name}] and I'm [${age}] years old.`;
    return (
      <div>
        <div>{content}</div>
        <button type="button" disabled={boolean('Disabled', false)}>
          Disable Test
        </button>
      </div>
    );
  });
