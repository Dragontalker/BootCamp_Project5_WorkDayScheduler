$(document).ready(() => {
    // Feature: save the input into local storage to make it appear after refresh
    for (i = 9; i < 18; i++) {
        let time = `${i}:00`;
        let ipt = `#Ipt-${i}`;
        let btn = `#Btn-${i}`;
        $(ipt).val(localStorage.getItem(time));
        $(btn).on('click', () => {
            let event = $(ipt).val();
            localStorage.setItem(time, event);
        })
    }
})