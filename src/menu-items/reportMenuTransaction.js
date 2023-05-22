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
    },
    {
        id: 'report-unit',
        title: 'Satuan',
        type: 'item',
        url: '/report/master/report-unit',
        breadcrumbs: false
    },
    {
        id: 'report-type',
        title: 'Jenis',
        type: 'item',
        url: '/report/master/report-type',
        breadcrumbs: false
    },
    {
        id: 'report-brand',
        title: 'Merek',
        type: 'item',
        url: '/report/master/report-brand',
        breadcrumbs: false
    },
    {
        id: 'report-member',
        title: 'Pelanggan',
        type: 'item',
        url: '/report/master/report-member',
        breadcrumbs: false
    },
    {
        id: 'report-supplier',
        title: 'Supplier',
        type: 'item',
        url: '/report/master/report-supplier',
        breadcrumbs: false
    }
];

// SUB MENU PURCASHASE
const subMenuPurchase = [
    {
        id: 'report-purchase-order',
        title: 'Pesanan Pembelian',
        type: 'item',
        url: '/report/purchase/report-purchase-order',
        breadcrumbs: false
    },
    {
        id: 'report-purchases',
        title: 'Pembelian',
        type: 'item',
        url: '/report/purchase/report-purchases',
        breadcrumbs: false
    },
    {
        id: 'report-purchase-returns',
        title: 'Retur Pembelian',
        type: 'item',
        url: '/report/purchase/report-purchase-returns',
        breadcrumbs: false
    },
    {
        id: 'report-purchase-peritems',
        title: 'Pembelian Peritem',
        type: 'item',
        url: '/report/purchase/report-purchase-peritems',
        breadcrumbs: false
    }
];

// SUB MENU SALE
const subMenuSale = [
    {
        id: 'report-sales-order',
        title: 'Pesanan Penjualan',
        type: 'item',
        url: '/report/sale/report-sales-order',
        breadcrumbs: false
    },
    {
        id: 'report-sales-order-peritem',
        title: 'Pesanan Penjualan Peritem',
        type: 'item',
        url: '/report/sale/report-sales-order-peritem',
        breadcrumbs: false
    },
    {
        id: 'report-sales',
        title: 'Penjualan',
        type: 'item',
        url: '/report/sale/report-sales',
        breadcrumbs: false
    },
    {
        id: 'report-sale-peritems',
        title: 'Penjualan Peritem',
        type: 'item',
        url: '/report/sale/report-sale-peritems',
        breadcrumbs: false
    },
    {
        id: 'report-sale-cashiers',
        title: 'Penjualan Kasir',
        type: 'item',
        url: '/report/sale/report-sale-cashiers',
        breadcrumbs: false
    },
    {
        id: 'report-sale-cashier-peritems',
        title: 'Penjualan Kasir Peritem',
        type: 'item',
        url: '/report/sale/report-sale-cashier-peritems',
        breadcrumbs: false
    },
    {
        id: 'report-sale-returns',
        title: 'Retur Penjualan',
        type: 'item',
        url: '/report/sale/report-sale-returns',
        breadcrumbs: false
    },
    {
        id: 'report-sale-return-peritems',
        title: 'Retur Penjualan Peritem ',
        type: 'item',
        url: '/report/sale/report-sale-return-peritems',
        breadcrumbs: false
    },
    {
        id: 'report-bast-seller',
        title: 'Penjualan Paling Laris',
        type: 'item',
        url: '/report/sale/report-best-seller',
        breadcrumbs: false
    }
];

// SUB MENU DEBT
const subMenuDebt = [
    {
        id: 'report-debt-outstanding',
        title: 'Utang Beredar',
        type: 'item',
        url: '/report/debt/report-debt-outstanding',
        breadcrumbs: false
    },
    {
        id: 'report-debt-outstanding-due',
        title: 'Utang Jatuh Tempo',
        type: 'item',
        url: '/report/debt/report-debt-outstanding-due',
        breadcrumbs: false
    },
    {
        id: 'report-debt-outstanding-persupplier',
        title: 'Utang Persupplier',
        type: 'item',
        url: '/report/debt/report-debt-outstanding-persupplier',
        breadcrumbs: false
    },
    {
        id: 'report-debt-payment',
        title: 'Pembayaran Utang',
        type: 'item',
        url: '/report/debt/report-debt-payment',
        breadcrumbs: false
    }
];

// SUB MENU RECEIVABLE
const subMenuReceivable = [
    {
        id: 'report-receivable-outstanding',
        title: 'Piutang Beredar',
        type: 'item',
        url: '/report/receivable/report-receivable-outstanding',
        breadcrumbs: false
    },
    {
        id: 'report-receivable-outstanding-due',
        title: 'Piutang Jatuh Tempo',
        type: 'item',
        url: '/report/receivable/report-receivable-outstanding-due',
        breadcrumbs: false
    },
    {
        id: 'report-receivable-outstanding-permember',
        title: 'Piutang Permember',
        type: 'item',
        url: '/report/receivable/report-receivable-outstanding-permember',
        breadcrumbs: false
    },
    {
        id: 'report-receivable-payment',
        title: 'Pembayaran Piutang',
        type: 'item',
        url: '/report/receivable/report-receivable-payment',
        breadcrumbs: false
    }
];

// SUB MENU SUPLY
const subMenuSupply = [
    {
        id: 'report-item-get-in',
        title: 'Item Masuk',
        type: 'item',
        url: '/report/supply/report-item-get-in',
        breadcrumbs: false
    },
    {
        id: 'report-item-out',
        title: 'Item Keluar',
        type: 'item',
        url: '/report/supply/report-item-out',
        breadcrumbs: false
    },
    {
        id: 'report-stock-opname',
        title: 'Stok Opname',
        type: 'item',
        url: '/report/supply/report-stock-opname',
        breadcrumbs: false
    },
    {
        id: 'report-item-beginning',
        title: 'Saldo Awal Item',
        type: 'item',
        url: '/report/supply/report-item-beginning',
        breadcrumbs: false
    },
    {
        id: 'report-item-transfer',
        title: 'Item Transfer',
        type: 'item',
        url: '/report/supply/report-item-transfer',
        breadcrumbs: false
    },
    {
        id: 'report-stock-card',
        title: 'Kartu Stok',
        type: 'item',
        url: '/report/supply/report-stock-card',
        breadcrumbs: false
    },
    {
        id: 'report-stock-mutation',
        title: 'Mutasi Stok',
        type: 'item',
        url: '/report/supply/report-stock-mutation',
        breadcrumbs: false
    },
    {
        id: 'report-expired-date',
        title: 'Expired Date',
        type: 'item',
        url: '/report/supply/report-expired-date',
        breadcrumbs: false
    },
    {
        id: 'report-stock',
        title: 'Stok',
        type: 'item',
        url: '/report/supply/report-stock',
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
        },
        {
            id: 'report-debt',
            title: 'Laporan Utang',
            type: 'collapse',
            url: '/report/report-debt',
            icon: icons.IconLogout,
            children: [...subMenuDebt]
        },
        {
            id: 'report-receivable',
            title: 'Laporan Piutang',
            type: 'collapse',
            url: '/report/report-receivable',
            icon: icons.IconLogin,
            children: [...subMenuReceivable]
        },
        {
            id: 'report-supply',
            title: 'Laporan Persediaan',
            type: 'collapse',
            url: '/report/report-supply',
            icon: icons.IconClipboardList,
            children: [...subMenuSupply]
        }
    ]
};

export default reportMenuTransaction;
