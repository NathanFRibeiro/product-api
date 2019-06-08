# product-api
Building an basic API following the starter course of Node JS from Rocketseat (https://station.rocketseat.com.br/courses/starter/) using MongoDB.

Dependencies:

- nodemon
- mongoose
- require-dir
- mongoose-paginate
- cors

### Routes

- Get all items (using pagination) 
-- routes.get('/products', ProductController.index);

- Get item by id
-- routes.get('/products/:id', ProductController.show);

- Update item by id
-- routes.put('/products/:id', ProductController.update);

- Create a new item
-- routes.post('/products', ProductController.store);

- Delete item by id
-- routes.delete('/products/:id', ProductController.destroy);

Developed and tested using MongoDB via Docker.
