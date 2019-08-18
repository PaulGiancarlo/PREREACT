class Developer {
    constructor(name){
      this.name = name;
    }
  
    hello(){
      alert('Hello World');
      return 'Hello World! I am ' + this.name + ' and I am a web developer';
    }
  }

  //ECMAScript is the new standar for js since 2015.



var nathan = new Developer('Nathan');
nathan.hello();

