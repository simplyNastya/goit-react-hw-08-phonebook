import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner';

import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
// import Navbar from 'components/Navbar/Navbar';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />}>
            <Routes>
                <Route path='/' element={<HomePage />}>
                    <Route element={<PublicRoute/>}>
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/login' element={<LoginPage />} />
                    </Route>
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path='/contacts' element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;