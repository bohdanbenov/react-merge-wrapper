import React, { useState } from 'react';

import '../web-components/sample/main';
import '../web-components/sample/polyfills';
import '../web-components/sample/runtime';

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