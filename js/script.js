$(document).ready(function () {
  // Store the previous section
  let previousSection = null;

  // Function to show a specific section and hide the rest also header and navigation
  function showSection(sectionId) {
    $("#header").hide();
    $("#navigation").hide();
    $("section").hide();
    $("#" + sectionId).show();
  }

  // Function to show a specific section + header and navigation and hide the rest
  function showSectionHeadNav(sectionId) {
    $("#header").show();
    $("#navigation").show();
    $("section").hide();
    $("#" + sectionId).show();
  }

  //Show Log In page when clicked on Log In | Sign Up button

  $("#buttonLS").click(function () {
    showSection("logIn");
  });

  //Show password when clicked on eye icon

  $(".eyeIcon").click(function () {
    let input = $("#password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  //Show Splash page when clicked arrow back on Log In page

  $("#backbtnLogIn").click(function () {
    showSection("splash");
  });

  //   Show Home page when clicked on Skip and explore button

  $(".splash-btn2").click(function () {
    previousSection = $("section:visible").attr("id"); // Save the currently visible section
    showSectionHeadNav("home");
  });

  //   Show Home page when clicked on Home button inside navigation

  $("#homeBtn").click(function () {
    showSectionHeadNav("home");
  });

  //   Show Log In page when clicked on Profile button inside navigation

  $("#profileBtn").click(function () {
    showSection("logIn");
  });

  //   Show Splash page when clicked on logo from any page

  $(".headerlogo").click(function () {
    showSection("splash");
  });

  //   Show Home page when clicked Go back to home button on congratulation page

  $("#GoBackHome").click(function () {
    showSectionHeadNav("home");
  });

  // When the .header-hamburger is clicked
  $(".header-hamburger").click(function () {
    previousSection = $("section:visible").attr("id"); // Save the currently visible section
    $("#header #navigation section").hide(); // Hide header, navigation and all sections
    $("#hamburger").addClass("open").removeClass("close").show(); // Slide in the overlay
  });

  // When the .x-icon is clicked
  $(".x-icon").click(function () {
    $("#hamburger").addClass("close").removeClass("open"); // Slide out the overlay
    setTimeout(function () {
      $("#hamburger").hide(); // Hide hamburger menu
      $("#header #navigation").show(); // Show header and navigation
      if (previousSection) {
        showSectionHeadNav(previousSection); // Show the previous section
      }
    }, 500); // Wait for the transition to complete
  });

  // Show About Us page when clicked from hamburger menu
  $("#aboutBtn").click(function () {
    $("#hamburger").hide(); // Hide hamburger menu
    showSectionHeadNav("about");
  });

  // Show Contact page when clicked from hamburger menu
  $("#contactBtn").click(function () {
    $("#hamburger").hide(); // Hide hamburger menu
    showSectionHeadNav("contact");
  });

  $("#dedicatedDesk-home").click(function () {
    previousSection = $("section:visible").attr("id"); // Save the currently visible section
    showSectionHeadNav("dedicatedDesk");
  });

  // $("#test").click(function () {
  //   previousSection = $("section:visible").attr("id"); // Save the currently visible section
  //   showSectionHeadNav("confirmation");
  // });

  // Navigate to the previous page when clicked on elements with id #backButton
  $("#backButton").click(function () {
    if ($("#home").is(":visible")) {
      // If currently on #home, show #splash and hide #header and #navigation
      showSection("splash");
    } else if (previousSection) {
      // Otherwise, show the previous section
      showSectionHeadNav(previousSection);
    }
  });
});
