/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	images: {
		unoptimized: true,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.pdf$|\.doc$|\.docx$|\.xls$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						publicPath: `assets/docs/`,
						name: '[name].[ext]',
					},
				},
			],
		});

		return config;
	},
};
