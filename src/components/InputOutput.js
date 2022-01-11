import React, { useState } from 'react';

import { HtextComponent } from '../web-components/web-components';
import '../web-components/styles.css';

function InputOutput() {
  const [reactInputValue, setReactInputValue] = useState('');

  return (
    <div>
      <input
        onChange={(e) => setReactInputValue(e.target.value)}
        value={reactInputValue}
      />
      <br/>
      <app-htext></app-htext>
    </div>
  )
}

export default InputOutput;