export class CarPark {
    escape(carPark: number[][]) {
        if (carPark.flat().indexOf(2) === -1) return [];

        const numberOfLevels = carPark.length;

        if (numberOfLevels === 1) {
            const numberOfSpaces = carPark[0].length;
            const position = carPark[0].indexOf(2);
            const spacesToMove = numberOfSpaces - position - 1;
            return [`R${spacesToMove}`];
        }

        const result = [];
        if (numberOfLevels === 2) {
            const positionOfStaircase = carPark[0].indexOf(1);
            const position = carPark[0].indexOf(2);
            let spacesToMove = positionOfStaircase - position;
            const direction = positionOfStaircase > position ? 'R' : 'L';
            result.push(`${direction}${Math.abs(spacesToMove)}`);
            result.push(`D1`);
            const numberOfSpaces = carPark[0].length;
            spacesToMove = numberOfSpaces - positionOfStaircase - 1;
            result.push(`R${spacesToMove}`);
        }

        //sneak preview

        carPark.forEach((level, index) => {
            // magic
        });
        return result;
    }

    /**
     * Pseudo code:
     *
     * - Count the number of levels
     * - Determine the position of your car
     * - Determine position of staircase
     * - Determine which level we are on
     * - Determine how many floors we need to go down
     *  - If it's 0, go to the exit
     *  - Determine your position to the staircase
     *
     * More examples
     * [[1, 0, 0, 0, 2],
     * [[1, 0, 0, 0, 0],
     * [[1, 0, 0, 0, 0],
     * [[1, 0, 0, 0, 0],
     * [[1, 0, 0, 0, 0],
     * [[1, 0, 0, 0, 0],
     * [[0, 0, 0, 0, 0]] Should return ['L4', 'D1', 'D1', 'D1', 'D1', 'D1', 'D1', 'R4']
     *
     * [
     *  [0, 0, 2, 1, 0],
     *  [0, 0, 0, 0, 0]
     * ] Should return ['R1', 'D1', 'R1']
     *
     * [[0, 0, 0, 0, 0]] Should return []
     */
}
