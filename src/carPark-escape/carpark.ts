export class CarPark {
    escape(carParkNoCars: number[][]) {
        return [];
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
