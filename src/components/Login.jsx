import React from 'react'

const Login = () => {   
    const handleSubmit = (e)=>{
        e.preventDefault();

    }
  return (
    <>
        <div>
            <form className='p-3 ' onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input className='px-2 py-1 m-3 rounded-x' placeholder='Enter Name' />
            </form>
        </div>
    </>
  )
}

export default Login