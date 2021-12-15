import { signup, login } from '../controller/auth.js';


export const authRoute = (express) => {
const router = express.Router();
    
router.post('/signup', signup);
router.post('/login', login);

return router;
}
