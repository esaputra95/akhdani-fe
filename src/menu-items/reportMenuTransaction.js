// assets
import { IconReportAnalytics, IconDeviceDesktopAnalytics, IconShoppingCart, IconLogout, IconLogin, IconClipboardList } from '@tabler/icons';

// constant
const icons = {
    IconReportAnalytics,
    IconDeviceDesktopAnalytics,
    IconShoppingCart,
    IconLogout,
    IconLogin,
    IconClipboardList
};

// SUB MENU MASTER
const subMenuMaster = [
    {
        id: 'report-item',
        title: 'Item',
        type: 'item',
        url: '/report/master/report-item',
        breadcrumbs: false
    }
];

// SUB MENU PURCASHASE
const subMenuPurchase = [
    {
        id: 'report-purchases',
        title: 'Pembelian',
        type: 'item',
        url: '/report/purchase/report-purchases',
        breadcrumbs: false
    }
];

// SUB MENU SALE
const subMenuSale = [
    {
        id: 'report-sales',
        title: 'Penjualan',
        type: 'item',
        url: '/report/sale/report-sales',
        breadcrumbs: false
    }
];

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const reportMenuTransaction = {
    id: 'report-transaction',
    title: 'Laporan Transaksi',
    type: 'group',
    children: [
        {
            id: 'report-master',
            title: 'Laporan Master',
            type: 'collapse',
            url: '/report/report-master',
            icon: icons.IconReportAnalytics,
            children: [...subMenuMaster]
        },
        {
            id: 'report-purchases',
            title: 'Pembelian',
            type: 'collapse',
            url: '/utils/util-color',
            icon: icons.IconDeviceDesktopAnalytics,
            children: [...subMenuPurchase]
        },
        {
            id: 'report-sale',
            title: 'Laporan Penjualan',
            type: 'collapse',
            url: '/report/report-sale',
            icon: icons.IconShoppingCart,
            children: [...subMenuSale]
        }
    ]
};

export default reportMenuTransaction;
