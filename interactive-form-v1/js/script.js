var currentSum = 0;
var totalActivityCost = $('.activities').append("<h1>" + "Total Activity Cost:" + currentSum + "</h1>");
//*focus name field when page loads
$('Name').focus();
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
     $("#allcolors option:last").remove();
     $(".jspuns").show();
     $(".heartjs").hide();
   }
//**else if selection is not equal to 'js puns', it equals value heart js, so the colors with .heartjs class will be shown and other colors hidden
   else {
//**value of select element is changed to first available color upon selecting a theme
     $('#allcolors').val('tomato');
//**last option is selected and removed from drop down list
     $("#allcolors option:last").remove();
     $(".jspuns").hide();
     $(".heartjs").show();
   }
});
