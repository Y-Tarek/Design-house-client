import Vue from 'vue';
import Router from 'vue-router';

const Page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

Vue.use(Router);
const routes = [
    {path: '/', name: 'index', component: Page('index.vue')},
    {path: '/register', name: 'register', component: Page('auth/register.vue')},
    {path: '/login', name: 'login', component: Page('auth/login.vue')},
    {path: '/verification/verify/:id', name: 'verify', component: Page('auth/verification/verfication.vue')},
    {path: '/verification/resend', name: 'verification.resend', component: Page('auth/verification/resend.vue')},
    {path: '/password/email', name: 'password.email', component: Page('auth/password/reset-email.vue')},
    {path: '/password/reset/:token', name: 'password.reset', component: Page('auth/password/password-reset.vue')},
    {path: '/upload', name: 'designs.upload', component: Page('user/designs/create')},
    {path: '/designs/:id/edit', name: 'designs.edit', component: Page('user/designs/edit')},
    {path:'/settings',component: Page('user/settings/index.vue'), children:[
        {path:'', redirect:{name:'settings.dashboard'} },
        {
            path:'dashboard',
            name:'settings.dashboard',
            component:Page('user/settings/dashboard.vue')
        },
        {
            path:'profile',
            name:'settings.profile',
            component:Page('user/settings/profile.vue')
        },
        {
            path:'designs',
            name:'settings.designs',
            component:Page('user/settings/designs.vue')
        }
    ]}
];


 export function createRouter(){
     return new Router({
         routes,
         mode: 'history'
     });
 }