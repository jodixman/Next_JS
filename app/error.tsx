"use client";
import React, { useEffect } from 'react'

function Error(
    {error,reset}:{error:Error,reset:()=>void}) 
    {

        useEffect(() => {
            // Log the error to an error reporting service
            console.error(error);
          }, [error]);

          

  return (
    <div>
        <p>Disini ada Error</p>
        <button onClick={() =>reset()}>Coba Ulang</button>
    </div>
  )
}

export default Error