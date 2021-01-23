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

export default function FormDialogButton() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange=()=>{

    }

    return (
        <div>
            <Button variant="contained" className={classes.rightButton} onClick={handleClickOpen} >
                Add Employee
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enter Employee Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Fill all details
                    </DialogContentText>
                    <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-required" label="Name" />
                            <TextField required id="standard-required" label="Employee ID" />
                            
                            <TextField required id="standard-required" label="Email ID" />
                            <TextField
                                id="date"
                                label="Date of Joining (DOJ)"
                                type="date"
                                defaultValue="2017-05-24"
                                // className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>


                        </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Clear
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
