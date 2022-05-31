const a = 1;
const b = 2;

const addNumbers = (num1, num2) => {
	return num1 + num2;
}

const addMultiple = (array) => {
	return array.reduce(array);
}

const multiple = (array) => {
	let value = 0;
	array.map((num) => value = value + num)
	return value;
}

console.log(multiple([1,2,3,4,5,6,7,8,9]));

const multipleNums = addMultiple([1,2,3,4,5,6,7,8,9]);

console.log(multipleNums);
console.log(addNumbers(a,b));

// doing things with new multiple
const array1 = [1,2,3,4,5,6,7,8,9];
const array2 = [1,1,1,1,1,1,1,1,1,1];

const addArrays = addNumbers(multiple(array1), multiple(array2));

console.log(addArrays);
console.log(addArrays);
console.log(addArrays);

