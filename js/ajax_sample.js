$(document).ready(function () {
  $("#Button1").click(function () {
    if ($("#Checkbox1").prop("checked") == true) {
      $("#output").html("チェック項目1がチェックされています。<br/>");
    } else {
      $("#output").html("チェック項目1がチェックされていません。<br/>");
    }

    if ($("#Checkbox2:checked").val() == "on") {
      $("#output").html($("#output").html() + "チェック項目2がチェックされています。<br/>");
    } else {
      $("#output").html($("#output").html() + "チェック項目2がチェックされていません。<br/>");
    }
  })
})


$('#myForm').on('submit', function(event) {
  $("#output").html($("#output").html() + "送信<br/>");
  alert('ｻｲﾀﾏ-----(・∀・)-----!!!');
  event.preventDefault(); // 本来のPOSTを打ち消すおまじない
  $.post(
    $(this).attr('action'),
    $(this).serializeArray(),
    function(result) {
      alert('ｻｲﾀﾏ-----(・∀・)-----!!!');
    },
    'json'
  );
});
