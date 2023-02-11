import {React, useState} from 'react';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

export default function Search() {
  const inputProps = useInput();
  return (
    <div className='container'>
        <input className='search' {...inputProps} type="text" name="search" id="search" placeholder='search here...'/><br/>
        <button className='btn btn-warning mt-5'>Search</button><br/>
        <span className='mt-5'>Value: {inputProps.value} </span>
    </div>
    
  )
}
