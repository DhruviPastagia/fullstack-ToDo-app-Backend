const {Router} = require ("express")
const {getTODO,saveToDo,updateToDo,deleteToDo} =require ("../controllers/ToDoController");

const router = Router()

router.get('/', getTODO)
router.post('/save',saveToDo )
router.post('/update',updateToDo)
router.post('/delete',deleteToDo )

module.exports = router;