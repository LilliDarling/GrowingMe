<script lang="ts">
	import Button from '../../../../app/src/lib/components/shared/Button.svelte';
</script>

<section
	class="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
	style="background-image: url('/images/hero-bg.jpg')"
>
	<!-- Dark overlay -->
	<div class="absolute inset-0 bg-black/50"></div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
		<h1 class="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
			Embrace The Journey: Everything starts from a seed.
		</h1>
		<p class="mx-auto mt-6 max-w-xl text-lg text-gray-200">
			Cultivating the existence I only ever dreamed of having in my career.
		</p>
		<div class="mt-8">
			<Button href="/articles" variant="primary">Latest Posts</Button>
		</div>
	</div>
</section>
