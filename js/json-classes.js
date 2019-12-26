//Digital Mass Media Freshmen Year
var xhr = new XMLHttpRequest();

var newContentFreshmenMM = '';

xhr.onload = function(){
    responseObject = JSON.parse(xhr.responseText);
    
    for(var i=0; i < responseObject.freshmenMM.length; i++){
        newContentFreshmenMM += '<ul class="freshmenMM">';
        newContentFreshmenMM += '<li> Name: ' + responseObject.freshmenMM[i].name + '</li>';
        newContentFreshmenMM += '<li> Description: ' + responseObject.freshmenMM[i].description + '</li>';
        newContentFreshmenMM += '<li> Credits: ' + responseObject.freshmenMM[i].credits + '</li>';
        newContentFreshmenMM += '</ul>';
    }
};

xhr.open('GET', 'data/mass_media_json.json', true);
xhr.send(null);

function showFreshmenMM() {
  document.getElementById('contentFreshmenMM').innerHTML = newContentFreshmenMM;
}

document.getElementById("btnFreshmenMM").onclick = function() {showFreshmenMM()};

//Digital Mass Media Sophomore Year
var xhr2 = new XMLHttpRequest();

var newContentSophomoreMM = '';

xhr2.onload = function(){
    responseObject = JSON.parse(xhr2.responseText);
    
    for(var i=0; i < responseObject.sophomoreMM.length; i++){
        newContentSophomoreMM += '<ul class="sophomoreMM">';
        newContentSophomoreMM += '<li> Name: ' + responseObject.sophomoreMM[i].name + '</li>';
        newContentSophomoreMM += '<li> Description: ' + responseObject.sophomoreMM[i].description + '</li>';
        newContentSophomoreMM += '<li> Credits: ' + responseObject.sophomoreMM[i].credits + '</li>';
        newContentSophomoreMM += '</ul>';
    }
};

xhr2.open('GET', 'data/mass_media_json.json', true);
xhr2.send(null);

function showSophomoreMM() {
  document.getElementById('contentSophomoreMM').innerHTML = newContentSophomoreMM;
}

document.getElementById("btnSophomoreMM").onclick = function() {showSophomoreMM()};

//Digital Mass Media Junior Year
var xhr3 = new XMLHttpRequest();

var newContentJuniorMM = '';

xhr3.onload = function(){
    responseObject = JSON.parse(xhr3.responseText);
    
    for(var i=0; i < responseObject.juniorMM.length; i++){
        newContentJuniorMM += '<ul class="juniorMM">';
        newContentJuniorMM += '<li> Name: ' + responseObject.juniorMM[i].name + '</li>';
        newContentJuniorMM += '<li> Description: ' + responseObject.juniorMM[i].description + '</li>';
        newContentJuniorMM += '<li> Credits: ' + responseObject.juniorMM[i].credits + '</li>';
        newContentJuniorMM += '</ul>';
    }
};

xhr3.open('GET', 'data/mass_media_json.json', true);
xhr3.send(null);

function showJuniorMM() {
  document.getElementById('contentJuniorMM').innerHTML = newContentJuniorMM;
}

document.getElementById("btnJuniorMM").onclick = function() {showJuniorMM()};

//Digital Mass Media Senior Year
var xhr4 = new XMLHttpRequest();

var newContentSeniorMM = '';

xhr4.onload = function(){
    responseObject = JSON.parse(xhr4.responseText);
    
    for(var i=0; i < responseObject.seniorMM.length; i++){
        newContentSeniorMM += '<ul class="seniorMM">';
        newContentSeniorMM += '<li> Name: ' + responseObject.seniorMM[i].name + '</li>';
        newContentSeniorMM += '<li> Description: ' + responseObject.seniorMM[i].description + '</li>';
        newContentSeniorMM += '<li> Credits: ' + responseObject.seniorMM[i].credits + '</li>';
        newContentSeniorMM += '</ul>';
    }
};

xhr4.open('GET', 'data/mass_media_json.json', true);
xhr4.send(null);

function showSeniorMM() {
  document.getElementById('contentSeniorMM').innerHTML = newContentSeniorMM;
}

document.getElementById("btnSeniorMM").onclick = function() {showSeniorMM()};

//Digital Commerce Freshmen Year
var xhr5 = new XMLHttpRequest();

var newContentFreshmenDC = '';

