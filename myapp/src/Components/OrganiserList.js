import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const OrganiserList = (props) => {
  const classes = useStyles();
  const editdata = (item, key) => {
    props.editdata1(item, key);
  };
 console.log("thffghjcxcv",props);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  function createData(eventName,eventDescription,organiserEmail,edit ) {
    return {  eventName,eventDescription,organiserEmail,edit};
  }



  return (
    <div>
   
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
             
               <StyledTableCell>event name</StyledTableCell>
            <StyledTableCell align="right">eventDescription</StyledTableCell>
            <StyledTableCell align="right">organiserEmail</StyledTableCell>
            <StyledTableCell align="right">edit</StyledTableCell>
          

            </TableRow>
          </TableHead>
          <TableBody>
            {props.state.map((item, key) => {
              return (
                <TableRow key={key}>
                  <TableCell align="right">{item.eventName}</TableCell>
                  <TableCell align="right">{item.eventDescription}</TableCell>
                  <TableCell align="right">{item.organiserEmail}</TableCell>
                  <TableCell align="right">

                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => editdata(item, key)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>
     </div>
  );
};

function mapStateToProps(state) {
  console.log('this. is the reduced state', state);
  return { state: state.events.event };
}

export default connect(mapStateToProps)(OrganiserList);