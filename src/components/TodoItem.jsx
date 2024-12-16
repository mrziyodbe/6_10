import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TodoItem({ title, deleteItem, id, editItem }) {
  return (
    <Card className="shadow-lg border rounded-lg p-4 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-end space-x-3">
        <Button
          className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
          onClick={() => deleteItem(id)}
          variant="destructive"
          type="button"
        >
          Delete
        </Button>
        <Button
          className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
          onClick={() => editItem(id)}
          variant="outline"
          type="button"
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
