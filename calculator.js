function add (first,second) {
	return first + second;
}

function subtract (first,second) {
	return first-second;
}

function sum(array){
    let sum = array.reduce((total,number) => {
        return total+=number;
    },0);
    return sum;
}

function multiply(array){
    let sum = array.reduce((total,number) => {
        return total*=number;
    },1);
    return sum;
}

function power() {

}

function factorial() {

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
