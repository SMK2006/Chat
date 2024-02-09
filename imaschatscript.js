var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  setDate();
  $(".message-input").val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-submit").click(function () {
  insertMessage();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

var Fake = [
  "And? Did you find something?", 
  "What? Gegenwart-23? Tf does that mean? Are you sure that is the right answer? You know what..fine..sure. Let's see what we got here, shall we?", 
  "The translation of Gegenwart means the present in german, what could that mean? And why is the word written in german? We are SO close in finding the encryption code we just need to think harder!", 
  "By the way, when you were being busy in Hydra, I found some more intel on the Eye Foundation.", 
  "Apparently a close family member of mine worked at the Eye Foundation, my uncle! Based on some secret government files he worked for the Dutch Eye Foundation at an undisclosed location as an engineering employee. He never talked about this! We all thought he just worked at some tech company?",
   "Apparently the last thing he ever worked on was Project 769, I heard that name before but can't put my finger on it. I suppose it was important.",
    "Fuck im getting distracted...right...Gegenwart-23....What could it be? Perhaps it could mean something new? Something you already analysed / studied or are about to? Maybe you should just go to the /?CAPITAL?\ Of Germany? I literally have no fucking clue...", 
    "Just try your best...Look at everything you have and i mean everything, it sounds |?BOLD?| but I have no idea. Once you have the encryption code you can send it to me by putting the code in the website URL (You have done this earlier). When you did this you will automatically be send to the terminal where i'll try to break inside.",
     "Good luck... I am going to eat some steak, ||I can probably eat like FIVE of them|",


];

function fakeMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="imas.jpeg" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="imas.jpeg" /></figure>' +
        Fake[i] +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}

// Pull out the preloader

document.addEventListener("DOMContentLoaded", function () {
  body.classList.add("loaded");
});





