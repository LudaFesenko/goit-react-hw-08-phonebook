import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterValue } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(setFilterValue(event.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} name="filter" onChange={changeFilter} />
    </Label>
  );
}

export default Filter;
