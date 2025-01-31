import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export class JwtService {
    private readonly secretKey: string;

    constructor(){
        this.secretKey = process.env.JWT_SECRET || 'rubber-company-polyester-washroom-copied-refried';
    }

    generateToken(payload:any, expiresIn: string = '1h'): string{
        return jwt.sign(payload, this.secretKey, {expiresIn: '1h'})
    }

    verifyToken(token:string): any{
        try {
            return jwt.verify(token, this.secretKey)
            
        } catch (error) {
            return null
            
        }
    }
}