xhr5.onload = function(){
    responseObject = JSON.parse(xhr5.responseText);
    
    for(var i=0; i < responseObject.freshmenDC.length; i++){
        newContentFreshmenDC += '<ul class="freshmenMM">';
        newContentFreshmenDC += '<li> Name: ' + responseObject.freshmenDC[i].name + '</li>';
        newContentFreshmenDC += '<li> Description: ' + responseObject.freshmenDC[i].description + '</li>';
        newContentFreshmenDC += '<li> Credits: ' + responseObject.freshmenDC[i].credits + '</li>';
        newContentFreshmenDC += '</ul>';
    }
};

xhr5.open('GET', 'data/digital_commerce_json.json', true);
xhr5.send(null);

function showFreshmenDC() {
  document.getElementById('contentFreshmenDC').innerHTML = newContentFreshmenDC;
}

document.getElementById("btnFreshmenDC").onclick = function() {showFreshmenDC()};

//Digital Commerce Sophomore Year
var xhr6 = new XMLHttpRequest();

var newContentSophomoreDC = '';

xhr6.onload = function(){
    responseObject = JSON.parse(xhr6.responseText);
    
    for(var i=0; i < responseObject.sophomoreDC.length; i++){
        newContentSophomoreDC += '<ul class="sophomoreDC">';
        newContentSophomoreDC += '<li> Name: ' + responseObject.sophomoreDC[i].name + '</li>';
        newContentSophomoreDC += '<li> Description: ' + responseObject.sophomoreDC[i].description + '</li>';
        newContentSophomoreDC += '<li> Credits: ' + responseObject.sophomoreDC[i].credits + '</li>';
        newContentSophomoreDC += '</ul>';
    }
};

xhr6.open('GET', 'data/digital_commerce_json.json', true);
xhr6.send(null);

function showSophomoreDC() {
  document.getElementById('contentSophomoreDC').innerHTML = newContentSophomoreDC;
}

document.getElementById("btnSophomoreDC").onclick = function() {showSophomoreDC()};

//Digital Mass Media Junior Year
var xhr7 = new XMLHttpRequest();

var newContentJuniorDC = '';

xhr7.onload = function(){
    responseObject = JSON.parse(xhr7.responseText);
    
    for(var i=0; i < responseObject.juniorDC.length; i++){
        newContentJuniorDC += '<ul class="juniorDC">';
        newContentJuniorDC += '<li> Name: ' + responseObject.juniorDC[i].name + '</li>';
        newContentJuniorDC += '<li> Description: ' + responseObject.juniorDC[i].description + '</li>';
        newContentJuniorDC += '<li> Credits: ' + responseObject.juniorDC[i].credits + '</li>';
        newContentJuniorDC += '</ul>';
    }
};

xhr7.open('GET', 'data/digital_commerce_json.json', true);
xhr7.send(null);

function showJuniorDC() {
  document.getElementById('contentJuniorDC').innerHTML = newContentJuniorDC;
}

document.getElementById("btnJuniorDC").onclick = function() {showJuniorDC()};

//Digital Mass Media Senior Year
var xhr8 = new XMLHttpRequest();

var newContentSeniorDC = '';

xhr8.onload = function(){
    responseObject = JSON.parse(xhr8.responseText);
    
    for(var i=0; i < responseObject.seniorDC.length; i++){
        newContentSeniorDC += '<ul class="seniorDC">';
        newContentSeniorDC += '<li> Name: ' + responseObject.seniorDC[i].name + '</li>';
        newContentSeniorDC += '<li> Description: ' + responseObject.seniorDC[i].description + '</li>';
        newContentSeniorDC += '<li> Credits: ' + responseObject.seniorDC[i].credits + '</li>';
        newContentSeniorDC += '</ul>';
    }
};

xhr8.open('GET', 'data/digital_commerce_json.json', true);
xhr8.send(null);

function showSeniorDC() {
  document.getElementById('contentSeniorDC').innerHTML = newContentSeniorDC;
}

document.getElementById("btnSeniorDC").onclick = function() {showSeniorDC()};

//Interactive Media Freshmen Year
var xhr9 = new XMLHttpRequest();

var newContentFreshmenIM = '';

xhr9.onload = function(){
    responseObject = JSON.parse(xhr9.responseText);
    
    for(var i=0; i < responseObject.freshmenIM.length; i++){
        newContentFreshmenIM += '<ul class="freshmenIM">';
        newContentFreshmenIM += '<li> Name: ' + responseObject.freshmenIM[i].name + '</li>';
        newContentFreshmenIM += '<li> Description: ' + responseObject.freshmenIM[i].description + '</li>';
        newContentFreshmenIM += '<li> Credits: ' + responseObject.freshmenIM[i].credits + '</li>';
        newContentFreshmenIM += '</ul>';
    }
};

