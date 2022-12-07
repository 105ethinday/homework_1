const student = 'Гаврин Кирилл Андреевич'; 

document.getElementById('student').innerHTML = student;


let TEAM1A = prompt ('Введите реальный счет первой команды')

let TEAM2A = prompt ('Введите реальный счет второй команды')

let TEAM1B = prompt ('Введите предпологаемый счет первой команды')

let TEAM2B = prompt ('Введите предпологаемый счет второй команды')


if ((TEAM1A==TEAM1B) && (TEAM2A==TEAM2B))
{alert ('Счет был угадан верно');}

else if ((TEAM1A>TEAM2A) && (TEAM1B>TEAM2B))
{alert ('Счет не угадали, но исход угадали');}

else if ((TEAM1A==TEAM2A) && (TEAM1B==TEAM2B))
{alert ('Счет не угадали, но исход угадали');}

else if ((TEAM1A<TEAM2A) && (TEAM1B<TEAM2B))
{alert ('Счет не угадали, но исход угадали');}

else 
{alert ('Ни счета, ни исхода не угадали');}
