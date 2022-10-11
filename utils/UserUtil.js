const { query } = require("express");
const { ObjectId } = require("mongodb");
const client = require("../db/client");

module.exports = class UsersUtil {
  static async create(userData) {
    try {
      const collection = client.db("NotesDB").collection("Quebec");

      const doc = {
        content: userData
      }

      const response = await collection.insertOne(userData);

      if (!response) throw new Error("Error saving user");

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async readDB() {
    try {
      const collection = client.db("NotesDB").collection("Quebec");

      something = await collection.find().sort({_id: -1}).toArray();

      return something[0];
    } catch (err) {
      console.error("Nothing Found");
      return "No Entries";
    }
  }

  static async updateOne(userData) {
    try {
      const collection = client.db("NotesDB").collection("Quebec");


      const response = await collection.updateOne({_id: -1}, {"name": "ffrank"});

//      const response = await collection.updateMany({Random: userData.Old},{$set:{Random: userData.New}}); 
// something = await collection.find().sort({_id: -1}).toArray();

      if (!response) throw new Error("Error deleting user");

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async deleteEntry(userData) {
    try {
      // Connect to a collection using the client connection object created in ../db/client.js
      const collection = client.db("NotesDB").collection("Quebec");

      // Use this collection to delete one user if the _id in Mongo matches the userId from request
      const response = await collection.deleteOne({
        Random: ObjectId(userData),
      });
      // Throw an error if there is no response
      if (!response) throw new Error("Error deleting user");

      // Return true if succeeded
      return true;
    } catch (error) {
      // Error thrown above will be shown here
      console.error(error);

      // Return false if failed
      return false;
    }
  }
};
