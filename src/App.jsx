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




    

export default App
