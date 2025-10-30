import "./text-input.css"

export function TextInput(props) {
    return (
        <input {...props} className="text-input" type="text" />
    )
}