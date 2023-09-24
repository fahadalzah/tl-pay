let slider = document.getElementById("carouselExampleIndicators")
let btngroup = document.getElementById('btn-group')
let table = document.getElementById("table")
let body = document.getElementById('body')
let month1section = document.getElementById('month1section')
let month3section = document.getElementById('month3section')
let month12section = document.getElementById('month12section')
let month1 = document.getElementById('1month')
let month3 = document.getElementById('3month')
let month12 = document.getElementById('12month')
let sliderbtn = document.getElementById('path2')
let checkerbtn = document.getElementById('path1')
body.removeChild(month12section)
body.removeChild(month3section)
document.getElementById("1month").style.backgroundColor = "whitesmoke";
document.getElementById("1month").style.color = "#5ac99d";
document.getElementById('path1').style.color = "#5ac99d"
document.getElementById("path1").style.backgroundColor = "whitesmoke";
month3.addEventListener('click', function () {
    if (body.appendChild(month12section)) {
        body.removeChild(month12section)
    }else{
        console.log("month1 deleted");
    }
    if (body.appendChild(month1section)) {
        body.removeChild(month1section)
    }else{
        console.log("month12 deleted");
    }
    body.removeChild(btngroup)
    body.removeChild(table)
    body.appendChild(month3section)
    document.getElementById("3month").style.backgroundColor = "whitesmoke";
    document.getElementById("3month").style.color = "#5ac99d";
    document.getElementById("12month").style.backgroundColor = "#5ac99d";
    document.getElementById("12month").style.color = "whitesmoke";
    document.getElementById("1month").style.backgroundColor = "#5ac99d";
    document.getElementById("1month").style.color = "whitesmoke";
    document.getElementById("badge").style.color = "#5ac99d"
    document.getElementById("badge").style.backgroundColor = "whitesmoke";
    body.appendChild(btngroup)
    body.appendChild(table)
})
month12.addEventListener('click', function () {
    if (body.appendChild(month3section)) {
        body.removeChild(month3section)
    }else{
        console.log("month1 deleted");
    }
    if (body.appendChild(month1section)) {
        body.removeChild(month1section)
    }else{
        console.log("month3 deleted");
    }
    body.removeChild(btngroup)
    body.removeChild(table)
    body.appendChild(month12section)
    document.getElementById("12month").style.backgroundColor = "whitesmoke";
    document.getElementById("12month").style.color = "#5ac99d";
    document.getElementById("badge").style.color = "whitesmoke"
    document.getElementById("badge").style.backgroundColor = "#5ac99d";
    document.getElementById("1month").style.backgroundColor = "#5ac99d";
    document.getElementById("1month").style.color = "whitesmoke";
    document.getElementById("3month").style.backgroundColor = "#5ac99d";
    document.getElementById("3month").style.color = "whitesmoke";
    body.appendChild(btngroup)
    body.appendChild(table)
})
month1.addEventListener('click', function () {
    if (body.appendChild(month3section)) {
        body.removeChild(month3section)
    }else{
        console.log("month12 deleted");
    }
    if (body.appendChild(month12section)) {
        body.removeChild(month12section)
    }else{
        console.log("month3 deleted");
    }
    body.removeChild(btngroup)
    body.removeChild(table)
    body.appendChild(month1section)
    document.getElementById("1month").style.backgroundColor = "whitesmoke";
    document.getElementById("1month").style.color = "#5ac99d";
    document.getElementById("12month").style.backgroundColor = "#5ac99d";
    document.getElementById("12month").style.color = "whitesmoke";
    document.getElementById("badge").style.color = "#5ac99d"
    document.getElementById("badge").style.backgroundColor = "whitesmoke";
    document.getElementById("3month").style.backgroundColor = "#5ac99d";
    document.getElementById("3month").style.color = "whitesmoke";
    body.appendChild(btngroup)
    body.appendChild(table)
})
body.removeChild(slider)
sliderbtn.addEventListener('click', function () {
    body.removeChild(table)
    body.appendChild(slider)
    document.getElementById('path2').style.color = "#5ac99d"
    document.getElementById("path2").style.backgroundColor = "whitesmoke";
    document.getElementById('path1').style.color = "whitesmoke"
    document.getElementById("path1").style.backgroundColor = "#5ac99d";
})
checkerbtn.addEventListener('click', function () {
    body.appendChild(table)
    body.removeChild(slider)
    document.getElementById('path1').style.color = "#5ac99d"
    document.getElementById("path1").style.backgroundColor = "whitesmoke";
    document.getElementById('path2').style.color = "whitesmoke"
    document.getElementById("path2").style.backgroundColor = "#5ac99d";
})


document.addEventListener('scroll', function () {
const nav = document.querySelector('.nav');
// كود أذا نزل بل الماوس إلى هاذي القيمة يقوم بالأوامر في الأسفل
if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    // يظهر تنسيق السكرولد ويكون فيه تغير خلفية الناف بار
}    else {
    // إزالة التنسيق
    nav.classList.remove('scrolled');

}
})
