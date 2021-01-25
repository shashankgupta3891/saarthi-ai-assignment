
import './App.css';
import React, {useState} from "react";
import Table from './Components/Table/Table'
import {AppBar, Toolbar, Typography,} from '@material-ui/core';
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

  // const rows = [
  //   createData('India', 'IN', 1324171354, 3287263),
  //   createData('China', 'CN', 1403500365, 9596961),
  //   createData('Italy', 'IT', 60483973, 301340),
  //   createData('United States', 'US', 327167434, 9833520),
  //   createData('Canada', 'CA', 37602103, 9984670),
  //   createData('Australia', 'AU', 25475400, 7692024),
  //   createData('Germany', 'DE', 83019200, 357578),
  //   createData('Ireland', 'IE', 4857000, 70273),
  //   createData('Mexico', 'MX', 126577691, 1972550),
  //   createData('Japan', 'JP', 126317000, 377973),
  //   createData('France', 'FR', 67022000, 640679),
  //   createData('United Kingdom', 'GB', 67545757, 242495),
  //   createData('Russia', 'RU', 146793744, 17098246),
  //   createData('Nigeria', 'NG', 200962417, 923768),
  //   createData('Brazil', 'BR', 210147125, 8515767),
  // ];

  const [tableData, setTableData] = useState([]);

  // console.log(tableData)

  function addRow({name, employeeId, department, emailid, doj="20/10/2020"}){
    setTableData([...tableData, createData(name, employeeId, department, emailid, doj)])
    // rows.push(createData('India', 'IN', 1324171354, 3287263))
  }

  function createData(name, employeeId, department, emailid, doj="20/10/2020") {
      // const density = population / size;
      return { name, employeeId, department, emailid, doj };
    }
    


  const classes = useStyles();

  return (
  
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.menuButton}>
              Saarthi.Ai Assignment
            </Typography>
            <FormDialogButton addRow={addRow} />
            {/* <Button variant="contained" className={classes.rightButton} >Add Employee</Button> */}
          </Toolbar>
        </AppBar>
        <Table rows={tableData} />
      </div>

  );
}

export default App;
