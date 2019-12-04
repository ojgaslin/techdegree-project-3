var currentSum = 0;
//** created element displaying total cost of activities and currentSum global variable
$('.activities').append("<h3>" + "Total Activity Cost: $<span>" + currentSum + "</span></h3>");
var totalActivityCost = $('.activities h3 span');
//*focus name field when page loads
$('#name').focus();
//*disable and hide the text field under job role category
$('#other-title').attr('hidden', true).attr('disabled', true);
//**using .change event listener runs function and shows text field if variable jobSelection equals other option, else the text field remains hidden and disabled
$('#title').change(function() {
  let jobSelection = $('#title').val();
   if(jobSelection == 'other') {
     $('#other-title').attr('hidden', false).attr('disabled', false);
   }
   else {
     $('#other-title').attr('hidden', true).attr('disabled', true);
   }
});
//*hides "Select theme" in drop down menu
$('#design option:contains(Select Theme)').hide();
//*hides all color options until a theme is chosen
$('#allcolors').children().hide();
//*created initial value of select element color field
$('#allcolors').append('<option value="initial">Please select a T-shirt theme.</option>');
//**color options are hidden and 'Please select a T-shirt theme.' is set as initial value
$('#allcolors').val('initial')

$('label:contains(Color)').hide();
$('#allcolors').hide();

console.log($('.activities input'));
//**change event listener listens for change in design select element
$( "#design" ).change(function() {
  $('label:contains(Color)').show();
  $('#allcolors').show();
//**selection variable is equal to value of design select element
  let selection = $('#design').val();
//**if variable selection equals value 'js puns', color options with .jspuns class will show in drop down menu, and other colors will be hidden
   if (selection =='js puns') {
     console.log('echo')
//**value of select element is changed to first available color upon selecting a theme
     $('#allcolors').val('cornflowerblue');
//**last option is selected and removed from drop down list
     $("#allcolors option:last").attr('hidden', true).attr('disabled', true);
     $(".jspuns").show();
     $(".heartjs").hide();
   }
//**else if selection is not equal to 'js puns', it equals value heart js, so the colors with .heartjs class will be shown and other colors hidden
   else {
//**value of select element is changed to first available color upon selecting a theme
     $('#allcolors').val('tomato');
//**last option is selected and removed from drop down list
     $("#allcolors option:last").attr('hidden', true).attr('disabled', true);
     $(".jspuns").hide();
     $(".heartjs").show();
   }
});
//**change function created selecting html input elements with type checkbox
$(":checkbox").change(function() {
//**variable target created for item that changes(this)
  var target = $(this);
  //console.log(target.last().attr("data-cost"));
//**variable cost created which selects changed checkbox data-cost value, converts to number, and removes dollar sign and replaces with blank space
  var cost = parseInt(target.last().attr("data-cost").replace( /[^0-9]/, '' ));
//**variable isChecked created
  var isChecked = target.prop('checked');
  //console.log(target);
//**if/else statement which tests if checkbox is checked and if so the cost variable value is added to currentSum
  if (isChecked == true) {
    //console.log(true);
    currentSum = currentSum + cost;
    //console.log(cost.replace( /[^0-9]/, '' ));
//**else the checkbox is unchecked, then cost subtracted from currentSum
  } else {
    //console.log(false);
    currentSum = currentSum - cost;
    //console.log(cost.replace( /[^0-9]/, '' ));
  }
//**span element text is set to the content of currentSum
  $('.activities h3 span').text(currentSum);
  disableConflict(target);
  });

  function disableConflict(target) {
  //console.log(target.last().attr(`data-day-and-time`));
  //console.log(target.prop('checked'));
  //**created variable 'input' to target activity input element
  var input = $('.activities input')
  //console.log(input);
  //**loop through checkbox inputs using 'input' variable
  for(var i = 0; i < input.length; i++){
    console.log(target.prop('name') != $(input[i]).prop('name') && target.attr(`data-day-and-time`) == $(input[i]).attr(`data-day-and-time`))
 //**if activity is checked, then it will move on to be tested in the if statement of if the checked property name is not equal to i's property name,
 //and if the checked activitiy day and time are equal to i's day and time, then the conflicting i will be disabled because it is not the checked element and it has the same day and time as the checked element, indicating a conflict
   if(target.prop('checked')) {
     if(target.prop('name') != $(input[i]).prop('name') && target.attr(`data-day-and-time`) == $(input[i]).attr(`data-day-and-time`)){
       console.log('disabled')
       $(input[i]).attr('disabled', true);
     }
//if the target activity is being unchecked, then it will be tested in the if statement: if target's name is not equal to i and the target is equal to the day and time of another i, then these conflicting events will be enabled again because the target event with the same day and time was unchecked
   } else {
     if(target.prop('name') != $(input[i]).prop('name') && target.attr(`data-day-and-time`) == $(input[i]).attr(`data-day-and-time`)){
       console.log('enabled')
       $(input[i]).attr('disabled', false);
     }
   }
}
}
//**hide 'Select Payment Method option', hide paypal option, hide bitcoin option
$('#payment option:contains(Select Payment Method)').hide();
$('#paypal').hide();
$('#bitcoin').hide();
$('#payment option[value="Credit Card"]').attr("selected",true);
//**change funtion for payment type selection
$('#payment').change(function() {
//**variable 'paymentSelectElement' made to hold value of payment selection
   paymentSelectElement = $('#payment').val();
//**if the selection is credit card, the credit card field will show, else this field will be hidden
   if(paymentSelectElement == 'Credit Card') {
       $('#credit-card').show();
   } else {
       $('#credit-card').hide();
   }
//**if the selection is paypal, this field will show, else it will be hidden
  if(paymentSelectElement == 'PayPal') {
       $('#paypal').show();
  } else {
       $('#paypal').hide();
  }
//**if the selection is bitcoin for payment, this field will show, else it will be hidden
  if(paymentSelectElement == 'Bitcoin') {
       $('#bitcoin').show();
  } else {
       $('#bitcoin').hide();
  }
});

