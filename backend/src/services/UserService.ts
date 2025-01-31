import { PrismaClient } from "@prisma/client";
import { PasswordService } from "./PasswordService";
import { JwtService } from "./JwtService";



export class UserService {
    private prisma: PrismaClient;
    private passwordService: PasswordService;
    private jwtService: JwtService;

    constructor(){
        this.prisma = new PrismaClient()
        this.passwordService = new PasswordService()
        this.jwtService = new JwtService()
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
    async login(email: string, password: string){
        const user = await this.validadteUser(email,password)
        if(!user){
            return null
        }

        const token = this.jwtService.generateToken({userId: user.id})
        return {user,token}
    }
   
    }

    