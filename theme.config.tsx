import React, { useState, useEffect } from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logo from './images/radical-logo.svg'
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span><img style={{ display: 'inline', marginRight: 12 }} src="https://radical.sh/radical-logo-image.png" height="42" width="42" />Radical</span>,
  logoLink: "https://radical.sh",
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  darkMode: false,
  search: {
    component: () => {
      return (
        <ul id="header-menu" className='no-float'>
          <li><a className='nav-link' href="https://radical.sh">Overview</a></li>
          <li><a className='nav-link' href="https://radical.sh#why">Why?</a></li>
          <li><a className='nav-link' href="https://radical.sh#features">Features</a></li>
          <li><a className='nav-link active' href="#">Documentation</a></li>
        </ul>)
    }
  },
  navbar: {
    component: () => {
      const config = useConfig()
      const d = config.search.component
      const [menuOpen, setIsMenuOpen] = useState(false)
      const router = useRouter()



      useEffect(() => {

        const handleRouteChange = (url) => {
          const asideElement = document.getElementsByTagName("aside")
          asideElement[0].className = "nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out md:nx-w-64 md:nx-sticky md:nx-self-start max-md:[transform:translate3d(0,-100%,0)]"
          setIsMenuOpen(false)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
          router.events.off('routeChangeStart', handleRouteChange)
        }
      }, [router])

      return (
        <>
          <script
            lang="javascript"
            dangerouslySetInnerHTML={{
              __html: `
      window.localStorage.setItem("theme", "light");
      window.localStorage.setItem("theme_default", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("light");
    `,
            }}
          /> <div id="header">
            <div id="header-logo">
              <Image
                src={logo}
                alt='Radical Logo'
                className="mt-2 radical-home-logo"
                style={{
                  width: 48,
                  height: 48,
                  display: 'inline',

                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
                  filter: 'brightness(1.1) saturate(0.7) hue-rotate(9deg)',
                  transition: 'transform 0.3s ease-out',

                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'rotate(10deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'rotate(0deg)';
                }}
              />
              <h1 className="d-inline ms-4 mt-2 fs-2 radical-home-header">Radical</h1>
            </div>
            <div>
              <ul id="header-menu" className='hide-on-xs'>
                <li><a className='nav-link' href="https://radical.sh">Overview</a></li>
                <li><a className='nav-link' href="https://radical.sh#why">Why?</a></li>
                <li><a className='nav-link' href="https://radical.sh#features">Features</a></li>
                <li><a className='nav-link active' href="#">Documentation</a></li>
                {/* <li id="search">
              {d({})}
            </li> */}
              </ul>
            </div>
            <div id="login-nav-button"><a href="http://radical.sh/dashboard">Sign In</a></div>
            <button onClick={() => {
              const asideElement = document.getElementsByTagName("aside")
              //asideElement[0].className = "nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out md:nx-w-64 md:nx-sticky md:nx-self-start max-md:[transform:translate3d(0,-100%,0)]"
              if (!menuOpen) {
                asideElement[0].className = "nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out md:nx-w-64 md:nx-sticky md:nx-self-start max-md:[transform:translate3d(0,0,0)]"
              }
              else {
                asideElement[0].className = "nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out md:nx-w-64 md:nx-sticky md:nx-self-start max-md:[transform:translate3d(0,-100%,0)]"
              }
              setIsMenuOpen(!menuOpen)
            }} type="button" aria-label="Menu" className="nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden"><svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className={menuOpen && "open"}><g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16"></path></g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"></path><g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16"></path></g></svg></button>
          </div>
        </>)

    }
  },
  feedback: {
    labels: "documentation",
    useLink: () => {
      const config = useConfig()
      return `https://github.com/radical-sh/public-docs/discussions/new?category=issues&labels=documentation&title=Documentation issue for ${config.title}`
    }
  },
  project: {
    link: 'https://radical.sh',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/radical-sh/public-docs/blob/main',
  footer: {
    text: 'Radical',
  },
}

export default config
