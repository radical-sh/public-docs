import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><img style={{display:'inline',marginRight:12}} src="https://radical.sh/radical-logo-image.png" height="42" width="42" />Radical</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/radical-sh/public-docs',
  footer: {
    text: 'Radical',
  },
}

export default config
