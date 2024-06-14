import quranWeb from '../assets/Quran-Web.png'
import noter from '../assets/Noter.png'
import bookshelf from '../assets/Bookshelf.png'
import spense from '../assets/Spense.png'
import pong from '../assets/Pong.png'

const PROJECTS: {
  name: string
  description: string
  previewImage: ImageMetadata
  repoUrl: string
  liveLink: string
}[] = [
  {
    name: 'Quran Web',
    description: 'Lorem ipsum dolor sit amet',
    liveLink: 'https://quran.rizkyrafi.id/',
    previewImage: quranWeb,
    repoUrl: 'https://github.com/rizkraf/quran-web',
  },
  {
    name: 'Noter',
    description: 'Lorem ipsum dolor sit amet',
    liveLink: 'https://noter.rizkyrafi.id/',
    previewImage: noter,
    repoUrl: 'https://github.com/rizkraf/noter',
  },
  {
    name: 'Bookshelf',
    description: 'Lorem ipsum dolor sit amet',
    liveLink: 'https://bookshelf-website.netlify.app/',
    previewImage: bookshelf,
    repoUrl: 'https://github.com/rizkraf/bookshelf-apps',
  },
  {
    name: 'Spense',
    description: 'Lorem ipsum dolor sit amet',
    liveLink: 'https://spense-web.netlify.app/',
    previewImage: spense,
    repoUrl: 'https://github.com/rizkraf/spense',
    },
    {
      name: 'Pong Game',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: '/',
      previewImage: pong,
      repoUrl: 'https://github.com/rizkraf/Rizky_Rafi_Azhara-Pong',
    },
]

export default PROJECTS