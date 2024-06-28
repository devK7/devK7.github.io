/**
 * @returns {string}
 * @param {string} name
 * @param {string} selector
 */
function switch_btn(name) {
    var btn_html = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/resource/assets/switch.html", false);
    xhr.onload = function(e) { if (xhr.readyState === 4 && xhr.status === 200) btn_html = xhr.responseText.replace(/\$name/g, name); }
    xhr.send();
    return btn_html;
}