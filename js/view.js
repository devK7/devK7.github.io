$(function(){
    get_post_data();
});
function get_post_data() {
    const view_id = window.location.pathname.trim().replace(/^\/+|\/+$/g, "").split("/").filter(segment => segment !== "")[window.location.pathname.trim().replace(/^\/+|\/+$/g, "").split("/").filter(segment => segment !== "").length-1];
    $.getJSON(`/db/post/data/${view_id}.json`, function(data) {
        const p_meta = data["meta"]
        const p_view = new pv(p_meta["id"], p_meta["title"], p_meta["description"], p_meta["time"], p_meta["author"], p_meta["visitable"], p_meta["tags"]);
        $("#v_metadata").html(p_view.html);
    });
    $.get(`/db/post/data/${view_id}.md`, function(data) {
        $("#v_content").html(marked.parse(data.toString()));
    });
}

class pv {
    constructor(id, title, description, time, author, visitable, tags) {
        if (!visitable) {
            this.html = `<div class="card"><img src="/resource/icon/error.svg" alt="Error_Icon"><h2>权限不足</h2><p>您没有权限查看本文章</p></div>`;
            return;
        }
        this.id = id;
        this.title = title;
        this.description = description;
        this.time = time;
        this.author = author;
        this.visitable = visitable;
        this.tags = tags;
        this.html = `<div class="card" style="height:225px;max-width:666px;"><img src="/resource/post/avatar/${this.id.toString().padStart(8, "0")}.jpg" alt="${this.title}"><div class="card-text"><h2>${this.title}</h2><p><b>${this.description}</b></p><p style="color:grey">作者: ${this.author}</p><dl class="card-tag">${this.tags.map(tag => `<dl>${tag}</dl>`).join('')}</dl></div></div>`;
    }
}
