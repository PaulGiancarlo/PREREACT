class ReactDeveloper extends Developer {
    installReact(){
      return 'installing React .. Done.';
    }
  }
  
  var nathan = new ReactDeveloper('Nathan');
  nathan.hello(); // Hello World! I am Nathan and I am a web developer
  nathan.installReact(); // installing React .. Done.
  