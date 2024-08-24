import React from 'react'

function MyError({errMsg}) {
  return (
    <div className=' flex items-center justify-center w-full h-full'>
        <h3 className=' text-headingColor text-[20px] leading-[30px] font-semibold'>{errMsg}</h3>
    </div>
  )
}

export default MyError