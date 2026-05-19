const { ContentType, FieldType } = require('@include/hearth');

const events = new ContentType({
  name: 'events',
  singularDisplayName: 'Event',
  pluralDisplayName: 'Events',
});

events
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
  });

module.exports = events;
