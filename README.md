# Dev Lab Quebec

## ISSUES: runs locally but not on heroku

passing something from Util/UserUtil to app.js into view/index

Incorrect formatting in res.render

### app.js script
```javascript
//initial reply
app.get("/", async (req, res) => {
  //UsersUtil References readDB function in ./utils/UserUtil
   something = await UsersUtil.readDB();
  
    res.render("index", {
      something: something.Random
    });
  });
  ```
  
  ### Util/UsersUtil script
  ``` javascript
static async readDB() {
    try {
      //conection to db and specific collection
      const collection = client.db("NotesDB").collection("Quebec");
      //.find used with.sortto find last known _id: then convcerted to array
      something = await collection.find().sort({_id: -1}).toArray();
      //returns last entry in array returned
      return something[0];
    } catch (err) {
      console.error("Nothing Found");
      return "No Entries";
    }
  }
```
