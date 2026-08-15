const { ContentType, FieldType } = require('@include/hearth');

const historyYears = new ContentType({
  name: 'history_years',
  singularDisplayName: 'History Year',
  pluralDisplayName: 'History Years',
});

historyYears
  .createField({
    name: 'year',
    displayName: 'Year',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'timeline_image',
    displayName: 'Timeline Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = historyYears;
