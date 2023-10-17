const chars = {
    "D" : '<char class="deeppink">D</char>',
    "M" : '<char class="purple">M</char>',
    "N" : '<char class="deeppink">N</char>',
    "P" : '<char class="darkorange">P</char>',
    "H" : '<char class="red">H</char>',
    "Mẹ" : '<char class="purple">Mẹ</char>',
    "Ông ngoại" : '<char class="peru">Ông ngoại</char>',
    "ĐC": '<char class="aqua">ĐC</char>',
    "Con": '<char class="darkblue">Con</char>',
    "Em": '<char class="darkpink">Em</char>',
    "Bà ngoại": '<char class="darkolivegreen">Bà ngoại</char>',
    


}

for(let char in chars){
    document.body.innerHTML = document.body.innerHTML.replaceAll(`$${char}`, chars[char]);
}