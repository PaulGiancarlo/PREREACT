class Developer {
    constructor(name){
      this.name = name;
    }
  
    hello(){
      alert('Hello World! I am ' + this.name + ' and I am a web developer');
      return 'Hello World! I am ' + this.name + ' and I am a web developer';
    }
  }

class ReactDeveloper extends Developer {
    installReact(){
      return 'installing React .. Done.';
    }
  
    hello(){
       alert('Hello World! I am ' + this.name + ' and I am a REACT developer'); 
      return 'Hello World! I am ' + this.name + ' and I am a REACT developer';
    }
  }
  
  var nathan = new ReactDeveloper('Paul');
  nathan.hello(); // Hello World! I am Paul and I am a REACT developer
  