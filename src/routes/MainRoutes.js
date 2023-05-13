import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const ReportMasterItem = Loadable(lazy(() => import('views/pages/report/master/item/index')));
const ReportMasterUnit = Loadable(lazy(() => import('views/pages/report/master/unit')));
const ReportMasterType = Loadable(lazy(() => import('views/pages/report/master/type')));
const ReportMasterBrand = Loadable(lazy(() => import('views/pages/report/master/brand')));
const ReportMasterMember = Loadable(lazy(() => import('views/pages/report/master/member')));
const ReportMasterSupplier = Loadable(lazy(() => import('views/pages/report/master/supplier')));
const MasterStoreServer = Loadable(lazy(() => import('views/pages/master/store-server/index')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'master',
            children: [
                {
                    path: 'store-server',
                    element: <MasterStoreServer />
                }
            ]
        },
        {
            path: 'report',
            children: [
                {
                    path: 'master',
                    children: [
                        {
                            path: 'report-item',
                            element: <ReportMasterItem />
                        },
                        {
                            path: 'report-unit',
                            element: <ReportMasterUnit />
                        },
                        {
                            path: 'report-type',
                            element: <ReportMasterType />
                        },
                        {
                            path: 'report-brand',
                            element: <ReportMasterBrand />
                        },
                        {
                            path: 'report-member',
                            element: <ReportMasterMember />
                        },
                        {
                            path: 'report-supplier',
                            element: <ReportMasterSupplier />
                        }
                    ]
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
