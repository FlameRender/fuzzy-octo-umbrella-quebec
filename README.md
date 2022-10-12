# Dev Lab Quebec

## ISSUES:

passing something from Util/UserUtil to app.js into view/index

Incorrect formatting in res.render

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
  
  
