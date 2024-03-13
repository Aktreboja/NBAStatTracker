
/**
 * @description Takes today's date and calculates 2 weeks prior
 * @returns {string} Date from 2 weeks in the format (YYYY-MM-DD)
 */
export const calculateDaysBefore = (days: number) => {
    // Get today's date
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()
    let dayDifferential = day - days

    // Check if the date is past the previous
    if (dayDifferential < 0) {
        // Set to the new month
        let alteredDate = new Date(today.setDate(today.getDate() + dayDifferential))
        year = alteredDate.getFullYear()
        month = alteredDate.getMonth() + 1
        day = alteredDate.getDate()
    }
    return `${year}-${month > 10 ? month : `0${month}`}-${day}`
}