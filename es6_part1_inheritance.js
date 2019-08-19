class Developer {
  constructor(name){
    this.name = name;
  }

  hello(){
    alert('Hello World');
    return 'Hello World! I am ' + this.name + ' and I am a web developer';
  }
}
class ReactDeveloper extends Developer {
    installReact(){
      return 'installing React .. Done.';
    }
  }
  
  var nathan = new ReactDeveloper('Nathan');
  nathan.hello(); // Hello World! I am Nathan and I am a web developer
  nathan.installReact(); // installing React .. Done.
  
  