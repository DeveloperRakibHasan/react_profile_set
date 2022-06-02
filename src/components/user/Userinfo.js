import React, { useState, useEffect } from 'react'
// import profile from '../../assets/image/3.jpg'

function Userinfo() {
    const [users, setUser] = useState ([]);

    useEffect(() => {
    async function getUser()  {
        const responsive = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(responsive)
        const data = await responsive.json();
        // console.log(data);
        setUser(data);
    } 

        getUser();
    }, [])

  return (
    <div className='w-full h-full mt-[120px]'>
        <div className='container'>
            <div className='grid gap-6 grid-flow-row grid-cols-3'> 

                {
                    users.map((elem) => (
                        <div className='flex border px-2 py-6 shadow-lg'>
                        <div className='ml-4'>
                            <p>Name: {elem.name}</p>
                            <p>Email: {elem.email}</p>
                            <p>Phone: {elem.phone}</p>
                        </div>
                    </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Userinfo