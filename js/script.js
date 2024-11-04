function init(){
  const button = document.getElementById('entrybutton');

  function showMeText(){
    const textbox = document.getElementById('entryinput');
    const textOutput = document.getElementById('textoutput');
    alert("Sami Alvi: " + textbox.value);
  }

  button.addEventListener('click', showMeText);
  }

window.addEventListener('load', init);
