import Work from '@/views/Work';
import About from '@/views/About';
import Contact from '@/views/Contact';

const routes = [
	{
		path: '/',
		name: 'Work',
		component: Work
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact
	}
];

export default routes;
