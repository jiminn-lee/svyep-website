import type { MarkdownPost } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('api/articles');
	const articles: Omit<MarkdownPost, 'default'>[] = await res.json();

	return { articles };
};
