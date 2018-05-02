var app4 = new Vue({
    el: '#app-4',
    data: {
        locations: [
            { name: 'athens' },
            { name: 'sparta' },
            { name: 'corinth'}
        ]
    }
})
    

/* var to = document.getElementById("to");
var from = document.getElementById("from");

function toFunction() {
    // i
}

*/

function locationmaker(name, coordinates) {
    this.name = name;
    this.coordinates = new Array(2);
}


var athens = new locationmaker("Athens", Array[37.9838, 23.7275]);
var corinth = new locationmaker("Corinth", Array[37.9386, 22.9322]);
var sparta = new locationmaker("Sparta", Array[37.0745, 22.4303]);
//var locations = new Array(athens, corinth, sparta);
