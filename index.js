class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
  }
  static sanitize(string){
return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    let notCapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    string[0] = this.capitalize(string[0]);

string.forEach(word =>{

})
  }
}
