//https://www.w3schools.com/xml/xml_http.asp
//'use strict';

<!DOCTYPE html>
<html>
<body>

<h2>Using the XMLHttpRequest Object</h2>

<div id="demo">
<button type="button" onclick="loadXMLDoc()">Change Content</button>
</div>

<script>
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "xmlhttp_info.txt", true);
  xhttp.send();
}
</script>

</body>
</html>

My couchDB

http://localhost:5984/hw11_js6/1198139bb6a33eb9f471b02ef400a0e7

{
  "id": "1198139bb6a33eb9f471b02ef400a0e7",
  "key": "1198139bb6a33eb9f471b02ef400a0e7",
  "value": {
    "rev": "9-441ce93ea9b5bccaf824095389bd6825"
  }
}



{
  "_id": "1198139bb6a33eb9f471b02ef400a0e7",
  "_rev": "9-441ce93ea9b5bccaf824095389bd6825",
  "Name1": "Oleksandr1",
  "Name2": "Oleksandr2",
  "Name3": "Oleksandr3",
  "Name4": "Oleksandr4",
  "Name5": "Oleksandr5",
  "Name6": "Oleksandr6",
  "Age1": "27",
  "Age2": "27",
  "Age3": "25",
  "Age4": "26",
  "Age5": "28",
  "Age6": "29",
  "Pets1": "Black Cat",
  "Pets2": "Big Dog",
  "Pets3": "Dog",
  "Pets4": "Other",
  "Hobbies1": "Programming",
  "Hobbies2": "Sport",
  "Hobbies3": "Brainteaser puzzles"
}