function openSection(original, next) {
  og = document.getElementById(original);
  ne = document.getElementById(next);
  og.style.display = 'none';
  ne.style.display = '';
}

function passToggle(element) {
  var box = document.getElementById("Reset");
  var inputs = box.querySelectorAll("input[type='password']");
  var inputs2 = box.querySelectorAll("input[type='text']");
  inputs2.forEach(function(x){
      x.type = "password";
    element.innerText = "😑";
  })
  inputs.forEach(function(x) {
      x.type = "text";
    element.innerText = "😐"
  });
}
