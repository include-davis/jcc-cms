const { ContentType, FieldType } = require('@include/hearth');

const committeeMembers = new ContentType({
  name: 'committee_members',
  singularDisplayName: 'Committee Member',
  pluralDisplayName: 'Committee Members',
});

committeeMembers
  .createField({
    name: 'committee_key',
    displayName: 'Committee Key',
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
    name: 'photo',
    displayName: 'Photo',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'is_lead',
    displayName: 'Is Lead',
    type: FieldType.BOOLEAN,
    required: true,
  })
  .createField({
    name: 'role',
    displayName: 'Role',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'email',
    displayName: 'Email',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = committeeMembers;
