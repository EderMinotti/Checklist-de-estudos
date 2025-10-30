import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { Dialog } from "./components/Dialog";
import { use } from "react";
import { ToDoForm } from "./components/ToDoForm";
import ToDoContext from "./components/ToDoProvider/ToDoContext";
import { TodoGroup } from "./components/TodoGroup";
import { EmpyState } from "./components/EmpyState";

function App() {
  const {
    todos,
    addTodo,
    showDialog,
    openFormTodoDialog,
    closeFormTodoDialog,
    selectedTodo,
    editTodo,
  } = use(ToDoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else {
      addTodo(formData);
    }
    closeFormTodoDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para estudar"
            itens={todos.filter((t) => !t.completed)}
          />
        {todos.length === 0 && <EmpyState/>}
          <TodoGroup
            heading="Concluido"
            itens={todos.filter((t) => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              />
            </Dialog>
            <FabButton onClick={()=> openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
