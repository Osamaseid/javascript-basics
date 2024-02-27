var student {
    firstName: osama,
    lastName: seid,
    dept: software,
    fullName:function(){
        console.log("The name of the student");
        return this.firstName + this.lastName;
    }
}
 var sudentInfo = student();
 console.log(studentInfo);