//**click function on register button, this is master function that will contain all the functions for the fields the user must select on the form
$("button:contains('Register')").click(function() {
//**if function validateForm returns pass, then submit the form
  if(validateForm()){
    $("form").submit();
  }
});

function validateForm(){
//**define payment select element within the function to equal the value selected in the payment menu
    paymentSelectElement = $('#payment').val();
//**variable pass is equal to true
    var pass=true;
//**if one of these functions is returns false, then in this if statement it will be 'not' false, meaning true, and then pass will be equal to false because one or more of these functions were equal to false
    if(!validateName() || !validateEmail() || !validateActivities() ){
      pass = false;
    }
//**if Credit card is selected, and if one or more of these functions is 'not' false, it will be equal to true and pass will be false
    if(paymentSelectElement == 'Credit Card') {
    if(!validateCreditCard() || !validateZipCode() || !validateCVV())
      pass = false;
    }
//**pass will be returned as true if the functions return true
    return pass;
}
//**function for name field
function validateName() {
//**variable nameFieldContent created to hold input of name field
    var nameFieldContent = $('#name').val();
//**variable nameFieldContentRegex holds the conditions for acceptable input and must fit these criteria
    var nameFieldContentRegex = /^[a-zA-Z]+$/;
    console.log(nameFieldContentRegex.test(nameFieldContent));
//**if nameFieldContent is equal to empty space OR if 'nameFieldContent' does not fit acceptable criteria for nameFieldContentRegex,
//**then class input-error is added to name field
    if(nameFieldContent == '' || !nameFieldContentRegex.test(nameFieldContent)) {
      $('#name').addClass("input-error");
//**if element with id '#name-error' is not present/does not have a length, then insert this error element before name field and return false
      if(!$("#name-error").length){
              $("<span id='name-error'>Please enter first name and last name.</span>").insertBefore("#name");
      }
      return false;
//**else remove element with id name-error and remove class input-error from name field and return true
    } else {
      $("#name-error").remove();
      $('#name').removeClass("input-error");
      return true;
    }
}
//**function for email field, testing input in real-time validation error message
$(function() {
  //**run 'validateEmail' function when keyboard key is released in the email field
    $('#mail').on('keyup', function() {
      validateEmail();
    })
})
//**validate email function which is called in keyup function above
function validateEmail() {
//**content of email field is equal to value of input in field with id mail
  var emailFieldContent = $('#mail').val();
//**regex requirements for a passable email address input
  var emailFieldContentRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//**if emailFieldContent is equal to nothing OR if emailFieldContent is Not matched to emailFieldContentRegex, the class input-error is added to mail field for red border
//**and the element with id email-error is created and inserted before mail field
  if(emailFieldContent == '' || !emailFieldContentRegex.test(emailFieldContent)) {
    $('#mail').addClass("input-error");
    if(!$("#email-error").length) {
    $("<span id='email-error'>Email field content should be in the format of 'example@mail.com'.</span>").insertBefore("#mail");
  }
    return false;
//**else element with id email error is removed and class input-error is removed for border to not be red anymore
  } else {
    $("#email-error").remove();
    $('#mail').removeClass("input-error");
    return true;
  }
}
//**function for activities field which is checkbox selection
function validateActivities() {
//**variable checkboxes defined to contain all elements with type checkbox
  var checkboxes = $('[type=checkbox]');
//**variable okay is initially false
  var okay=false;
//**for variable i=0, i is increased by 1 as long as it is less than length of checkboxes
  for(var i=0; i < checkboxes.length; i++) {
//**if i checkboxes is checked, then variable okay is true
    if(checkboxes[i].checked)
    {
      okay=true;
    }
  }
//**if variable is not okay, then error message inserted before first checkbox element
  if(!okay) {
     $("<span id='checkbox-error'>You must select at least one checkbox to continue.</span>").insertBefore("#first-checkbox");
  }
  return okay;
}
//**validate the credit card number field if credit card is selected as a payment method
function validateCreditCard() {
//**variable holds the value of payment selection
  var paymentSelectElement = $('#payment').val();
//**variable ccnum holds the value of the input in the credit card number field
  var ccnum = String($('#cc-num').val());
//**id credit-error is removed in case there was previously an error thrown upon clicking register button
  $("#credit-error").remove();
//**if payment is equal to credit card and input in field is nothing, class input-error is added for red border on field, and element with error message is inserted after field
   if(paymentSelectElement == 'Credit Card' && ccnum == '') {
      $('#cc-num').addClass("input-error");
      if(!$("#credit-error").length) {
      $("<span id='credit-error'>Please enter a credit card number.</span>").insertAfter("#cc-num");
    }
      return false;
//**else if payment is selected to credit card and there is a number in the input that doesn't match, the class input-error is added, and if there is no error there, the error message element is added
   } else {
  if(paymentSelectElement == 'Credit Card' && !ccnum.match("^[1-9][0-9]{12,15}")) {
     $('#cc-num').addClass("input-error");
     if(!$("#credit-error").length) {
     $("<span id='credit-error'>The number entered is not 13 to 16 digits long.</span>").insertAfter("#cc-num");
   }
     return false;
//**else the class input error is removed and true is returned
} else {
$('#cc-num').removeClass("input-error");
    return true;
}
}}

