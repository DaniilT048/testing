export function weekFn(day) {
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


export function ageClassification(age) {
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