$(document).ready(() => {
    for (i = 9; i < 17; i++) {
        let ipt = "#Ipt-" + i;
        let btn = "#Btn-" + i;
        $(btn).on('click', () => {
            console.log(`'The saved value is ${$(ipt).val()}.`);
        })
    }
})