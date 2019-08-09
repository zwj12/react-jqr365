import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SeamData from './SeamData';
import WeldData from './WeldData';
import WeaveData from './WeaveData';

export default function WeldParameterTableRow(props) {
    const [index, setIndex] = useState(props.index);
    const seamData = new SeamData();
    const weldData = new WeldData();
    const weaveData = new WeaveData();

    seamData.refreshDataFromWebServiceSync(index);
    weldData.refreshDataFromWebServiceSync(index);
    weaveData.refreshDataFromWebServiceSync(index);

    return (
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                {index}
            </TableCell>
            <TableCell align="right">{weldData.weld_speed}</TableCell>
            <TableCell align="right">{weldData.main_arc.mode}</TableCell>
            <TableCell align="right">{weldData.main_arc.current}</TableCell>
            <TableCell align="right">{weldData.main_arc.voltage}</TableCell>
            <TableCell align="right">{seamData.preflow_time}</TableCell>
            <TableCell align="right">{seamData.postflow_time}</TableCell>
            <TableCell align="right">{seamData.scrape_start}</TableCell>
            <TableCell align="right">{weaveData.weave_shape}</TableCell>
            <TableCell align="right">{weaveData.weave_type}</TableCell>
            <TableCell align="right">{weaveData.weave_length}</TableCell>
            <TableCell align="right">{weaveData.weave_height}</TableCell>
            <TableCell align="right">{weaveData.weave_bias}</TableCell>
            <TableCell align="right">{weaveData.weave_dir}</TableCell>
            <TableCell align="right">{weaveData.weave_tilt}</TableCell>
            <TableCell align="right">{weaveData.weave_ori}</TableCell>
            <TableCell align="right">{weaveData.dwell_left}</TableCell>
            <TableCell align="right">{weaveData.dwell_center}</TableCell>            
            <TableCell align="right">{weaveData.dwell_right}</TableCell>
        </TableRow>
    );
}
