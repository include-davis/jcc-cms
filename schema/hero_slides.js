const { ContentType, FieldType } = require('@include/hearth');

const heroSlides = new ContentType({
  name: 'hero_slides',
  singularDisplayName: 'Hero Slide',
  pluralDisplayName: 'Hero Slides',
});

heroSlides
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'label',
    displayName: 'Label',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'subtitle',
    displayName: 'Subtitle',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'button_text',
    displayName: 'Button Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'button_link',
    displayName: 'Button Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'tags',
    displayName: 'Tags (comma-separated)',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = heroSlides;
