module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Components for Cardano',
      description: 'Documentation site for the Vue component library plugin'
    }
  },

  themeConfig: {
    repoLabel: 'Contribute!',
    // git repo here... gitlab, github
    repo: '',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Getting Started', link: '/' },
          { text: 'Components', link: '/components/' },
          // external link to git repo...again
          { text: 'GitHub', link: '' }
        ],
        sidebar: [
            {
              title: 'Components',
              collapsable: false,
              children: ['/components/NFTMakerButton']
            }
          ]
        
      }
    }
  }
}
