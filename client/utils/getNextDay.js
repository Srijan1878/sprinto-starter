export const getNextDay = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1
    let day = new Date().getDate() + 1
    let dateNotationsArray = [year, month, day]
    dateNotationsArray.forEach((item, index) => {
        if (item < 10) {
            dateNotationsArray[index] = '0' + item
        }
    })
    return dateNotationsArray.join('-')
}