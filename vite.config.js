import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		mode,
		base: '/',
		root: './src',
		publicDir: './public',
		resolve: {
			extensions: ['.ts', '.tsx'],
		},
		plugins: [
			tsConfigPaths(),
			react(),
		],
		css: {
			modules: {
				localsConvention: 'camelCaseOnly',
			},
		},
		define: {
			'NODE_ENV': JSON.stringify(mode),
			'API_URL': JSON.stringify(env.API_URL),
		},
	};
});
