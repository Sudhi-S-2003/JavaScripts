document.getElementById('click').onclick = function(e) {
    if(this.innerText == "clear"){
        document.getElementById('temp').innerText="";
        this.innerText = "click me";
    }
    else{
   
    this.innerText = "clear";
    document.getElementById('temp').innerHTML = "<b>Button clicked</b>";
    }
    console.log('Button clicked');
};
document.getElementById('click-b').onclick = function(e) {
    var elements = document.getElementsByClassName("paragh-b");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
};


function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var liElements = document.getElementsByTagName('li');

for (var i = 0; i < liElements.length; i++) {
    liElements[i].onclick = function(e) {
        
        let words = this.textContent.split(" ");
        if (words[words.length - 1] == 'click') {
            if (!isNaN(parseInt(words[words.length - 2]))) {
                let d = words;
                d[words.length - 2] = parseInt(d[words.length - 2]) + 1;
                this.textContent = d.join(" ");
                let r = randint(0, 255);
                let g = randint(0, 255);
                let b = randint(0, 255);

                console.log(r, g, b);
                this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            } else {
                let d = words;
                d[words.length - 1] = "1 click";
                this.textContent = d.join(" ");
                this.style.backgroundColor= "#234";
            }
        } else {
            this.textContent += " click";
            this.style.color = "red";
        }
    };
}


var p=document.querySelector(".query p");
p.style.fontSize="30px";

var p2=document.querySelector(".query #query-p");
p2.style.color="blue";


var p3=document.querySelectorAll(".query #query-p");
p3.forEach(element => {
    element.style.textDecoration="underline";
    element.style.backgroundColor="lightblue";
});
