export class CarPark {
    escape(carPark: number[][]) {
        if (this.isOurCarInCarPark(carPark)) return [];

        if (this.getNumberOfLevelsWithoutStairs(carPark) > 1) return ['ERR'];

        const numberOfLevels = carPark.length;
        const result: string[] = [];

        let position = carPark[0].indexOf(2);

        carPark.forEach((level, index) => {
            if (index < numberOfLevels - 1) {
                const positionOfStaircase = level.indexOf(1);
                const spacesToMove = positionOfStaircase - position;
                const direction = positionOfStaircase > position ? 'R' : 'L';
                result.push(`${direction}${Math.abs(spacesToMove)}`);
                result.push(`D1`);
                position = positionOfStaircase;
            } else {
                const numberOfSpaces = level.length;
                const spacesToMove = numberOfSpaces - position - 1;
                result.push(`R${spacesToMove}`);
            }
        });
        return result;
    }

    private isOurCarInCarPark(carPark: number[][]) {
        return carPark.flat().indexOf(2) === -1;
    }

    private getNumberOfLevelsWithoutStairs(carPark: number[][]) {
        return carPark.filter((level) => level.indexOf(1) === -1).length;
    }
}
