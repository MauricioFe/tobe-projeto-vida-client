import { ButtonHTMLAttributes } from "react"
import './Style/Buttons.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export default function Button({ label, ...rest }: ButtonProps) {
    return (
        <>
            <button {...rest}>
                {label}
            </button>
        </>
    )
}