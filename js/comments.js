// This function will create a comment on every click
function commentCreation() {
  // New variable called commentInput that selects the input field
  var commentInput = document.getElementById('input-comment').value;

  // If the input field is not empty, then...
  if (commentInput != '') {

    // Create a variable of list which selects the ul list 
    var list = document.getElementById('comment-list');
    // We create a new variable of newLi that will create an 'li' tag
    var newLi = document.createElement('li');
    // We call the newLi variable and add the innerHTML of the input field
    newLi.innerHTML = commentInput;
    // Using the variable of list, we add a new 'li' tag after every single li tag
    list.appendChild(newLi);
    // Here we call the ul tag to be visible
    list.style.visibility = 'visible';
    // If the input field is empty, we add a red border around it
  } else {
    document.getElementById('input-comment').style.borderColor = "red";
  }
}