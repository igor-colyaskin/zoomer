export const onPointMouseEnter = (id) => {
    const divCollection = document.querySelectorAll('.point')
    divCollection.forEach((element, index) => {
        if(id === (index + 1)) {
            element.classList.remove('low')
            element.classList.add('high')
        }else{
            element.classList.remove('high')
            element.classList.add('low')
        }
    })
}
