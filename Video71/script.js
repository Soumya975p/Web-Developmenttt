document.querySelector(".container").innerText
// 'This is a box\nThis is a box'
document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">This is a box</div>\n        <div class="box">This is a box</div> \n    </div>'
document.querySelector(".container").tagName
// 'DIV'
document.querySelector(".container").nodeName
// 'DIV'
document.querySelector(".container").textContent
// '\n        This is a box\n        This is a box \n    '
document.querySelector(".container").hidden=true
// true