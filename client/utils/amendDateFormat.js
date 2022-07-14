const amendDateFormat = (date) => {
    const dateIntoArray = date.split('-')
    dateIntoArray.forEach((item, index) => {
        if(item.length === 1) {
            dateIntoArray[index] = '0' + item
        }
    })
    return dateIntoArray.join('-')
}

export default amendDateFormat