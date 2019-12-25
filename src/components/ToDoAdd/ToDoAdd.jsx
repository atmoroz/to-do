import React from "react";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class ToDoAdd extends React.Component {
  render() {
    const { changeTask, isEmpty } = this.props;
    let styleIsEmpty = "toDoForm";
    if (isEmpty) {
      styleIsEmpty += " toDoFormIsEmpty";
    }
    return (
      <form
        className="toDoForm"
        noValidate
        autoComplete="off"
        onSubmit={changeTask}
      >
        <Input
          className={styleIsEmpty}
          inputProps={{ "aria-label": "description" }}
          type="text"
          name="task"
          placeholder="Add new task"
          fullWidth={false}
        />
        <Button variant="outlined" size="medium" type="submit">
          Add task
        </Button>
      </form>
    );
  }
}

export default ToDoAdd;
