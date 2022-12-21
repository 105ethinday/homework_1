const student = 'Гаврин Кирилл Андреевич'; 

document.getElementById('student').innerHTML = student;


let team1R = prompt ('Введите реальный счет первой команды')

let team2R = prompt ('Введите реальный счет второй команды')

let team1P = prompt ('Введите предпологаемый счет первой команды')

let team2P = prompt ('Введите предпологаемый счет второй команды')


if ((team1R==team1P) && (team2R==team2P)) {
    alert ('Счет был угадан верно');
} else if (
            (team1R>team2R) && (team2P>team2P)
            ||
            (team1R==team2R) && (team1P==team2P)
            ||
            (team1R<team2R) && (team1P<team2P)
        ) {
    alert ('Счет не угадали, но исход угадали');

} else {
    alert ('Ни счета, ни исхода не угадали');
}
