import { useState } from 'react';

import './default.css';

import Loading from './components/loading';
import Main from './pages/main';

const App = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Main setLoading={setLoading} />
    </>
  );
};

export default App;
