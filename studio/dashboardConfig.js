export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604a4519bf3ebe1fe9e71dc7',
                  title: 'Sanity Studio',
                  name: 'car-subscriptions-studio',
                  apiId: '6ed947ba-95cf-4ae8-b1c4-590d64f7ee3a'
                },
                {
                  buildHookId: '604a4519b0fd7d21fa164064',
                  title: 'Blog Website',
                  name: 'car-subscriptions',
                  apiId: '008c9122-15ee-4a75-b458-69e8d3303705'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sprthompson/car-subscriptions',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://car-subscriptions.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
