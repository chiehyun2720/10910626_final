$(".span1").click(function () {
  var dataType = $(this).attr("data");
  var shoppingVal = $(".shoppingInput").val();
  if (dataType == "plus") {
    $(".shoppingInput").val(parseInt(shoppingVal) + 1);
  } else if (dataType == "minus" && shoppingVal > 0) {
    $(".shoppingInput").val(parseInt(shoppingVal) - 1);
  }
});

$(".span2").click(function () {
  var dataType2 = $(this).attr("data");
  var shoppingVal2 = $(".shoppingInput2").val();
  if (dataType2 == "plus") {
    $(".shoppingInput2").val(parseInt(shoppingVal2) + 1);
  } else if (dataType2 == "minus" && shoppingVal2 > 0) {
    $(".shoppingInput2").val(parseInt(shoppingVal2) - 1);
  }
});

$(".span3").click(function () {
  var dataType3 = $(this).attr("data");
  var shoppingVal3 = $(".shoppingInput3").val();
  if (dataType3 == "plus") {
    $(".shoppingInput3").val(parseInt(shoppingVal3) + 1);
  } else if (dataType3 == "minus" && shoppingVal3 > 0) {
    $(".shoppingInput3").val(parseInt(shoppingVal3) - 1);
  }
});

$("#shoppingBtn").click(function () {
  var shoppingVal = $(".shoppingInput").val();
  var shoppingVal2 = $(".shoppingInput2").val();
  var shoppingVal3 = $(".shoppingInput3").val();
  console.log(shoppingVal, shoppingVal2, shoppingVal3);
});

$("#transBtn").click(function () {
  var transVal = $("#name").val();
  var transVal2 = $("#phone").val();
  var transVal3 = $("#email").val();
  var transVal4 = $("#paySelect").val();
  var transVal5 = $("#citySelect").val();
  var transVal6 = $("#streetSelect").val();
  var transVal7 = $("#address").val();
  if (
    transVal2 == "" ||
    transVal == "" ||
    transVal3 == "" ||
    transVal6 == "" ||
    transVal7 == ""
  ) {
    alert("請填寫完整");
  } else {
    console.log(
      transVal,
      transVal2,
      transVal3,
      transVal4,
      transVal5,
      transVal6,
      transVal7
    );
  }
});
