$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        var toAddNum = $("input[name=quantity]").val();
        $(".list").append("<li class='item'>" + toAddNum + " " + toAdd + " " +
            '<img src="images/tick.png" width="13px"height="13px" id="tick">' + " " + '<img src="images/delete.png" width="13px"height="13px" class="remove_field">' + "</li>");
    });
    $(document).on("click", "#tick", function (e) {
        e.preventDefault(); $(this).parent('li').css('opacity' ,'.3').css('font-size' , '.8em').css('font-style', 'italic').css('text-decoration' , 'line-through');
    });
    $(document).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('li').remove();
    });
});

