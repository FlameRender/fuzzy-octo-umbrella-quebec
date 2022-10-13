# Dev Lab Quebec

## ISSUES: runs locally but not on heroku

### Goal:
passing something from Util/UserUtil to app.js into view/index

### Discovery: 
Crash Occurs only when variable something in app.js turns object undefined

### Fixes to try:
If statement to catch undefined variable || rework UserUtil.readBD function to not include object array possibly by looping _id in index.ejs

### heroku error:
something: something.Random

TypeError: Cannot read properties of undefined (reading 'Random')
at /app/app.js:21:28

### app.js script line 15:
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
  
  ### Util/UsersUtil script line 27:
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
