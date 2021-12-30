import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://quiet-escarpment-45022.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [jobs]);
    const handleUpdate = (id) => {
        navigate(`/jobs/${id}`)
    }
    const handleDelete = (id) => {
        const isDelete = window.confirm("Are you confirm to delete?")
        if (isDelete) {
            fetch(`https://quiet-escarpment-45022.herokuapp.com/jobs/${id}`, {
                method: "DELETE", headers: {
                    'content-type': "application/json"
                }
            }).then(res => res.json()).then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert("deleted successfully")
                }
            })
        }
    }
    const handleView = (id) => {

        navigate(`/details/${id}`)

    }
    return (
        <div style={{ margin: "20px 20px 0px 20px" }}>
            <h1 style={{ color: "white", background: "#00008b", padding: "20px" }}>Recent Job Post</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Post Name</StyledTableCell>
                            <StyledTableCell align="right">Vacancies</StyledTableCell>
                            <StyledTableCell align="right">Shift</StyledTableCell>
                            <StyledTableCell align="right">Type</StyledTableCell>
                            <StyledTableCell align="right">Salary</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobs.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.jobtitle}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.vacancy}</StyledTableCell>
                                <StyledTableCell align="right">{row.shift}</StyledTableCell>
                                <StyledTableCell align="right">{row.lavel}</StyledTableCell>
                                <StyledTableCell align="right">{row.salary}</StyledTableCell>
                                <StyledTableCell align="right"><button style={{ background: "#00008b", color: "white", padding: "10px 20px", border: "0px" }}>Active</button></StyledTableCell>
                                <StyledTableCell align="right"><i style={{ padding: '10px', color: 'green' }} className="fas fa-pen" onClick={() => handleUpdate(row._id)}></i>
                                    <i style={{ padding: '10px', color: "red" }} className="far fa-trash-alt" onClick={() => handleDelete(row._id)}></i>
                                    <i style={{ padding: '10px', color: 'blue' }} className="fas fa-eye" onClick={() => handleView(row._id)}></i></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllJobs;