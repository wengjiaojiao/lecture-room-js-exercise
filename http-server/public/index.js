var data = [
    {firstName: "bill",lastName: "Gates"},
    {firstName: "george",lastName: "Bush"},
    {firstName: "thomas",lastName: "Carter"}
];

function dataPrinter(data) {
  data.forEach(function(val) {
      $("<li>" + val.firstName + "</li>").appendTo(".prompts");
  })
}

dataPrinter(data);
$(".search-frame").on('keyup',function() {
    var searchText = $('.search-frame').val();
    var newData = [];

    data.forEach(function(val) {
        if(val.firstName.indexOf(searchText) !== -1) {
            $('.prompts').empty();
            newData.push({firstName:val.firstName});
        }else{
            $('.prompts').empty();
        }
    });
    dataPrinter(newData);

});
