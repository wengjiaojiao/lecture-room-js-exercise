function dataPrinter(data) {
  data.forEach(function(val) {
      $("<li>" + val.title + "</li>").appendTo(".prompts");
  })
}

function highLight(idVal,keyword, color) {
    var hlValue = new RegExp("(" + keyword + ")(?=[^<>]*<)","gi");
    $ID(idVal).innerHTML = $ID(idVal).innerHTML.replace(hlValue, "<font color=" + color + ">$1</font>");
}

function $ID(idVal) {
    return document.getElementById(idVal);
}

$.get("./bookmarks.json", function(data) {
    dataPrinter(data);
    $(".search-frame").on('keyup',function() {
        var searchText = $('.search-frame').val();
        var newData = [];

        _.forEach(data, function(val) {
            var title = val.title.toLowerCase();

            if(title.indexOf(searchText) !== -1) {
                $('.prompts').empty();
                newData.push({title: val.title,
                              created: val.created});
            }else{
                $('.prompts').empty();
            }
        });
        dataPrinter(newData);
        highLight("prompts", searchText, "red");
    });
});
