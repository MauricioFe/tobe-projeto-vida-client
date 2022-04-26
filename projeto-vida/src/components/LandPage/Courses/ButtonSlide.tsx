import React, { useState } from "react"

interface Props {
    index: number,
    idCard: Array<number>,
    switchCardsCarousel: (key: Array<number>, event: React.MouseEvent) => void
    activeButton: number
}
export default function ButtonSlide({ index, idCard, switchCardsCarousel, activeButton }: Props) {
    
    return (
        <>
            <span
                id={`button-slide-${index}`}
                className={index == activeButton ? "active" : ""}
                onClick={(event) => {switchCardsCarousel(idCard, event)}}>
            </span>
        </>
    )
}