class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(setter) {
    if (setter !== undefined) {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = setter;
      }
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty(){
    this.html("");
  }
  
  append(arg){
    if(arg instanceof DOMNodeCollection){
      for(let i = 0; i < arg.elements.length; ++i){
        this.append(arg.elements[i]);
      }
    } else if (arg instanceof HTMLElement) {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].appendChild(arg);
      }
    } else {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML += arg;
      }
    }
  }
}

module.exports = DOMNodeCollection;
