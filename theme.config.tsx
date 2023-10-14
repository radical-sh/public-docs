import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><img style={{display:'inline',marginRight:12}} src="https://radical.sh/radical-logo-image.png" height="42" width="42" />Radical</span>,
  logoLink: "https://radical.sh",
  sidebar:{
    defaultMenuCollapseLevel: 1
  },
  feedback:{
    labels: "documentation",
    useLink: ()=>{
      const config = useConfig()
      return `https://github.com/radical-sh/public-docs/discussions/new?category=issues&labels=documentation&title=Documentation issue for ${config.title}`
    }
  },
  // project: {
  //   link: 'https://radical.sh',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/radical-sh/public-docs/blob/main',
  footer: {
    text: 'Radical',
  },
}

export default config
