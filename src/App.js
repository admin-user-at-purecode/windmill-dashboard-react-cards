import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import Cards from './pages/Cards';

function App() {
  return (
    <Windmill usePreferences>
     <Layout>
      <Cards />
    </Layout>
    </Windmill>
  );
}

export default App;
