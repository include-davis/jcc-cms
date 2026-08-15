const { ContentType, FieldType } = require('@include/hearth');

const alumni = new ContentType({
  name: 'alumni',
  singularDisplayName: 'Alumni',
  pluralDisplayName: 'Alumni',
});

alumni
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'workplace',
    displayName: 'Workplace',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'testimony',
    displayName: 'Testimony',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'photo',
    displayName: 'Photo',
    type: FieldType.MEDIA_LIST,
    required: true,
  });

module.exports = alumni;
