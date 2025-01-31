import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

export class PasswordService {
    private readonly saltRounds = parseInt(process.env.SALT_ROUNDS || '10', 10)

    async hash(password:string): Promise<string>{

        if(isNaN(this.saltRounds) || this.saltRounds < 1){
            throw new Error('Invalid SALT_ROUNDS configuration')
        }


        return bcrypt.hash(password, this.saltRounds);
    }

    async compare(password:string, hashedPassword:string):Promise<boolean>{
        return bcrypt.compare(password, hashedPassword)
    }
}