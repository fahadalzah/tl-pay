let body = document.getElementById('body')
let month1section = document.getElementById('month1section')
let month3section = document.getElementById('month3section')
let month12section = document.getElementById('month12section')
let month1 = document.getElementById('1month')
let month3 = document.getElementById('3month')
let month12 = document.getElementById('12month')
body.removeChild(month12section)
body.removeChild(month3section)
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
    body.appendChild(month3section)
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
    body.appendChild(month12section)
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
    body.appendChild(month1section)
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
