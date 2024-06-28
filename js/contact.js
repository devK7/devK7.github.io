const contact_nav_arr = [
    {
        display_name: "联系我们",
        name: "contact",
        ui: null
    },
    {
        display_name: "在线留言",
        name: "onlinemsg",
        ui: null
    },
    {
        display_name: "先辈の彩蛋",
        name: "homo",
        ui: null
    }
]
$(async function() {
    var nav = new Navigation.Navigation(contact_nav_arr, "contact");
    $('form.userpost').attr('action', `\/\/${window.location.hostname}:2886/api/contact/userpost`);
});