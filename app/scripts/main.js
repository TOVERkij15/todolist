

Parse.initialize("fn8iqeOjDwDB3IBG428xyxhs5iqR2OnsOUvcxGBT","rPJbC036qoMOKE5MgQ4Bc5Uvp62Y57WSCjZw1O8W");

//model

var User = Parse.Object.extend("user");

//collection

var UserCollection = Parse.Collection.extend({
  model: User
});

/////////////////////
///////todolist/////
///////////////////
$(document).ready(function() {
    $(".button").click(function() {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">' + toAdd + "</div>");
        $(document).on('click', '.item', function(){
        $(this).remove();
    });
    });
});