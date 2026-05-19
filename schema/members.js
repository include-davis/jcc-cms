const { ContentType, FieldType } = require('@include/hearth');

const members = new ContentType({
  name: 'members',
  singularDisplayName: 'Member',
  pluralDisplayName: 'Members',
});

members
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'name',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'position',
    displayName: 'Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = members;
