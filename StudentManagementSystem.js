
var numberOfStudent = 0 
var students = []
function addStudent (name) {
   students.push(name) 
   return numberOfStudent++
   
}
function getNumberOfStudent() {
    return numberOfStudent
}
addStudent('Zeineb')
addStudent('Kooli')
addStudent('karoui')
addStudent('belghith')
addStudent('rayen')

function clearStudents (){
    for (i=0;i<5;i++){
    students.pop()
    numberOfStudent-- }
} 

function createFullName (firstName, lastName){
    return 'my name is: $(firstName) $(lastName)' 
}
createFullName ('Ahmed', 'Belghith')

console.log(students) 
getNumberOfStudent() 
clearStudents()
console.log(students)
getNumberOfStudent()