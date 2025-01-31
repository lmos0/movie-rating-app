import { Router, Response, Request } from "express";
import { UserController } from "../controllers/userController";
import { authenticate } from "../middleware/authMiddleware";

const router:Router = Router()
const userController = new UserController()

router.post('/users', (req: Request, res: Response) => {
    userController.createUser(req,res)
})

router.get('/users', (req:Request, res: Response) => {
    userController.getUsers(req,res)
})

router.post('/login', (req:Request, res:Response) => {
    userController.loginUser(req,res)
})

router.get('/profile', authenticate, (req,res) => {
    const userId = (req as any).userId
    res.json({message: `Bem-vindo, user ${userId}`})

})

export default router