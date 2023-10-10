import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <a href="https://radical.sh/"><img style={{display:'inline',marginRight:12}} src="https://radical.sh/radical-logo-image.png" height="42" width="42" />Radical</a>,
  logoLink: "https://radical.sh",
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
