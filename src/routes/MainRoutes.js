/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MidleWareAuth from './MidlewareAuth';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// MASTER
const MasterStoreServer = Loadable(lazy(() => import('views/pages/master/store-server/index')));
// REPORT MASTER
const ReportMasterItem = Loadable(lazy(() => import('views/pages/report/master/item/index')));
// REPORT PURCHASE
const ReportPurchases = Loadable(lazy(() => import('views/pages/report/purchase/purchases')));
// REPORT SALES
const ReportSales = Loadable(lazy(() => import('views/pages/report/sale/sales')));

// ==============================|| MAIN ROUTING ||============================== //

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
            path: 'master/store-server',
            element: (
                <MidleWareAuth>
                    <MasterStoreServer />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/master/report-item',
            element: (
                <MidleWareAuth>
                    <ReportMasterItem />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/purchase/report-purchases',
            element: (
                <MidleWareAuth>
                    <ReportPurchases />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/sale/report-sales',
            element: (
                <MidleWareAuth>
                    <ReportSales />
                </MidleWareAuth>
            )
        }
    ]
};

export default MainRoutes;
