const { ContentType, FieldType } = require('@include/hearth');

const partnerships = new ContentType({
  name: 'partnerships',
  singularDisplayName: 'Partnership',
  pluralDisplayName: 'Partnerships',
});

partnerships
  .createField({
    name: 'main_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'website_link',
    displayName: 'Website Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = partnerships;
