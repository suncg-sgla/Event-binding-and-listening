var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i=0; i<items.length; i++) {
    items[i].addEventListener("click", edit_item)
    inputs[i].addEventListener("blur", update_item)
    inputs[i].addEventListener("keypress", item_keypress)
}

function edit_item() {
    this.className = 'edit';
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
    console.log("My current value is", input.value);
}

function update_item() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function item_keypress(event) {
    // which值为13时是回车键
    if (event.which === 13) {
        update_item.call(this);
    }

}