// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
      console.log(newDevourState);
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      
      var newburger = {
        burger_name: $("#bn").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
    $.post( "/api/burgers", newburger, function () {
      console.log("created new burger");
    // window.location.href =  "/";
      location.reload();
        });
      
        }
      );
  
  });
  