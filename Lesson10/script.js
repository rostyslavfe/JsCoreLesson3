// Завдання №1
let copyArray = [];
function arrCopy(arr) {
    for(i=0;i<arr.length;i++){
        copyArray[i] = arr[i];
    }
    return copyArray
}

const arr3 = arrCopy([1,2,3]); 
console.log(arr3)
const arr4 = arrCopy([1,2,3,[10,20]])
console.log(arr4);


// Завдання №2
function arrToString(arr){
    for(i=0; i<arr.length; i++){
        arr[i] = arr[i].toString();
    }
    return arr
}

const arr1 = arrToString([1,2,3]);
const arr2 = arrToString([10,200,3333]) ;
console.log (arr1, arr2)


// Завдання №3
function getLength(arr){
    for(i=0; i<arr.length; i++){
        arr[i] = arr[i].length;
    }
    return arr
}

console.log(getLength(['Oleksiy', 'Andriana']))


// Завдання №4
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
const arr5 = removeDuplicates(['html','css','html','js']);
const arr6 = removeDuplicates(['html','css','js','html','js','python','js','scss'])
console.log(arr5);
console.log(arr6);