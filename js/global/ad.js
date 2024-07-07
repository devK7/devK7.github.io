$(function() {
    $.get("/ad/三消.html", (data) => {
        $(".梦幻联动").html(data);
    });
});