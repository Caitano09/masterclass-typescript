import React from 'react'

interface IUser{
    name: string,
    email: string
}
interface Props{
    user: IUser
  }
    

const User: React.FC<Props> = ({user}) =>{
    return(
        <div>
            <b>Nome: </b> {user.name}<br/>
            <b>Email: </b> {user.email}<br/><br/>
        </div>
    )
}
export default User