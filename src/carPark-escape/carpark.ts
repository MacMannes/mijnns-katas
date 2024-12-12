export class CarPark {
    escape(carPark: number[][]) {
        if (!this.isOurCarInCarPark(carPark)) return [];

        if (this.getNumberOfLevelsWithoutStairs(carPark) > 1) return ['ERR'];

        const floorNumberOfOurCar = carPark.findIndex((level) => level.indexOf(2) >= 0);
        const result: string[] = [];

        let positionOnFloor = carPark[floorNumberOfOurCar].indexOf(2);

        carPark.forEach((level, index) => {
            if (index >= floorNumberOfOurCar) {
                const positionOfStaircase = this.isBottomFloor(index, carPark) ? level.length : level.indexOf(1);

                if (this.isBottomFloor(index, carPark)) {
                    const spacesToMove = positionOfStaircase - positionOnFloor - 1;
                    result.push(`R${spacesToMove}`);
                } else {
                    const spacesToMove = positionOfStaircase - positionOnFloor;
                    const direction = positionOfStaircase > positionOnFloor ? 'R' : 'L';

                    result.push(`${direction}${Math.abs(spacesToMove)}`);
                    result.push(`D1`);

                    positionOnFloor = positionOfStaircase;
                }
            }
        });
        return result;
    }

    private isBottomFloor(index: number, carPark: number[][]) {
        return index === carPark.length - 1;
    }

    private isOurCarInCarPark(carPark: number[][]) {
        return carPark.flat().indexOf(2) >= 0;
    }

    private getNumberOfLevelsWithoutStairs(carPark: number[][]) {
        return carPark.filter((level) => level.indexOf(1) === -1).length;
    }
}
