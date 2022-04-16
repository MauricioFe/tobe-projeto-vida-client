interface Props {
    index: number,
    idCard: Array<number>,
    switchCardsCarousel: (key: Array<number>) => void
}
export default function ButtonSlide({ index, idCard, switchCardsCarousel }: Props) {
    return (
        <>
            <span
                id={`button-slide-${index}`}
                className={index == 0 ? "active" : ""}
                onClick={() => {switchCardsCarousel(idCard)}}>
            </span>
        </>
    )
}