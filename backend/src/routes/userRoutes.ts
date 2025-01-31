import { Router, Response, Request } from "express";
import { UserController } from "../controllers/userController";

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

export default router