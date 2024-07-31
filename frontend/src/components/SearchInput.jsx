import { BsSearch } from 'react-icons/bs'
import React, { useState } from 'react'


import toast from 'react-hot-toast';
import useGetConversation from '../hooks/useGetConversation';
import useConversation from '../zustand/useConversation';

const SearchInput=()=> {
  const [search, setSearch]= useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();

  const handleSubmit = (e)=>{
      e.preventDefault();
      if(!search) return;
      if(search.length < 3){
        return toast.error("Search item must be atleast 3 characters long.")
      }

      const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
        
   };
      



  return (
    <form className='flex p-10 item-center gap-2' onSubmit={handleSubmit}>
        <input type ="text" placeholder='Search_' className='input input-bordered rounded-full' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button  type='submit' className='btn btn-circle bg-sky-500 text-white'><BsSearch/></button>
    </form>
  );

};


export default SearchInput;
