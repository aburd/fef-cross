import header from './components/header';
import footer from './components/footer';

import index from './templates/index';
import templateName from './templates/template-name';
import crossImage from './templates/cross-image';

const global = {
  title: "Global Site Title",
  name: "Joey",
  dir: {
    images: "images/"
  },
  icons: {
    btnClose: "icon__btn-x.png"
  },
  components: {
    header,
    footer
  },
  views: {
    index,
    templateName,
    crossImage
  }
};

export default { global };
