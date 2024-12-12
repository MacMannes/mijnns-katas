export class CarPark {
    escape(carPark: number[][]) {
        if (!this.isOurCarInCarPark(carPark)) return [];

        if (this.getNumberOfLevelsWithoutStairs(carPark) > 1) return ['ERR'];

        const floorNumberOfOurCar = carPark.findIndex((level) => level.indexOf(2) >= 0);
        const result: string[] = [];

        let currentPositionOnFloor = carPark[floorNumberOfOurCar].indexOf(2);

        carPark.forEach((level, index) => {
            if (index >= floorNumberOfOurCar) {
                const onBottomFloor = this.isBottomFloor(index, carPark);

                const moveResult = this.moveToStairCaseOrExit(level, currentPositionOnFloor, onBottomFloor);
                result.push(moveResult.move);
                currentPositionOnFloor = moveResult.newPosition;

                if (!onBottomFloor) {
                    result.push(`D1`);
                }
            }
        });
        return result;
    }

    private moveToStairCaseOrExit(level: number[], currentPosition: number, onBottomFloor: boolean): MoveResult {
        const positionToMoveTo = this.getPositionOfStairCaseOrExit(onBottomFloor, level);
        const spacesToMove = positionToMoveTo - currentPosition;
        const direction = positionToMoveTo >= currentPosition ? 'R' : 'L';

        return {
            move: `${direction}${Math.abs(spacesToMove)}`,
            newPosition: positionToMoveTo,
        };
    }

    private getPositionOfStairCaseOrExit(onBottomFloor: boolean, level: number[]) {
        return onBottomFloor ? level.length - 1 : level.indexOf(1);
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

type MoveResult = {
    move: string;
    newPosition: number;
};
