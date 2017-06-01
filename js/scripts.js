$(document).ready(function() {
  var hobby = $("input:radio[name=hobby]:checked").val();
  $(".hobby-group").change(function() {
    hobby = $("input:radio[name=hobby]:checked").val();
    alert(hobby);
  });
  alert(hobby);

  var food = $("input:radio[name=food]:checked").val();
  $(".food-group").change(function() {
    food = $("input:radio[name=food]:checked").val();
    alert(food);
  });
  alert(food);

  var dwelling = $("input:radio[name=dwelling]:checked").val();
  $(".dwelling-group").change(function() {
    dwelling = $("input:radio[name=dwelling]:checked").val();
    alert(dwelling);
  });
  alert(dwelling);


  //var food = $("input:radio[name=flavor]:checked").val();
  //var dwelling = $("input:radio[name=flavor]:checked").val();


});
