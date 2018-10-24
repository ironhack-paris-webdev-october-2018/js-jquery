$(".add-song").click(function () {
  var title = $(".title-input").val();
  var artist = $(".artist-input").val();

  // create the new <li> tag with its contents
  // WITHOUT jQuery: document.createElement("li")
  var newLi = $(
    "<li>"                      +
      "<b>" + title + "</b> "   +
      "by " + artist + " "      +
      "<button>Delete</button>" +
    "</li>"
  );

  // WITHOUT jQuery: songList.appendChild(newLi)
  $(".song-list").append(newLi);

  // WITHOUT jQuery: newLi.querySelector("button").onclick = function() {};
  newLi.find("button").click(function (event) {
    // converts regular DOM element into a jQuery element
    var button = $(event.target);
    // WITHOUT jQuery: button.parentNode.remove()
    button.parent().remove();
  });

  // set the inputs' values to EMPTY STRING
  $(".title-input").val("");
  $(".artist-input").val("");
});

$(".song-list button").click(function (event) {
  // event is an object that has a lot of information about the event
  // (event.target is the DOM element the user just clicked)
  console.log("delete me", event);
  // converts regular DOM element into a jQuery element
  var button = $(event.target);
  // WITHOUT jQuery: button.parentNode.remove()
  button.parent().remove();
});
