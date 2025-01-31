import { Request, Response, NextFunction } from "express";
import { JwtService } from "../services/JwtService";

const jwtService = new JwtService();

export interface AuthenticatedRequest extends Request {
    userId?: string
}

export const authenticate = (req:AuthenticatedRequest, res:Response, next: NextFunction):void => {

    try {
        const authHeader = req.header('Authorization')
        const token = authHeader?.replace('Bearer ', '')

    if (!token){
        res.status(401).json({ message: 'Access denied. No token provided.' });
        return;
         
    }

    const decoded = jwtService.verifyToken(token)

    if(!decoded){
        res.status(401).json({ message: 'Invalid token.' });
        return;
        
    }

    req.userId = decoded.userId
    next()
        
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ message: 'Internal Server Error.' });
        
        
    }
    
}