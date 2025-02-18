
function checkPal (word) {
    const letter = word.split('').reverse().join();
    if (word === letter) {
        console.log("It is a palindrom");
    } else {
        console.log('It is not a palindrome');
    }
}

checkPal ('word')