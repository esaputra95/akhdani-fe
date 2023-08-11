// assets
import { IconReportAnalytics, IconDeviceDesktopAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconReportAnalytics,
    IconDeviceDesktopAnalytics
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const masterMenu = {
    id: 'master-data',
    title: 'Data Master',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'User',
            type: 'item',
            url: '/master/users',
            icon: icons.IconReportAnalytics
        },
        {
            id: 'pocket-moneys',
            title: 'Uang Saku',
            type: 'item',
            url: '/master/pocket-moneys',
            icon: icons.IconDeviceDesktopAnalytics
        },
        {
            id: 'citys',
            title: 'Kota',
            type: 'item',
            url: '/master/citys',
            icon: icons.IconDeviceDesktopAnalytics
        }
    ]
};

export default masterMenu;
