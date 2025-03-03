import { weekFn } from "./main.js";

it('test day of week Monday', () => {
    expect(weekFn(1)).toBe('Понеділок');
});

it('test day of week Wednesday', () => {
    expect(weekFn(3)).toBe('Середа');
});

it('test day of week Sunday', () => {
    expect(weekFn(7)).toBe('Неділя');
});

it('test not day of week', () => {
    expect(weekFn(9)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
})