$(document).ready(function () {
    $("H1").css("text-align","center");
    $("H2").css("text-align","center");
    $("H1:first").removeClass("myBannerHeading").addClass("page-header");
    $("#yellowHeading").text("Yellow Team");
    $("#orangeTeamList").css("background-color","orange");
    $("#blueTeamList").css("background-color","blue");
    $("#redTeamList").css("background-color","red");
    $("#yellowTeamList").css("background-color","yellow");
    $("#yellowTeamList").append("<li>Joseph Banks</li><li>Simon Jones</li>")
    $("H1:last").hide();
    $("H2").remove();
    $(".footer").html("<p>Hong Tran</p><p>Email:tlxhong1108@gmail.com</p>").css("font","24px courier");
});
