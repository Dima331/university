'use strict';

const [source, desination] = ['./source/', './build/'];

module.exports = {
  paths: {
    source: {
      root: `${source}html/`,
      styles: `${source}styles/`,
      scripts: `${source}js/`,
      favicon: `${source}/favicon/`,
      images: {
        all: `${source}img/`,
        icons: `${source}img/icons/`,
        content: `${source}img/content/`
      },
      fonts: `${source}fonts/`
    },
    desination: {
      root: desination,
      styles: `${desination}css/`,
      scripts: `${desination}js/`,
      images: {
        all: `${desination}img/`,
        content: `${desination}img/content/`
      },
      fonts: `${desination}fonts/`
    },
    dist: './dist'
  }
};
