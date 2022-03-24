const createArticle = (title, author, body, categories, status) => ({
  title,
  author,
  body,
  categories,
  status,
});

const articles = [
  createArticle(
    'article one',
    'karim',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'draft'
  ),
  createArticle(
    'article two',
    'michael',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'draft'
  ),
  createArticle(
    'article three',
    'marco',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'draft'
  ),
];

export default articles;
