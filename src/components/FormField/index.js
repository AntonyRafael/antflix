import React from 'react';
import styled from 'styled-components';

const Main = styled.input`
  display:block;
  height: 40px;
  width: 50%;
  margin: 10px;
  background-color: #ccc;
`;

function FormField({ label, type, value, name, onChange }) {
  return (
    <div>
      <label>
        {label}:

        <Main

          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;