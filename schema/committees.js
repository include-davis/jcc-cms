const { ContentType, FieldType } = require('@include/hearth');

const committees = new ContentType({
  name: 'committees',
  singularDisplayName: 'Committee',
  pluralDisplayName: 'Committees',
});

committees
  .createField({
    name: 'key',
    displayName: 'Key',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'icon',
    displayName: 'Icon',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'page_img',
    displayName: 'Page Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = committees;
