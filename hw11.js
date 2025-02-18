function checkPalindrome (word) {
    const massiveWord = word.split('');
    let revWord = [];
    for (let i = 0; i < massiveWord.length; i++) {
        let revLetter = massiveWord[massiveWord.length - i - 1];
        revWord.push(revLetter)
    }
    let string = "";
    for (let i = 0; i < revWord.length; i++) {
        string = string + revWord[i];
        if (string === word) {
            console.log('It is a palindrom');
        } else if (word.length === string.length) {
            console.log('It is not a palindrome');
        }
        
    }
}

checkPalindrome ('word')
checkPalindrome ('mom')


function checkPal (word) {
    const letter = word.split('').reverse().join('');
    if (word === letter) {
        console.log("It is a palindrom");
    } else {
        console.log('It is not a palindrome');
    }
}

checkPal ('word')
checkPal ('mom')