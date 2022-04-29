import { InputHTMLAttributes } from 'react'
import './Style/InputText.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string,
    label:string
}

export default function InputText({name, label, ...rest}: InputProps) {
    return (
        <>
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <input id={name} {...rest} />
            </div>
        </>
    )
}