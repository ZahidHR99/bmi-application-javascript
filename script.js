document.getElementById("calculateBtn").addEventListener("click", function() {
    var weight = document.getElementById("weightInput").value;
    var height = document.getElementById("heightInput").value / 100; // Convert cm to meters
  
    if (weight !== '' && height !== '') {
      var bmi = weight / (height * height);
      document.getElementById("result").textContent = "Your BMI is: " + bmi.toFixed(2);
    } else {
      document.getElementById("result").textContent = "Please enter both weight and height.";
    }
});
  