interface templateUrlData {
  title: string;
  urls: links[];
}

export default function templateUrls(): templateUrlData[] {
  return [
    {
      title: "General",
      urls: [
        {
          url: "https://www.youtube.com/",
          name: "youtube",
        },
        {
          url: "https://open.spotify.com/",
          name: "spotify",
        },
        {
          url: "https://discord.com/",
          name: "discord",
        },
        {
          url: "https://twitter.com/",
          name: "twitter",
        },
        {
          url: "https://www.linkedin.com/",
          name: "linkedin",
        },
      ],
    },
    {
      title: "Programming",
      urls: [
        {
          url: "https://www.github.com/",
          name: "github",
        },
        {
          url: "https://stackoverflow.com/",
          name: "stackoverflow",
        },
        {
          url: "https://codepen.io/",
          name: "codepen",
        },
        {
          url: "https://www.freecodecamp.org/",
          name: "freecodecamp",
        },
        {
          url: "https://vercel.com/",
          name: "vercel",
        },
      ],
    },

    {
      title: "Tools Dev",
      urls: [
        {
          url: "https://www.figma.com/",
          name: "figma",
        },
        {
          url: "https://excalidraw.com/",
          name: "excalidraw",
        },
        {
          url: "https://codeimage.dev/",
          name: "codeimage",
        },
        {
          url: "https://www.shell.how/",
          name: "shell",
        },
        {
          url: "https://ionic.io/ionicons",
          name: "ionicons",
        },
      ],
    },
    {
      title: "Documentation",
      urls: [
        {
          url: "https://developer.mozilla.org/",
          name: "mdn",
        },
        {
          url: "https://css-tricks.com/",
          name: "css-tricks",
        },
        {
          url: "https://reactjs.org/",
          name: "react",
        },
        {
          url: "https://nodejs.org/en/",
          name: "node",
        },
        {
          url: "https://nextjs.org/",
          name: "next",
        },
      ],
    },
  ];
}
