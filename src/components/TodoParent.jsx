import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TodoItem from "./TodoItem";

export default function TodoParent() {
  const [list, setList] = useState([]);

  function addItem(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const result = {
      todoName: data.get("TodoName"),
      id: Date.now(),
    };
    setList((prev) => [...prev, result]);
    e.target.reset();
  }

  function deleteItem(todoid) {
    if (confirm("Rostan o'chirmoqchimisiz?")) {
      setList((prev) => prev.filter(({ id }) => id !== todoid));
    }
  }

  function editItem(todoid) {
    const todoToEdit = list.find(({ id }) => id === todoid);
    if (todoToEdit) {
      const newTitle = prompt("Edit Todo", todoToEdit.todoName);
      if (newTitle) {
        setList((prev) =>
          prev.map((el) =>
            el.id === todoid ? { ...el, todoName: newTitle } : el
          )
        );
      }
    }
  }

  return (
    <form
      onSubmit={addItem}
      className="flex justify-center items-center flex-col py-10 px-4"
    >
      <div className="grid w-full max-w-sm mb-5 gap-1.5">
        <Label htmlFor="Todo" className="font-semibold text-gray-700">
          Add a Task
        </Label>
        <Input
          type="text"
          id="Todo"
          name="TodoName"
          placeholder="Enter your task"
          required
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="flex flex-col w-full max-w-sm gap-5">
        {list.length > 0 ? (
          list.map(({ todoName, id }) => (
            <li key={id}>
              <TodoItem
                id={id}
                editItem={editItem}
                deleteItem={deleteItem}
                title={todoName}
              />
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No tasks found!</li>
        )}
      </ul>
    </form>
  );
}
