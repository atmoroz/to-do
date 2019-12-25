import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

import "./task.css";

class Task extends React.Component {
  state = {
    isChecked: false
  };

  onCheckedTask = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }));
  };

  render() {
    const { task, id, onClickDeleted } = this.props;
    const { isChecked } = this.state;
    let classNameToDoList = "toDoList";
    if (isChecked) {
      classNameToDoList += " toDoList toDoListChecked";
    }

    return (
      <div className="toDoListWrapper">
        <li className={classNameToDoList} id={id}>
          <p>{task}</p>
        </li>
        <div className="toDoListButton">
          <Checkbox
            onClick={this.onCheckedTask}
            color="default"
            value="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <DeleteIcon onClick={() => onClickDeleted(id)} />
        </div>
      </div>
    );
  }
}

export default Task;
