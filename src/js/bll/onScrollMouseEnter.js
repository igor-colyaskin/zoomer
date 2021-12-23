export const onScrollTopMouseEnter = ()=>{
    const container = document.querySelector('.container')
    const coordinatesContainer = container.getBoundingClientRect()

    container.style.top = `${coordinatesContainer.y + 16}px`

    console.log(coordinatesContainer.y)
    // const window = document.querySelector('.window')
    // const coordinatesWindow = window.getBoundingClientRect()
    // console.log(coordinatesWindow.x, coordinatesWindow.y)
}
export const onScrollBottomMouseEnter = ()=>{
    const container = document.querySelector('.container')
    const coordinatesContainer = container.getBoundingClientRect()

    container.style.top = `${coordinatesContainer.y - 16}px`
}