export default function changeItemPosition(array: Array<any>, cardIds: Array<number>) {
    console.log()
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == cardIds[0]) {
            array.splice(0, 0, array.splice(array.indexOf(array[i]), 1)[0])
        } else if (array[i].id == cardIds[1]) {
            array.splice(1, 0, array.splice(array.indexOf(array[i]), 1)[0])
        }
    }
    array.splice(2, array.length - 2)
    return array;
};