let gets = {};
import("/js/global/JQuery/jquery-3.7.1.min.js");
window.onload = async function(){
    const this_url_p = window.location.pathname.trim().replace(/^\/+|\/+$/g, "").split("/").filter(segment => segment !== "").length > 0 ? (window.location.pathname.trim().replace(/^\/+|\/+$/g, "").split("/").filter(segment => segment !== "")[0] === "view" ? ["view"] : window.location.pathname.trim().replace(/^\/+|\/+$/g, "").split("/").filter(segment => segment !== "")) : ["index"];
    window.location.search.slice(1).split('&').forEach(item => gets[item.split('=')[0]] = item.split('=')[1]);
    const res_list = {
        script: [
            //"/js/global/JQuery/jquery-3.7.1.min.js",//jQuery
            "/js/global/marked/marked.min.js",
            "/js/global/switch.js",
            "/js/global/Navigation.js",
            "/js/global/cover.js"
        ],
        style: [
            "/css/global/global.css",
            "/css/global/card.css",
            "/css/global/box.css",
            "/css/global/switch.css",
            "/css/global/Navigation.css",
            "/css/global/cover.css",
            "https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900"
        ]
    };
    load_resource(this_url_p, res_list);
    load_header();
    if (this_url_p === undefined) index_list();
    load_post_list();
};
async function load_resource(this_url, res_list) {
    load_js(this_url, res_list["script"]);
    load_css(this_url, res_list["style"]);
}
async function load_css(this_url, css_list) {
    var this_page_css = "/css";
    this_url.forEach(function(item, index) { this_page_css += "/" + item; });
    this_page_css += ".css";
    css_list.push(this_page_css);
    css_list.forEach(function(item, index) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = item;
        document.head.appendChild(link);
    });
}
async function load_js(this_url, js_list) {
    var this_page_js = "/js";
    this_url.forEach(function(item, index) { this_page_js += "/" + item; });
    this_page_js += ".js";
    js_list.push(this_page_js);
    js_list.forEach(function(item, index) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = item;
        document.head.appendChild(script);
    });
}
async function load_header() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/resource/assets/header.html", true);
    xhr.onload = function(e) { if (xhr.readyState === 4 && xhr.status === 200) $(".title-bar").html(xhr.responseText.toString()); };
    xhr.send();
}
async function load_post_list() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/db/post/list.json", true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4 && xhr.status === 200) JSON.parse(xhr.responseText).forEach(item => $(".post-list").prepend(`<a class="card" href="/view/${item["id"].toString().padStart(8, "0")}" target="_blank"><img src="/resource/post/avatar/${item["id"].toString().padStart(8, "0")}.jpg" alt="${item['title']}"><div class="card-text"><h2>${item['title']}</h2><p><b>${item["description"]}</b></p></div></a>\n`));
        if (Number(gets["only_list"])) $(".post-list").prepend(`<h1 align="center">文章列表</h1>`);
    };
    xhr.send();
}
