// $( "p" ).click(function() {
//     console.log( "You clicked a paragraph!" );
// });

// $( "button" ).on( "click", function() {
//     document.write( "click" );
// });

// console.log("clicked 2");
/* here im taking the select option values and stroing them in an variabel 
  and then using those values calculate the values using the given formula and returning them back to 
  html file using innerhtml=""; 
 formula 1 to  calculate the slae price is and store that in an var "C7*((100%+C8)^$C$11)" and display this value in 
  html
   formua for rental income="=+C7*C10*C11"
  investment multiplier="=+(C12+C9)/C7"

  */

function mycalculator() {
  // console.log("hi");
  var e = document.getElementById("yearlyinvestment");
  var investmentvalue1 = parseInt(e.options[e.selectedIndex].value);
  // var investmentvalue1 = investmentvalue1 * 100000;
  console.log(investmentvalue1);
  var e = document.getElementById("investmentperiod");
  var investmentperiodvalue = parseInt(e.options[e.selectedIndex].value);

  var e = document.getElementById("growthrate");
  var growthratevalue = parseInt(e.options[e.selectedIndex].value);

  var e = document.getElementById("rentalyeild");
  var rentalyeildvalue1 = parseInt(e.options[e.selectedIndex].value);
  // the above lines are used to fectch the values from the  input
  // formula totlav = investmentvalue1*((1+growthratevalue)^investmentperiodvalue)
  // var val = investmentvalue1 * ((1 + growthratevalue) ^ investmentperiodvalue);
  // console.log("total value is" + val);
  var q = 1 + growthratevalue;
  // console.log(q);
  var r = Math.pow(q, investmentperiodvalue);
  // console.log(s);
  var saleprice = r * investmentvalue1;
  console.log(saleprice);
  // document.getElementById();
  var s = rentalyeildvalue1 / 100;
  console.log(s);
  var t = s * investmentvalue1;
  console.log(t);
  var rentalincome = Math.floor(t * investmentperiodvalue * 100000);
  console.log(rentalincome);
  // var s = investmentvalue1 *
  // var rentalincome = s * investmentperiodvalue;
  // console.log(rentalincome);

  // for profit
  var p = rentalincome + saleprice;
  var u = investmentvalue1 * 100000;
  var profit = p - u;
  console.log(profit);

  // investment multiplier

  var m = rentalincome + saleprice;
  var investmentmultiplier = m / u;

  document.getElementById("investmentgrown").innerHTML = investmentmultiplier;
  document.getElementById("totlainvestmentmade").innerHTML = rentalincome;
  document.getElementById("valueofinvestment").innerHTML = profit;

  // console.log(investmentmultiplier);
}

$(document).ready(function () {
  $("#togglebutton").click(function () {
    $("#togglepara").toggle();
  });
  $("#togglebutton1").click(function () {
    $("#togglepara1").toggle();
  });
  $("#togglebutton2").click(function () {
    $("#togglepara2").toggle();
  });
  $("#togglebutton3").click(function () {
    $("#togglepara3").toggle();
  });
  $("#togglebutton4").click(function () {
    $("#togglepara4").toggle();
  });
  $("#togglebutton5").click(function () {
    $("#togglepara5").toggle();
  });
  $("#togglebutton6").click(function () {
    $("#togglepara6").toggle();
  });
  $("#togglebutton7").click(function () {
    $("#togglepara7").toggle();
  });
  $("#togglebutton8").click(function () {
    $("#togglepara8").toggle();
  });
  $("#togglebutton9").click(function () {
    $("#togglepara9").toggle();
  });
  $("#togglebutton10").click(function () {
    $("#togglepara10").toggle();
  });
});

// for view property page
$(document).ready(function () {
  $("#about").click(function () {
    $("#aboutbulding").show();
    $("#buldinglocation").hide();
    $("#buldingfloorplan").hide();
    $("#buldingfloorplan").hide();
    $("#buldingprize").hide();
  });
  $("#location").click(function () {
    $("#buldinglocation").toggle();
    $("#buldingfloorplan").hide();
    $("#buldingfloorplan").hide();
    $("#buldingprize").hide();
    $("#aboutbulding").hide();
  });
  $("#tenancy").click(function () {
    $("#buldingfloorplan").toggle();

    $("#buldinglocation").hide();
    // $("#buldingfloorplan").hide();
    $("#buldingfloorplan").hide();
    $("#buldingprize").hide();
    $("#aboutbulding").hide();
  });
  $("#floorplan").click(function () {
    $("#buldingfloorplan").toggle();
    $("#buldinglocation").hide();
    $("#aboutbulding").hide();
    $("#buldinglocation").hide();
    $("#buldingprize").hide();
  });
  $("#prize").click(function () {
    $("#buldingprize").toggle();
    $("#buldinglocation").hide();
    $("#aboutbulding").hide();
    $("#buldinglocation").hide();
    $("#buldingfloorplan").hide();
  });
});

// for responsive

// when the bar icon is clicked the menu should be appered
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".navlist1").toggle();
  });
});

//jquery progress bar functions in property page
var progressbardiv = $("#progressbar");

progressbardiv.progressbar({
  value: 30,
  create: function (event, ui) {
    $(this).find(".ui-widget-header").css({ "background-color": "#00af5d" });
  },
});
var progressbardiv1 = $("#progressbar1");

progressbardiv1.progressbar({
  value: 30,
  create: function (event, ui) {
    $(this).find(".ui-widget-header").css({ "background-color": "#00af5d" });
  },
});
var progressbardiv2 = $("#progressbar2");

progressbardiv2.progressbar({
  value: 30,
  create: function (event, ui) {
    $(this).find(".ui-widget-header").css({ "background-color": "#00af5d" });
  },
});

/* to take the select option value and calculate the value based and the selected options 
and display it with in h5 */

// var x = document.getElementById("mySelect").options.length;
// document.getElementById("demo").innerHTML =
//   "Found " + x + " options in the list.";
