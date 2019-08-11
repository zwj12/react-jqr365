/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 13:08:08
 * @LastEditTime: 2019-08-11 13:59:52
 * @LastEditors: Please set LastEditors
 */
import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Provider } from 'react-redux'
import SeamData from './SeamData';
import WeldData from './WeldData';
import WeaveData from './WeaveData';
import { UPDATE_WELDSPEED } from "../redux/actionTypes";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function WeldParameterV2() {
  const classes = useStyles();


  let seamData = new SeamData();
  let weldData = new WeldData();
  let weaveData = new WeaveData();

  seamData.parse("[0,0.5,[0,0,0,0,0,0,0,0,0],0,0,0,0,0,[0,0,0,0,0,0,0,0,0],0,0,[0,0,0,0,0,0,0,0,0],0,0,[0,0,0,0,0,0,0,0,0],0.5]");
  weldData.parse("[10,0,[38,0,25,0,0,200,0,0,0],[0,0,0,0,0,0,0,0,0]]");
  weaveData.parse("[2,0,3,6,5,0,0,0,0,0,0,0,0,0,0]");
  // seamData.refreshDataFromWebServiceSync(index);
  // weldData.refreshDataFromWebServiceSync(index);
  // weaveData.refreshDataFromWebServiceSync(index);

  const [values, setValues] = useState({
    index: 1,
    weld_speed: weldData.weld_speed,
    mode: weldData.main_arc.mode,
    current: weldData.main_arc.current,
    voltage: weldData.main_arc.voltage,
    preflow_time: seamData.preflow_time,
    postflow_time: seamData.postflow_time,
    weave_shape: weaveData.weave_shape,
    weave_length: weaveData.weave_length,
    weave_width: weaveData.weave_width,
    weave_height: weaveData.weave_height,
    weave_dir: weaveData.weave_dir,
    weave_tilt: weaveData.weave_tilt,
    weave_ori: weaveData.weave_ori,
    dwell_left: weaveData.dwell_left,
    dwell_center: weaveData.dwell_center,
    dwell_right: weaveData.dwell_right,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChange_index = name => event => {
    // weldData.weld_speed=event.target.value;
    // seamData.preflow_time=event.target.value;
    // weaveData.weave_length=event.target.value;    
    values[name] = event.target.value;
    // values.weld_speed=event.target.value;
    // values.preflow_time=event.target.value;
    // values.weave_length=event.target.value;

    // seamData.refreshDataFromWebServiceSync(values.index);
    // weldData.refreshDataFromWebServiceSync(values.index);
    // weaveData.refreshDataFromWebServiceSync(values.index);
    values.weld_speed = weldData.weld_speed;
    values.mode = weldData.main_arc.mode;
    values.current = weldData.main_arc.current;
    values.voltage = weldData.main_arc.voltage;
    values.preflow_time = seamData.preflow_time;
    values.postflow_time = seamData.postflow_time;
    values.weave_shape = weaveData.weave_shape;
    values.weave_length = weaveData.weave_length;
    values.weave_width = weaveData.weave_width;
    values.weave_height = weaveData.weave_height;
    values.weave_dir = weaveData.weave_dir;
    values.weave_tilt = weaveData.weave_tilt;
    values.weave_ori = weaveData.weave_ori;
    values.dwell_left = weaveData.dwell_left;
    values.dwell_center = weaveData.dwell_center;
    values.dwell_right = weaveData.dwell_right;

    setValues({ ...values });
    // setValues({ ...values, [name]: event.target.value });
    // console.log(weldData.toString());
    // console.log(seamData.toString());
    // console.log(weaveData.toString());
  };

  const handleApply = (e) => {
    weldData.index = values.index;
    weldData.weld_speed = values.weld_speed;
    weldData.main_arc.mode = values.mode;
    weldData.main_arc.current = values.current;
    weldData.main_arc.voltage = values.voltage;
    seamData.index = values.index;
    seamData.preflow_time = values.preflow_time;
    seamData.postflow_time = values.postflow_time;
    weaveData.index = values.index;
    weaveData.weave_shape = values.weave_shape;
    weaveData.weave_length = values.weave_length;
    weaveData.weave_width = values.weave_width;
    weaveData.weave_height = values.weave_height;
    weaveData.weave_dir = values.weave_dir;
    weaveData.weave_tilt = values.weave_tilt;
    weaveData.weave_ori = values.weave_ori;
    weaveData.dwell_left = values.dwell_left;
    weaveData.dwell_center = values.dwell_center;
    weaveData.dwell_right = values.dwell_right;
    console.log(seamData.toString());
    console.log(weldData.toString());
    console.log(weaveData.toString());
  };

  const counter = useSelector(state => state.weldParameterReducer.count);
  const state = useSelector(state => state);
  // const counter=45;  
  console.log(state);
  console.log(256);
  const weld_speed=useSelector(state => state.weldParameterReducer.weldData.weld_speed);
  // const weld_speed=9;
  const dispatch = useDispatch();

  return (
    <form className={classes.container} noValidate autoComplete="off">
    {/* <div> */}
      {/* <TextField
        required
        id="counter"
        label="counter"
        className={classes.textField}
        value={counter}
        // onChange={handleChange_index('index')}
        type="number"
        margin="normal"
      /> */}
       Count: {counter}
      <button type="button" onClick={() => dispatch({ type: UPDATE_WELDSPEED , weld_speed:parseInt( values.weave_width)})}>
        Increment counter
      </button>
      Count: {counter}
      <TextField
        required
        id="index"
        label="Index"
        className={classes.textField}
        value={values.index}
        onChange={handleChange_index('index')}
        type="number"
        margin="normal"
        inputProps={{
          min: 1,
          max: 32,
        }}
      />
      <TextField
        required
        id="weld_speed"
        label="Weld Speed"
        className={classes.textField}
        value={weld_speed}
        // onChange={handleChange('weld_speed')}
        // value={values.weld_speed}
        // onChange={handleChange('weld_speed')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0.1,
          max: 100,
          step: 0.5,
        }}
      />
      <TextField
        required
        id="mode"
        select
        label="Mode"
        className={classes.textField}
        value={values.mode}
        onChange={handleChange('mode')}
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
      <TextField
        required
        id="current"
        label="Current"
        className={classes.textField}
        value={values.current}
        onChange={handleChange('current')}
        type="number"
        margin="normal"
        inputProps={{
          min: 30,
          max: 500,
          step: 5,
        }}
      />
      <TextField
        required
        id="voltage"
        label="Voltage"
        className={classes.textField}
        value={values.voltage}
        onChange={handleChange('voltage')}
        type="number"
        margin="normal"
        inputProps={{
          min: -30,
          max: 30,
        }}
      />
      <TextField
        required
        id="preflow_time"
        label="Preflow"
        className={classes.textField}
        value={values.preflow_time}
        onChange={handleChange('preflow_time')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 10,
          step: 0.5,
        }}
      />
      <TextField
        required
        id="postflow_time"
        label="Postflow"
        className={classes.textField}
        value={values.postflow_time}
        onChange={handleChange('postflow_time')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 10,
          step: 0.5,
        }}
      />
      <TextField
        required
        select
        id="weave_shape"
        label="Weave Shape"
        className={classes.textField}
        value={values.weave_shape}
        onChange={handleChange('weave_shape')}
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
      <TextField
        required
        id="weave_length"
        label="Weave Length"
        className={classes.textField}
        value={values.weave_length}
        onChange={handleChange('weave_length')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 100,
          step: 0.5
        }}
      />
      <TextField
        required
        id="weave_width"
        label="Weave Width"
        className={classes.textField}
        value={values.weave_width}
        onChange={handleChange('weave_width')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 100,
          step: 0.5
        }}
      />
      <TextField
        required
        id="weave_height"
        label="Weave Height"
        className={classes.textField}
        value={values.weave_height}
        onChange={handleChange('weave_height')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 100,
          step: 0.5
        }}
      />
      <TextField
        required
        id="weave_dir"
        label="Weave Dir"
        className={classes.textField}
        value={values.weave_dir}
        onChange={handleChange('weave_dir')}
        type="number"
        margin="normal"
      />
      <TextField
        required
        id="weave_tilt"
        label="Weave Tilt"
        className={classes.textField}
        value={values.weave_tilt}
        onChange={handleChange('weave_tilt')}
        type="number"
        margin="normal"
      />
      <TextField
        required
        id="weave_ori"
        label="Weave Ori"
        className={classes.textField}
        value={values.weave_ori}
        onChange={handleChange('weave_ori')}
        type="number"
        margin="normal"
      />
      <TextField
        required
        id="dwell_left"
        label="Dwell Left"
        className={classes.textField}
        value={values.dwell_left}
        onChange={handleChange('dwell_left')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 100,
        }}
      />
      <TextField
        required
        id="dwell_center"
        label="Dwell Center"
        className={classes.textField}
        value={values.dwell_center}
        onChange={handleChange('dwell_center')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 100,
        }}
      />
      <TextField
        required
        id="dwell_right"
        label="Dwell Right"
        className={classes.textField}
        value={values.dwell_right}
        onChange={handleChange('dwell_right')}
        type="number"
        margin="normal"
        inputProps={{
          min: 0,
          max: 100,
        }}
      />
      <Button variant="contained" color="primary" className={classes.button} onClick={handleApply}>
        Primary
      </Button>
      
      
{/* </div> */}
    </form>
  );
}