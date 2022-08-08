

var addItemId = 0;
function AddToCart (item) {
        addItemId += 1;
        var selectedItem = document.createElement (div);
        selectedItem.classList.Add ('cart-icon');
        selectedItem.setAttribute ('id',addItemId);
        var image = document.createElement (img);
        img.setAttribute ('src', item.children[0].currentSrc);
        var cartItem = document.getElementById ('name-text');
        var name-text = document.createElement ('div');
        name-text.innerText = item.children[1].innerText;
        var h6 = document.createElement ('div');
        h6.innerText = item.children[1].children[2].innerText;
        var selected = document.createElement ('h6');
        selectedinnerText = item.children[1].children[1].value;
        h6.append (selected);
        var deleBtn = document.createElement ('del')
        deleBtn.innerText = "Delete";
        deleBtn.setAttribute('onclick,del ('+addItem+')');
        selectedItem.append (image);
        selectedItem.append (name-text);
        selectedItem.append (h6);
        selectedItem.append (deleBtn);
        cartItem.append(selectedItem);

}
function del (Item){
    document.getElementById (item).remove();
}