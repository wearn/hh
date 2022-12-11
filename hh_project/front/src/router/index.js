import {createRouter, createWebHistory} from 'vue-router';

import MainPage from '@/pages/mainPage/indexMain.vue';
import SearchPage from '@/pages/searchPage/indexMain.vue';
import ListPage from '@/pages/PageList/ListPage.vue';
import ProfileList from '@/pages/profile/profileMain.vue'
const routes = [
	{
		path: '/home',
		name: 'Home Page',
		component: MainPage,
	},
	{
		path: '/search',
		name: 'Search Page',
		component: SearchPage,
	},
	{
		path: '/List',
		name: 'List Page',
		component: ListPage,
	},
	{
		path: '/Profile',
		name: 'Profile List',
		component: ProfileList,
	},
	{
		path: '/:catchAll(.*)*',
		redirect: { name: 'Home Page' }
	},
]

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

export default router;
