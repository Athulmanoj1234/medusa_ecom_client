import Loginuser from '@/app/components/auth/loginuser'
import { serverUrl } from '@/app/contants'
import React from 'react'

const page = () => {

  console.log(serverUrl)

  return (
    <div>
      <Loginuser />
    </div>
  )
}

export default page
