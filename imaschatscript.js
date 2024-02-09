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
"Hello?",
  "Sorry. I cannot see your texts. But I do see you are reading mine, which is good enough. Otherwise they can find us. Anway...You found it too, didn't you?",
  "Dude, you know what I'm talking about! This big organisation nobody fucking knew about! This Doctor Omen? Some other weird shit. I don't know how you got information on this, but it sure is no coincidence.",
  "I have been struggling for 3 years, but I never got this far! One E-mail really turned my life upside down.. Did you get it too? Oh wait right i can't see your fucking texts...Anyway after some broken program that needed SERIOUS fixing I got some major information about this Eye Foundation.",
  "Yeah you are probably smiling there watching this chat, huh? How the FUCK did you get acces to the program that I FIXED? Linux? IP-Leaking? However you did it, you have some pretty good coding skills that could come in handy. So I wanna make a deal... How about we work together to find out what the fuck happened in that shithole? Finding details and sharing them together, Sound cool to you?",
  "IDC what you're saying cause we are doing it whether you like it or not. So let me just get you up to date and show you what i found, alright?" , 
  "So.. The Program that i fixed was named: 'Hydra'. It was an shutdown program created as last database resolve, incase everything went down. Pretty fucking small but HARD to fix if you don't know the encryption code. I got that program send through e-mail by an anonymous user. We gotta figure out who send me that e-mail, but that is a problem for later. Anyway, we both know there wasnt a lot on Hydra: Just one Log file and maybe some other broken shit...",
  "BUT, get this! At the end of the Log File there was a threat of some people. They told me to leave or become one of them, turns out we weren't the only ones having access to Hydra",
  "After that encounter I found something interesting, you can write your own logbooks in Hydra. I made one myself and put it in (You probably red it, fucker). Here's when it gets interesting!",
  "Because Hydra is a shutdown program (Which is connected to the Eye Foundation) it still has access to the Eye Foundations mainframe. Hydra is literally like a serpent ready to sneak in the main database!",
  "And this is the part where you get in this picture. The mysterious people probably saw my log file and blocked my IP. I can't do shit now! But, they don't know YOU can get into hydra too! They probably locked Hydra for everyone now, but there might still be something on it...",
	"We probably need to find some sort of encryption code. When we have it i'll make a decoy account in Hydra, go into the main terminal and generate a decryption code for the main database! S I M P L E !. ",
	"Go back to Hydra, see if something changed! Im sure you're going to /?KNOCK?\ it out of the park! I'll text you later, good luck...",

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