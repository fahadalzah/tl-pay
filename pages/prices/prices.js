let slider = document.getElementById("table_1")
let btns = document.getElementById('months')
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
body.removeChild(slider)
body.removeChild(month12section)
body.removeChild(month3section)
document.getElementById("1month").style.backgroundColor = "whitesmoke";
document.getElementById("1month").style.color = "#5ac99d";
document.getElementById('path1').style.color = "#5ac99d"
document.getElementById("path1").style.backgroundColor = "whitesmoke";
month3.addEventListener('click', function () {
    if (body.contains(month12section)) {
        body.removeChild(month12section)
    }
    if (body.contains(month1section)) {
        body.removeChild(month1section)
    }

    document.getElementById("3month").style.backgroundColor = "whitesmoke";
    document.getElementById("3month").style.color = "#5ac99d";
    document.getElementById("12month").style.backgroundColor = "#5ac99d";
    document.getElementById("12month").style.color = "whitesmoke";
    document.getElementById("1month").style.backgroundColor = "#5ac99d";
    document.getElementById("1month").style.color = "whitesmoke";
    document.getElementById("badge").style.color = "#5ac99d"
    document.getElementById("badge").style.backgroundColor = "whitesmoke";
    body.removeChild(btngroup)    
    body.appendChild(month3section)
    body.appendChild(btngroup)
    if (body.contains(slider)) {
        body.removeChild(slider)
        body.appendChild(slider)
    }
    if (body.contains(table)) {
        body.removeChild(table)
        body.appendChild(table)
    }
})
month12.addEventListener('click', function () {
    if (body.contains(month3section)) {
        body.removeChild(month3section)
    }
    if (body.contains(month1section)) {
        body.removeChild(month1section)
    }

    document.getElementById("12month").style.backgroundColor = "whitesmoke";
    document.getElementById("12month").style.color = "#5ac99d";
    document.getElementById("badge").style.color = "whitesmoke"
    document.getElementById("badge").style.backgroundColor = "#5ac99d";
    document.getElementById("1month").style.backgroundColor = "#5ac99d";
    document.getElementById("1month").style.color = "whitesmoke";
    document.getElementById("3month").style.backgroundColor = "#5ac99d";
    document.getElementById("3month").style.color = "whitesmoke";    
    body.removeChild(btngroup)
    body.appendChild(month12section)
    body.appendChild(btngroup)
    if (body.contains(slider)) {
        body.removeChild(slider)
        body.appendChild(slider)
    }
    if (body.contains(table)) {
        body.removeChild(table)
        body.appendChild(table)
    }
})
month1.addEventListener('click', function () {
    if (body.contains(month3section)) {
        body.removeChild(month3section)
    }
    if (body.contains(month12section)) {
        body.removeChild(month12section)
    }

    document.getElementById("1month").style.backgroundColor = "whitesmoke";
    document.getElementById("1month").style.color = "#5ac99d";
    document.getElementById("12month").style.backgroundColor = "#5ac99d";
    document.getElementById("12month").style.color = "whitesmoke";
    document.getElementById("badge").style.color = "#5ac99d"
    document.getElementById("badge").style.backgroundColor = "whitesmoke";
    document.getElementById("3month").style.backgroundColor = "#5ac99d";
    document.getElementById("3month").style.color = "whitesmoke";    
    body.removeChild(btngroup)
    body.appendChild(month1section)
    body.appendChild(btngroup)
    if (body.contains(slider)) {
        body.removeChild(slider)
        body.appendChild(slider)
    }
    if (body.contains(table)) {
        body.removeChild(table)
        body.appendChild(table)
    }
})
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

const icons = document.querySelectorAll('btn');

icons.forEach(icon => {
  icon.addEventListener('btn', () => {
    // Remove the hover effect class
    icon.classList.remove('hover');
    
    // Trigger a reflow to force a repaint
    void icon.offsetWidth;

    // Add the hover effect class back
    icon.classList.add('hover');
  });
});





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
