
  module.exports = {
    async up(db, client) {
      // delete step 

      // update step 

      // create step 
      await db.createCollection("home_slides", {
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
    },
    async down(db, client) {
      // delete step 

      // update step 
      
      // create step 
      await db.collection("home_slides").drop();    
    }
  };
  