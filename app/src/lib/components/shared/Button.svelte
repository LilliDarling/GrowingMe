<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '',
		variant = 'primary',
		children
	}: {
		href?: string;
		variant?: 'primary' | 'secondary' | 'outline';
		children: Snippet;
	} = $props();

	const baseClasses =
		'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200';

	const variantClasses = {
		primary:
			'bg-sage-200 text-sage-900 hover:bg-sage-300 dark:bg-sage-700 dark:text-sage-100 dark:hover:bg-sage-600',
		secondary:
			'bg-brand text-white hover:bg-brand-light dark:bg-brand-light dark:hover:bg-brand',
		outline:
			'border-2 border-sage-300 text-sage-700 hover:bg-sage-50 dark:border-sage-600 dark:text-sage-300 dark:hover:bg-sage-900'
	};
</script>

{#if href}
	<a {href} class="{baseClasses} {variantClasses[variant]}">
		{@render children()}
	</a>
{:else}
	<button class="{baseClasses} {variantClasses[variant]}">
		{@render children()}
	</button>
{/if}
