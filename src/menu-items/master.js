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

const masterMenu = {
    id: 'master-data',
    title: 'Data Master',
    type: 'group',
    children: [
        {
            id: 'store',
            title: 'Toko',
            type: 'item',
            url: '/master/store-server',
            icon: icons.IconReportAnalytics
        }
    ]
};

export default masterMenu;
