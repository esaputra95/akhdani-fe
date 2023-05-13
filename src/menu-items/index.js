import dashboard from './dashboard';
import reportMenuTransaction from './reportMenuTransaction';
// import other from './other';
import reportMenuProfit from './reportMenuProfit';
import reportMenuAccountancy from './reportAccountancy';
import masterMenu from './master';

// ======================s========|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, masterMenu, reportMenuTransaction, reportMenuProfit, reportMenuAccountancy]
};

export default menuItems;
