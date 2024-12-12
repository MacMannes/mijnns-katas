export class CarPark {
    escape(carPark: number[][]) {
        if (!this.isOurCarInCarPark(carPark)) return [];

        if (this.getNumberOfLevelsWithoutStairs(carPark) > 1) return ['ERR'];

        const floorNumberOfOurCar = carPark.findIndex((level) => level.indexOf(2) >= 0);
        const numberOfLevels = carPark.length;
        const result: string[] = [];

        let positionOnFloor = carPark[floorNumberOfOurCar].indexOf(2);

        carPark.forEach((level, index) => {
            if (index >= floorNumberOfOurCar) {
                if (index < numberOfLevels - 1) {
                    const positionOfStaircase = level.indexOf(1);
                    const spacesToMove = positionOfStaircase - positionOnFloor;
                    const direction = positionOfStaircase > positionOnFloor ? 'R' : 'L';
                    result.push(`${direction}${Math.abs(spacesToMove)}`);
                    result.push(`D1`);
                    positionOnFloor = positionOfStaircase;
                } else {
                    const numberOfSpaces = level.length;
                    const spacesToMove = numberOfSpaces - positionOnFloor - 1;
                    result.push(`R${spacesToMove}`);
                }
            }
        });
        return result;
    }

    private isOurCarInCarPark(carPark: number[][]) {
        return carPark.flat().indexOf(2) >= 0;
    }

    private getNumberOfLevelsWithoutStairs(carPark: number[][]) {
        return carPark.filter((level) => level.indexOf(1) === -1).length;
    }
}
