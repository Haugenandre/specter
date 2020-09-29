export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f734a557c3592d09519cd5e',
                  title: 'Sanity Studio',
                  name: 'specter-studio',
                  apiId: '7c002d58-074c-49e4-be7a-b19b3508a1f4'
                },
                {
                  buildHookId: '5f734a55916792b8cde6aadd',
                  title: 'Landing pages Website',
                  name: 'specter',
                  apiId: 'bc3b837e-463b-454a-865c-dd2588e4f6fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Haugenandre/specter',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://specter.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
