//TODO:
/*set function for setting priority color xxx
*if not-important == default xxx
*if important == orange xxx
*if very-important == red xxx
*
*Add click and drag to reorder
*
*sublists -- i.e. clean bathroom (click, submenu) --> wipe down counters, clean tub
*
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
var cNodes = document.getElementById("myUL").childNodes;
function newElement() {
    var priority = document.getElementById("priority");
    var selectedValue = priority.options[priority.selectedIndex].value;
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

    /* if (selectedValue == "unselected") {
        if (inputValue ==''){
            return
        } else {
            alert("A priority has not been selected.");
        }
    } else if (selectedValue == "normal") {
        cNodes[cNodes.length-1].style.backgroundColor = "rgb(165, 245, 119)";//green 
    } else */if (selectedValue == "important") {
        cNodes[cNodes.length-1].style.backgroundColor = "rgb(250, 173, 100)";//orange
    } else if (selectedValue == "very-important") {
        cNodes[cNodes.length-1].style.backgroundColor = "rgb(247, 76, 76)";//red
    }

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
    sortable('.sortable'); //Come back to check this if it doesn't work ( TODO: )
}

//Adds a "checkmark" symbol when clicking a list item
var list = document.querySelector('ul');
list.addEventListener('dblclick', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//Adds sorting functionality (toggle?)
sortable('.sortable', { //Needs fixing. See Shopify:draggable ( TODO: )
    items: '<li>',
    placeholder: 'placeholder'

});


/*$( document ).ready(function() {
    $('.sortable').mousedown(function() {
     $(this).height($(this).height());
    }).mouseup(function() {
     $(this).height('auto');
    }).sortable({
        connectWith: '.sortable',
    placeholder: 'placeholder',
    });
});*/