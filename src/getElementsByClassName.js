// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


var getElementsByClassName = function (className, node = document.body) {

  var result = [];
  if (node.classList.contains(className)) {
    console.log(node);
    result = result.concat(node);
  }

  if (node.hasChildNodes()) {
    for (var i = 0; i < node.children.length; i++) {
      result = result.concat(getElementsByClassName(className, node.children[i]))
    }
  }
  return result;
};





