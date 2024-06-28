const list_nav_arr = [
    {
        display_name: "热门",
        name: "hot",
        ui: null
    }
]
$(async function() {
    var nav = new Navigation.Navigation(list_nav_arr, "list");
});