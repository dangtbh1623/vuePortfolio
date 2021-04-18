import { createRouter, createWebHistory } from 'vue-router';
// import pages Management
import RequestReceived from './pages/management/RequestReceived';
import UserLogin from './pages/management/UserLogin';
import UserRegistration from './pages/management/UserRegistration';

// import pages members

import MemberDetail from './pages/membes/MemberDetail';
import MemberList from './pages/membes/MemberList';
import StartPage from './pages/membes/StartPage';

// import pages portfolio
import CreateCv from './pages/portfolio/CreateCv';
import EditCv from './pages/portfolio/EditCv';

// import page NotFound
import NotFound from './pages/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: StartPage },
        { path: '/members', component: MemberList },
        { path: '/members:id', component: MemberDetail },
        { path: '/createcv', component: CreateCv },
        { path: '/editcv', component: EditCv },
        { path: '/login', component: UserLogin },
        { path: '/registration', component: UserRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;