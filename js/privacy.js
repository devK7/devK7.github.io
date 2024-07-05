const privacy_arr = [
    "数据收集情况"
];
var privacy_nav_arr = [];
$(async function() {
    privacy_arr.forEach((item, index) => privacy_nav_arr.push({display_name:item, name: item, ui: null}));
    var nav = new Navigation.Navigation(privacy_nav_arr, "privacy");
});