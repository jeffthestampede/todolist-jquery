$(document).ready( function() {
  $('#add_task').click( function(event) {
    event.preventDefault();
    var taskDescription = $('#task_description').val();
    $('.todo').append(
        '<li class="task_description">'
        + '<input type="checkbox" class="check_task" name="check_task"></input>'
        + taskDescription
        + '<button class="delete"><img class="trash" src="trash.svg"/></button></li>'
      );
    $('#task_description').val('');
    $("input:checkbox").click( function() {
      var todo = $(this).parent();
      if ($(this).is(":checked")) {
        $(".complete").append(todo);
        todo.addClass("checked", 800, "easeInBack");
      } else {
        $(".todo").append(todo);
        todo.removeClass("checked", 800, "easeInBack");
      }
    });
    $(".delete").click(function() {
        var random = Math.random();
        $(this).parent().css("list-style-type", "none").effect("explode", 2000).remove();
     });
  });
});