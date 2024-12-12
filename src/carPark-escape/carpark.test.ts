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

            const escapeRoute = carParkInstance.escape(carParkNoCars);

            expect(escapeRoute).toStrictEqual([]);
        });
    });

    describe('levelWithNoStairsScenario', () => {
        test('Given our car park has a level without a staircase, we will receive an array with the value "ERR"', () => {
            const carParkInstance = new CarPark();
            const carParkWithMissingStairs = [
                [1, 0, 0, 0, 2],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];

            const escapeRoute = carParkInstance.escape(carParkWithMissingStairs);

            expect(escapeRoute).toStrictEqual(['ERR']);
        });
    });

    describe('carOnGroundFloorScenario', () => {
        test('Given our car is parked on the ground floor and the escape is 4 spots to the right', () => {
            const carParkInstance = new CarPark();
            const carParkNoCars = [[2, 0, 0, 0, 0]];

            const escapeRoute = carParkInstance.escape(carParkNoCars);

            expect(escapeRoute).toStrictEqual(['R4']);
        });
    });

    describe('carOnEscapeSpotScenario', () => {
        test('Given our car is parked on the ground floor and the car is parked on the escape spot', () => {
            const carParkInstance = new CarPark();
            const carParkNoCars = [[0, 0, 0, 0, 2]];

            const escapeRoute = carParkInstance.escape(carParkNoCars);

            expect(escapeRoute).toStrictEqual(['R0']);
        });
    });

    describe('carOnSecondLevelScenario', () => {
        test('Given our car is parked on the second floor and the stairs is 4 spots on the left', () => {
            const carParkInstance = new CarPark();
            const carParkNoCars = [
                [1, 0, 0, 0, 2],
                [0, 0, 0, 0, 0],
            ];

            const escapeRoute = carParkInstance.escape(carParkNoCars);

            expect(escapeRoute).toStrictEqual(['L4', 'D1', 'R4']);
        });
    });

    describe('carOnFourthLevelScenario', () => {
        test('Given our car is parked on the fourth floor and the stairs on each floor are not in the same position', () => {
            const carParkInstance = new CarPark();
            const carParkNoCars = [
                [1, 0, 0, 0, 2],
                [0, 0, 0, 1, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];

            const escapeRoute = carParkInstance.escape(carParkNoCars);

            expect(escapeRoute).toStrictEqual(['L4', 'D1', 'R3', 'D1', 'L2', 'D1', 'R3']);
        });
    });
});
