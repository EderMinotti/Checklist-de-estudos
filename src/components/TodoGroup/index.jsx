import { SubHeading } from "../SubHeading";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";

export function TodoGroup({ itens, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {itens
          .map(function (t) {
            return (
              <ToDoItem
                key={t.id}
                item={t}
              />
            );
          })}
      </ToDoList>
    </>
  );
}
