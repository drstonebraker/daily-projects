function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function name() {
  return `${this.fname} ${this.lname}`;
};

Student.prototype.enroll = function enroll(course) {

  if (this.hasConflict(course)) {
    throw "This course conflicts with an existing course";
  }

  this.courses.push(course);

};

Student.prototype.hasConflict = function hasConflict(course) {
  let courseConflict = false;
  for (let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(course)) {
      courseConflict = true;
    }
  }
  return courseConflict;
};

Student.prototype.courseload = function courseload() {
  const load = {};

  this.courses.forEach((course) => {
    load[course.department] = load[course.department] || 0;
    load[course.department] += course.credits;
  });

  return load;
};

function Course(name, department, credits, days, timeBlock) {
  this.name = name;
  this.department = name;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.timeBlock = timeBlock;
}

Course.prototype.addStudent = function addStudent(student) {
  this.students.push(student);
  student.enroll(this);
};

Course.prototype.conflictsWith = function conflictsWith(course) {
  this.days.forEach((day) => {
    if (course.days.includes(day) && this.timeBlock === course.timeBlock) {
      return true;
    }
  });
};
