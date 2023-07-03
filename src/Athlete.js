class Athlete{
    constructor(id,name,speciality){
      this.id=id;
      this.name=name;
      this.speciality=speciality;
    }
  
    getFullName() {
      return this.name;
    }
  
    getSpeciality() {
      return this.speciality;
    }
  
    getResume(){
      return <li key={this.id}> {this.name} - {this.speciality}</li>;
    }
  }
  
  export default Athlete;