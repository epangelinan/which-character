$(document).ready(function() {
  var hobby = $("input:radio[name=hobby]:checked").val();
  var food = $("input:radio[name=food]:checked").val();
  var dwelling = $("input:radio[name=dwelling]:checked").val();
  //alert(hobby);
  //alert(food);
  //alert(dwelling);
  var beast = 0;
  var belle = 0;
  var potts = 0;

  $(".hobby-group").change(function() {
    hobby = $("input:radio[name=hobby]:checked").val();
    alert(hobby);
  });

  $(".food-group").change(function() {
    food = $("input:radio[name=food]:checked").val();
    alert(food);
  });

  $(".dwelling-group").change(function() {
    dwelling = $("input:radio[name=dwelling]:checked").val();
    alert(dwelling);
  });

  $('form').submit(function(event) {
    event.preventDefault();
    $("form").hide();
    $(".result").show();

    $(".hobby-choice").text(hobby);
    $(".food-choice").text(food);
    $(".dwelling-choice").text(dwelling);

    if (hobby === "Reading") {
      belle += 1;
    } else if (hobby === "Cooking"){
      potts += 1;
    } else if (hobby === "Gardening") {
      beast += 1;
    }

    if (food === "Meat") {
      beast += 1;
    } else if (food === "Veggies"){
      belle += 1;
    } else if (food === "Dessert") {
      potts += 1;
    }

    if (dwelling === "Castle") {
      beast += 1;
    } else if (dwelling === "Cupboard"){
      potts += 1;
    } else if (dwelling === "Cottage") {
      belle += 1;
    }

    if (beast >= 2) {
      $(".beast").show();
    } else if (belle >=2) {
      $(".belle").show();
    } else if (potts >=2) {
      $(".potts").show();
    }
  });



  //var food = $("input:radio[name=flavor]:checked").val();
  //var dwelling = $("input:radio[name=flavor]:checked").val();


});
