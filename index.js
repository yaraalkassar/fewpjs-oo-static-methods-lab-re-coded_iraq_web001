class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
  }
  static sanitize(string){
return string.replace(/[\W_]+/g," ");

  }
  static titleize(){

  }
}
