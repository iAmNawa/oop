let paul = new Object();

paul.age = 31;
paul.name = 'Paul';
paul.fitness = 'average';
paul.gender = 'male';
paul.getGender = function() {
  return paul.gender;
}

console.log(paul.getGender())
