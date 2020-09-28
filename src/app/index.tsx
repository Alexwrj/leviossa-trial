import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const Stock = React.lazy(() => import('pages/stock'));

const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <Stock />
      </Provider>
    </Suspense>
  );
}

export default App;
