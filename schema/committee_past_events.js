const { ContentType, FieldType } = require('@include/hearth');

const committeePastEvents = new ContentType({
  name: 'committee_past_events',
  singularDisplayName: 'Committee Past Event Photo',
  pluralDisplayName: 'Committee Past Event Photos',
});

committeePastEvents
  .createField({
    name: 'committee_key',
    displayName: 'Committee Key',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'caption',
    displayName: 'Caption',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = committeePastEvents;
