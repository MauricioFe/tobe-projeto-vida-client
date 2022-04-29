import { InputHTMLAttributes } from "react"
import './Style/InputText.scss'

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    name:string,
    label:string
}
export default function TextArea({name, label, ...rest}: InputProps) {
    return (
        <>
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <textarea id={name} {...rest} />
            </div>
        </>
    )
}