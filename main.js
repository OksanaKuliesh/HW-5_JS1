
// task #1

function convert(USD) {
    const exRate = 27;
	console.log(USD * exRate);
}
convert(2);


//task #2
function reverse(str) {
    return str.split("").reverse().join("");
}
reverse('abc');


//task #3
function printStairs() {
    for(var i=1; i<=3; i++)
    console.log("#".repeat(i));
}     
printStairs(3);


//task #4
function sumRange(start, end) {
    let x = start;
    let y = end;
    let sum = 0;
    while(x<=y) {
        sum+=x;
        x++;
        console.log(sum);

    }
}
sumRange(2,4)//9
sumRange(-1,3)//5*/

//task #5
function min(a,b,c) {
    if(a==b==c) console.log('equals');
    const MIN = Math.min(a,b,c);
    console.log(MIN)
}
min(10,5,11)//5
min(3,8,4)//3*/

//task #6
function printPiramid(n) {
    let space, hash, part;

    for (let i = 0; i < n; i++){
        space = n - 1 - i;
        hash = i + n - (n-1-i);
        part = ' '.repeat(space) + '#'.repeat(hash) + ' '.repeat(space);
        console.log(part);    
    }  
}
printPiramid(3);

//task #7
function firstAndLastToUpper(str) {
    return str.charAt(0).toUpperCase() + str.charAt(1) + str.charAt(2).toUpperCase();
}  
console.log(firstAndLastToUpper('abc'));

//task #8
function cursorCheck(str) {
    var lowerStr = str.toLowerCase();
      
    return !!(~lowerStr.indexOf('ostap') || ~lowerStr.indexOf('ironman') || ~lowerStr.indexOf('cursor'));
      
}
console.log(cursorCheck('Hello ostap'));


//task #9
function toUppercase(str) {
    let upper = '';
    for(i = 0; i < str.length; i++) {
        upper += String.fromCharCode(str.charCodeAt(i) & 223);
    }
    return upper;
}
toUppercase('abc') // 'ABC'

//task #10
function removeDuplicationLetters(str) {
    let result = '';

    for(let index = 0; index < str.length; index++) {
        let lower = result.toLowerCase();
        let inStr = str[index].toLowerCase();
        if (str[index] === ' ' || !lower.includes(inStr)) {
            result += str[index];
        }
    }

    return result;
}

console.log(removeDuplicationLetters('Hello I am Iron Man'));
 // 'Helo I am rn '

//task #11
function fibonacci(n) {
    let number;

    if(n >= 2) {
        number = fibonacci(n - 1) + fibonacci(n-2);
    } else if(n<2) {
        number = n
    }

    return number;
}
fibonacci(3) // 2
fibonacci(5) // 5
fibonacci(7) // 13