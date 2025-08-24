import type { Component } from 'svelte';

export type MarkdownPost = {
	metadata: {
		title: string;
		author: string;
		date: string;
		type: string;
		imgUrls: string[];
	};
	default: Component;
	slug: string;
};
