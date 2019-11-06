$('Name').focus();
$('option[value="Other"]').attr({disabled:true,  hidden:true});
//$('select').filter(function() {
    //return $(this).text() === 'Other';}).hide('option');
$('#design option:contains(Select Theme)').hide();
$('#allcolors').children().hide();
$('#allcolors').append('<option value="initial">Please select a T-shirt theme.</option>');
$('#allcolors').val('initial')
$( "#design" ).change(function() {
  let selection = $('#design').val();
   if (selection =='js puns') {
     console.log('echo')
     $(".jspuns").show();
     $(".heartjs").hide();
   }
   else {
     $(".jspuns").hide();
     $(".heartjs").show();
   }
});
