module.exports = {
    IsItFriday: function IsItFriday(today){
        if (today === "Friday"){
            return "TGIF"
        } else {
            return "Nope";
        }
    }
}