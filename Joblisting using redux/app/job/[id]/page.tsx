// import React from 'react'
"use client";

import { useParams } from 'next/navigation';
import data from '../../Jobs.json'
import { useGetJobByIdQuery } from '@/app/api/apiSlice';
import JobDescriptionleft from '../../components/Jobdescriptionleft'
import JobDescriptionright from '../../components/JobDescriptionright'

const SingleJobPage = () => {
   const index = useParams().id 
    const {data , isError , isLoading} = useGetJobByIdQuery(index as string)
    const jobs = data?.data
    
    if (!index) {
        return <p>Invalid index</p>
    }
    const i = parseInt(index as string)
  return (
    <div className='flex gap-16 w-[1229px] h-[1064px] p-8 mx-auto '>
        <div className='flex gap-[55px] flex-col py-[46px] w-[815px] h-[1000px] bg-white'>
            {jobs && <JobDescriptionleft job={jobs[0]} />}
        </div>
        import data from './Jobs.json';

      <div className='flex flex-col gap-5 w-[293.5px] h-[674px] bg-white'>
      {jobs && <JobDescriptionright job={jobs[0]} />}
      </div>

    </div>
  )
}




export default SingleJobPage
