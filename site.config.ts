import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd168745d726c4f6ab6e2a1bf0123b9e2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Smars Hu',
  domain: 'Smars',
  author: 'Smars Hu',

  // open graph metadata (optional)
  description: 'Smars the developer, also loves hitting the gym, hiking, videomaking, hip-hop dancing, and minimalism.',

  // social usernames (optional)
  //   twitter: '',
  github: 'Smars-Bin-Hu',
  linkedin: 'smars-hu',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/@smars_hu', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://img.notionusercontent.com/s3/prod-files-secure%2F4bdda44f-c641-4a80-b8d2-3a790ab9f591%2F8b5b5aa9-b9d1-451a-84f0-94153c00e7f3%2FScreenshot_2025-02-15_at_15.02.30.jpg/size/w=250?exp=1739771324&sig=2PADVfIelKqansz_Wbtk3yc3yB159J5IfhLEtiDpXgw',
  defaultPageCover: 'https://images.unsplash.com/photo-1622110356047-dae9d6b0eeab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
//   pageUrlOverrides: {
//     '/about': 'fa148d4a8b184a6ba8edc6b4540b467b',
//     '/contact': '294e1468b6824f2698126400a75cd39a'
//   },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'fa148d4a8b184a6ba8edc6b4540b467b'
    },
    {
      title: 'Contact',
      pageId: '294e1468b6824f2698126400a75cd39a'
    }
  ]
})