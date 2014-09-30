// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(document).ready(function() {

  // toggle filter menu
  $('#js-toggle-filters').click(function() {
    $('#filters').slideToggle();
  });

  // load JS multiselect
  $('.js-multiselect').on('click', function () {
    $('#menu-multiselect').jstree('select_node', 'child_node_1');
  });
  

});