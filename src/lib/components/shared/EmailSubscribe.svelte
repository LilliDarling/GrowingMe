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

<form onsubmit={handleSubmit} class="flex w-full max-w-md gap-2">
	{#if submitted}
		<p class="text-sm text-brand dark:text-sage-300">Thanks for subscribing!</p>
	{:else}
		<input
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			required
			class="flex-1 rounded-full border border-sage-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100 dark:placeholder:text-gray-500"
		/>
		<button
			type="submit"
			class="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-light"
		>
			Subscribe
		</button>
	{/if}
</form>
