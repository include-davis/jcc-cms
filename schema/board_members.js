const { ContentType, FieldType } = require('@include/hearth');

const boardMembers = new ContentType({
  name: 'board_members',
  singularDisplayName: 'Board Member',
  pluralDisplayName: 'Board Members',
});

boardMembers
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'photo',
    displayName: 'Photo',
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
    name: 'email',
    displayName: 'Email',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = boardMembers;
