interface IMailTo{
    name: string,
    email: string
}
interface IMailMessage{
    subject: string,
    body: string,
    attachment?: string[]
}
interface IMessageDTO{
    to: IMailTo,
    message: IMailMessage
}
// DTO = Data Transfer Object
interface IEMailService{
    sendEmail(request: IMessageDTO): void
}
class EmailService implements IEMailService{
    sendEmail({to, message}: IMessageDTO){
        console.log(`email enviado para ${to.name} : ${message.subject}`)
    }
}

export default EmailService