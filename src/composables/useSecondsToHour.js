const turnSecondsToHour = (sec) => {
    const hour = sec / 60 / 60
    const splittedHour = String(hour).split('.')
    const formattedHour = splittedHour[0] == 0 ? splittedHour[1].slice(0,2)+'m' : splittedHour[0]+'h' + splittedHour[1].slice(0,2)+'m'

    return formattedHour
}

export default turnSecondsToHour 