function goodCause() {
  var givenCause = document.getElementById('savewhat').value;
  if (givenCause != '') {
    var causeOutput = 'We must save the ' + givenCause + '!';
    document.getElementById('saveit').innerText = causeOutput;
  } else {
    document.getElementById('savewhat').style.borderColor = "red";
  }
}