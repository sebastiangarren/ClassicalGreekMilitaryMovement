var athens = new location("Athens", [37.9838, 23.7275])
var corinth = new location("Corinth", [37.9386, 22.9322])
var sparta = new location("Sparta", [37.0745, 22.4303])

var app4 = new Vue({
    el: '#app-4',
    data: {
        locations: [
            { text: "athens.name" },
            {text: "dd" }
        ]
    }
})
    

var to = document.getElementById("to");
var from = document.getElementById("from");

function toFunction() {
    // i
}



function location() {
    this.name = name;
    this.coordinates = [latitude, longitude];
}