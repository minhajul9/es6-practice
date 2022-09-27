class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Academy Laboratory School';
    }
}

const student1 = new Student(12, 'Kamal');
const student2 = new Student(22, 'Hamim');
const student3 = new Student(29, 'Bob')
console.log(student1.name, student2.id);
console.log(student3);