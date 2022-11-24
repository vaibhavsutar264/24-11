import { appRoutes } from '../utils/constants'
import { Suspense, lazy } from 'react'
import Loading from '../components/loader/Loading'
import PrivateRoutes from '../utils/PrivateRoutes'
import { useRoutes } from 'react-router-dom'

// eslint-disable-next-line react/display-name
const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  )
}

function Routes() {
  return useRoutes([
    // { path: appRoutes.ROOT, element: { <HomeScreen /> } },
    {
      path: '',
      children: [
        {
          path: appRoutes.LOGIN,
          element: <Login />,
        },
        {
          path: appRoutes.ROOT,
          element: <HomeScreen />,
        },
        {
          path: appRoutes.RESET_PASSWORD,
          element: <ResetPassword />,
        },
        { path: appRoutes.FORGOT_PASSWORD, element: <ForgotPassword /> },
        { path: appRoutes.DASHBOARD, element: <Dashboard /> },
        {
          path: appRoutes.SET_PASSWORD,
          element: <SetPassword />,
        },
      ],
    },
    {
      path: '',
      element: <PrivateRoutes />,
      children: [
        // {
        //   path: appRoutes.SET_PASSWORD,
        //   element: <SetPassword />,
        // },
      ],
    },
    {
      path: appRoutes.NOT_FOUND,
      element: <Notfound />,
    },
  ])
}

const Login = Loadable(lazy(() => import('../components/login/login-screen/Login')));
const ResetPassword = Loadable(lazy(() => import('../components/login/reset-password/ResetPassword')));
const ForgotPassword = Loadable(lazy(() => import('../components/login/forgot-password/ForgotPassword')));
const SetPassword = Loadable(lazy(() => import('../components/login/set-password/SetPassword')));
const Notfound = Loadable(lazy(() => import('../components/notfound/Notfound')));
const HomeScreen = Loadable(lazy(() => import('../components/home/HomeScreen')));
const Dashboard = Loadable(lazy(() => import('../components/dashboard/Dashboard')));

export default Routes
