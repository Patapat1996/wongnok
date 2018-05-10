$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row ">' + 
                '<div class="col-5"><img src=' + data[i].photo + ' class="thumbnail" /></div>' +
                '<div class="col-4"><br><br><br>' + data[i].name + '</div>' +
                '<div class="col-3"><br><br><br>' + data[i].rating + '</div>' +
                '</div>' +
                '</a><br>';
                $('#searchresult').append(row);
            }
        });
    });    
});
function validateForm() {
    var x = document.forms["Search"]["Search"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}