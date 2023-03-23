import Navbar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Outlet />
    </>
  );
};

export default HomePage;
