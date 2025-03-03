import { weekFn, ageClassification } from "./main.js";

it('day of week Monday', () => {
    expect(weekFn(1)).toBe('Понеділок');
});

it('day of week Wednesday', () => {
    expect(weekFn(3)).toBe('Середа');
});

it('day of week Sunday', () => {
    expect(weekFn(7)).toBe('Неділя');
});

it('not day of week', () => {
    expect(weekFn(9)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
})

it('valid age', () => {
    expect(ageClassification(1)).toBe('Дитинство');
})

it('invalid age', () => {
    expect(ageClassification(-1)).toBeNull();
})