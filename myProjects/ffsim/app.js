/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

function selectedAsset() {
  var x = document.getElementById("assetType").value;
  document.getElementById("selectedAsset").innerHTML = "You selected: " + x;
}

//radio test

var radVal = null;



// Storing HTML code block in a variable
var codeBlockNorth = '<div class="data-wrapper">' +
'<div class="data-header">' +
'<p>Financials</p>' +
'</div>' +
'<div class="data-text">' +
'<div id="houseFin">'+
'<label for="inputTotalCost">Enter total cost</label>' +
'<input type="text" id="selectedCost" oninput="calculateLoan()"/>' +
'<br>' +
'<label for="inputEquity">Enter invested equity</label>' +
'<input type="text" id="selectedEquity" oninput="calculateLoan()/>' +
'<br>' +
'<p id="loan"></p>' +
'<br>' +
'<p id="leverage"></p>' +
'<br>' +
'<label for="inputInterest">Enter interest</label>' +
'<input type="text" id="selectedInterest" tabindex="1"/>' +
'</div>' +
'</div>' +
'</div>';

// Storing HTML code block in a variable
var codeBlockEast = '<div class="data-wrapper">' +
'<h1>This is a heading east</h1>' +
'<p>This is a paragraph of text.</p>' +
'<p><strong>Note:</strong> If you don\'t escape "quotes" properly, it will not work.</p>' +
'</div>';

// Storing HTML code block in a variable
var codeBlockWest = '<div class="data-wrapper">' +
'<h1>This is a heading west</h1>' +
'<p>This is a paragraph of text.</p>' +
'<p><strong>Note:</strong> If you don\'t escape "quotes" properly, it will not work.</p>' +
'</div>';

// Storing HTML code block in a variable
var codeBlockSouth = '<div class="data-wrapper">' +
'<h1>This is a heading south</h1>' +
'<p>This is a paragraph of text.</p>' +
'<p><strong>Note:</strong> If you don\'t escape "quotes" properly, it will not work.</p>' +
'</div>';

// Once the DOM is ready...
window.addEventListener("DOMContentLoaded", function(){

  // Get all the radiobuttons
  var btns = document.querySelectorAll("[name=stack]");
  
  // Loop through them
  for(var i =0; i < btns.length; ++i){
    
      // Set up a click event handling callback function
      btns[i].addEventListener("click", function(evt){
        // That grabs the value from the clicked button
        radVal = evt.target.value;
        
        // You can call another function from here, but if that other function
        // needs the value, you don't need to pass it because you just set it
        // into a variable (radVal) which has a higher scope than this function
        foo();
        
        // Or, you can not call another function from here and just call the 
        // other function when you need to, but you will need to make sure that
        // this happens AFTER one of the radio buttons were clicked, otherwise
        // radVal will still be null
      });
  }
 
  function foo(){
    // Since this function can be called at any time, we should check to make
    // sure that one of the radio buttons has first been clicked.
    if(radVal){
      // radVal is not null, so a radio button was clicked
      console.log("foo says value is: " + radVal);
      var x = radVal;
      document.getElementById("radioClicked").innerHTML = "You selected: " + x;

        if(x === "north"){
          // Inserting the code block to wrapper element
          document.getElementById("codeblock").innerHTML = codeBlockNorth
        }

        if(x === "east"){
          // Inserting the code block to wrapper element
          document.getElementById("codeblock").innerHTML = codeBlockEast
        }

        if(x === "west"){
          // Inserting the code block to wrapper element
          document.getElementById("codeblock").innerHTML = codeBlockWest
        }

        if(x === "south"){
          // Inserting the code block to wrapper element
          document.getElementById("codeblock").innerHTML = codeBlockSouth
        }

    } else {
      // radVal is still null so no button has been clicked yet
      console.log("foo says no button was clicked");      
    }
  }
  
  // This will show the else message because this is being called
  // before the radio buttons have been clicked
  foo();  
  


});


$(document).ready(function(){
  $('input[type="radio"]').click(function(){
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".box").not(targetBox).hide();
      $(targetBox).show();
  });
});



function calculateLoan() {

  var cost = document.getElementById("selectedCost").value;
  var equity = document.getElementById("selectedEquity").value;
  var interest = document.getElementById("selectedInterest").value;
  var years = document.getElementById("selectedYears").value;
  //console.log(interest)
  //console.log(years)

  loan = cost - equity;
  gearing = 100-((equity / cost) * 100);

  yearlyInterest = (interest / 100) * loan;
  monthlyInterest = yearlyInterest / 12;
  totalInterest = yearlyInterest * years;
  totalPayback = totalInterest + loan;
  costOfLoanPercent = (loan / totalPayback) * 100
  maturety = ((loan - (0.64 * loan)) / monthlyInterest) / 12;

  console.log("maturety: " + maturety);

  installments = (loan * interest) / years / 12;
  
  

  function roundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return (Math.round(n) / multiplicator).toFixed(2);
  }

// Storing HTML code block in a variable

var codeBlockCalc = '<div class="data-wrapper">' +
'<div class="data-header">' +
'<p>Calculation</p>' +
'</div>' +
'<div class="data-text-small">' +
`<p>Your loan is ` + loan + ` kr <br>` +
`<p>You are grearing with ` + roundTo(gearing, 2) + ` %</p>` +
`<p>Estimated monthly installments ` + roundTo(monthlyInterest*2, 0) + ` kr </p>` +
`<p>Estimated monthly interest ` + roundTo(monthlyInterest, 0) + ` kr </p>` +
`<p>Estimated total interest ` + roundTo(totalInterest, 0) + ` kr </p>` +
`<p>Estimated total payback ` + roundTo(totalPayback, 0) + ` kr` + ` (+` + roundTo(costOfLoanPercent,2) + ` %) </p>` +
`<p>The loan will mature at 64%, thats ` + roundTo(maturety,1) + ` years</p>` +
'</div>' +
'</div>';



  document.getElementById("codeblock").innerHTML = codeBlockCalc;


}

/**
 "Your loan is " + loan + " kr <br>" +
  "You are grearing with " + roundTo(gearing, 2) + " % <br>" +
  "Estimated monthly installments " + roundTo(monthlyInterest*2, 0) + " kr <br>" +
  "Estimated monthly interest " + roundTo(monthlyInterest, 0) + " kr <br>" +
  "Estimated total interest " + roundTo(totalInterest, 0) + " kr <br>" +
  "Estimated total payback " + roundTo(totalPayback, 0) + " kr" + " (+" + roundTo(costOfLoanPercent,2) + " %) <br>" +
  "The loan will mature at 64%, thats " + roundTo(maturety,1) + " years";


 */