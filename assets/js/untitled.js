var theme = 0;
var encr;
function darker(){
    if (theme == 0){
        mainbackground.style.backgroundColor = "black";
        texttoenclabel.style.color = "white";
        passwordlabel.style.color = "white";
        enctextlabel.style.color = "white";
        enctext.style.color = "white";
        decryptlabel2.style.color = "white";
        passwordlabel2.style.color = "white";
        decrtext.style.color = "white";
        htmlmain.style.backgroundColor = "black";
        darkmodebutton.style.backgroundColor = "red";
        document.getElementById("darkmodebutton").innerHTML = "Enable Light Mode";
        theme = 1;
    }
    else{
        mainbackground.style.backgroundColor = "white";
        texttoenclabel.style.color = "black";
        passwordlabel.style.color = "black";
        enctextlabel.style.color = "black";
        enctext.style.color = "black";
        passwordlabel.style.color = "black";
        decryptlabel2.style.color = "black";
        decrtext.style.color = "black";
        htmlmain.style.backgroundColor = "white";
        darkmodebutton.style.backgroundColor = "green";
        document.getElementById("darkmodebutton").innerHTML = "Enable Dark Mode";
        theme = 0;
    }
}
darker()
function encryptit(){
    var texttoenc = document.getElementById("toenctext").value;
    var mypassword = document.getElementById("passwordtext").value;
    if (mypassword.length == 0 || (document.getElementById("toenctext").value).length == 0){
        document.getElementById("enctext").innerHTML = "Fill the fields first!";
    }
    else{
        try{
            encr = CryptoJS.AES.encrypt(texttoenc, mypassword);
            document.getElementById("enctext").innerHTML = encr;
        }
        catch(err){
            document.getElementById("enctext").innerHTML = err.message;
        }
    }
}
function decryptit(){
    var texttodec = document.getElementById("enctext2").value;
    var mypassword = document.getElementById("passwordtext2").value;
    if (mypassword.length == 0 || texttodec.length == 0){
        document.getElementById("decrtext").innerHTML = "Fill the fields first!";
    }
    else{
        try{
            var temp = CryptoJS.AES.decrypt(texttodec, mypassword)
            document.getElementById("decrtext").innerHTML = temp.toString(CryptoJS.enc.Utf8);
        }
        catch(err){
            document.getElementById("decrtext").innerHTML = err.message;
        }
    }
}