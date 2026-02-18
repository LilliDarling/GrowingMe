<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { theme } from '$lib/store/theme';
</script>

<button
	onclick={() => theme.toggle()}
	class="rounded-full p-2 text-gray-600 transition-colors hover:bg-sage-100 dark:text-gray-400 dark:hover:bg-sage-800"
	aria-label="Toggle theme"
>
	{#if $theme === 'dark'}
		<Sun size={18} />
	{:else}
		<Moon size={18} />
	{/if}
</button>
