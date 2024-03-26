import { Config } from './src/lib/config.types';

export const config: Config = {
  themeColor: "#5789f6",
  logoURL: "/images/logo.png",
  site: {
    url: "https://www.skvad.eu/",
    title: "SKVAD Community",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Marketing Banner for OuterHeavenDayZ Community",
        },
      ],
    },
  },
  pages: {
    home: {
      title: "Home | Outer Heaven DayZ Community",
      description: "Willkommen in der Outer Heaven DayZ Community! Welcome to the Outer Heaven DayZ Community. Join us today!",
      sections: {
        network: {
          title: "Server Network",
          description: "Unser DayZ Server wird über das Frankfurter Rechenzentrum, eines der besten in Europa, gehostet und gewartet.",
        },
        about: {
          title: "Über uns",
          description: "We are a community of DayZ players who are passionate about the game and the experiences it provides. We strive to provide a safe and enjoyable environment for all players.",
          rows: {
            1: {
              title: "Events",
              description: "We host regular events and competitions for our players to participate in. These events are a great way to meet new people and have fun in the game.",
              image: {
                url: "/images/about/events.jpg",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description: "We believe that a strong community is the key to a successful server. We work hard to foster a positive and inclusive community for all players.",
              image: {
                url: "/images/about/community.jpg",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description: "Unser Entwicklerteam ist stetig bemüht, Neuerungen in das Spiel zu bringen und die Serverperformance zu verbessern, um ein angenehmes Spielerumfeld zu entwickeln.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        leaderboard: {
          title: "Leaderboard",
          description: "Schau auf unser Leaderboard und vergleiche die Besten der Besten! Schaffst du es in die oberen Reihen?",
        },
        contact: {
          title: "Kontaktiere Uns",
          description: "Bei allen Anliegen, kontaktiere uns gerne über unseren Discord Server oder schreibe uns eine Email. 👇",
          links: {
            'Discord': "https://discord.gg/QZY35qTUjD",
            'Email': "mailto:info@outerheaven.de",
          },
        },
      },
    },
  },
  hero: {
    title: "We listen, we learn, we deliver.",
    description: "Our DayZ Community is built on the principles of transparency, integrity, and trust. We are committed to providing the best experience for our players. Wether you are a seasoned veteran or a new player, we have a place for you.",
    background: {
      color: 'rgb(51 65 85)',
      image: {
        url: "/images/hero.jpg",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Trete uns noch heute bei!",
      href: "https://discord.gg/QZY35qTUjD",
    },
  },
  servers: [
    {
      name: 'Outer Heaven Dayz [GER]',
      ipv4: '194.26.183.212',
      gamePort: 2402,
      steamQueryPort: 24016,
      cftoolsApiId: '7732f152-3b6b-4da5-9356-b43ebfef2012',
    },
  ],
  cftools: {
    leaderboard: {
      enabled: true,
      defaultSortValue: 'kills',
      allowedSortValues: ['kills', 'deaths', 'kdratio', 'longest_kill', 'longest_shot', 'playtime', 'suicides'],
      blacklistedCFToolsIds: [],
      showAmount: 100,
    },
  },
  footer: {
    trademarkNotice: "The DayZ logo is a registered trademark of Bohemia Interactive a.s. Outer Heaven DayZ is not affiliated with Bohemia Interactive a.s. or DayZ. All other trademarks are the property of their respective owners.",
    brandingName: "OuterHeavenDayZ",
    brandingURL: '/',
    initialCopyrightYear: 2021,
    copyrightBrandName: "OuterHeavenDayZ",
    copyrightBrandUrl: '/',
    links: [
      {
        url: '#',
        label: 'About',
      },
      {
        url: '#',
        label: 'Meet the Team',
      },
      {
        url: '#',
        label: 'Campaigns',
      },
      {
        url: '#',
        label: 'Blog',
      },
      {
        url: '#',
        label: 'Affiliate Program',
      },
      {
        url: '#',
        label: 'FAQs',
      },
      {
        url: '#',
        label: 'Contact',
      },
    ],
  },
};
