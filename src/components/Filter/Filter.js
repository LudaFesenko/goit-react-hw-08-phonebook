import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

import { setFilterValue } from 'redux/filterSlice';
import { selectFilter } from 'redux/contacts/contacts-selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(setFilterValue(event.currentTarget.value));
  };

  return (
    <TextField
      fullWidth
      label="Find contacts by name"
      type="text"
      value={filter}
      name="filter"
      onChange={changeFilter}
      size="small"
    />
  );
}

export default Filter;
