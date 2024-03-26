import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id);
    console.log(job);
    return (
        <div className="w-4/5 mx-auto rounded-xl p-8 text-left bg-red-200 text-black ">
            <h2 className="text-4xl">Job Details of {job.company_name}</h2>
            <img className="text-center" src={job.logo} alt="" />
            <h3>Post Name: {job.job_title}</h3>
            <p>Description: {job.job_description}</p>
            <p>Responsibility: {job.job_responsibility}</p>
            <h3>Qualification: {job.educational_requirements}</h3>
            <p>Salary: {job.salary}</p>
            <div>
                <button className="btn">Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;