const fs = require('fs')
const path = require('path')

// Define the navigation JSON
const navigation = [
  {
    type: 'category',
    name: 'Introduction',
    children: [
      {
        type: 'link',
        name: 'History',
        href: '/docs/history',
      },
      {
        type: 'link',
        name: 'Basics',
        href: '/docs/basics',
      },
    ],
  },
  {
    type: 'category',
    name: 'Solar System',
    children: [
      {
        type: 'folder',
        name: 'Planets',
        children: [
          {
            type: 'link',
            name: 'Earth',
            href: '/docs/solar-system/planets/earth',
          },
          {
            type: 'link',
            name: 'Mars',
            href: '/docs/solar-system/planets/mars',
          },
          {
            type: 'link',
            name: 'Jupiter',
            href: '/docs/solar-system/planets/jupiter',
          },
        ],
      },
      {
        type: 'folder',
        name: 'Moons',
        children: [
          {
            type: 'link',
            name: 'Europa',
            href: '/docs/solar-system/moons/europa',
          },
          {
            type: 'link',
            name: 'Titan',
            href: '/docs/solar-system/moons/titan',
          },
          {
            type: 'link',
            name: 'Io',
            href: '/docs/solar-system/moons/io',
          },
        ],
      },
      {
        type: 'link',
        name: 'Asteroids',
        href: '/docs/solar-system/asteroids',
      },
      {
        type: 'link',
        name: 'Comets',
        href: '/docs/solar-system/comets',
      },
    ],
  },
  {
    type: 'category',
    name: 'Deep Space',
    children: [
      {
        type: 'folder',
        name: 'Galaxies',
        children: [
          {
            type: 'link',
            name: 'Milky Way',
            href: '/docs/deep-space/galaxies/milky-way',
          },
          {
            type: 'link',
            name: 'Andromeda',
            href: '/docs/deep-space/galaxies/andromeda',
          },
          {
            type: 'link',
            name: 'Sombrero',
            href: '/docs/deep-space/galaxies/sombrero',
          },
        ],
      },
      {
        type: 'folder',
        name: 'Events',
        children: [
          {
            type: 'link',
            name: 'Black Holes',
            href: '/docs/deep-space/events/black-holes',
          },
          {
            type: 'link',
            name: 'Supernovas',
            href: '/docs/deep-space/events/supernovas',
          },
          {
            type: 'link',
            name: 'Dark Matter',
            href: '/docs/deep-space/events/dark-matter',
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    name: 'Missions',
    children: [
      {
        type: 'folder',
        name: 'Historic',
        children: [
          {
            type: 'link',
            name: 'Apollo 11',
            href: '/docs/missions/historic/apollo-11',
          },
          {
            type: 'link',
            name: 'Voyager 1',
            href: '/docs/missions/historic/voyager-1',
          },
          {
            type: 'link',
            name: 'Hubble',
            href: '/docs/missions/historic/hubble',
          },
        ],
      },
      {
        type: 'folder',
        name: 'Modern',
        children: [
          {
            type: 'link',
            name: 'James Webb',
            href: '/docs/missions/modern/james-webb',
          },
          {
            type: 'link',
            name: 'Mars Rovers',
            href: '/docs/missions/modern/mars-rovers',
          },
          {
            type: 'link',
            name: 'Artemis',
            href: '/docs/missions/modern/artemis',
          },
        ],
      },
    ],
  },
]
// Helper function to ensure a directory exists
function ensureDirectoryExistence(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// Helper function to process navigation and generate MDX files
function processNavigation(items, basePath = '.') {
  items.forEach((item) => {
    if (item.type === 'link') {
      // Convert the href to a file path
      const relativePath = item.href.replace(/^\/docs\//, '').replace(/\/$/, '') + '.mdx'
      const filePath = path.join(basePath, relativePath)

      // Ensure the directory exists
      ensureDirectoryExistence(filePath)

      // Write the file with the appropriate content
      const content = `# ${item.name}\n`
      fs.writeFileSync(filePath, content)
      console.log(`Created: ${filePath}`)
    } else if (item.type === 'category' || item.type === 'folder') {
      // Recursively process children
      processNavigation(item.children, basePath)
    }
  })
}

// Run the script
const outputDir = path.join(__dirname, 'content/docs') // Change 'output' to your desired output directory
processNavigation(navigation, outputDir)
