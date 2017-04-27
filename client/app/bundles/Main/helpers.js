import { padStart } from 'lodash';
import moment from 'moment';
import { default as swal } from 'sweetalert2';

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

export function showWelcomeModal() {
    //first launch alert
    if (!localStorage || !localStorage.launched) {
        localStorage.launched = true;
        swal({
            title: 'Welcome to Times!',
            html: '<b>Track easily the time spent on a task or a project.</b>' +
                '<br><br>We created a session for you. If you want to access this tasks again later, just save the current URL or add this page to your bookmarks.',
            width: 600,
            padding: 100
        });
    }
}
