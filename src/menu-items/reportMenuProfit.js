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

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const reportMenuProfit = {
    id: 'report-profit',
    title: 'Laporan Laba',
    type: 'group',
    children: [
        {
            id: 'report-profit',
            title: 'Laba Jual',
            type: 'item',
            url: '/report/report-master',
            icon: icons.IconReportAnalytics
        },
        {
            id: 'report-profit-analysis',
            title: 'Analisa Laba Jual',
            type: 'item',
            url: '/report/report-profit-analysis',
            icon: icons.IconDeviceDesktopAnalytics
        }
    ]
};

export default reportMenuProfit;
