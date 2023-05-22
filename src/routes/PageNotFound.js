import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const SamplePage = Loadable(lazy(() => import('views/not-found')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const PageNotFound = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '*',
            element: <SamplePage />
        }
    ]
};

export default PageNotFound;
