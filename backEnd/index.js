const express = require('express');
const { getData, insertData, insertLike, deletePost} = require('./query');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())
app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 3001')
  });

// consulta para ver los posts 
app.get('/posts',  async (req, res) => {
    const posts = await getData()
    res.json(posts)
});

// agregar nuevos posts
app.post('/posts',  (req, res) => {
    const {titulo,img,descripcion} = req.body;
    insertData(titulo,img,descripcion)
    res.send("producto agregado con exito")
})

// agregar likes
app.put('/posts/like/:id', (req, res) => {
    const {id} = req.params;
    insertLike(id)
    res.send("like agregado")
})

// eliminar un post
app.delete('/posts/:id', (req, res) => {
    const {id} = req.params;
    deletePost(id)
    res.send("post eliminado")
})
