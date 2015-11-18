function dataPrinter(data) {
  data.forEach(function(val) {
      $("<li>" + val.title + "</li>").appendTo(".partOne");
      var localTime = 'Created @' + getLocalTime(val.created);
      $("<li>" + localTime + "</li>").appendTo(".partTwo");
  })
}

function getLocalTime(timeStamp) {
   return new Date(parseInt(timeStamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ').match(/^[^\s]*/)[0];
}

function highLight(idVal,keyword, color) {
    var hlValue = new RegExp("(" + keyword + ")(?=[^<>]*<)","gi");
    $ID(idVal).innerHTML = $ID(idVal).innerHTML.replace(hlValue, "<font color=" + color + ">$1</font>");
}

function $ID(idVal) {
    return document.getElementById(idVal);
}

function getNewData(data, searchText) {
    var newData = [];
    var filterDatas = _.filter(data, function(filterData) {
        var title = filterData.title.toLowerCase();

        return title.indexOf(searchText) !== -1;
    });

    _.forEach(filterDatas, function(filterData) {
        newData.push({title: filterData.title,
                      created: filterData.created});
    });
    return newData;
}

$.get("./bookmarks.json", function(data) {
    dataPrinter(data);
    $(".search-frame").on('keyup',function() {
        var searchText = $('.search-frame').val();

        searchText = searchText.toLowerCase();
        $('.partOne').empty();
        $('.partTwo').empty();
        var newData = getNewData(data, searchText);

        dataPrinter(newData);
        highLight("prompts", searchText, "#FF1A9E");
    });
});
