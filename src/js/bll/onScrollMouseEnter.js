export const onScrollUpMouseEnter = ()=>{
    const container = document.querySelector('.container')
    const coordinatesContainer = container.getBoundingClientRect()

    container.style.top = `${coordinatesContainer.y + 4}px`

    console.log(coordinatesContainer.x, coordinatesContainer.y)
    // const window = document.querySelector('.window')
    // const coordinatesWindow = window.getBoundingClientRect()
    // console.log(coordinatesWindow.x, coordinatesWindow.y)
}
export const onScrollDownMouseEnter = ()=>{
    console.log('down scroll')
}