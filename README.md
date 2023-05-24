# Creditbook Demo Node APP

### Start app

- add `.env` file in root app with values for keys specified in `.env.example`

- Run without docker

```
npm install
npm start
```

- The project has Docker configured so you can build and run using Docker

### Implementation

- Currently there are two requests

  - To save new item POST /items:
    Sample json body:

    ```
    {
      "name": "iPhone",
      "unit": "box",
      "quantity": 10
    }
    ```

  - To search items GET /items?search="xxx"

- I have used a different collection for Units and used it as reference in Items collection. Though mongoDB suggests using maximum info in a doc as possible decision of using different collection for Units was taken so that Units can be querried and updated independently

- Currently for search I use mongoDB regex string matching for more complex DB search we can use elastic search which can provide us better and fatser results

- The search is case insensitive

- Middlewares for auth, logs, cors can be used in a production level application

- Error handling and response handling can be better done by creating a base controller class and extending all the controllers from that class