xhr9.open('GET', 'data/interactive_media_json.json', true);
xhr9.send(null);

function showFreshmenIM() {
  document.getElementById('contentFreshmenIM').innerHTML = newContentFreshmenIM;
}

document.getElementById("btnFreshmenIM").onclick = function() {showFreshmenIM()};

//Interactive Media Sophomore Year
var xhr10 = new XMLHttpRequest();

var newContentSophomoreIM = '';

xhr10.onload = function(){
    responseObject = JSON.parse(xhr10.responseText);
    
    for(var i=0; i < responseObject.sophomoreIM.length; i++){
        newContentSophomoreIM += '<ul class="sophomoreIM">';
        newContentSophomoreIM += '<li> Name: ' + responseObject.sophomoreIM[i].name + '</li>';
        newContentSophomoreIM += '<li> Description: ' + responseObject.sophomoreIM[i].description + '</li>';
        newContentSophomoreIM += '<li> Credits: ' + responseObject.sophomoreIM[i].credits + '</li>';
        newContentSophomoreIM += '</ul>';
    }
};

xhr10.open('GET', 'data/interactive_media_json.json', true);
xhr10.send(null);

function showSophomoreIM() {
  document.getElementById('contentSophomoreIM').innerHTML = newContentSophomoreIM;
}

document.getElementById("btnSophomoreIM").onclick = function() {showSophomoreIM()};

//Interactive Mass Media Junior Year
var xhr11 = new XMLHttpRequest();

var newContentJuniorIM = '';

xhr11.onload = function(){
    responseObject = JSON.parse(xhr11.responseText);
    
    for(var i=0; i < responseObject.juniorIM.length; i++){
        newContentJuniorIM += '<ul class="juniorIM">';
        newContentJuniorIM += '<li> Name: ' + responseObject.juniorIM[i].name + '</li>';
        newContentJuniorIM += '<li> Description: ' + responseObject.juniorIM[i].description + '</li>';
        newContentJuniorIM += '<li> Credits: ' + responseObject.juniorIM[i].credits + '</li>';
        newContentJuniorIM += '</ul>';
    }
};

xhr11.open('GET', 'data/interactive_media_json.json', true);
xhr11.send(null);

function showJuniorIM() {
  document.getElementById('contentJuniorIM').innerHTML = newContentJuniorIM;
}

document.getElementById("btnJuniorIM").onclick = function() {showJuniorIM()};

//Interactive Mass Media Senior Year
var xhr12 = new XMLHttpRequest();

var newContentSeniorIM = '';

xhr12.onload = function(){
    responseObject = JSON.parse(xhr12.responseText);
    
    for(var i=0; i < responseObject.seniorIM.length; i++){
        newContentSeniorIM += '<ul class="seniorMM">';
        newContentSeniorIM += '<li> Name: ' + responseObject.seniorIM[i].name + '</li>';
        newContentSeniorIM += '<li> Description: ' + responseObject.seniorIM[i].description + '</li>';
        newContentSeniorIM += '<li> Credits: ' + responseObject.seniorIM[i].credits + '</li>';
        newContentSeniorIM += '</ul>';
    }
};

xhr12.open('GET', 'data/interactive_media_json.json', true);
xhr12.send(null);

function showSeniorIM() {
  document.getElementById('contentSeniorIM').innerHTML = newContentSeniorIM;
}

document.getElementById("btnSeniorIM").onclick = function() {showSeniorIM()};

//Web apps Freshmen Year
var xhr13 = new XMLHttpRequest();

var newContentFreshmenWAD = '';

xhr13.onload = function(){
    responseObject = JSON.parse(xhr13.responseText);
    
    for(var i=0; i < responseObject.freshmenWAD.length; i++){
        newContentFreshmenWAD += '<ul class="freshmenIM">';
        newContentFreshmenWAD += '<li> Name: ' + responseObject.freshmenWAD[i].name + '</li>';
        newContentFreshmenWAD += '<li> Description: ' + responseObject.freshmenWAD[i].description + '</li>';
        newContentFreshmenWAD += '<li> Credits: ' + responseObject.freshmenWAD[i].credits + '</li>';
        newContentFreshmenWAD += '</ul>';
    }
};

