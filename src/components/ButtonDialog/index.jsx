import "./button-dialog.css"

export function ButtonDialog ({children, ...rest}) {
    return (
        <button {...rest} className="button-dialog">{children}</button>
    )
}