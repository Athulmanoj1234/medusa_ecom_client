"use client"

import React, {useEffect, useState}  from 'react'
import { UserInfo } from './registeruser';
import { userAction } from '@/app/store';
import { publishableApiKey, serverUrl } from '@/app/contants';

export interface LoginUserInfo {
    username: string;
    email?: string | null;
    password: string;
}

const Loginuser = () => {
    
    const initialUserInfoState = {
                username: "",
                password: "",
            }
        
            const [userInfo, setUserInfo] = useState<LoginUserInfo>(initialUserInfoState);
            const [userProfile, setUserProfile] = useState({}); 

            const userProfileState = userAction((state) => state?.userProfileState);
            const userData = userAction((state) => state?.userInfo);

            console.log(userData);
    
            useEffect(() => {
                async function fetchProfile() {
                    const userProfile = await userProfileState();
                    setUserProfile(userProfile);
                }
                fetchProfile();
            }, []);
            
            console.log(userProfile);

            const handleChange = (e: any) => {
                const { name, value } = e.target;
                setUserInfo({...userInfo, [name]: value});
            }
        
            const handleRegister = async (e: React.FormEvent) => {
                e.preventDefault();
                console.log(userInfo);
                //registering customers
                const res = await fetch(`${serverUrl}/store/ecom-users/login`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "content-type": "application/json",
                        "x-publishable-api-key": publishableApiKey!,
                    },
                    body: JSON.stringify(userInfo),
                });
                const userRegisterResponse = await res.json();
                console.log(userRegisterResponse);
            }

            console.log("userProfile check", userProfile.username == "" ? 'nothing' : userProfile.username);

            const userInfoUsername = userProfile.username == "";

            console.log(userInfoUsername);
  return (
        <div className='flex justify-center items-center h-screen'>
            { userProfile?.username && ( 
                <div>already logined</div> ) } 
                { !userProfile.username && (
                    <form action="">
                    <input type="text" placeholder='username' name='username' onChange={handleChange} />
                    <input type="password" placeholder='password' name='password' onChange={handleChange} />
                    <button className='bg-blue-600 p-3' onClick={handleRegister}>register</button>
                </form>
                )}
                
        </div>
        
       ) 
    }

export default Loginuser
