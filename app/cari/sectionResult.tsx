import React from 'react'
import useSWR from "swr"
import Link from "next/link"
import ListItemsSearch from '@/components/ListItemsSearch'

const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props{
    query:string
}

export default function SectionResult({query}:Props) {

    const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher);
    var loading = !data && !error;


  return (
    <div className='mt-[10px]'>
        <p className='text-lg'>Hasil pencarian: <span className='font-bold'>{query}</span></p>
        <div className='mt-10'>
            {loading && "Tunggu Sebentar....."}
            {data && data.items.map((user:any, index:number) => {
                return <ListItemsSearch key={index} name={user.login} imageUrl={user.avatar_url} reposUrl={user.repos_url}/>
            })}
        </div>
    </div>
  )
}
