export class CandyProblem {
    constructor() {}

    public extraCandy(candyCollection: number[]) {
        if (!candyCollection.length || candyCollection.length === 1) {
            return -1;
        }

        const max = Math.max(...candyCollection);
        let results = 0;

        candyCollection.forEach((element) => {
            results += max - element;
        });

        return results;
    }
}
