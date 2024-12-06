import { describe, expect, it } from 'vitest';
import { CandyProblem } from './CandyProblem';
//(5, 8, 6, 4) =>  9
//(1, 2, 4, 6) => 11
//(1, 6)       =>  5
//( )          => -1
//(6)          => -1 (because only one kid)
describe('Amount of Candy', () => {
    it('should return -1 if ther is only one kid', () => {
        expect(new CandyProblem().extraCandy([1])).toBe(-1);
    });

    it('should return -1 if there are no children', () => {
        expect(new CandyProblem().extraCandy([])).toBe(-1);
    });

    it('should return 5 when the collection is 1 and 6', () => {
        expect(new CandyProblem().extraCandy([1, 6])).toBe(5);
    });

    it('should return 11 when the collection is 1, 2, 4 and 6', () => {
        expect(new CandyProblem().extraCandy([1, 2, 4, 6])).toBe(11);
    });

    it('should return 9 when the collection is 5, 8, 6 and 4', () => {
        expect(new CandyProblem().extraCandy([5, 8, 6, 4])).toBe(9);
    });
});
