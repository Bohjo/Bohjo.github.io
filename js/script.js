

var currentPage = "#home-page";

// Changes to another page smoothly.
function transitionToPage(toPage){
	if(currentPage == toPage)
		return;	
	$(toPage).css("display", "grid");
	$(toPage).finish().animate({opacity: '1'}, 200);
	$(currentPage).finish().animate({opacity: '0'}, 200, function() {
		$(currentPage).css("display", "none");
		currentPage = toPage;
	});
}

// Opens & closes the sidebar.
function toggleSidebar(){
	$(".navbar-mobile aside").toggleClass("active");
	$("#sidebar-button").toggleClass("active");
	$("section").toggleClass("active");
}

// Empty prompt.
function sessionEditTime() {
	prompt("Change time and date of the training to?", "Y-M-D | H:M");
};

// Fake logout alert, just reloads the page.
function logout() {
	alert("You have logged out!");
	location.reload();
};

// Can't have a onclick="deleteSession()" in html because I need 
// a reference to the clicked element so i can delete it's parent.
$(document).on("click", ".session div #red", function() {
	if(confirm("Are you sure you want to cancel this training session?"))
		$(this).parent().parent().remove(); 
});

$(document).ready(function() {
    console.log( "En funktion som sker vid sidladdning." );
});