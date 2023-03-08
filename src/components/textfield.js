import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Button, Container,Paper} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) =>({
    root: {
        '& > *': {
             margin: theme.spacing(1),
              width: '25ch' },
    },
}));
export default function TextFields() { 
    const paperStyle={padding:'50px 20px',width:600,margin:'20px auto'}
    const classes = useStyles ();

    const[moviename,setMoviename]=useState("");
    const[seatno,setSeatno]=useState("");
    const[phoneno,setPhoneno]=useState("");
    const[email,setEmail]=useState("");
    const[date,setDate]=useState("");
    
      const handleClick=(e)=>{
        // e.preventDefault()
        const ticket={
          movieName:moviename,
          seatNo:seatno,
          phoneNumber:phoneno,
          emailId:email,
          date:date
        }

        console.log(ticket)
    //     fetch("https://localhost:8080/post",{method:"POST",headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify(ticket)
    // }).then(()=>{
    //   console.log("New passenger booked")
    // })
    axios.post("http://localhost:8080/post",ticket);

      }
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
    <form className={classes.root} onSubmit={handleClick} noValidate autoComplete='off' action='/display'>
        <h3>Movie Name:</h3>
      <TextField id="outlined-basic" label="Enter your Movie Name:" variant="outlined" value={moviename}
      onChange={(e)=>setMoviename(e.target.value)} fullWidth/>
      <h3>Seat No:</h3>
      <TextField id="outlined-basic" label="Enter your Seat No:" variant="outlined" value={seatno}
      onChange={(e)=>setSeatno(e.target.value)} fullWidth/>
      <h3>Phone no:</h3>
      <TextField id="outlined-basic" label="Enter your Phone no" variant="outlined" value={phoneno}
      onChange={(e)=>setPhoneno(e.target.value)} fullWidth/>
      <h3>Email :</h3>
      <TextField id="outlined-basic" label="Enter your MailId" variant="outlined" value={email}
      onChange={(e)=>setEmail(e.target.value)} fullWidth/>
      <h3>Date :</h3>
      <TextField id="outlined-basic" label="Enter Date" variant="outlined"value={date}
      onChange={(e)=>setDate(e.target.value)}  fullWidth/>

      <Button type='submit' variant="contained" color="secondary" >Submit</Button>
     
    
    </form>
    
    </Paper>
    </Container>
  );
}
