const { ContentType, FieldType } = require('@include/hearth');

const historyYearPhotos = new ContentType({
  name: 'history_year_photos',
  singularDisplayName: 'History Year Photo',
  pluralDisplayName: 'History Year Photos',
});

historyYearPhotos
  .createField({
    name: 'year',
    displayName: 'Year',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  });

module.exports = historyYearPhotos;
