const Job = ({ job }) => {
  const { logo , job_title, company_name, remote_or_onsite, job_type } = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={logo}
          className="rounded-lg"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{job_title}</h2>
        <h3 className="text-3xl">{company_name}</h3>
        <div className="flex flex-row gap-4">
            <button className="btn">{remote_or_onsite}</button>
            <button className="btn">{job_type}</button>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
