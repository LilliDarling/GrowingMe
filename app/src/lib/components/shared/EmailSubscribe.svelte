<script lang="ts">
	let email = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (email) {
			submitted = true;
			email = '';
		}
	}
</script>

<form onsubmit={handleSubmit} class="relative">
	{#if submitted}
		<p class="text-sm text-brand dark:text-sage-300">Thanks for subscribing!</p>
	{:else}
		<div class="relative flex items-center">
			<input
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				required
				class="w-full rounded-full border border-sage-300 bg-white py-2 pl-4 pr-28 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100 dark:placeholder:text-gray-500"
			/>
			<button
				type="submit"
				class="absolute right-1 z-20 rounded-full bg-brand px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
			>
				Subscribe
			</button>
		</div>
	{/if}
</form>
