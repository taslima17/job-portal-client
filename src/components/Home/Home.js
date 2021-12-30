import React from 'react';
import AllJobs from '../AllJobs/AllJobs';
import CreateJob from '../CreateJob/CreateJob';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>

            <CreateJob></CreateJob>
            <AllJobs></AllJobs>
        </div>
    );
};

export default Home;