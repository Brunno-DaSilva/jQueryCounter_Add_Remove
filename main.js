// Get the input and set it to a variable
let $input = $("#txtAdd");
// Add 0 based to the input
$input.val(0);

// Increase or decrease depending on the btn pressed
$(".change").click(function () {
  if ($(this).hasClass("increase")) $input.val(parseInt($input.val()) + 1);
  else if ($input.val() >= 1) $input.val(parseInt($input.val()) - 1);
});
