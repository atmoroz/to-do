import React from "react";
import nextId from "react-id-generator";

import ToDoAdd from "../ToDoAdd/ToDoAdd";
import Task from "../Task/Task";
import "./main.css";

class Main extends React.Component {
  state = {
    tasks: JSON.parse(localStorage.getItem("tasks"))
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
    isEmpty: false
  };

  onClickDeleted = id => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex(el => el.id === id);
      const newTasks = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return {
        tasks: newTasks
      };
    });
  };

  uniqueId = () => {
    const id = nextId("id");
    return id;
  };

  changeTask = e => {
    e.preventDefault();
    const { value } = e.target.elements[0];
    let unId = [];
    let allTasks = [];
    let id = "";

    if (value === "") {
      this.setState({
        isEmpty: true
      });
      return;
    }

    this.setState({
      isEmpty: false
    });

    if (JSON.parse(localStorage.getItem("tasks"))) {
      allTasks = [...JSON.parse(localStorage.getItem("tasks"))];
      for (let key in allTasks) {
        unId.push(allTasks[key].id);
      }
    }

    if (unId.length < 1) {
      id = this.uniqueId();
      unId.push(id);
    } else {
      do {
        id = this.uniqueId();
      } while (unId.includes(id));
      unId.push(id);
    }

    allTasks.push({
      task: value,
      id: id
    });

    localStorage.setItem("tasks", JSON.stringify(allTasks));

    this.setState(prevState => ({
      tasks: [...prevState.tasks, { task: value, id: id }]
    }));

    e.target.elements[0].value = "";
  };

  renderToDo = ({ task, id }) => {
    return (
      <Task
        key={`task=${id}`}
        task={task}
        id={id}
        onClickDeleted={this.onClickDeleted}
      />
    );
  };

  render() {
    const { tasks, isEmpty } = this.state;
    return (
      <section className="toDoMain">
        <ToDoAdd changeTask={this.changeTask} isEmpty={isEmpty} />
        <ol className="toDoNumList">{tasks.map(this.renderToDo)}</ol>
      </section>
    );
  }
}

export default Main;
