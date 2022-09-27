const person = {name:'Jack Williams', age:17, job:'facebooker', gfName:'Emma Watson', friends:['Tom Hancks', 'Tom curise'], phone:'01717112211'};

// const phone = person.phone
// const gfName = person.gfName;

const { phone, gfName } = person;

console.log(phone);
console.log(gfName);

const complexObject = {
    name:'abc',
    info:{
        leader:'leader',
        address: 'kolabagan'
    }
}

const {leader} = complexObject.info;
console.log(leader);

