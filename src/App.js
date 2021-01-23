
import './App.css';
import Table from './Components/Table/Table'
import {AppBar,Toolbar,IconButton,Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormDialogButton from "../src/Components/FormDialog/FormDialogButtom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    flexGrow:1,
    marginRight: theme.spacing(2),
  },

}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.menuButton}>
            Saarthi.Ai Assignment
          </Typography>
          <FormDialogButton />
          {/* <Button variant="contained" className={classes.rightButton} >Add Employee</Button> */}
        </Toolbar>
      </AppBar>
      <Table/>
      {/* <Fab variant="extended">
          
          Add Employee
      </Fab> */}
    </div>
  );
}

export default App;
