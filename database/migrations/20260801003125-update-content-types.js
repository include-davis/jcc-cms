
  module.exports = {
    async up(db, client) {
      // delete step 

      // update step 

      // create step 
      await db.createCollection("alumni", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "name",
              "workplace",
              "testimony",
              "photo"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "workplace": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "testimony": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "photo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              }
            }
          }
        }
      });
      await db.createCollection("committee_past_events", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "committee_key",
              "image"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "committee_key": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "image": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "caption": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      await db.createCollection("committees", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "key",
              "name",
              "icon",
              "page_img",
              "description"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "key": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "icon": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "page_img": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "description": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      await db.createCollection("hero_slides", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "image",
              "label",
              "title",
              "subtitle",
              "button_text",
              "button_link"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "image": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "label": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "title": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "subtitle": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "button_text": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "button_link": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "tags": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      await db.createCollection("history_year_photos", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "year",
              "image"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "year": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "image": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              }
            }
          }
        }
      });
      await db.createCollection("history_years", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "year",
              "timeline_image",
              "description"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "year": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "timeline_image": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "description": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      await db.createCollection("partnerships", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "main_image",
              "title",
              "description",
              "website_link"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "main_image": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "title": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "description": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "website_link": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      await db.createCollection("site_settings", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "logo",
              "apply_form_link"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "logo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "apply_form_link": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
    },
    async down(db, client) {
      // delete step 

      // update step 
      
      // create step 
      await db.collection("alumni").drop();
      await db.collection("committee_past_events").drop();
      await db.collection("committees").drop();
      await db.collection("hero_slides").drop();
      await db.collection("history_year_photos").drop();
      await db.collection("history_years").drop();
      await db.collection("partnerships").drop();
      await db.collection("site_settings").drop();    
    }
  };
  