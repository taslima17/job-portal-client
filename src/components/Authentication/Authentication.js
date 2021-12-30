import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import useFirebase from '../../Hooks/useFirebase';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import './Authentication.css'

const Authentication = () => {
    const [isregistered, setIsregistered] = useState(true);
    const { user, Signin, Signup } = useFirebase();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.Email, data.Password)
        isregistered ? Signin(data.Email, data.Password) : Signup(data.Email, data.Password)
    }

    return (
        <div className="authentication">

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Box component="span" sx={{ p: 2 }}>
                        <Button style={{ padding: " 20px 100px 20px 100px" }} variant="contained" sx={isregistered ? { bgcolor: 'Black', color: 'green', borderRadius: 0 } : { bgcolor: '#2a52be', color: 'white', borderRadius: 0 }} onClick={() => setIsregistered(true)}>SignIn</Button>
                        <Button style={{ padding: " 20px 100px 20px 100px" }} variant="contained" sx={!isregistered ? { bgcolor: 'Black', color: 'green', borderRadius: 0 } : { bgcolor: '#2a52be', color: 'white', borderRadius: 0 }} onClick={() => setIsregistered(false)}>SignUp</Button>
                    </Box>
                    <Typography sx={{ pt: 5 }} variant="h6" gutterBottom component="div">
                        {isregistered ? "SIGN IN" : "SIGN UP"}
                    </Typography>
                    {!isregistered && <Typography variant="p" gutterBottom component="div">
                        Register to get a job
                    </Typography>}
                    {isregistered && <Typography variant="p" gutterBottom component="div">
                        Please Login
                    </Typography>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            !isregistered && <div><input placeholder='First Name' type="text" {...register("FirstName")} />
                                <input type="text" {...register("PhoneNumber")} placeholder='Phone Number' /> <br />
                                <input type="date" {...register("Dateofbirth")} placeholder='Date Of Birthe' />
                                <select {...register("gender")} placeholder='Gender'>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select></div>
                        }
                        <input className='email' placeholder='Email' type="email" {...register("Email")} /> <br />
                        <input type="password" {...register("Password")} placeholder='Password' />
                        {
                            !isregistered && <input type="password" {...register("ConfPassword")} placeholder='Confirm Password' />
                        }
                        <br />
                        <input style={{ background: "blue", color: "white", fontSize: "15px" }} type="submit" value={isregistered ? "Login" : "Register"} />
                    </form>

                </Grid>
                <Grid item xs={12} md={6} sx={{ py: 5 }}>
                    <img width="30%" src="https://techforing.com/tfimg/logo.png" alt="" />
                    <Typography variant="p" gutterBottom component="div">
                        Shapping Tomorrows Cyber security
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        Welcome to techForing
                    </Typography>
                    <Typography variant="p" gutterBottom component="div">
                        Notice:
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        An Applicant can register only once
                    </Typography>
                    <Typography variant="p" gutterBottom component="div">
                        Registered Applicant,please login with your credentials by entering Email and Password
                    </Typography>

                </Grid>

            </Grid>

        </div>
    );
};

export default Authentication;