// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Bibliografia polska Stanisława Lema 1945-2000',
	siteUrl: 'https://lem.toc-editions.com',
	siteDescription: 'Aplikacja bibliograficzna dzieł Stanisława Lema',


	icon: {
		favicon: {
			src: './src/favicon.png',
			sizes: [16, 32, 96]
		},
		touchicon: {
			src: './src/favicon.png',
			sizes: [76, 152, 120, 167],
			precomposed: true
		}
	},

	// css: {
	// 	loaderOptions: {
	// 		scss: {
	// 			// options here will be passed to sass-loader
	// 		},
	// 		less: {
	// 			// options here will be passed to less-loader
	// 		}
	// 	}
	// },

	plugins: [
		{
			use: '@pienter/gridsome-source-directus',
			options: {
				url: 'https://lemadmin.toc-editions.com',
				project: 'lem-biblio',
				email: 'toc@toc-editions.com',
				password: 'Magoo#2k15',
				camelCase: false,
				shallowCamelCase: false,
				pascalTypes: false,
				routes: {
				},
			},
		},
		{
			use: 'gridsome-plugin-seo'
		},

		{
			use: '@gridsome/plugin-sitemap',
			options:
			{
				exclude: ['/exclude-me'],
				config:
				{
					'/*':
					{
						changefreq: 'weekly',
						priority: 0.5,
						lastmod: '2020-08-19',
					},
					'/':
					{
						changefreq: 'monthly',
						priority: 0.7,
						lastmod: '2020-05-12',
					}
				}
			}

		},

	]
}