import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WeldParameterTableRow from './WeldParameterTableRow'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function WeldParameterTable() {
  const classes = useStyles();

  let indexs = new Array(32);
  for (let i = 0; i < 32; i++) {
    indexs[i] = i + 1;
  }
  const rows = indexs.map((index) =>
    <WeldParameterTableRow index={index} />
  );

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>index</TableCell>
            <TableCell align="right">Weld Speed</TableCell>
            <TableCell align="right">mode</TableCell>
            <TableCell align="right">current</TableCell>
            <TableCell align="right">voltage</TableCell>
            <TableCell align="right">preflow_time</TableCell>
            <TableCell align="right">postflow_time</TableCell>
            <TableCell align="right">scrape_start</TableCell>
            <TableCell align="right">weave_shape</TableCell>
            <TableCell align="right">weave_type</TableCell>
            <TableCell align="right">weave_length</TableCell>
            <TableCell align="right">weave_width</TableCell>
            <TableCell align="right">weave_height</TableCell>
            <TableCell align="right">weave_bias</TableCell>
            <TableCell align="right">weave_dir</TableCell>
            <TableCell align="right">weave_tilt</TableCell>
            <TableCell align="right">weave_ori</TableCell>
            <TableCell align="right">dwell_left</TableCell>
            <TableCell align="right">dwell_center</TableCell>
            <TableCell align="right">dwell_right</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </Paper>
  );
}