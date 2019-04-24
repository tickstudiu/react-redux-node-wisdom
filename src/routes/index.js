import App from '../pages/App';
import Herbs from '../pages/Herbs';
import Herb from '../pages/Herb';
import Drugs from '../pages/Drugs';
import AboutUs from '../pages/AboutUs';

import NotPage from '../pages/404';

import CreateHerb from '../pages/Create/herb';
import CreateActivity from '../pages/Create/activity';
import CreateDrug from '../pages/Create/drug';

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
        component: Public(Herb),
    },
    {
        name: 'activities',
        path: '/activities',
        component: Public(Herbs),
    },
    {
        name: 'activities',
        path: '/activities/page/:page',
        component: Public(Herbs),
    },
    {
        name: 'activity',
        path: '/activity/:id',
        component: Public(Herb),
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
        name: 'create herb',
        path: '/create/drug',
        component: Public(CreateDrug),
    },
    {
        name: 'create herb',
        path: '/create/activity',
        component: Public(CreateActivity),
    },
    {
        name: '404',
        path: '*',
        component: NotPage,
    },
];

export default indexRoutes;
