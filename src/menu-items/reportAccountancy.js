// assets
import {
    IconReportAnalytics,
    IconDeviceDesktopAnalytics,
    IconShoppingCart,
    IconLogout,
    IconLogin,
    IconClipboardList,
    IconCreditCard,
    IconFileText,
    IconBook,
    IconCoin
} from '@tabler/icons';

// constant
const icons = {
    IconReportAnalytics,
    IconDeviceDesktopAnalytics,
    IconShoppingCart,
    IconLogout,
    IconLogin,
    IconClipboardList,
    IconCreditCard,
    IconFileText,
    IconBook,
    IconCoin
};

// SUB MENU KAS
const subMenuCash = [
    {
        id: 'report-cash-in',
        title: 'Kas Masuk',
        type: 'item',
        url: '/report/accountancy/report-cash-in',
        breadcrumbs: false
    },
    {
        id: 'report-cash-out',
        title: 'Kas Keluar',
        type: 'item',
        url: '/report/accountancy/report-cash-out',
        breadcrumbs: false
    },
    {
        id: 'report-cash-transfer',
        title: 'Kas Transfer',
        type: 'item',
        url: '/report/accountancy/report-cash-transfer',
        breadcrumbs: false
    }
];

// SUB MENU JOURNAL
const subMenuJournal = [
    {
        id: 'report-list-journal',
        title: 'Daftar Jurnal',
        type: 'item',
        url: '/report/accountancy/report-list-journal',
        breadcrumbs: false
    },
    {
        id: 'report-journal-not-balance',
        title: 'Jurnal tidak Seimbang',
        type: 'item',
        url: '/report/accountancy/report-journal-not-balance',
        breadcrumbs: false
    }
];

//SUB MENU JOURNAL LEDGER
const subMenuLedger = [
    {
        id: 'report-ledger',
        title: 'Laporan Buku Besar',
        type: 'item',
        url: '/report/accountancy/report-ledger',
        breadcrumbs: false
    },
    {
        id: 'report-trial-balance',
        title: 'Neraca Saldo',
        type: 'item',
        url: '/report/accountancy/report-trial-balance',
        breadcrumbs: false
    },
    {
        id: 'report-sheet-balance',
        title: 'Neraca Lajur',
        type: 'item',
        url: '/report/accountancy/report-sheet-balance',
        breadcrumbs: false
    }
];

// SUB MENU FINANCIAL
const subMenuFinancial = [
    {
        id: 'report-balance',
        title: 'Neraca',
        type: 'item',
        url: '/report/accountancy/report-balance',
        breadcrumbs: false
    },
    {
        id: 'report-income-statement',
        title: 'Laba Rugi',
        type: 'item',
        url: '/report/accountancy/report-income-statement',
        breadcrumbs: false
    }
];

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const reportMenuAccountancy = {
    id: 'report-accountancy',
    title: 'Laporan Akuntansi',
    type: 'group',
    children: [
        {
            id: 'report-cash',
            title: 'Laporan Kas',
            type: 'collapse',
            url: '/report/report-cash',
            icon: icons.IconCreditCard,
            children: [...subMenuCash]
        },
        {
            id: 'report-journal',
            title: 'Laporan Jurnal',
            type: 'collapse',
            url: '/report/report-journal',
            icon: icons.IconFileText,
            children: [...subMenuJournal]
        },
        {
            id: 'report-ledger',
            title: 'Laporan Buku Besar',
            type: 'collapse',
            url: '/report/report-ledger',
            icon: icons.IconBook,
            children: [...subMenuLedger]
        },
        {
            id: 'report-financial',
            title: 'Laporan Keuangan',
            type: 'collapse',
            url: '/report/report-financial',
            icon: icons.IconCoin,
            children: [...subMenuFinancial]
        }
    ]
};

export default reportMenuAccountancy;
