const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg){
  let nodeList;
  if (arg instanceof HTMLElement) {
    nodeList = [arg];
  } else {
    nodeList = Array.from(document.querySelectorAll(arg));
  }
  return new DOMNodeCollection(nodeList);
};
