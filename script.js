function palindrome(input){
    const charCounts = {};
    let display = "";
    for(const ch of input.toLowerCase()) {
        if(/[*a-z0-9]/.test(ch)){
            continue;
        }
        display += ch;
        if(charCounts[ch]){
            charCounts[ch] += 1;
        } else {
            charCounts[ch] = 1;
        }
    }
    let oddCounts = 0;
    for(const prop in charCounts) {
        if(charCounts[prop] % 2 === 1) {
            oddCounts += 1;
        }
    }
    console.log(charCounts);
    console.log(oddCounts > 1 ? false : true);

    if(oddCounts > 1 || input == "") {
        console.log(display + oddCounts);
    } else {
        console.log(display + charCounts);
    }
}
