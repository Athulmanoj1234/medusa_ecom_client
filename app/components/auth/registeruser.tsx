"use client"
import { publishableApiKey, serverUrl } from '@/app/contants';
import React, {useState} from 'react'


export interface UserInfo {
    username: string;
    email: string;
    password: string;
}

const Registeruser = () => {

    const initialUserInfoState = {
            username: "",
            email: "",
            password: "",
        }
    
        const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfoState); 
        
        const handleChange = (e: any) => {
            const { name, value } = e.target;
            setUserInfo({...userInfo, [name]: value});
        }
    
        const handleRegister = async (e: React.FormEvent) => {
            e.preventDefault();
            console.log(userInfo);
            //registering customers
            const res = await fetch(`${serverUrl}/store/ecom-users/register`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    "x-publishable-api-key": publishableApiKey!,
                },
                body: JSON.stringify(userInfo),
            });
            const userRegisterResponse = await res.json();
            console.log(userRegisterResponse);
        }
    
  return (
    <div className='flex justify-center items-center h-screen'>
      <form action="">
        <input type="text" placeholder='username' name='username' onChange={handleChange} />
        <input type="email" placeholder='email' name='email' onChange={handleChange} />
        <input type="password" placeholder='password' name='password' onChange={handleChange} />
        <button className='bg-blue-600 p-3' onClick={handleRegister}>register</button>
      </form>
    </div>
  )
}

export default Registeruser
