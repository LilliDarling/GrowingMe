import type { PageServerLoad } from './$types';
import { getAllPosts, getFeaturedPosts } from '$lib/utils/posts';

export const load: PageServerLoad = async () => {
	const featuredPosts = getFeaturedPosts();
	const recentPosts = getAllPosts().slice(0, 6);

	return {
		featuredPosts,
		recentPosts
	};
};
