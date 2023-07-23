import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div>
        <button onClick={() => history.push('/doctorAvatar')}>Doctor</button>
        <button onClick={() => history.push('/manAvatar')}>Man</button>
        <button onClick={() => history.push('/boyAvatar')}>Boy</button>
        <button onClick={() => history.push('/girlAvatar')}>Girl</button>
        <button onClick={() => history.push('/grandmaAvatar')}>Grandma</button>
      </div>      
    </div>
  );
};

export default App;
