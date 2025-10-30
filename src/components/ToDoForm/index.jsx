import { TextInput } from "../TextInput"
import { ButtonDialog } from "../ButtonDialog"
import "./todoform.css"

export function ToDoForm ({onSubmit, defaultValue}) {
    return (
        <form action={onSubmit} className="form">
            <TextInput placeholder="Digite o item que deseja adicionar" required name ="description" defaultValue = {defaultValue} />
            <ButtonDialog>Salvar Item</ButtonDialog>
        </form>
    )
}