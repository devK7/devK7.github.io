const 消息提示框 = {
    /** @param {string} 公告id */
    初始化(公告id) {
        document.querySelector('.page').style.overflow = "hidden";
    },
    /** @param {string} 公告id */
    关闭(公告id) {
        document.getElementById(公告id).style.display = "none";
        document.querySelector('.page').style.overflow = "auto";
    }
}