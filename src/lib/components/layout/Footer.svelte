<script lang="ts">
	import SocialLinks from '$lib/components/shared/SocialLinks.svelte';
	import EmailSubscribe from '$lib/components/shared/EmailSubscribe.svelte';
</script>

<footer class="bg-surface-light-alt dark:bg-surface-dark-alt">
	<div class="mx-auto max-w-6xl px-6 py-12">
		<!-- Top section: Logo + Nav -->
		<div class="flex flex-col items-center gap-8 md:flex-row md:justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3">
				<img src="/images/logo-leaf.png" alt="Growing Me logo" class="h-10 w-10 rounded-full" />
				<span class="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100"
					>Growing Me</span
				>
			</a>

			<!-- Nav links -->
			<nav>
				<ul class="flex items-center gap-6">
					<li>
						<a
							href="/"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>Home</a
						>
					</li>
					<li>
						<a
							href="/about"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>About</a
						>
					</li>
					<li>
						<a
							href="/articles"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>Articles</a
						>
					</li>
					<li>
						<a
							href="/podcast"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>Podcast</a
						>
					</li>
					<li>
						<a
							href="/contact"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>Contact</a
						>
					</li>
				</ul>
			</nav>
		</div>

		<!-- Green divider -->
		<div class="my-8 h-[2px] bg-brand"></div>

		<!-- Subscribe section -->
		<div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
			<div>
				<h3 class="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
					Stay Updated
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
					Subscribe for the latest articles and updates.
				</p>
			</div>
			<EmailSubscribe />
		</div>

		<!-- Bottom: Social + Copyright -->
		<div
			class="mt-8 flex flex-col items-center gap-4 border-t border-sage-200 pt-8 md:flex-row md:justify-between dark:border-sage-700"
		>
			<SocialLinks size={18} />
			<p class="text-xs text-gray-500 dark:text-gray-500">
				&copy; {new Date().getFullYear()} Growing Me. All rights reserved.
			</p>
		</div>
	</div>
</footer>
