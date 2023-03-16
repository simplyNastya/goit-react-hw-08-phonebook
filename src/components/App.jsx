import { BrowserRouter } from 'react-router-dom';

import { store } from 'redux/store';
import { Provider } from 'react-redux';

import Navbar from './Navbar/Navbar';
import UserRoutes from 'services/userRoutes';

// import ContactsPage from '../pages/ContactsPage/ContactsPage';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename='goit-react-hw-08-phonebook'>
        <Navbar />
        <UserRoutes />
        {/* <ContactsPage /> */}
      </BrowserRouter>
    </Provider>
  );
};
