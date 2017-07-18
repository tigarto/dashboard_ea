$(document).ready(function(){
  // alert("hay");
  // document.getElementById("iner").innerHTML = "<p>Test</p>"; 
  elementos();
  //$('.iner').append(tabla);
  //$('.iner').append(addAllColumnHeaders(myList));
  //var columnas = addAllColumnHeaders(myList);
  //$('.iner').text(cabecera);
  //$('.iner').append(cabecera);
  //buildHtmlTable();
  //console.log("sss");
  addParrafos();  
  console.log("ssss");

}); 


function elementos () {
  var txt1 = "<p><b> Hello </b> World.</p>";  
  var txt2 = $("<p></p>").text("Que mas.");
  $('.iner').append(txt1);
  $('.iner').append(txt2);
  var txt = "<p><b> Hasta la vista </b> baby.</p>"; 
  for(i = 0; i < 10; i++) {
        $('.iner').append(txt);
        console.log("paso por aca");
  }
}

 
// Hasta el momento esta funcion no da.
function addParrafos() {
    console.log("mmmms");
    var txt = "<p><b> chao.</p>"; 
    var i;
    $('.iner2').append(txt);
    /*
    for(i = 0; i < 10; i++) {
        $('.tabla').append(txt);
        console.log("paso por aca");
    }
    */
    console.log("y por aca tambien");
 }



var tabla = ' <table style="width:100%"> \
                <tr> \
                    <th>Firstname</th> \
                    <th>Lastname</th> \
                    <th>Age</th> \
                </tr> \
                <tr> \
                    <td>Jill</td> \
                    <td>Smith</td> \
                    <td>50</td> \
                </tr> \
                <tr> \
                    <td>Eve</td> \
                    <td>Jackson</td> \
                    <td>94</td> \
                </tr> \
              </table> ';

var myList=[
                {"name" : "abc", "age" : 50},
                {"age" : "25", "hobby" : "swimming"},
                {"name" : "xyz", "hobby" : "programming"}
            ];

// Builds the HTML Table out of myList json data from Ivy restful service.


 function buildHtmlTable() {
     var columns = addAllColumnHeaders(myList);
     console.log(columns);
     //console.log(columns.length); 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr />');
         //alert(row);
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
             console.log(cellValue);
             if (cellValue == null) { 
                cellValue = ""; 
             }
             //console.log(cellValue);
             row$.append($('<td />').html(cellValue));
         }
         //console.log(i);
         $(".t").append(row$);
     }
     //console.log(row$);
 }
 
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var headerTr$ = $('<tr />');
     //console.log(myList.length);
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         // console.log(rowHash);
         for (var key in rowHash) {
            // Sobre $: https://stackoverflow.com/questions/1916584/jquery-variable-syntax
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 // https://www.tutorialspoint.com/html/html_basic_tags.htm
                 headerTr$.append($('<th />').html(key));
             }
         }        
     }     
     //console.log(headerTr$.children()[1]);
     //console.log(columnSet);
     $('.t').append(headerTr$);
     //alert($('.tabla').append(headerTr$));
     return columnSet;
 }
 

