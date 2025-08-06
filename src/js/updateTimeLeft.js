import { formatDistanceToNowStrict } from "date-fns";

export function updateTimeLeft(date) {

    let timeLeft;

    if (date === undefined) {
        timeLeft = "Error"
    }
    else {
        const dueDate = new Date(date);
        timeLeft = formatDistanceToNowStrict(dueDate);
    };
    return timeLeft;
};