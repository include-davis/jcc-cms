const { ContentType, FieldType } = require('@include/hearth');

const alumniHeroImages = new ContentType({
  name: 'alumni_hero_images',
  singularDisplayName: 'Alumni Hero Image',
  pluralDisplayName: 'Alumni Hero Images',
});

alumniHeroImages.createField({
  name: 'image',
  displayName: 'Image',
  type: FieldType.MEDIA_LIST,
  required: true,
});

module.exports = alumniHeroImages;
