<script lang="ts">
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';

	let { size = 20 }: { size?: number } = $props();
</script>

<div class="flex items-center gap-4">
	<a
		href="https://facebook.com"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
		aria-label="Facebook"
	>
		<Facebook {size} />
	</a>
	<a
		href="https://instagram.com"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
		aria-label="Instagram"
	>
		<Instagram {size} />
	</a>
	<a
		href="https://twitter.com"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
		aria-label="Twitter"
	>
		<Twitter {size} />
	</a>
</div>
