var btn1 = document.getElementById("btnw").addEventListener("click", function() {
    document.body.classList.toggle("birumuda");
})

const aw = document.getElementById("btn2").addEventListener("click", function () {
    var a = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var c = Math.round(Math.random() * 255);
    
    document.body.style.backgroundColor = 'rgb(' + a + ', ' + b + ', ' + c +')';
})  
