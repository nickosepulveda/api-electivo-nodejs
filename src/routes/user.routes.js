'use-strict'

const router = require('express').Router();

// /users/
router.get('/', function (req, res) {
    res.send("Listado de todos los usuarios");
});
// CREATE
// /users/
router.post('/', function (req, res) { 
    res.send("Crear un usuario nuevo");
});
// READ
// /users/:id
router.get('/:id', function (req, res) {
    res.send("Obtener usuario ID=" + req.params.id);
});
// UPDATE
// /users/:id
router.put('/:id', function (req, res) {
    res.send("Modificar usuario ID=" + req.params.id);
});
// DELETE
// /users/:id
router.delete('/:id', function (req, res) {
    res.send("Eliminar usuario ID=" + req.params.id);
});

module.exports = router;