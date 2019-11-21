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

console.log($('.activities input'));
//**change event listener listens for change in design select element
$( "#design" ).change(function() {
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
$('#payment option:contains(Select Payment Method)').hide();
$('#paypal').hide();
$('#bitcoin').hide();
$('#payment').change(function() {
   paymentSelectElement = $('#payment').val();
   console.log(paymentSelectElement)
   if(paymentSelectElement == 'Credit Card') {
       $('#credit-card').show();
   } else {
       $('#credit-card').hide();
   }
  if(paymentSelectElement == 'PayPal') {
       $('#paypal').show();
  } else {
       $('#paypal').hide();
  }
  if(paymentSelectElement == 'Bitcoin') {
       $('#bitcoin').show();
  } else {
       $('#bitcoin').hide();
  }
});


$("button:contains('Register')").click(function() {
  console.log('button click');
     validateName();
});

function validateName() {

    var nameFieldContent = $('#name').val();
    console.log(nameFieldContent);
    var nameFieldContentReg = /^[a-zA-Z]+$/;
    if(nameFieldContent == '' || !nameFieldContentReg.test(nameFieldContent)) {
      $('#name input').addClass("input-error");
      $("#name").append("Name field content does not meet requirements");
      return false;
    } else {

      $('#name input').removeClass("input-error");
      return true;
    }
}
function validateEmail() {

}
function validateActivities() {

}
function validateCreditCard() {

}
function validateZipCode() {

}
function validateCVV() {

}
