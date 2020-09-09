// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');
const slugify = require('slugify');
slugify.extend({ '_': '-' });
// slugify('some string', {
// 	replacement: '-',  // replace spaces with replacement character, defaults to `-`
// 	remove: undefined, // remove characters that match regex, defaults to `undefined`
// 	lower: false,      // convert to lower case, defaults to `false`
// 	strict: false,     // strip special characters except replacement, defaults to `false`
// 	locale: 'vi'       // language code of the locale to use
// })


module.exports = function (api) {
	try {
		api.loadSource(async actions => {
			const { data } = await axios.get('https://lemadmin.toc-editions.com/lem-biblio/collections')
			const collection = actions.addCollection('LemColls')
			let count = 1;
			for (item of data.data) {
				if (item.managed) {
					var slink = slugify(item.collection, { lower: true, strict: false });

					collection.addNode({
						id: count,
						title: item.collection,
						managed: item.managed,
						translation: item.translation,
						note: item.note,
						link: slink,
					})
					count++;
				}
			}
		})
	} catch (error) {
		console.log(error)
	}

	module.exports = function (api) {
		api.loadSource(async store => {
			store.addMetadata('info', 'Lem - Biblografia')
		})
	}


	api.loadSource(({ addCollection }) => {
		// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	// api.createPages(async ({ graphql, createPage }) => {
	// 	const { data } = await graphql(`{
	//   allDzielaLema {
	//     edges {
	//       node {
	//         id
	// 		slug
	// 		title
	// 		description
	// 		tabele
	//       }
	//     }
	//   }
	// }`)

	// 	data.allDzielaLema.edges.forEach(({ node }) => {
	// 		createPage({
	// 			path: `/dziela_lema/${node.id}`,
	// 			component: './src/templates/Collection.vue',
	// 			context: {
	// 				id: node.id,
	// 				tabela: node.tabele,
	// 				title: node.title
	// 			},
	// 			queryVariables: {
	// 				id: node.id,
	// 				tabela: node.tabele
	// 			},

	// 		})
	// 	})
	// })
}


