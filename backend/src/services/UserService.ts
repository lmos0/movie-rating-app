import { PrismaClient } from "@prisma/client";
import { PasswordService } from "./PasswordService";
import { error } from "console";
import { Request, Response } from "express";


export class UserService {
    private prisma: PrismaClient;
    private passwordService: PasswordService;

    constructor(){
        this.prisma = new PrismaClient
        this.passwordService = new PasswordService
    }

    async createUser(name: string, email: string, password: string){
        const hashedPassword = await this.passwordService.hash(password);

        return this.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            },

            select: {
                id:true,
                name:true,
                email:true,
                createdAt:true
            }
        })

    }

    async getUsers(){
        return this.prisma.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                createdAt:true
            }
        })
    }

    async validadteUser(email:string, password:string){
        const user = await this.prisma.user.findUnique({
            where: {email}
            
        })

        if (!user){
            return null
        }

        const isValid = await this.passwordService.compare(password, user.password);
        if(!isValid){
            return null
        }
        const {password: _, ...userWithOutPassword} = user;
            return userWithOutPassword

    
}
   
    }

    