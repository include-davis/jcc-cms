const { ContentType, FieldType } = require('@include/hearth');

const siteSettings = new ContentType({
  name: 'site_settings',
  singularDisplayName: 'Site Setting',
  pluralDisplayName: 'Site Settings',
});

siteSettings
  .createField({
    name: 'logo',
    displayName: 'Logo',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'partnership_form_link',
    displayName: 'Partnership Form Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'join_form_link',
    displayName: 'Join Form Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'alumni_form_link',
    displayName: 'Alumni Form Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = siteSettings;
