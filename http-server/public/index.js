function dataPrinter(data) {
  data.forEach(function(val) {
      $("<li>" + val.title + "</li>").appendTo(".prompts");
  })
}

$.get("./bookmarks.json", function(data) {
    dataPrinter(data);
    $(".search-frame").on('keyup',function() {
        var searchText = $('.search-frame').val();
        var newData = [];

        data.forEach(function(val) {
            if(val.title.indexOf(searchText) !== -1) {
                $('.prompts').empty();
                newData.push({title:val.title});
            }else{
                $('.prompts').empty();
            }
        });
        dataPrinter(newData);
    });
});
