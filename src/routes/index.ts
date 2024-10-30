import {Router} from 'express'
import * as PageController from '../controllers/pageControllers'
import * as SearchController from '../controllers/searchControllers'

const router = Router()

//home
router.get('/',PageController.home)
//action
router.get('/action',PageController.action)
//adventure
router.get('/adventure',PageController.adventure)
//fantasy
router.get('/fantasy',PageController.fantasy)
//shonen
router.get('/shonen',PageController.shonen)
//supernatural
router.get('/supernatural',PageController.supernatural)
//drama
router.get('/drama',PageController.drama)
//thriller
router.get('/thriller',PageController.thriller)
//comedy
router.get('/comedy',PageController.comedy)
//romance
router.get('/romance',PageController.romance)
//Sci-FI
router.get('/SciFi',PageController.SciFi)
//suspense
router.get('/suspense',PageController.suspense)
//Isekai
router.get('/isekai',PageController.isekai)
//search
router.get('/search',SearchController.search)

router.get('/',(req,res)=>{
    res.send("frase aleatória - rota home")
})

export default router