
  module.exports = {
    async up(db, client) {
      // delete step 

      // update step 

      // create step 
      await db.createCollection("alumni_hero_images", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
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
      await db.createCollection("board_members", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "name",
              "photo",
              "title",
              "email"
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
              "photo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "title": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "email": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      await db.createCollection("committee_members", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "committee_key",
              "name",
              "photo",
              "is_lead"
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
              "name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "photo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "is_lead": {
                "bsonType": "bool"
              },
              "role": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "email": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      await db.createCollection("history_hero_images", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
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
      await db.createCollection("partnerships_hero_images", {
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
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
    },
    async down(db, client) {
      // delete step 

      // update step 
      
      // create step 
      await db.collection("alumni_hero_images").drop();
      await db.collection("board_members").drop();
      await db.collection("committee_members").drop();
      await db.collection("history_hero_images").drop();
      await db.collection("partnerships_hero_images").drop();    
    }
  };
  