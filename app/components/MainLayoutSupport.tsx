// "use client"
// import React, { useEffect, useState } from 'react'
// import { userAction } from '../store';

// const MainLayoutSupport = () => {

//     const [userProfile, setUserProfile] = useState({});
    
    
//     useEffect(() => {
//       const userProfileState = userAction((state) => state?.userProfileState);
//       async function fetchProfile() {
//           const userProfile = await userProfileState();
//           setUserProfile(userProfile);
//       }
//       fetchProfile();
//     }, []);
    
//     console.log("to be main userInfo", userProfile);
//   return (
//     <div>
      
//     </div>
//   )
// }

export default MainLayoutSupport
