import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length == 0) {
    return (
      <div>
        <h1 className="text-white text-4xl font-bold text-center">
          No hay tareas aun
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </div>
  );
}

export default TaskList;