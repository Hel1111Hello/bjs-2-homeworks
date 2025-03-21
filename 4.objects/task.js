function Student(name, gender, age) {
    this.age = age;
    this.gender = gender;
    this.name = name;

    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks || !Array.isArray(this.marks)) return;

    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length == 0) return 0;

    return this.marks.reduce((el1, el2) => el1 + el2, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
}