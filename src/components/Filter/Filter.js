import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterValue } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

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
