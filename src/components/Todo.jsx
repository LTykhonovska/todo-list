import {useState} from 'react';
import { AiFillDelete, AiFillEdit, AiFillStar, AiOutlineCheck } from "react-icons/ai";
export default function Todo({ id, text, date, isFav, bgColor, handleDeleteButtonClick, handleTodoTextChange, handleFavTodoClick }) {
  const [editTodoStatus, setEditTodoStatus] = useState(false);
  const [textareaValue, setTextareaValue] = useState(text);

  const  onEditButtonClick = () => {
    setEditTodoStatus(!editTodoStatus);

    if(editTodoStatus) {
      handleTodoTextChange(id, textareaValue);
    }
  }

  const onTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  }

  return (
    <div className="todo" style={{backgroundColor: bgColor}}>
      <div className="todoText">
        {editTodoStatus
          ?
          <textarea
            onChange={onTextareaChange}
            value={textareaValue}
            type="text">{text}</textarea>
          :
          <div>{text}</div>
        }
        <p>{date}</p>
      </div>
      <div className="todoNav">
        <button onClick={() => handleFavTodoClick(id)} style={isFav ? {color: "#ffdf3a"} : {}}><AiFillStar/></button>
        <button onClick={onEditButtonClick}>{editTodoStatus ? <AiOutlineCheck/> : <AiFillEdit/>}</button>
        <button onClick={() => handleDeleteButtonClick(id)}><AiFillDelete/></button>
      </div>
    </div>
  );
}
