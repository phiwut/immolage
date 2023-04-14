import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: adapter({ out: 'build' }),
    files: {
      routes: 'src/routes',
    },
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
