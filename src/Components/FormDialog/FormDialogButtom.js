import React from 'react';
import Button from '@material-ui/core/Button';
import {TextField, FormControl,InputLabel, Select, MenuItem} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    rightButton:{
      marginLeft: 'auto',
      order: 2,
    
    },

    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
  }));

export default function FormDialogButton(props) {

    
    const classes = useStyles();

    const inputName = React.useRef(null);
    const inputEmployeeId = React.useRef(null);
    const inputEmail = React.useRef(null);
    const inputDateOfJoining = React.useRef(null);
    const inputDepartment = React.useRef(null);
    const inputForm = React.useRef(null);

    const [error, setError]=React.useState(false);
    const [open, setOpen] = React.useState(false);

    const [name, setName]=React.useState(null);
    const [employeeId, setEmployeeId] = React.useState(null);
    const [emailId, setEmail]=React.useState(null);
    const [dateOfJoining, setDateOfJoining] = React.useState(null);
    const [department, setDepartment] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setError(false)
        setOpen(false);
    };

    const handleClear = () => {
        
        // console.log(inputName.value, inputEmail.value)

        // console.log(inputName, inputDateOfJoining, inputEmail, inputEmployeeId, inputDepartment)
        setName(null)
        setEmployeeId(null)
        setEmail(null)
        setDateOfJoining(null)
        setDepartment(null)
        setError(false)
        
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name,dateOfJoining, emailId, employeeId, department)
        if(name==null || dateOfJoining ==null || emailId ==null|| employeeId ==null || department==null){
            setError(true);
        }
        else{
            props.addRow({name, doj:dateOfJoining, employeeId, department, emailid:emailId,});
         
            console.log(name,dateOfJoining,emailId,employeeId,department)
            handleClose();
        }
        // console.log(e);
    }



    return (
        <div>
            <Button variant="contained" className={classes.rightButton} onClick={handleClickOpen} >
                Add Employee
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form ref={inputForm} className={classes.root} noValidate autoComplete="off">
                    <DialogTitle id="form-dialog-title">Enter Employee Details</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please Fill all details
                        </DialogContentText>
                        
                                <TextField ref={inputName} error={error} required id="standard-required" label="Name" name="name" onChange={(e)=>setName(e.target.value)} />

                                <TextField ref={inputEmployeeId}  error={error} required id="standard-required" label="Employee ID" name="employeeId" onChange={(e)=>setEmployeeId(e.target.value)} />
                                
                                <TextField ref={inputEmail} error={error} required id="standard-required" label="Email ID" name="emailId" onChange={(e)=>setEmail(e.target.value)} />

                                <TextField
                                    ref={inputDateOfJoining}
                                  
                                    error={error}
                                    id="date"
                                    label="Date of Joining (DOJ)"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    // className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    name="DOJ"
                                    onChange={(e)=>setDateOfJoining(e.target.value)} 
                                />

                                <FormControl error={error} className={classes.formControl} name="department">
                                    <InputLabel  id="demo-simple-select-label">Department</InputLabel>
                                    <Select 
                                    ref={inputDepartment}
                                    value={department}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    onChange={(e)=>setDepartment(e.target.value)} 
                                    >
                                        <MenuItem value={"HR"}>HR</MenuItem>
                                        <MenuItem value={"IT"}>IT</MenuItem>
                                        <MenuItem value={"Finance"}>Finance</MenuItem>
                                    </Select>
                                </FormControl>
                                    
                    </DialogContent>
                    <DialogActions>
                        <Button type="reset" onClick={handleClear} color="primary">
                            Clear
                        </Button>
                        <Button type="submit" onClick={handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
