const docs_nav_arr = [
    {
        display_name: "如何使用本站",
        name: "如何使用本站",
        ui: null
    }
]
$(async function() {
    var nav = new Navigation.Navigation(docs_nav_arr, "docs");
    $.get("/db/docs/本站使用教程.md", async function(data) {
        $(".本站使用教程").html(marked.parse(data));
    });
    
});