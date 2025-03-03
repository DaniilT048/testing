function weekFn(day) {
    switch (day) {
        case 1 : return 'Понеділок';
        case 2 : return 'Вівторок';
        case 3 : return 'Середа';
        case 4 : return 'Четверг';
        case 5 : return 'П\'ятниця';
        case 6 : return 'Субота';
        case 7 : return 'Неділя';
        default : return null;
    }
}


// console.log(weekFn(1))   // 'Понеділок'
// console.log(weekFn(3))   // 'Середа'
// console.log(weekFn(7))   // 'Неділя'
// console.log(weekFn(9))   // null
// console.log(weekFn(1.5)) // null
// console.log(weekFn('2')) // null


function ageClassification(age) {
    switch (true) {
        case age <=0: return null;
        case age <= 24: return 'Дитинство';
        case age > 24 && age <= 44: return 'Молодість';
        case age > 44 && age <= 65: return 'Зрілість';
        case age > 65 && age <= 75: return 'Старість';
        case age > 75 && age <= 90: return 'Довголіття';
        case age > 90 && age <= 122: return 'Рекорд';
        case age > 122 : return null;
    }
}

// console.log('    -1 :', ageClassification(-1)) // -1 : null
// console.log('     0 :', ageClassification(0)) // 0 : null
// console.log('     1 :', ageClassification(1)) // 1 : Дитинство
// console.log('    24 :', ageClassification(24)) // 24 : Дитинство
// console.log(' 24.01 :', ageClassification(24.01)) // 24.01 : Молодість
// console.log('    44 :', ageClassification(44)) // 44 : Молодість
// console.log(' 44.01 :', ageClassification(44.01)) // 44.01 : Зрілість
// console.log('    65 :', ageClassification(65)) // 65 : Зрілість
// console.log('  65.1 :', ageClassification(65.1)) // 65.1 : Старість
// console.log('    75 :', ageClassification(75)) // 75 : Старість
// console.log(' 75.01 :', ageClassification(75.01)) // 75.01 : Довголіття
// console.log('    90 :', ageClassification(90)) // 90 : Довголіття
// console.log(' 90.01 :', ageClassification(90.01)) // 90.01 : Рекорд
// console.log('   122 :', ageClassification(122)) // 122 : Рекорд
// console.log('122.01 :', ageClassification(122.01)) // 122.01 : null
// console.log('   150 :', ageClassification(150)) // 150 : null
//
//
// console.log ('Блок тестирования, везде должны быть true:')
//
// console.log('    -1 :', ageClassification(-1) === null); // -1 : null
// console.log('     0 :', ageClassification(0) === null) // 0 : null
// console.log('     1 :', ageClassification(1) === 'Дитинство'); // 1 : Дитинство
// console.log('    24 :', ageClassification(24) === 'Дитинство'); // 24 : Дитинство
// console.log(' 24.01 :', ageClassification(24.01) === 'Молодість'); // 24.01 : Молодість
// console.log('    44 :', ageClassification(44) === 'Молодість'); // 44 : Молодість
// console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість'); // 44.01 : Зрілість
// console.log('    65 :', ageClassification(65) === 'Зрілість'); // 65 : Зрілість
// console.log('  65.1 :', ageClassification(65.1) === 'Старість'); // 65.1 : Старість
// console.log('    75 :', ageClassification(75) === 'Старість'); // 75 : Старість
// console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття'); // 75.01 : Довголіття
// console.log('    90 :', ageClassification(90) === 'Довголіття'); // 90 : Довголіття
// console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд'); // 90.01 : Рекорд
// console.log('   122 :', ageClassification(122) === 'Рекорд'); // 122 : Рекорд
// console.log('122.01 :', ageClassification(122.01) === null); // 122.01 : null
// console.log('   150 :', ageClassification(150) === null); // 150 : null