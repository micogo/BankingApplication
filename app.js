document.addEventListener("DOMContentLoaded", function() {

    let data = new FormData();
    data.append(name, "dupa")
    let testVariable = "name=dupa";
    fetch(`http://localhost:3001/rest/v1/products/postForm`, {
            method: 'POST',
            mode: 'cors',
            body: data
    }).then(response=>{
        console.log(response)
        if (response.status === 200) {
        response.json().then(dupa => {
            console.log(dupa)
        })
    }});
    fetch(`http://localhost:3001/rest/v1/products/postSMSToken`, {
        method: 'POST',
        mode: 'cors',
        body: data
    }).then(response=>{
        console.log(response)
        if (response.status === 200) {
        response.json().then(dupa => {
            console.log(dupa)
        })
        }});


    const transferBtn = document.querySelector(".main-button");
    const transferModal = document.querySelector(".modal");
    transferBtn.addEventListener("click", function(){
        transferModal.classList.contains('none') && transferModal.classList.remove('none');
        return 0;
    });

    const closeBtn = document.querySelector(".x-button");
    closeBtn.addEventListener("click", function (){
        transferModal.classList.contains('modal') && transferModal.classList.add('none');
    });

    let customerAccountNumber = inputElement("customer-account-number");
    let recipientAccountNumber = inputElement("recipient-account-number", /^([a-zA-Z0-9_-]){5,60}$/);
    let transferAmount = inputElement("transfer-amount", /^[0-9]{0,}$/);
    let customerAddress = inputElement("customer-address", /^([a-zA-Z0-9_-]){5,60}$/);
    let title = inputElement("title", /^([a-zA-Z0-9_-]){5,60}$/);
    let orderName = inputElement("order-name", /^([a-zA-Z0-9_-]){5,60}$/);

    recipientAccountNumber.addDynamicVallidationListener();
    transferAmount.addDynamicVallidationListener();
    customerAddress.addDynamicVallidationListener();
    title.addDynamicVallidationListener();
    orderName.addDynamicVallidationListener();

    const transferObject = {
        customerAccountNumber: customerAccountNumber.identifier.options[customerAccountNumber.identifier.selectedIndex].value,
        recipientAccountNumber: recipientAccountNumber.getValue(),
        transferAmount: transferAmount.getValue(),
        customerAddress: customerAddress.getValue(),
        title: title.getValue(),
        orderName: orderName.getValue()
    }


    const transferFormSubmit = document.querySelector('.transfer-oval');
    transferFormSubmit.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Submit");

	 })
})