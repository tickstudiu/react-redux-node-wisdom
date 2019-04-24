import App from '../pages/App';
import Herbs from '../pages/Herbs';
import Herb from '../pages/Herb';
import Drugs from '../pages/Drugs';
import Drug from '../pages/Drug';
import Activities from '../pages/Activities';
import Activity from '../pages/Activity';
import AboutUs from '../pages/AboutUs';

import NotPage from '../pages/404';

import CreateHerb from '../pages/Create/herb';
import CreateActivity from '../pages/Create/activity';
import CreateDrug from '../pages/Create/drug';

// import DeleteHerb from '../pages/Delete/herb';
// import DeleteActivity from '../pages/Delete/activity';
// import DeleteDrug from '../pages/Delete/drug';

import {Public} from '../HOC';

const indexRoutes = [
    {
        name: 'home',
        path: '/',
        component: Public(App),
    },
    {
        name: 'home',
        path: '/home',
        component: Public(App),
    },
    {
        name: 'herbs',
        path: '/herbs',
        component: Public(Herbs),
    },
    {
        name: 'herbs',
        path: '/herbs/page/:page',
        component: Public(Herbs),
    },
    {
        name: 'herb',
        path: '/herb/:id',
        component: Public(Herb),
    },
    {
        name: 'drugs',
        path: '/drugs',
        component: Public(Drugs),
    },
    {
        name: 'drugs',
        path: '/drugs/page/:page',
        component: Public(Drugs),
    },
    {
        name: 'drug',
        path: '/drug/:id',
        component: Public(Drug),
    },
    {
        name: 'activities',
        path: '/activities',
        component: Public(Activities),
    },
    {
        name: 'activities',
        path: '/activities/page/:page',
        component: Public(Activities),
    },
    {
        name: 'activity',
        path: '/activity/:id',
        component: Public(Activity),
    },
    {
        name: 'about',
        path: '/aboutUs',
        component: Public(AboutUs),
    },
    {
        name: 'create herb',
        path: '/create/herb',
        component: Public(CreateHerb),
    },
    {
        name: 'create drug',
        path: '/create/drug',
        component: Public(CreateDrug),
    },
    {
        name: 'create activity',
        path: '/create/activity',
        component: Public(CreateActivity),
    },
    // {
    //     name: 'delete herb',
    //     path: '/delete/herb',
    //     component: Public(DeleteHerb),
    // },
    // {
    //     name: 'delete drug',
    //     path: '/delete/drug',
    //     component: Public(DeleteDrug),
    // },
    // {
    //     name: 'delete activity',
    //     path: '/delete/activity',
    //     component: Public(DeleteActivity),
    // },
    {
        name: '404',
        path: '*',
        component: NotPage,
    },
];

export default indexRoutes;
