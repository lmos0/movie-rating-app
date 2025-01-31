import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { UserService } from "../services/UserService";


export class UserController {
    private userService: UserService

    constructor(){
        this.userService = new UserService();
    }

    async createUser(req:Request, res:Response){
        const {name, email, password} = req.body

        try{

            if(!name || !email || !password) {
                return res.status(400).json({
                    error: 'All fields are required'
                })
            }
        

        const user = await this.userService.createUser(name, email, password)
        res.status(201).json(user)
        }

        catch(error){
            if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code === 'P2002'){
                return res.status(400).json({error:'Email already exists'})
            }
        }

            res.status(500).json({error: 'something went wrong'})
        }
    }

    async getUsers(req:Request, res: Response){
        try{
            const users = await this.userService.getUsers()
            res.json(users)
        }
        catch(error){
            res.status(500).json({error: 'Something went wrong'})
        }
    }

    async loginUser(req:Request, res:Response){
        const {email, password} = req.body
        
        try {
            if(!email || !password){
                return res.status(400).json({error: 'Email and password are required'})
            }

            const user = await this.userService.validadteUser(email, password)
                if(!user){
                    return res.status(401).json({error: 'Invalid Credentials'})
                }
            
            res.json(user)
        } catch (error) {
            res.status(500).json({error: 'Something went wrong'})
            
        }
    }
}