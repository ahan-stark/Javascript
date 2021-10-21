class Pro {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let profile = new Pro("Stark", 2001);
console.log(profile.name);
console.log(profile.age());
