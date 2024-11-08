const arrList: number[] = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(numbersList: number[]): number[] {
    return numbersList.filter((item, index) => numbersList.indexOf(item) === index);
}

console.log(removeDuplicates(arrList));