const docs_nav_arr = [
    {
        display_name: "如何使用本站",
        name: "如何使用本站",
        ui: null
    },
    {
        display_name: "如何写出正确的废话",
        name: "如何写出正确的废话",
        ui: null
    },
    {
        display_name: "电脑如何开关机",
        name: "电脑如何开关机",
        ui: null
    },
    {
        display_name: "如何下载软件",
        name: "如何下载软件",
        ui: null
    },
    {
        display_name: "如何正确提问",
        name: "如何正确提问",
        ui: null
    }
]
$(async function() {
    var nav = new Navigation.Navigation(docs_nav_arr, "docs");
    $.get("/db/docs/本站使用教程.md", async function(data) {
        $(".本站使用教程").html(marked.parse(data));
    });
    $.get("/db/docs/写出正确的废话教程.md", async function(data) {
        $(".写出正确的废话教程").html(marked.parse(data));
    });
    $.get("/db/docs/电脑开关机教程.md", async function(data) {
        $(".电脑开关机教程").html(marked.parse(data));
    });
    $.get("/db/docs/如何下载软件.md", async function(data) {
        $(".如何下载软件").html(marked.parse(data));
    });
    $.get("/db/docs/如何正确提问.md", async function(data) {
        $(".如何正确提问").html(marked.parse(data));
    });
});