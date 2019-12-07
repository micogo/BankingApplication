class InputElement {
    constructor(identifier, testMethod){
        this.identifier = document.querySelector(`.${identifier}`);
        this.value="";
        this.testMethod = testMethod;
    }
    getValue(){
        this.value = this.identifier.value;
        return this.value;
    }
    yourCustomValidation () {
        if (this.testMethod.test(this.getValue())) {
            console.log("OK");
        }
        else {
            console.log("not ok");
        }
    }
    addDynamicVallidationListener(){
        this.identifier.addEventListener ("keyup", () => {
            this.yourCustomValidation();
            this.getValue();
            console.log(this.value);
        })
    }
    pushToSubmitArray(arryToPush){
        arrayToPush.push(this);
    }
}

function inputElement (identifier, testMethod) {
    return new InputElement(identifier, testMethod);
}