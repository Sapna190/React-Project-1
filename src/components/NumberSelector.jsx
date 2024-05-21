import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelector =  ({setError,error,selectedNumber,setSelectedNumber}) => {
    const arrNumbers = [1,2,3,4,5,6]; 
    
    const numberSelectorHandler = (value) =>{
      setSelectedNumber(value)
      setError("")
    }

    
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
    <div className="flex">
        {arrNumbers.map((value,i) => (
               <Box 
               isSelected= {value == selectedNumber}
               key={i} onClick={() => numberSelectorHandler(value) } >
                {value}
                </Box>
            ))}
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;


.flex{
  display: flex;
  gap: 24px;
}
p{
    font-size: 20px;
    font-weight: 700px;
  }

  .error{
    color: red;
  }

`;

const Box = styled.div`
  height: 65px;
  width: 65px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "White" : "black")};
`;
