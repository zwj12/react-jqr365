/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 09:03:34
 * @LastEditTime: 2019-08-19 15:59:07
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import * as UPDATE_WELD_PARAMETER from "../redux/actionTypes";
import WebService from '../Robot/WebService'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function WeldParameterV3() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const colSizes = 3;

    const index = useSelector(state => state.weldParameterReducer.weldData.numIndexNo);

    const weld_speed = useSelector(state => state.weldParameterReducer.weldData.weld_speed);
    const mode = useSelector(state => state.weldParameterReducer.weldData.main_arc.mode);
    const current = useSelector(state => state.weldParameterReducer.weldData.main_arc.current);
    const voltage = useSelector(state => state.weldParameterReducer.weldData.main_arc.voltage);

    const preflow_time = useSelector(state => state.weldParameterReducer.seamData.preflow_time);
    const postflow_time = useSelector(state => state.weldParameterReducer.seamData.postflow_time);

    const weave_shape = useSelector(state => state.weldParameterReducer.weaveData.weave_shape);
    const weave_length = useSelector(state => state.weldParameterReducer.weaveData.weave_length);
    const weave_width = useSelector(state => state.weldParameterReducer.weaveData.weave_width);
    const weave_height = useSelector(state => state.weldParameterReducer.weaveData.weave_height);
    const weave_dir = useSelector(state => state.weldParameterReducer.weaveData.weave_dir);
    const weave_tilt = useSelector(state => state.weldParameterReducer.weaveData.weave_tilt);
    const weave_ori = useSelector(state => state.weldParameterReducer.weaveData.weave_ori);
    const dwell_left = useSelector(state => state.weldParameterReducer.weaveData.dwell_left);
    const dwell_center = useSelector(state => state.weldParameterReducer.weaveData.dwell_center);
    const dwell_right = useSelector(state => state.weldParameterReducer.weaveData.dwell_right);

    const state = useSelector(state => state);

    const handleApply = (e) => {
        state.weldParameterReducer.seamData.applyDataFromWebServiceSync();
        state.weldParameterReducer.weldData.applyDataFromWebServiceSync();
        state.weldParameterReducer.weaveData.applyDataFromWebServiceSync();

    };

    const requestMastership=()=>{
        WebService.RequestManualModePrivileges();
    }

    const releaseMastership=()=>{
        WebService.CancelManualModePrivileges();
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="index"
                    label="Index"
                    className={classes.textField}
                    value={index}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_INDEX, index: parseInt(event.target.value) })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 1,
                        max: 32,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="weld_speed"
                    label="Weld Speed"
                    className={classes.textField}
                    value={weld_speed}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WELD_SPEED, weld_speed: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0.1,
                        max: 100,
                        step: 0.5,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="mode"
                    select
                    label="Mode"
                    className={classes.textField}
                    value={mode}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_MODE, mode: event.target.value })}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select weld mode"
                    margin="normal"
                >
                    <MenuItem key="Synergic" value="0">
                        Synergic (0)
                    </MenuItem>
                    <MenuItem key="Pulse" value="1">
                        Pulse (1)
                    </MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="current"
                    label="Current"
                    className={classes.textField}
                    value={current}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_CURRENT, current: parseInt(event.target.value) })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 30,
                        max: 500,
                        step: 5,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="voltage"
                    label="Arc Length Trim"
                    className={classes.textField}
                    value={voltage}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_VOLTAGE, voltage: parseInt(event.target.value) })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: -30,
                        max: 30,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="preflow_time"
                    label="Preflow"
                    className={classes.textField}
                    value={preflow_time}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_PREFLOW_TIME, preflow_time: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 10,
                        step: 0.5,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="postflow_time"
                    label="Postflow"
                    className={classes.textField}
                    value={postflow_time}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_POSTFLOW_TIME, postflow_time: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 10,
                        step: 0.5,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    select
                    id="weave_shape"
                    label="Weave Shape"
                    className={classes.textField}
                    value={weave_shape}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WEAVE_SHAPE, weave_shape: event.target.value })}
                    margin="normal"
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                >
                    <MenuItem key="NoWeaving" value="0">
                        No Weaving (0)
                    </MenuItem>
                    <MenuItem key="Zigzag" value="1">
                        Zig-zag (1)
                    </MenuItem>
                    <MenuItem key="Vshaped" value="2">
                        V-shaped (2)
                    </MenuItem>
                    <MenuItem key="Triangular" value="3">
                        Triangular (3)
                    </MenuItem>
                    <MenuItem key="Circular" value="4">
                        Circular (4)
                    </MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="weave_length"
                    label="Weave Length"
                    className={classes.textField}
                    value={weave_length}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WEAVE_LENGTH, weave_length: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 100,
                        step: 0.5
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="weave_width"
                    label="Weave Width"
                    className={classes.textField}
                    value={weave_width}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WEAVE_WIDTH, weave_width: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 100,
                        step: 0.5
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="weave_height"
                    label="Weave Height"
                    className={classes.textField}
                    value={weave_height}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WEAVE_HEIGHT, weave_height: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 100,
                        step: 0.5
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="weave_dir"
                    label="Weave Dir"
                    className={classes.textField}
                    value={weave_dir}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WEAVE_DIR, weave_dir: parseInt(event.target.value) })}
                    type="number"
                    margin="normal"
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="weave_tilt"
                    label="Weave Tilt"
                    className={classes.textField}
                    value={weave_tilt}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WEAVE_TILT, weave_tilt: parseInt(event.target.value) })}
                    type="number"
                    margin="normal"
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="weave_ori"
                    label="Weave Ori"
                    className={classes.textField}
                    value={weave_ori}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_WEAVE_ORI, weave_ori: parseInt(event.target.value) })}
                    type="number"
                    margin="normal"
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="dwell_left"
                    label="Dwell Left"
                    className={classes.textField}
                    value={dwell_left}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_DWELL_LEFT, dwell_left: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 100,
                        step: 0.1,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="dwell_center"
                    label="Dwell Center"
                    className={classes.textField}
                    value={dwell_center}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_DWELL_CENTER, dwell_center: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 100,
                        step: 0.1,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <TextField
                    required
                    id="dwell_right"
                    label="Dwell Right"
                    className={classes.textField}
                    value={dwell_right}
                    onChange={(event) => dispatch({ type: UPDATE_WELD_PARAMETER.UPDATE_DWELL_RIGHT, dwell_right: event.target.value })}
                    type="number"
                    margin="normal"
                    inputProps={{
                        min: 0,
                        max: 100,
                        step: 0.1,
                    }}
                />
            </Grid>
            <Grid item xs={colSizes}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleApply}
                >
                    Apply
                </Button>
            </Grid>
            <Grid item xs={colSizes}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={requestMastership}
                >
                    Request Mastership
                </Button>
            </Grid>
            <Grid item xs={colSizes}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={releaseMastership}
                >
                    Release Mastership
                </Button>
            </Grid>
        </Grid>
    );
}