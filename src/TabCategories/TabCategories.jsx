import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import JobCard from '../Componets/JobCard/JobCard'
// import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const TabCategories = () => {
  // const [jobs, setJobs] = useState([]);
  //     useEffect(() => {
  //       fetchAllData()
  //     },[])
  
  //     const fetchAllData = async () =>{
  //         const {data} = await axios.get('http://localhost:5000/jobs')
  //         console.log(data);
  //         setJobs(data)
  //     }
  //     console.log(jobs);

      const {data  , isLoading} = useQuery({ queryKey: ['jobs'], queryFn: async () => {
        const {data} = await axios.get('http://localhost:5000/jobs');
          return data
      }})

      console.log(data);
      console.log(isLoading);
      if(isLoading) return <span className="loading loading-bars loading-2xl"></span>
      
  return (
    <Tabs>
      <div className=' container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>
          Browse Jobs By Categories
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
        <div className='flex items-center justify-center'>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.filter(job => job.category === 'Web Development').map(job => <><JobCard key={job._id} job={job} /></>)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.filter(job => job.category === 'Graphics Design').map(job => <><JobCard key={job._id} job={job} /></>)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.filter(job => job.category === 'Digital Marketing').map(job => <><JobCard key={job._id} job={job} /></>)}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default TabCategories