//**validate zip code in credit card info section if credit card is selected as payment
function validateZipCode() {
//**zipcodeInput variable holds string value contained in zipcode field
  var zipcodeInput = String($('#zip').val());
//**zip-error id is removed in case there was a previous error thrown
  $("#zip-error").remove();
  var paymentSelectElement = $('#payment').val();
//**if payment selected is credit card, and if the input in zipcode field does not match regex of 5 digits or 5 digits and 4 digits,
//**then class input-error is added for red border and if there is not already an error message, there is one created with id zip-error
  if(paymentSelectElement == 'Credit Card' && !zipcodeInput.match("^\\d{5}(-\\d{4})?$")) {
     $('#zip').addClass("input-error");
     if(!$("#zip-error").length) {
     $("<span id='zip-error'>Number entered must have 5 digits or 5 digits followed by a hyphen and ending with four digits.</span>").insertAfter("#zip");
   }
     return false;
//**else the input error class is removed and the red border will go away, and true is returned
  } else {
    $('#zip').removeClass("input-error");
    return true;
  }
}
//**if credit card payment is selected, validateCVV function will validate the cvv number for credit card
function validateCVV() {
//**cvvNumber variable is equal to string value of cvv input field
  var cvvNumber = String($('#cvv').val());
  var paymentSelectElement = $('#payment').val();
//**if credit card payment is selected as value, and is cvv number input does not match the regex which accepts either 3 or 4 digits,
//**then the cvv field with get class input error which puts a red border, and if there is not an error message already, one will be given and inserted after the field
  if(paymentSelectElement == 'Credit Card' && !cvvNumber.match("^[0-9]{3,4}$")) {
     $('#cvv').addClass("input-error");
     if(!$("#cvv-error").length) {
     $("<span id='cvv-error'>Number entered must have 3 digits or 4 digits for Amex.</span>").insertAfter('#cvv');
   }
     return false;
//**else the class input error is removed and red border does not occur or is taken away, and the error message is also taken away
  } else {
      $('#cvv').removeClass("input-error");
      $('#cvv-error').remove();
      return true;
  }
}
