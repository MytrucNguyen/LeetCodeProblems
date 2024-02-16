function isPalindrome(s: string): boolean {
    let sentenceIntoOneLongWord: string;
    let reverseSentenceIntoOneLongWord: string = "";

    sentenceIntoOneLongWord = s.replace(/[\W_]+/g, "").toLowerCase();

    for (let i = sentenceIntoOneLongWord.length - 1; i >= 0; i--) {
        reverseSentenceIntoOneLongWord += sentenceIntoOneLongWord[i];
    }

    return sentenceIntoOneLongWord === reverseSentenceIntoOneLongWord;
};

