import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertDialogDemo } from "./Home";

interface Task {
  id: string;
  title: string;
  type: string;
  status: string;
  priority: string;
}

const TaskTable: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const tasks: Task[] = [
    { id: "TASK-8782", title: "Compress the program...", type: "Documentation", status: "In Progress", priority: "Medium" },
    { id: "TASK-7878", title: "Calculate the EXE feed...", type: "Bug", status: "Backlog", priority: "Medium" },
    { id: "TASK-6847", title: "Generating the Driver...", type:"Feature", status: "Done", priority: "Low" },
    { id: "TASK-7887", title: "ByPass the neural Card...", type: "Bug", status: "Todo", priority: "High" },
    { id: "TASK-8778", title: "Program the Back-end THX pixel...", type: "Documentation", status: "Canceled", priority: "Medium" },
  ];

  const handleOpenDialog = (task: Task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedTask(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
      <p className="text-gray-400 mb-6">Here's a list of your tasks for this month!</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700 text-left">Task</th>
              <th className="p-3 border border-gray-700 text-left">Title</th>
              <th className="p-3 border border-gray-700 text-left">Type</th>
              <th className="p-3 border border-gray-700 text-left">Status</th>
              <th className="p-3 border border-gray-700 text-left">Priority</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                <td className="p-3 border border-gray-700">{task.id}</td>
                <td className="p-3 border border-gray-700">{task.title}</td>
                <td className="p-3 border border-gray-700">{task.type}</td>
                <td className="p-3 border border-gray-700">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={task.status} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem
                          value="read-only"
                          onClick={() => handleOpenDialog(task)}
                        >
                          Read-only
                        </SelectItem>
                        <SelectItem value="read-write"
                        onClick={() => handleOpenDialog(task)}
                        >
                          Read-write</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-3 border border-gray-700">{task.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AlertDialog for task confirmation */}
      <AlertDialogDemo
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        task={selectedTask}
      />
    </div>
  );
};

export default TaskTable;