xhr13.open('GET', 'data/web_app_json.json', true);
xhr13.send(null);

function showFreshmenWAD() {
  document.getElementById('contentFreshmenWAD').innerHTML = newContentFreshmenWAD;
}

document.getElementById("btnFreshmenWAD").onclick = function() {showFreshmenWAD()};

//web apps Sophomore Year
var xhr14 = new XMLHttpRequest();

var newContentSophomoreWAD = '';

xhr14.onload = function(){
    responseObject = JSON.parse(xhr14.responseText);
    
    for(var i=0; i < responseObject.sophomoreWAD.length; i++){
        newContentSophomoreWAD += '<ul class="sophomoreIM">';
        newContentSophomoreWAD += '<li> Name: ' + responseObject.sophomoreWAD[i].name + '</li>';
        newContentSophomoreWAD += '<li> Description: ' + responseObject.sophomoreWAD[i].description + '</li>';
        newContentSophomoreWAD += '<li> Credits: ' + responseObject.sophomoreWAD[i].credits + '</li>';
        newContentSophomoreWAD += '</ul>';
    }
};

xhr14.open('GET', 'data/web_app_json.json', true);
xhr14.send(null);

function showSophomoreWAD() {
  document.getElementById('contentSophomoreWAD').innerHTML = newContentSophomoreWAD;
}

document.getElementById("btnSophomoreWAD").onclick = function() {showSophomoreWAD()};

//Web apps Junior Year
var xhr15 = new XMLHttpRequest();

var newContentJuniorWAD = '';

xhr15.onload = function(){
    responseObject = JSON.parse(xhr15.responseText);
    
    for(var i=0; i < responseObject.juniorWAD.length; i++){
        newContentJuniorWAD += '<ul class="juniorIM">';
        newContentJuniorWAD += '<li> Name: ' + responseObject.juniorWAD[i].name + '</li>';
        newContentJuniorWAD += '<li> Description: ' + responseObject.juniorWAD[i].description + '</li>';
        newContentJuniorWAD += '<li> Credits: ' + responseObject.juniorWAD[i].credits + '</li>';
        newContentJuniorWAD += '</ul>';
    }
};

xhr15.open('GET', 'data/web_app_json.json', true);
xhr15.send(null);

function showJuniorWAD() {
  document.getElementById('contentJuniorWAD').innerHTML = newContentJuniorWAD;
}

document.getElementById("btnJuniorWAD").onclick = function() {showJuniorWAD()};

//Web apps Senior Year
var xhr16 = new XMLHttpRequest();

var newContentSeniorWAD = '';

xhr16.onload = function(){
    responseObject = JSON.parse(xhr16.responseText);
    
    for(var i=0; i < responseObject.seniorWAD.length; i++){
        newContentSeniorWAD += '<ul class="seniorMM">';
        newContentSeniorWAD += '<li> Name: ' + responseObject.seniorWAD[i].name + '</li>';
        newContentSeniorWAD += '<li> Description: ' + responseObject.seniorWAD[i].description + '</li>';
        newContentSeniorWAD += '<li> Credits: ' + responseObject.seniorWAD[i].credits + '</li>';
        newContentSeniorWAD += '</ul>';
    }
};

xhr16.open('GET', 'data/web_app_json.json', true);
xhr16.send(null);

function showSeniorWAD() {
  document.getElementById('contentSeniorWAD').innerHTML = newContentSeniorWAD;
}

document.getElementById("btnSeniorWAD").onclick = function() {showSeniorWAD()};

//General Classes
var xhr17 = new XMLHttpRequest();

var newContentGED = '';

xhr17.onload = function(){
    responseObject = JSON.parse(xhr17.responseText);
    
    for(var i=0; i < responseObject.general.length; i++){
        newContentGED += '<ul class="seniorMM">';
        newContentGED += '<li> Name: ' + responseObject.general[i].name + '</li>';
        newContentGED += '<li> Description: ' + responseObject.general[i].description + '</li>';
        newContentGED += '<li> Credits: ' + responseObject.general[i].credits + '</li>';
        newContentGED += '</ul>';
    }
};

xhr17.open('GET', 'data/gened.json', true);
xhr17.send(null);

function showGED() {
  document.getElementById('contentGED').innerHTML = newContentGED;
}

document.getElementById("btnGED").onclick = function() {showGED()};

//Scroll
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

