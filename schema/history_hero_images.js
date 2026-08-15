const { ContentType, FieldType } = require('@include/hearth');

const historyHeroImages = new ContentType({
  name: 'history_hero_images',
  singularDisplayName: 'History Hero Image',
  pluralDisplayName: 'History Hero Images',
});

historyHeroImages.createField({
  name: 'image',
  displayName: 'Image',
  type: FieldType.MEDIA_LIST,
  required: true,
});

module.exports = historyHeroImages;
