/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MidleWareAuth from './MidlewareAuth';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
// MASTER
const MasterUser = Loadable(lazy(() => import('views/pages/master/users')));
const MasterCity = Loadable(lazy(() => import('views/pages/master/city')));
const MasterPocketMonet = Loadable(lazy(() => import('views/pages/master/pocket-money')));

// AKTIVITY
const Perdin = Loadable(lazy(() => import('views/pages/activity/perdins')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: (
                <MidleWareAuth>
                    <DashboardDefault />
                </MidleWareAuth>
            )
        },
        {
            path: 'dashboard',
            element: (
                <MidleWareAuth>
                    <DashboardDefault />
                </MidleWareAuth>
            )
        },
        {
            path: 'master/users',
            element: (
                <MidleWareAuth>
                    <MasterUser />
                </MidleWareAuth>
            )
        },
        {
            path: 'master/citys',
            element: (
                <MidleWareAuth>
                    <MasterCity />
                </MidleWareAuth>
            )
        },
        {
            path: 'master/pocket-moneys',
            element: (
                <MidleWareAuth>
                    <MasterPocketMonet />
                </MidleWareAuth>
            )
        },
        {
            path: 'activity/perdin',
            element: (
                <MidleWareAuth>
                    <Perdin />
                </MidleWareAuth>
            )
        }
    ]
};

export default MainRoutes;
