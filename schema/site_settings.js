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
    name: 'apply_form_link',
    displayName: 'Apply Form Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = siteSettings;
