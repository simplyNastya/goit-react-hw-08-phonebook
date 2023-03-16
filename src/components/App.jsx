import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from './Navbar/Navbar';
import UserRoutes from 'services/userRoutes';

// import ContactsPage from '../pages/ContactsPage/ContactsPage';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <Navbar />
          <UserRoutes />
          {/* <ContactsPage /> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
