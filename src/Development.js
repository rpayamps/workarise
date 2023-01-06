import React from 'react';
import { useState, useEffect } from 'react'
import StatusLine from "./StatusLine";

function Development() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      loadTasksFromLocalStorage();
    }, []);
  
    function addEmptyTask(status) {
      const lastTask = tasks[tasks.length - 1];
  
      let newTaskId = 1;
  
      if (lastTask !== undefined) {
        newTaskId = lastTask.id + 1;
      }
  
      setTasks((tasks) => [
        ...tasks,
        {
          id: newTaskId,
          title: "",
          description: "",
          urgency: "",
          status: status,
        },
      ]);
    }
  
    function addTask(taskToAdd) {
      let filteredTasks = tasks.filter((task) => {
        return task.id !== taskToAdd.id;
      });
  
      let newTaskList = [...filteredTasks, taskToAdd];
  
      setTasks(newTaskList);
  
      saveTasksToLocalStorage(newTaskList);
    }
  
    function deleteTask(taskId) {
      let filteredTasks = tasks.filter((task) => {
        return task.id !== taskId;
      });
  
      setTasks(filteredTasks);
  
      saveTasksToLocalStorage(filteredTasks);
    }
  
    function moveTask(id, newStatus) {
      let task = tasks.filter((task) => {
        return task.id === id;
      })[0];
  
      let filteredTasks = tasks.filter((task) => {
        return task.id !== id;
      });
  
      task.status = newStatus;
  
      let newTaskList = [...filteredTasks, task];
  
      setTasks(newTaskList);
  
      saveTasksToLocalStorage(newTaskList);
    }
    
    //developmentTasks is the unquie key for this components data
    function saveTasksToLocalStorage(tasks) {
      localStorage.setItem("developmentTasks", JSON.stringify(tasks));
    }
  
    function loadTasksFromLocalStorage() {
      let loadedTasks = localStorage.getItem("developmentTasks");
  
      let tasks = JSON.parse(loadedTasks);
  
      if (tasks) {
        setTasks(tasks);
      }
    }
  
    return (
      <div className="App">
        <main>
        <h4>Development</h4>
          <section>
            <StatusLine
              tasks={tasks}
              addEmptyTask={addEmptyTask}
              addTask={addTask}
              deleteTask={deleteTask}
              moveTask={moveTask}
              status="Backlog"
            />
            <StatusLine
              tasks={tasks}
              addEmptyTask={addEmptyTask}
              addTask={addTask}
              deleteTask={deleteTask}
              moveTask={moveTask}
              status="In Progress"
            />
            <StatusLine
              tasks={tasks}
              addEmptyTask={addEmptyTask}
              addTask={addTask}
              deleteTask={deleteTask}
              moveTask={moveTask}
              status="Done"
            />
          </section>
        </main>
      </div>
    );
}
export default Development;