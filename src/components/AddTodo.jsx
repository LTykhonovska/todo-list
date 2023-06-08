import { useState } from 'react';
import { AiOutlinePlus, AiOutlineRead } from "react-icons/ai";
import clsx from 'clsx';

function AddTodo({ handleAddTodo }) {
  const [showColorsSelect, setShowColorsSelect] = useState(false);
  const colorsSelect = [
    {
      id: 1,
      color: '#e8dff5'
    },
    {
      id: 2,
      color: '#fce1e4'
    },
    {
      id: 3,
      color: '#fcf4dd'
    },
    {
      id: 4,
      color: '#ddedea'
    },
    {
      id: 5,
      color: '#daeaf6'
    }
  ];

  const onPlusButtonClick = () => {
    setShowColorsSelect(!showColorsSelect);
  }

  const btnClasses = clsx({
    'buttonRotate': showColorsSelect
  })

  return (
    <div className="addTodo">
      <a href="/"><AiOutlineRead/></a>
      <button className={btnClasses} onClick={onPlusButtonClick}><AiOutlinePlus/></button>
      {showColorsSelect &&
        <>
          {colorsSelect.map(({ color, id }) =>
            <button key={id} onClick={() => handleAddTodo(color)} style={{ backgroundColor: color }}/>)}
        </>
      }
    </div>
  );
}

export default AddTodo;