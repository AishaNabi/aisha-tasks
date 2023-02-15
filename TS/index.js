var userRole;
(function (userRole) {
    userRole[userRole["Admin"] = 0] = "Admin";
    userRole[userRole["Guest"] = 1] = "Guest";
    userRole[userRole["User"] = 2] = "User";
    userRole[userRole["Owner"] = 3] = "Owner";
})(userRole || (userRole = {}));
var a = {
    ad: 'a',
    age: 18,
    cins: "qadin",
    maas: 220,
    mezuniyyetGunSayi: 2
};
console.log(a.mezuniyyetGunSayi);
function mezDeyri(user) {
    if (user.mezuniyyetGunSayi) {
        var d = user.maas / 22 * user.mezuniyyetGunSayi;
        console.log(d);
    }
}
mezDeyri(a);
