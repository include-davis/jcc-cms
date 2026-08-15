const { ContentType, FieldType } = require('@include/hearth');

const partnershipsHeroImages = new ContentType({
  name: 'partnerships_hero_images',
  singularDisplayName: 'Partnerships Hero Image',
  pluralDisplayName: 'Partnerships Hero Images',
});

partnershipsHeroImages.createField({
  name: 'image',
  displayName: 'Image',
  type: FieldType.MEDIA_LIST,
  required: true,
});

module.exports = partnershipsHeroImages;
