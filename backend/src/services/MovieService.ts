import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export class MovieService {

    async createMovie(title: string, director:string, year:number) {

        return await prisma.movie.create({
            data:{
                title,
                director,
                year
            }

        })
    }

    async getMovies(){
        return await prisma.movie.findMany();
    }

    async getMovieById(id:number){
        return await prisma.movie.findUnique({
            where:{id}
        })
    }

    async updateMovie(id:number, title: string, director:string, year:number){
        return await prisma.movie.update({
            where:{id},
            data:{
                title,
                director,
                year
            }
        })
    }
    async deleteMovie(id:number){
        return await prisma.movie.delete({
            where:{id}
        })
    }
    async getMoviesByDirector(director:string){
        return await prisma.movie.findMany({
            where:{director}
        })
    }

    async getMovieByTitle(title:string){
        return await prisma.movie.findMany({
            where:{title:{
                contains: title,
                mode:'insensitive'
            }}
        })
    }

    async getMoviesByYear(year:number){
        return await prisma.movie.findMany({
            where:{year}
        })
    }
}