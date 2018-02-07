$('#header-1').addClass('animated bounceInUp');
$('#header-2').addClass('animated bounceInUp');
$('#header-3').addClass('animated bounceInUp');
$('#cloud').addClass('animated bounceInRight');
$('.section-wrapper').addClass('animated fadeIn');


var toAdd = document.createDocumentFragment();
for (i = 1; i <= 8; i++) {
    for (j = 1; j <= 5; j++) {
        var newDiv = document.createElement('p');
        newDiv.id = 'rain-' + i + j;
        newDiv.className = 'rain-drop';
        newDiv.innerHTML = "" + ((i + j) % 2);
        toAdd.appendChild(newDiv);
    }
}
document.getElementById('rain-grid').appendChild(toAdd);


for (i = 1; i <= 8; i++) {
    for (j = 1; j <= 5; j++) {
        document.getElementById('rain-' + i + j).style.animationDelay = 1 * Math.random() + 0 + "s";
    }
}

document.getElementById('rain-grid').style.opacity = 0;

for (i = 1; i <= 8; i++) {
    for (j = 1; j <= 5; j++) {
        $('#rain-' + i + j).addClass('animated infinite fadeOutDown');
    }
}

setTimeout(function() {
    document.getElementById('rain-grid').style.opacity = 1;
}, 3000);