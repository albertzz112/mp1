function addition() {
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=Number(first)+Number(second);
    document.getElementById("output").innerHTML=String(result);
}

function subtraction() {
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=Number(first)-Number(second);
    document.getElementById("output").innerHTML=String(result);

    if (result < 0) {
        document.getElementById("output").style.color = 'red';
    } else {
        document.getElementById("output").style.color = 'black';
    }
}

function multiplication() {
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=Number(first)*Number(second);
    document.getElementById("output").innerHTML=String(result);

    if (result < 0) {
        document.getElementById("output").style.color = 'red';
    } else {
        document.getElementById("output").style.color = 'black';
    }
    }

function division() {
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=Number(first)/Number(second);
    document.getElementById("output").innerHTML=String(result);

    if (result < 0) {
        document.getElementById("output").style.color = 'red';
    } else {
        document.getElementById("output").style.color = 'black';
    }
}

let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result = 1;

    if (second < 0) {
        second = -second;
        for (let i = 0; i < second; i++) {
            result = first * result;
        }
        result = 1 / result;
    } else {
        for (let i = 0; i < second; i++) {
            result = first * result;
        }
    }

    if (result < 0) {
        document.getElementById("output").style.color = 'red';
    } else {
        document.getElementById("output").style.color = 'black';
    }

    document.getElementById("output").innerHTML=String(result);
}

function clearFields() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = "";
}
