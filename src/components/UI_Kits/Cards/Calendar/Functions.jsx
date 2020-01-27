import DisableDayBlock from "./DisableDayBlock";
import DayBlock from "./DayBlock";
import React from "react";

export const getDays = (daysOfTheCurrentMonth, currentDay, currentMonth, currentYear, arr = [], listener, activeDays) => {
    let displayDays = [...arr];
    for (let i = 0; i < 7; i++) { // первая строчка
        if (daysOfTheCurrentMonth[0][i] > 7) {
            displayDays = [...displayDays,
                <DisableDayBlock date={[daysOfTheCurrentMonth[0][i], currentMonth, currentYear]}
                                 key={`${daysOfTheCurrentMonth[0][i]}-${currentMonth}-${currentYear} `}
                />]
        } else {
            displayDays = [...displayDays,
                <DayBlock key={`${daysOfTheCurrentMonth[0][i]}-${currentMonth}-${currentYear}`}
                          date={[daysOfTheCurrentMonth[0][i], currentMonth, currentYear]}
                          currentDay={isCurrentDay(currentDay, daysOfTheCurrentMonth[0][i], currentMonth, currentYear)}
                          isActiveDay={isActiveDay(activeDays, daysOfTheCurrentMonth[0][i],)}
                          listener={listener}/>]
        }
    }
    for (let i = 1; i < 4; i++) {
        daysOfTheCurrentMonth[i].map((day, id) => {
            displayDays = [...displayDays, <DayBlock key={`${id}-${day}-${currentMonth}-${currentYear}`}
                                                     date={[day, currentMonth, currentYear]}
                                                     currentDay={isCurrentDay(currentDay, day, currentMonth, currentYear)}
                                                     isActiveDay={isActiveDay(activeDays, day,)}
                                                     listener={listener}/>];
        })
    }
    for (let i = 4; i < 6; i++) {
        daysOfTheCurrentMonth[i].map((day, id) => {
            if (day < 7) {
                displayDays = [...displayDays, <DisableDayBlock key={`${id}-${day}-${currentMonth}-${currentYear}`}
                                                                date={[day, currentMonth, currentYear]}
                                                                currentDay={isCurrentDay(currentDay, day, currentMonth, currentYear)}
                                                                isActiveDay={isActiveDay(activeDays, day,)}
                                                                listener={listener}/>];
            } else {
                displayDays = [...displayDays, <DayBlock key={`${id}-${day}-${currentMonth}-${currentYear}`}
                                                         date={[day, currentMonth, currentYear]}
                                                         currentDay={isCurrentDay(currentDay, day, currentMonth, currentYear)}
                                                         isActiveDay={isActiveDay(activeDays, day,)}
                                                         listener={listener}/>];
            }
        })
    }
    return displayDays;
};

export const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
};

export const getDayOfTheWeek = (date) => {
    let day = date.split(' ')[0];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (let i = 0; i < 7; i++) {
        if (day === days[i]) return days[i];
    }
};

export const getMonth = (year = 2019, month = 0,) => {
    const dates = [
        [],
        [],
        [],
        [],
        [],
        [],
    ];
    const lastDay = getLastDayOfMonth(year, month);
    const lastDayPrevMont = getLastDayOfMonth(year, month - 1);
    let currentObj = 0;

    for (let i = 1; i <= lastDay; i++) {
        let date = new Date(year, month, i).toString();
        let dayOfTheWeek = getDayOfTheWeek(date);
        dates[currentObj] = [...dates[currentObj], i];
        if (dayOfTheWeek === 'Sun') {
            currentObj += 1;
        }
    }

    if (dates[0].length < 7) {
        let range = 7 - dates[0].length - 1;
        for (let i = range; i >= 0; i--) {
            dates[0] = [lastDayPrevMont - range + i, ...dates[0]];
        }
    }

    if (dates[4].length < 7) {

        let range = 7 - dates[4].length;
        for (let i = 1; i <= range; i++) {
            dates[4] = [...dates[4], i];
        }

    } else if (dates[5].length > 0) {
        let range = 7 - dates[5].length || 1;
        for (let i = 1; i <= range; i++) {
            dates[5] = [...dates[5], i];
        }

    }
    return dates
};

const isCurrentDay = (currentDay, day, month, year) => currentDay[0] === day && currentDay[1] === month && currentDay[2] === year;
const isActiveDay = (activeDays, day) => {
    if (activeDays == null) return false;
    return activeDays[0] === day || activeDays[1] === day;
};

