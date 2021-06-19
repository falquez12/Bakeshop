
import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    cantidad: 1,
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState(state.cantidad=event.target.value)
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  useEffect(()=>{
  props.updatecantidad(state.cantidad);
   },[handleChange])
  

  return (
    <FormControl variant="outlined" className={classes.formControl}>
    <InputLabel htmlFor="outlined-age-native-simple">Cantidad</InputLabel>
    <Select
      native
      value={state.age}
      onChange={handleChange}
      label="Age"
      inputProps={{
        name: 'age',
        id: 'outlined-age-native-simple',
      }}
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </Select>
  </FormControl>
  );
}