import { weekFn, ageClassification } from "./main.js";

describe('function weekFn', () => {
    it('return "Понеділок" for value "1"', () => {
        expect(weekFn(1)).toBe('Понеділок');
    });


    it('return "Середа" for value "3"', () => {
        expect(weekFn(3)).toBe('Середа');
    });


    it('return "Неділя" for value "7"', () => {
        expect(weekFn(7)).toBe('Неділя');
    });


    it('return null for value "9" because week have 7 days', () => {
        expect(weekFn(9)).toBeNull();
    })


    it('return null for string value because value can\'t be string', () => {
        expect(weekFn('2')).toBeNull();
    })


    it('return null for value "1.5" because value must be integer', () => {
        expect(weekFn(1.5)).toBeNull();
    })
})


describe('function ageClassification', () => {
    it('return "Дитинство" for value "1"', () => {
        expect(ageClassification(1)).toBe('Дитинство');
    })


    it('return "Молодість" for value "25"', () => {
        expect(ageClassification(25)).toBe('Молодість');
    })


    it('return "Зрілість" for value "45"', () => {
        expect(ageClassification(45)).toBe('Зрілість');
    })


    it('return "null" for value "-1"', () => {
        expect(ageClassification(-1)).toBeNull();
    })


    it('return "null" for value "0"', () => {
        expect(ageClassification(0)).toBeNull();
    })


    it('return "null" for value "125"', () => {
        expect(ageClassification(125)).toBeNull();
    })


    it('return "truth" for "-1 === null"', () => {
        expect(ageClassification(-1) === null).toBeTruthy();
    })


    it('return "truth" for "20 === Дитинство"', () => {
        expect(ageClassification(20) === 'Дитинство').toBeTruthy();
    })
})