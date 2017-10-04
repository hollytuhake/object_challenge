var locations = []; // this array will hold your objects

// object constructor
var Region = function(state, revenue, locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = revenue / locationCount;
};

// object instances
var illinois = new Region ('IL', 5000, 12);
var minnesota = new Region ('MN', 300, 3);
var nevada = new Region ('NV', 25000, 1);

// push object instances to locations array
locations.push(illinois);
locations.push(minnesota);
locations.push(nevada);


// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
