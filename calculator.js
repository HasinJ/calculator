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

function power(first,second){
    let sum=1;
    for(i=0;i<second;i++){
        sum*=first;
    }
    return sum;
}

function factorial(number){
    if(number==0 || number==1) return 1;
    let sum=number*(number-1);
    for(i=number-2;i>1;i--){
        sum=(sum)*(i);
    }
    return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
