import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

import AuthLayout from './AuthLayout/AuthLayout';
import UserRoutes from 'services/userRoutes';
// import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};
