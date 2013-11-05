function initialize() {
    var latlng = new google.maps.LatLng(30.26737,-97.742958);
    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);
}


$(document).ready(function(){
    jQuery.fn.exists = function(){
        return this.length > 0;
    }
    
    if (window.PIE) {
        $('.ie-fix').each(function() {
            PIE.attach(this);
        });
    }
    
    if ($('#map').exists()) {
        initialize();
    }
    
    if ($('.tutor-area .tutor-list .corner').exists()) {
        $('.tutor-area .tutor-list .corner').tooltip({
            delay: { show: 500, hide: 200 }
        });
    }
    $(".form").colorbox();

});