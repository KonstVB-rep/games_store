import React, {memo} from 'react';

const Input = memo((props) => {
  return (
    <label>
      {props.label}
      <input {...props}/>
    </label>
  );
});

export default Input;