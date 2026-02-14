<script lang="ts">
	import type { PostMeta } from '$lib/utils/posts';
	import ArticleCard from '$lib/components/articles/ArticleCard.svelte';

	let { posts }: { posts: PostMeta[] } = $props();
</script>

<section class="bg-surface-light-alt py-20 dark:bg-surface-dark-alt">
	<div class="mx-auto max-w-6xl px-6">
		<h2 class="font-heading text-3xl font-bold text-gray-900 dark:text-gray-100">
			Featured Posts:
		</h2>

		<div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each posts.slice(0, 3) as post}
				<ArticleCard {post} />
			{/each}
		</div>
	</div>
</section>
