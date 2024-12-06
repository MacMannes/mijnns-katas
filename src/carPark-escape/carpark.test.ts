import { describe, expect, it } from 'vitest';
import { CarPark } from './carpark';

describe('noCarScenario', () => {
    it('Given our car park has no car when we call the escape then we will receive an empty array', () => {
        const carParkInstance = new CarPark();
        const carParkNoCars = [
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        const esacapeRoute = carParkInstance.escape(carParkNoCars);
        expect(esacapeRoute).toStrictEqual([]);
    });
});
