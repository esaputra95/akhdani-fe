import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MidleWareAuth from './MidlewareAuth';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
// MASTER
const MasterStoreServer = Loadable(lazy(() => import('views/pages/master/store-server/index')));
// REPORT MASTER
const ReportMasterItem = Loadable(lazy(() => import('views/pages/report/master/item/index')));
const ReportMasterUnit = Loadable(lazy(() => import('views/pages/report/master/unit')));
const ReportMasterType = Loadable(lazy(() => import('views/pages/report/master/type')));
const ReportMasterBrand = Loadable(lazy(() => import('views/pages/report/master/brand')));
const ReportMasterMember = Loadable(lazy(() => import('views/pages/report/master/member')));
const ReportMasterSupplier = Loadable(lazy(() => import('views/pages/report/master/supplier')));
// REPORT PURCHASE
const ReportPurchaseOrders = Loadable(lazy(() => import('views/pages/report/purchase/purchaseOrders')));
const ReportPurchases = Loadable(lazy(() => import('views/pages/report/purchase/purchases')));
const ReportPurchaseReturns = Loadable(lazy(() => import('views/pages/report/purchase/purchasesReturns')));
const ReportPurchasePerItems = Loadable(lazy(() => import('views/pages/report/purchase/purchasePerItems')));
// REPORT SALES
const ReportSalesOrders = Loadable(lazy(() => import('views/pages/report/sale/salesOrders')));
const ReportSalesOrderPerItems = Loadable(lazy(() => import('views/pages/report/sale/salesOrderPerItems')));
const ReportSales = Loadable(lazy(() => import('views/pages/report/sale/sales')));
const ReportSalePerItems = Loadable(lazy(() => import('views/pages/report/sale/salesPerItems')));
const ReportSaleCashiers = Loadable(lazy(() => import('views/pages/report/sale/salesCashiers')));
const ReportSaleCashierPerItems = Loadable(lazy(() => import('views/pages/report/sale/salesCashierPerItems')));
const ReportSaleReturns = Loadable(lazy(() => import('views/pages/report/sale/salesReturns')));
const ReportSaleReturnsPerItems = Loadable(lazy(() => import('views/pages/report/sale/salesReturnPerItems')));

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
            path: 'report/master/report-unit',
            element: (
                <MidleWareAuth>
                    <ReportMasterUnit />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/master/report-type',
            element: (
                <MidleWareAuth>
                    <ReportMasterType />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/master/report-brand',
            element: (
                <MidleWareAuth>
                    <ReportMasterBrand />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/master/report-member',
            element: (
                <MidleWareAuth>
                    <ReportMasterMember />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/master/report-supplier',
            element: (
                <MidleWareAuth>
                    <ReportMasterSupplier />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/purchase/report-purchase-order',
            element: (
                <MidleWareAuth>
                    <ReportPurchaseOrders />
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
            path: 'report/purchase/report-purchase-returns',
            element: (
                <MidleWareAuth>
                    <ReportPurchaseReturns />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/purchase/report-purchase-peritems',
            element: (
                <MidleWareAuth>
                    <ReportPurchasePerItems />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/sale/report-sales-order',
            element: (
                <MidleWareAuth>
                    <ReportSalesOrders />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/sale/report-sales-order-peritem',
            element: (
                <MidleWareAuth>
                    <ReportSalesOrderPerItems />
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
        },
        {
            path: 'report/sale/report-sale-peritems',
            element: (
                <MidleWareAuth>
                    <ReportSalePerItems />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/sale/report-sale-cashiers',
            element: (
                <MidleWareAuth>
                    <ReportSaleCashiers />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/sale/report-sale-cashier-peritems',
            element: (
                <MidleWareAuth>
                    <ReportSaleCashierPerItems />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/sale/report-sale-returns',
            element: (
                <MidleWareAuth>
                    <ReportSaleReturns />
                </MidleWareAuth>
            )
        },
        {
            path: 'report/sale/report-sale-return-peritems',
            element: (
                <MidleWareAuth>
                    <ReportSaleReturnsPerItems />
                </MidleWareAuth>
            )
        }
    ]
};

export default MainRoutes;
