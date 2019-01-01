

var content = document.querySelector('.dropdown-content');
document.querySelector('.dropdown').addEventListener('click', function (event) {
    content.classList.toggle('show');
    console.log(content.classList);
});
window.addEventListener('click', function (event) {
    if (event.target.className !== 'dropdown') {
        content.classList.toggle('show');
    }
});

// removing the list items
document.getElementById('listToDestroy').addEventListener('click', function (e) {
    console.log(e.target);
    var elm = e.target.parentNode;
    console.log(elm);
    console.log(elm.parentNode);
    elm.parentNode.removeChild(elm);
    e.preventDefault();
});

//removing buttons & add two
/**
 * Reference to ***this**** is very very important
 */
document.getElementById('doubleHolder').addEventListener('click', function (e) {
    if(e.target.classList.contains('double')){
        var btn = document.createElement('button');
        btn.setAttribute('class', 'double');
        btn.innerHTML = 'double';

        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'double');
        btn2.innerHTML = 'double';

        this.appendChild(btn);
        this.appendChild(btn2);
        this.removeChild(e.target);
    }
});

function getAllText(node){
    var allText = [];

    function getNodeText(node){
        if(node && node.childNodes && node.childNodes.length){
            for(var i = 0, len = node.childNodes.length; i<len; i++){
                getNodeText(node.childNodes[i]);
            }
        }
        else{
            allText.push(node.nodeValue);
        }
    }
    getNodeText(node);
    console.log(allText);
    return allText.join('');
}

getAllText(document.body);


function mergedSortedArrays (a, b) {
    var i = 0, j = 0, merged = [];
    while (i < a.length) {
        if (a[i] < b[i]){
            merged.push(a[i]);
            i++;
        } else if (a[i] === b[j]) {
            merged.push(a[i]);
            merged.push(b[j]);
            i++;
            j++

        } else {
            merged.push(b[j]);
            j++
            console.log(j, b[j]);
        }
    }
    if (j < b.length) {
        console.log(b.slice(j, j.length));
        var remain = b.slice(j, j.length)
        merged.push(...remain);
    }
    console.log(merged);

}

mergedSortedArrays([1,2,5,6], [3,4,5,5,6, 7,8,9]);

function swapNumb(a, b){
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b -a;
    console.log(b);
    a = a+ b;
    console.log(a);
    b = a-b;
    console.log('after swap: ','a: ', a, 'b: ', b);
}

swapNumb(5, 2);

//reverse using recursion
function reverse (str) {
    if (str === "") {
        return "";
    }
    return reverse(str.substr(1)) + str.charAt(0);

}

console.log(reverse("HELLO"));


// bind
var fn = {
    name: 'veera',
    age: '20',
    getNameAge: function () {
        return this.name + this.age;
    }
}

var other = {
    name: 'kelly',
    age: '25'
}

console.log(fn.getNameAge());
console.log(fn.getNameAge.bind(other)());

//CLosure & tabbed content example

var list = ['list1', 'list2', 'list3']; //assume these are DOM elements

var tabHandler = function (index) {
    return function () {
        console.log(index);
    }
}


for (var i =0; i< list.length;i++){
    list[i].onclick = tabHandler(i);
}
console.log(list[0]);

// reverse sentence

function reverseWords(str){
    var rev = [],
        wordLen = 0;
    for(var i = str.length-1; i>=0; i--){
        if(str[i]==' ' || i==0){
            rev.push(str.substr(i,wordLen+1));
            wordLen = 0;
        }
        else
            wordLen++;
    }
    return rev.join(' ');
}

console.log(reverseWords('I am at work'));

let checkEl = document.getElementById('checkk');
document.getElementById('checkk').addEventListener('change', function (ev) {
    console.log(ev);
    console.log(checkEl.checked);
});

console.log(document.slide);
