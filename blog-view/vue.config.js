const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	// publicPath: '/blog',
	outputDir: 'blog',
	assetsDir: 'static',
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'api': '@/api',
				'views': '@/views',
				'plugins': '@/plugins'
			}
		}
	},
	configureWebpack: config => {
		if (isProduction) {
			// 开启gzip压缩
			config.plugins.push(new CompressionWebpackPlugin({
			algorithm: 'gzip',
			test: /\.js$|\.html$|\.json$|\.css/,
			threshold: 10240,
			minRatio: 0.8
			}));
			// 开启分离js
			config.optimization = {
				runtimeChunk: 'single',
				splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 20000,
				cacheGroups: {
					vendor: {
					test: /[\\/]node_modules[\\/]/,
					name (module) {
						// get the name. E.g. node_modules/packageName/not/this/part.js
						// or node_modules/packageName
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
						// npm package names are URL-safe, but some servers don't like @ symbols
						return `npm.${packageName.replace('@', '')}`
					}
					}
				}
				}
			}
		
		}
	}
}