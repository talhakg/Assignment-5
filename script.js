// task 1
function weather(month, day) {

    if ((month == 12 && day >= 15) || month <= 2 || (month == 3 && day <= 25)) {
        return "The current season is Winter"; }

    if (month == 4 || month == 5) {
        return "The current season is Spring"; }

    if ((month >= 6 && month <= 8) || (month == 9 && day <= 15)) {
        return "The current season is Summer"; }

    if ((month >= 10 && month <= 11) || (month == 9 && day >= 16)) {
        return "The current season is Fall"; }

    return "Unknown"; }

// task 2
function isPerfectSquare(arg) {
    let root = Math.sqrt(arg)
        if (Number.isInteger(root)) {
            return "Integer " + arg + " is Perfect Square"
        } else {
            return "Integer " + arg + " is NOT Perfect Square" } }