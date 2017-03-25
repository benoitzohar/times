import { padStart } from 'lodash';
import moment from 'moment';

export function millisecondDurationToHumanReadableString(ms) {
    const duration = moment.duration(ms);

    const seconds = duration.seconds();
    const minutes = duration.minutes();
    const hours = duration.hours();
    const days = duration.days();

    let elapsed = [hours, minutes, seconds]
        .map(time => padStart(time, 2, 0))
        .join(':');

    if (days > 0) {
        elapsed = days + ' day' + (days > 1 ? 's' : '') + ' and ' + elapsed;
    }

    return elapsed;
}
