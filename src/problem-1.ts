const sumArrayList: number[] = [1, 2, 3, 4, 5];

function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumArray(sumArrayList));
