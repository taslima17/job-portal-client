import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";

const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateJob = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            }, body: JSON.stringify(data)
        })
            .then(res => res.json()).then(data => {
                if (data.insertedId) {
                    alert('new job added successfully')
                }
            })
    }
    return (
        <div>
            <Button onClick={handleOpen} sx={{ my: 5 }}>Create Job <i style={{ padding: '10px' }} className="fas fa-plus"></i></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("jobtitle")} placeholder='Job Title' required /> <br />
                        <select {...register("shift")} placeholder='Shift'>
                            <option value="day">Day</option>
                            <option value="night">Night</option>

                        </select> <br />
                        <select {...register("department")} placeholder='Department'>
                            <option value="Engineering">Engineering</option>
                            <option value="Business">Business</option>
                            <option value="Social Service">Social Service</option>
                        </select>
                        <select {...register("lavel")} placeholder='Lavel'>
                            <option value="Junior">Junior</option>
                            <option value="Mid">Mid</option>
                            <option value="Senior">Senior</option>
                        </select> <br />
                        <input type="number" {...register("vacancy")} placeholder='Vacancy' /> <br />
                        <input type="number" {...register("salary")} placeholder='Salary' /> <br />
                        <select {...register("question")} placeholder='Filter Question'>
                            <option value="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corporis!</option>
                            <option value="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut.</option>
                            <option value="lorem">lorem5</option>
                        </select> <br />
                        <textarea  {...register("details")} placeholder='Job description'></textarea> <br />
                        <input type="submit" value='save' style={{ background: "blue", color: "white", fontSize: "15px" }} />
                    </form>
                </Box>
            </Modal>

        </div>
    );
};

export default CreateJob;