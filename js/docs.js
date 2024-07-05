const docs_arr = [
    "本站使用教程",
    "写出正确的废话教程",
    "电脑开关机教程",
    "如何下载软件",
    "如何正确提问",
    "如何提交项目更改"
];
var docs_nav_arr = [];
$(async function() {
    docs_arr.forEach((item, index) => docs_nav_arr.push({display_name:item, name: item, ui: null}));
    var nav = new Navigation.Navigation(docs_nav_arr, "docs");
    docs_arr.forEach((item, index) => $.get(`/db/docs/${item}.md`, (data) => $(`.${item}`).html(marked.parse(data))));
});