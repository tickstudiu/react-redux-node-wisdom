import App from '../pages/App';
import Herbs from '../pages/Herbs';
import Herb from '../pages/Herb'
import AboutUs from '../pages/AboutUs';
import NotPage from '../pages/404';
import Create from '../pages/Create';

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
        name: 'about',
        path: '/aboutUs',
        component: Public(AboutUs),
    },
    {
        name: 'herb',
        path: '/herb/:id',
        component: Public(Herb),
    },
    {
        name: 'herb',
        path: '/create',
        component: Public(Create),
    },
    {
        name: '404',
        path: '*',
        component: NotPage,
    },
];

export default indexRoutes;
