function countWordOccurrences(sentence: string, word: string): number {
    const wordsList = sentence.toLowerCase().split(" ");
    const targetWord = word.toLowerCase();

    return wordsList.filter(w => w === targetWord).length;
}

const result = countWordOccurrences("I love typescript", "typescript");
console.log(result);