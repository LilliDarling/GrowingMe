<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Footer from '$lib/components/layout/Footer.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Footer',
    component: Footer,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    }
  });
</script>

<Story name="Footer" />