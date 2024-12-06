import { describe, expect, it } from 'vitest';
import { ATM } from './atm-assignment';

describe('ATM', () => {
    const atm = new ATM();

    it('should return -1 when smaller than 10', () => {
        const result = atm.withdraw(9);
        expect(result).toBe(-1);
    });

    it('should return -1 when bigger than 1500', () => {
        const result = atm.withdraw(1501);
        expect(result).toBe(-1);
    });

    it('should return 1 when withdrawing 500', () => {
        const result = atm.withdraw(500);
        expect(result).toBe(1);
    });
});
