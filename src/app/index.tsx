import React, { FC, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Stock = React.lazy(() => import('pages/stock'));

const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stock />
    </Suspense>
  );
}

export default App;
