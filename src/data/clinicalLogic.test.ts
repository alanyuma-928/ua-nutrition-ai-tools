// CLINICAL_LOGIC_UNIT_TEST
import { describe, it, expect } from 'vitest';
import standards from './clinicalStandards.json';

const calculateIBW = (gender: 'M' | 'F', heightInches: number) => {
    const base = gender === 'M' ? standards.ibw.men.base_lbs : standards.ibw.women.base_lbs;
    const multi = gender === 'M' ? standards.ibw.men.per_inch_lbs : standards.ibw.women.per_inch_lbs;
    const inchesOver5ft = Math.max(0, heightInches - standards.ibw.base_height_inches);
    return base + (multi * inchesOver5ft);
};

const calculateFiberGoal = (kcal: number) => {
    return (kcal / standards.fiber.kcal_unit) * standards.fiber.grams_per_unit;
};

describe('Foods Lab Clinical Math Validation', () => {
    it('validates Hamwi Math (Male: 5\'10")', () => {
        expect(calculateIBW('M', 70)).toBe(166);
    });

    it('validates Hamwi Math (Female: 5\'4")', () => {
        expect(calculateIBW('F', 64)).toBe(120);
    });

    it('validates DGA Fiber Rule (2000 kcal)', () => {
        expect(calculateFiberGoal(2000)).toBe(28);
    });

    it('validates DGA Fiber Rule (2500 kcal)', () => {
        expect(calculateFiberGoal(2500)).toBe(35);
    });
});