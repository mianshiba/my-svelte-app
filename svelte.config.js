/** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		target: '#svelte'
// 	}
// };

const sveltePreprocess = require('svelte-preprocess');
const pkg = require('./package.json');

// export default config;

module.exports = {
	  kit: {
          adapter: require('@sveltejs/adapter-static')(),
	  }
};
