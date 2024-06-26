import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {
    const [jobs, setJobs]=useState([]);
    const [dataLength, setDataLength] =useState(4);
    useEffect( () =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[])
    return (

        <div>
            <h1 className='text-5xl font-extrabold text-center'>Featured Jobs: {jobs.length}</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center my-4">
                <button onClick={() => setDataLength(jobs.length)} className="btn ">Show All</button>
            </div>
        </div>
    );
};

export default Featured;