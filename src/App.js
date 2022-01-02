import React from 'react';

import Layout from './hoc/Layout';

const App = () => {
  console.log(process.env.REACT_APP_MAIL_URL)
  console.log(process.env.REACT_APP_API_KEY)
  return <Layout />;
}

export default App;
