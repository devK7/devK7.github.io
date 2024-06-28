async function 封面动画() {
    await new Promise(r => setTimeout(r, (500)));
    var 高度 = 400;
    for (var i = 0; i < 2; ++i) {
        高度 = 高度 / 2; // 每次反弹的高度=上次反弹的高度÷2
        $(".page").animate({scrollTop: 高度}, 1000);
        $(".page").animate({scrollTop: 0}, 1000);
    }
}
