let num = [5, 8, 2, 9, 3];
num.sort();
console.log(`Nosso vetor é o ${num}`);
num[5] = 10;
console.log(`Nosso vetor é o ${num}`);
num.push(15)
console.log(`Nosso vetor é o ${num}`);
console.log(num.length);
console.log(`Nosso vetor é o ${num}`);

for(let i = 0; i < num.length; i++){
    console.log(`O valor do indice é ${i} com valor ${num[i]}`);
}

for(let i in num){
    console.log(`For usando in : ${i} com valor ${num[i]}`);
}

console.log('O index do valor 8 é : ' + num.indexOf(8));


