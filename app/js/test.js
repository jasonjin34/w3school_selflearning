document.getElementById("demo").innerHTML = "Hello Nimo";


//split test function
function fSplittext() {
    var str = "a,b,c,d,e,f";
    var str_array = str.split(",");
    var str_add = "";
    for (var i = 0; i < 5; i++) {
        str_add += str_array[i];
    }
    document.getElementById("split").innerHTML = str_add;
}

//filter 
var ages = [32,33, 12,48];
function checkAdult(age){
    return age >= document.getElementById("ageTocheck").value;
}

function filterfunction(){
    document.getElementById("filter").innerHTML = ages.filter(checkAdult);
}

var words = ['spray','limit', 'elite','exuberant', 'destruction','present'];

function selecttext(words){
    return words.length > 6;
}

function filter_mdn(){
    document.getElementById("filter2").innerHTML = words.filter(selecttext);
}

//JavaScript Array reduce() method
var numbers = [65, 44, 12, 4];

function getSum(total, currentvalue) {
    return total - currentvalue;
}

function fReduce() {
    document.getElementById("reduce").innerHTML = numbers.reduce(getSum, -1);
}



//String Length
var txt = "ABCDE";
console.log(txt.length);

//Special Characters
var teststring = "Vikings";
var y = "We are the so-called" + teststring + "from the north";
console.log(y);

//JavaScript string methods
var str = "Please the locate where 'locate' occurs!";
console.log(str.indexOf("locate"));

var str = "please locate where 'locate' occurs !";
var pos = str.indexOf("locate", 15);
console.log(str.search("locate"));

//Extracting string parts

var str = "apple, banana, kiwi";
var res = str.slice(7);
console.log(str);

//replacing string content
var n = str.replace("apple", "orange");
console.log(n);

str = "I hate apple and apple";
console.log(str.replace(/apple/g, "orange"));

var sTest = "i hate Apple and aPPLE";
console.log(sTest.replace(/apple/gi, "orange"));
console.log(sTest.toUpperCase());

var text1 = "hello";
var text2 = "world";
console.log(text1.concat(" ", text2));


//Converting a string to an array
var txt = "a,b,c,d,e";
var array_txt = txt.split(",");
for (var i = 0; i < 5; i++) {
    console.log(array_txt[i]);
}

console.log(Math.floor(Math.random()*10)); //

for(var i = 0; i < 10; i++)
{
    console.log(Math.random());
}

console.log(Math.floor(Math.random()*100)+1);

