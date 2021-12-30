import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewJob = () => {
    const id = useParams().id;
    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${id}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div style={{ margin: "30px" }}>
            <div className="title" style={{ display: "flex", justifyContent: "space-around" }}>
                <h3>Job Title</h3> <h3>{job.jobtitle}</h3>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <h5>Shift</h5>
                    <p>{job.shift}</p>
                </div>
                <div>
                    <h5>Department</h5>
                    <p>{job.department}</p>
                </div>
                <div>
                    <h5>Lavel</h5>
                    <p>{job.lavel}</p>
                </div>
                <div>
                    <h5>Vacancy</h5>
                    <p>{job.vacancy}</p>
                </div>
                <div>
                    <h5>Salary</h5>
                    <p>{job.salary}</p>
                </div>
            </div>
            <hr />
            <div>
                <h4>Description</h4>

                <p>{job.details}</p>
            </div>
            <hr />

            <div style={{ border: "1px solid", margin: "20px" }}>
                <h4>Filter question</h4>
                <p>{job.question} ?</p>
            </div>
        </div>
    );
};

export default ViewJob;