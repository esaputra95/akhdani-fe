// assets
import { IconReportAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconReportAnalytics
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const ActivityMenu = {
    id: 'perdin',
    title: 'Aktivitas',
    type: 'group',
    children: [
        {
            id: 'perdin',
            title: 'Perjalan Dinas',
            type: 'item',
            url: '/activity/perdin',
            icon: icons.IconReportAnalytics
        }
    ]
};

export default ActivityMenu;
