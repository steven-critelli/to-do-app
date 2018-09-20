//TODO:
/*set function for setting priority color
*if not-important == default
*if important == orange
*if very-important == red
*
*Add click and drag to reorder
*
*sublists -- i.e. clean bathroom (click, submenu) --> wipe down counters, clean tub
*
*Set colored bubble to appear on priority selection, and reset to default on adding item
*Set colored bubble of choice to appear on right side of created items
*/

/******
 * Prioritize functionality over style first!!!
 ******/

//Creates "close" button and adds it to each list item
var myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//Creates click event to hide list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Creates a new list item after "Add" button is clicked
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var x = document.createTextNode(inputValue);
    li.appendChild(x);
    if (inputValue === '') {
        alert("A blank task cannot be created; please write something.");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Adds a "checkmark" symbol when clicking a list item
var list = document.querySelector('ul');
list.addEventListener('dblclick', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);