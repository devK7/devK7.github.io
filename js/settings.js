var settings_list = [];
$(async function() {
    var setting;
    $.getJSON("/db/settings/page/settings-page.json", (data) => setting = new Navigation.Navigation(data, "settings"));
});
