import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'))

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;