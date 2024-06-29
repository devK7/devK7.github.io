var Navigation = {
    Navigation: class {
        static item_group_class = "nav-group box";
        static item_title_class = "nav-group-title";
        static item_image_root_url = "/resource/icon/";
        static item_group_item_class = "nav-group-item";
        /**
         * @param {{display_name: string, name: string, ui: {any: string}}[]} list
         * @param {string} usefor
         */
        constructor(list, usefor) {
            this.list = list;
            this.usefor = usefor;
            //$(".nav-title").append(`<input style="position: absolute;top: 50px;left: 200px;z-index: 999;" type="checkbox" onchange="if($('.nav-group').hasClass('box')) $('.nav-group').removeClass('box'); else $('.nav-group').addClass('box');">`);
            list.forEach((item, index) => {
                $(".navigation-bar").append(`<dt><a href="#${item["name"]}"><img src="${Navigation.Navigation.item_image_root_url}${this.usefor}/${index.toString().padStart(2, "0")}.ico"><p>${item["display_name"]}</p></a></dt>\n`);
                this.add_item(item);
            });
        }
        /** @param {{display_name: string, name: string, ui: {string: string}[]}} item */
        add_item(item) {
            var ui_html_text = "";
            if (item["ui"] != null && item["ui"] != undefined) {
                item["ui"].forEach((ui_item, index) => {
                    switch (Object.keys(ui_item)[0]) {
                        case "text":
                            ui_html_text += ui_item["text"];
                            break;
                        case "switch_btn":
                            ui_html_text += switch_btn(ui_item["switch_btn"]);
                            break;
                        default:
                            ui_html_text = `<p style="color:red;">ERROR: Json中类型出错，js数据(ui_item["${Object.keys(ui_item)[0]}"])，函数add_item()</p>`;
                            break;
                    }
                });
                const group_html = `<div class="${Navigation.Navigation.item_group_class}">
                        <h2 class="${Navigation.Navigation.item_title_class}" id="${item["name"]}">
                            <img src="${Navigation.Navigation.item_image_root_url}${this.usefor}/${this.list.indexOf(item).toString().padStart(2, "0")}.ico">
                            <p>${item["display_name"]}</p>
                        </h2>
                        <div class="${Navigation.Navigation.item_group_item_class}">${ui_html_text}</div>
                    </div>`;
                $(".nav-content").append(group_html);
            }
        }
    }
}

/*
let resizing = false
var old_mouse_x;
const menu = document.querySelector('.menu-wrapper');
document.querySelector('.resize-container').addEventListener('mousedown', (e) => {
    old_mouse_x = e.x;
    resizing = true;
});
window.addEventListener('mousemove', (e) => {
    if (resizing) {
        if ((e.x - old_mouse_x + menu.offsetWidth) <= 96) {
            menu.style.width = "300px";
            resizing = false;
        } else {
            menu.style.width = e.x - old_mouse_x + menu.clientWidth + 'px';
            old_mouse_x = e.x;
        }
    }
});
window.addEventListener('mouseup', (e) => { resizing = false; });*/