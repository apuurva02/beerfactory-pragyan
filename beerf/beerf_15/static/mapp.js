   // a cross reference of area names to text to be shown for each area
    var xref = {
        fact1: "<input type='text' value='f1'>name</input>",
        fact2: "<input type='text' value='f2'>name</input>",
        ret1: "<input type='text' value='r1'>name</input>",
        ret2: "<input type='text' value='r2'>name</input>"
    };

    var path='static/images/map1.gif' ;


function myFunction(level) {
    switch(level){
        case 1: //path="{% static "images/map1.gif" %}" ;
        path = 'static/images/map1.gif';
            break;
        case 2: path='static/images/map2.gif' ;
            break;
        case 3: path='static/images/map3.gif';
            break;
        case 4: path='static/images/map4.gif' ;
            break;
        
    }
    mapp();
}

    var hovered = "fact1";
    var image = $('#map1');
var newToolTip = "default";

function mapp(){
    image.mapster(
    {
        fillOpacity: 0.4,
        fillColor: "d42e16",
        stroke: true,
        strokeColor: "3320FF",
        strokeOpacity: 0.8,
        strokeWidth: 4,
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name',
        staticState : true,

    render_select : { altImage : path},
        onMouseover: function(x) {
 hovered = x.key;

                 image.mapster('set_options', { 
                areas: [{
                    key: x.key,
                    toolTip: hovered
                    }]
                });
        },
        showToolTip: true,
        toolTipClose: ["tooltip-click", "area-click"],

        onClick: function (e) {
            $('#selections').html(xref[e.key]);
        }
});
}
mapp();