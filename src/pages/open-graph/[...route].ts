import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: 'route',

  // A collection of pages to generate images for.
  // The keys of this object are used to generate the path for that image.
  // In this example, we generate one image at `/open-graph/example.png`.
  pages: {
   '': {
     title: 'Home - Rizky Rafi',
     description: 'This is my Home page',
    },
    'work': {
      title: 'Work - Rizky Rafi',
      description: 'This is my Work page',
    },
    'about': {
      title: 'About - Rizky Rafi',
      description: 'This is my About page',
    },
  },

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
  }),
});