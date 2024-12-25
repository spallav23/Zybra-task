"use client";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import React, { useState ,useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import Fdata from '@/components/Fdata';
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const page = () => {
  const [cpn, setcpn] = useState(10);
  const [serch, setserch] = useState("");
  const { data, isError, isPending, error } = useQuery({ queryKey: ["todos"], queryFn: Fdata })
  const [dataa, setdataa] = useState([]);
  useEffect(() => {
    if(cpn == 0){
      setcpn(10);
      
    }
    if(cpn == 9 ){
      setcpn(10);
    }
    if (data) {
      setdataa(data.slice(cpn-10, cpn));
    }
  }, [cpn, data]);
  
  if (isPending) {

    return <div className="w-full h-full ">
      <p className="items-center justify-center mx-32 w-3/4 mt-80 mb-5">Loading...</p>
      <Progress className="items-center justify-center mx-32 w-3/4" value={33} />

    </div>

  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
 
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl text-amber-600 pb-5">List</h1>
      <div className="flex justify-center items-center pb-5 gap-5">

        <Input className="inline-block w-6/12" placeholder="Search" value={serch} onChange={(e) => setserch(e.target.value)}/>
        <Button variant="outline" onClick={()=>{
          if(serch){
            setdataa(data.filter((item: { name: string; }) => item.name.toLowerCase().includes(serch.toLowerCase())).slice(0, 10));
          }else{
           setcpn(9);
          }
}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#616161" d="M29.171,32.001L32,29.172l12.001,12l-2.828,2.828L29.171,32.001z"></path><path fill="#616161" d="M36,20c0,8.837-7.163,16-16,16S4,28.837,4,20S11.163,4,20,4S36,11.163,36,20"></path><path fill="#37474f" d="M32.476,35.307l2.828-2.828l8.693,8.693L41.17,44L32.476,35.307z"></path><path fill="#64b5f6" d="M7,20c0-7.18,5.82-13,13-13s13,5.82,13,13s-5.82,13-13,13S7,27.18,7,20"></path>
        </svg></Button>

        <NavigationMenu >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-5">Sort</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="px-5"><button onClick={()=>{data.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));setcpn(9)}}>Name(A-Z)</button></NavigationMenuLink>
                <NavigationMenuLink className="px-5"><button onClick={()=>{data.sort((b: { name: string; },a: { name: string; }) => a.name.localeCompare(b.name));setcpn(9)}}>Name(Z-A)</button></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


      </div>
      <DataTable columns={columns} data={dataa} />

      <div className="flex justify-center items-center gap-5 pt-5">
      <Button variant="outline" onClick={()=>{setcpn(cpn-10)}}><svg fill="#ffffff" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="50.176"><path d="M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"></path></g><g id="SVGRepo_iconCarrier"><path d="M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"></path></g></svg></Button>
      <span>{cpn/10}</span>
      <Button variant="outline" onClick={()=>{setcpn(cpn+10)}}><svg fill="#ffffff" viewBox="-128 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="80.896"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg></Button>
      </div>
    </div>
  )
}

export default page



























