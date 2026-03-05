import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'BS',
	favicon: 'favicon.ico',
	owner: 'Borja Saugar',
	profileImage: 'profile.jpeg',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/borjasa258',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/borjasaugar_/',
			icon: Instagram,
		} as SocialLink,
	],
};
