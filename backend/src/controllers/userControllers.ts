import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const user = [
    { name: 'Daniel', email: 'daniel@hotmail.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(user)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()
        emailService.sendEmail({
                to: {
                     name: 'daniel', 
                     email: 'daniel@hotmail.com' 
                },
                message: { 
                    subject: 'Bem-vindo ao sistema', 
                    body: 'Seja bem-vindo' 
                }
            })
        return res.send()
    }
}