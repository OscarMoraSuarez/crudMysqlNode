//! usar el express.Router
const router = require('express').Router();//devuelve un objeto de javascript donde puedo agregar rutas y usarlas
const customerController=require('../controllers/customerController');
router.get('/',customerController.list);
router.post('/add',customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id',customerController.delete);

module.exports=router;


