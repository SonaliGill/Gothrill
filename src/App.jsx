/*import Menu from"./components/Menu.jsx";*/

function App() {
 

  return(
      <>
 
      </>

  )
}


let btn = document.getElementById('menuBtn');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let links = document.querySelectorAll('.right a');
let backs = ["url(https://cdn.runrepeat.com/storage/uploads/research/Award%20-%20Most%20Livable%20Hiking%20Towns/Hiking%20Town%201.jpg)", 
             "url(https://www.emsoutdoors.com/wp-content/uploads/2013/08/ice-1.jpg)",
             "url(https://q-cf.bstatic.com/xdata/images/xphoto/2048x1536/25154224.jpg?k=b0efd520781f5b2e88c4e707b80b7c1a483be914278b68a5df4fc5a3a13280e9&o=)",
             "url(https://www.wallpaperflare.com/static/679/34/554/nature-landscape-mountains-cabin-wallpaper.jpg)"
]

let flag = true;

btn.addEventListener("click", ()=>{
    flag = !flag;
    if(!flag){
      left.style.transform = "translateY(0)";
      right.style.transform = "translateY(0)"; 
    } else {
      left.style.transform = "translateY(100vh)";
      right.style.transform = "translateY(-100vh)";
    }
    left.style.background = "url('https://images.unsplash.com/photo-1583138605411-f85466f61638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"; 
})


for(let i = 0; i < links.length; i++){
   links[i].addEventListener("mousemove", ()=>{
      left.style.background = backs[i]; 
   })
}



/*-------------------------------------*/

$(document).ready(function(){
	// variablen
	var error = "Please type something in the input field in order to add it to your list.";
	var noItems = "No entries found";
	var animTime = 300;
	//
	// submit button > neuen eintrag hinzufügen
	$("input[type='submit']").on("click", function(){
		var newText = $("input[type='text']").val();
		$("ol.to-do").append("<li>" + newText + "<span class='delete'></span><span class='check'></span></li>");
		$("input[type='text']").val("");
	});
	//
	// .check button > element verschieben
	$(document).on("click", ".check", function(){
		$(this).parent().fadeOut(animTime, function(){
			var checkedItem = $(this).fadeIn(animTime);
			$("ol.done").append(checkedItem);
		});
		
	});
	//
	// .delete button > element entfernen
	$(document).on("click", ".delete", function(){
		$(this).parent().fadeOut(animTime);
	});
	//

});


/*cursor effect*/
const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#ffb56b",
      "#fdaf69",
      "#f89d63",
      "#f59761",
      "#ef865e",
      "#ec805d",
      "#e36e5c",
      "#df685c",
      "#d5585c",
      "#d1525c",
      "#c5415d",
      "#c03b5d",
      "#b22c5e",
      "#ac265e",
      "#9c155f",
      "#950f5f",
      "#830060",
      "#7c0060",
      "#680060",
      "#60005f",
      "#48005f",
      "#3d005e"
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;

    });

    function animateCircles() {

      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.7;
        y += (nextCircle.y - y) * 0.7;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();



    

export default App
