import { describe, expect, test } from 'vitest';
import { CarPark } from './carpark';

describe('CarPark Escape Kata', () => {
    // describe('CarPark Escape Acceptance', () => {
    //     test('Escape carpark from the first floor', () => {
    //         const carParkInstance = new CarPark();
    //         const carParkAcceptance = [
    //             [1, 0, 0, 0, 2],
    //             [0, 0, 0, 0, 0],
    //         ];
    //         expect(carParkInstance.escape(carParkAcceptance)).toEqual(['L4', 'D1', 'R4']);
    //     });
    // });

    describe('noCarScenario', () => {
        test('Given our car park has no car when we call the escape then we will receive an empty array', () => {
            const carParkInstance = new CarPark();
            const carParkNoCars = [
                [1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            const esacapeRoute = carParkInstance.escape(carParkNoCars);
            expect(esacapeRoute).toStrictEqual([]);
        });
    });
});
