"use client";
import React, { useState } from 'react'

const Calculator = () => {

    const [angka1, setAngka1] = useState(0)
    const [angka2, setAngka2] = useState(0)
    const [hasil, setHasil] = useState(0)

  return (
    <div>
        <form className='flex flex-col gap-y-2'>
            <input className='border max-w-[10rem] border-red-500' placeholder='angka1' onChange={(e) => setAngka1(Number(e.target.value))}/>
            <input className='border max-w-[10rem] border-blue-500' placeholder='angka2' onChange={(e) => setAngka2(Number(e.target.value))}/>
            <button className='flex flex-start max-w-[10rem] border bg-yellow-500 cursor-pointer justify-center items-center' type='button' onClick={() => setHasil(angka1 + angka2)}>Hitung</button>
            <p>Hasil : {hasil}</p>
        </form>
    </div>
  )
}

export default Calculator