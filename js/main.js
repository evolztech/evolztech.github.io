/*Script starts here*/
//Portfolio Code Here
var intervalIds = [];
var renderingFs = [];
var statusC = [];

window.addEventListener("load", function() {
  var nOP = 8;
  var cArray = [];
  var ccArray = [];
  var ctArray = [];
  var ccArrayI = 0;
  for(var z=0; z<nOP; z++){
    statusC[z] = true;
  }
  for (var i = 1; i <= nOP; i++) {
    cArray[i - 1] = document.querySelector("#c" + i);
  }

  window.addEventListener("resize", function() {
    //location.reload();
  });

  if (window.innerWidth < 576) {
    ctArray = [true];
    for (var j = 0; j < nOP; j++) {
      var div = document.createElement("div");
      div.classList.add("carousel-item");
      if (j == 0) {
        div.classList.add("active");
      }
      var flDiv = document.createElement("div");
      flDiv.classList.add("d-flex");
      flDiv.classList.add("flex-row");
      div.setAttribute("data-interval", "4000");
      flDiv.appendChild(cArray[j]);
      div.appendChild(flDiv);
      document.querySelector("#carousel-inner").appendChild(div);
      ccArray[j] = [j, j + 1];
    }
    renderAllItemsOf(1, 1);
    for (var z = 0.01; z <= 1.00; z += 0.01)
      cArray[0].style.opacity = z;
    $("#carousel").on('slide.bs.carousel', function(evt) {
      var from = evt.from;
      for (var x = (from * 1); x < (from * 1) + 1; x++) {
        window.clearInterval(intervalIds[x]);
        statusC[x] = false;
      }
      if (ccArrayI == (nOP) - 1) {
        ccArrayI = 0;
      } else {
        ccArrayI++;
      }

    });
    $("#carousel").on('slid.bs.carousel', function(evt) {
      var to = evt.to;
      for (var x = (to * 1); x < (to * 1) + 1; x++) {
        if (ctArray[x] != true) {
          renderAllItemsOf(x + 1, 1);
          for(var z=0.01;z<=1.00;z+=0.01)
          cArray[x].style.opacity = z;
          ctArray[x] = true;
        } else {
          if (statusC[x] == false) {
            intervalIds[x] = setInterval(renderingFs[x], 40);
            statusC[x] = true;
          }
        }
      }
    });


  } else if (window.innerWidth < 768) {
    var nOCI = Math.ceil(nOP / 2);
    ctArray = [true, true];
    for (var j = 0; j < nOCI; j++) {
      var div = document.createElement("div");
      div.classList.add("carousel-item");
      if (j == 0) {
        div.classList.add("active");
      }
      var flDiv = document.createElement("div");
      flDiv.classList.add("d-flex");
      flDiv.classList.add("flex-row");
      div.setAttribute("data-interval", "7000");
      var n = ((nOP - (j * 2)) / 2) < 1 ? ((nOP - (j * 2))) : 2;
      for (var i = 0; i < n; i++) {
        let k = (j * 2) + (i);
        cArray[k].classList.add('w-50');
        if (i != 3) {
          cArray[k].classList.add('mr-1');
        }
        flDiv.appendChild(cArray[k]);
      }

      ccArray[j] = [j * 2, i + (j * 2)];
      div.appendChild(flDiv);
      document.querySelector("#carousel-inner").appendChild(div);

    }
    for (var i = 1; i <= 2; i++) {
      renderAllItemsOf(i, 2);
      for (var z = 0.01; z <= 1.00; z += 0.01)
        cArray[i-1].style.opacity = z;
    }

    $("#carousel").on('slide.bs.carousel', function(evt) {
      var from = evt.from;
      for (var x = (from * 2); x < (from * 2) + 2; x++) {
        window.clearInterval(intervalIds[x]);
        statusC[x] = false;
      }
      if (ccArrayI == (nOP / 2) - 1) {
        ccArrayI = 0;
      } else {
        ccArrayI++;
      }

    });
    $("#carousel").on('slid.bs.carousel', function(evt) {
      var to = evt.to;
      for (var x = (to * 2); x < (to * 2) + 2; x++) {
        if (ctArray[x] != true) {
          renderAllItemsOf(x + 1, 2);
          for (var z = 0.01; z <= 1.00; z += 0.01)
            cArray[x].style.opacity = z;
          ctArray[x] = true;
        } else {
          if (statusC[x] == false) {
            intervalIds[x] = setInterval(renderingFs[x], 40);
            statusC[x] = true;
          }
        }
      }
    });
  } else if (window.innerWidth < 992) {
    var nOCI = Math.ceil(nOP / 3);
    ctArray = [true, true, true];
    for (var j = 0; j < nOCI; j++) {
      var div = document.createElement("div");
      div.classList.add("carousel-item");
      if (j == 0) {
        div.classList.add("active");
      }
      var flDiv = document.createElement("div");
      flDiv.classList.add("d-flex");
      flDiv.classList.add("flex-row");
      div.setAttribute("data-interval", "10000");
      var n = ((nOP - (j * 3)) / 3) < 1 ? ((nOP - (j * 3))) : 3;
      for (var i = 0; i < n; i++) {
        let k = (j * 3) + (i);
        cArray[k].classList.add('w-33');
        if (i != 3) {
          cArray[k].classList.add('mr-1');
        }
        flDiv.appendChild(cArray[k]);
      }
      ccArray[j] = [j * 3, i + (j * 3)];
      div.appendChild(flDiv);
      document.querySelector("#carousel-inner").appendChild(div);

    }
    for (var i = 1; i <= 3; i++) {
      renderAllItemsOf(i, 3);
      for (var z = 0.01; z <= 1.00; z += 0.01)
        cArray[i-1].style.opacity = z;
    }

    $("#carousel").on('slide.bs.carousel', function(evt) {
      var from = evt.from;
      for (var x = (from * 3); x < (from * 3) + 3; x++) {
        window.clearInterval(intervalIds[x]);
        statusC[x] = false;
      }
      if (ccArrayI == (nOP / 3) - 1) {
        ccArrayI = 0;
      } else {
        ccArrayI++;
      }

    });
    $("#carousel").on('slid.bs.carousel', function(evt) {
      var to = evt.to;
      for (var x = (to * 3); x < (to * 3) + 3; x++) {
        if (ctArray[x] != true) {
          renderAllItemsOf(x + 1, 3);
          for (var z = 0.01; z <= 1.00; z += 0.01)
            cArray[x].style.opacity = z;
          ctArray[x] = true;
        } else {
          if (statusC[x] == false) {
            intervalIds[x] = setInterval(renderingFs[x], 40);
            statusC[x] = true;
          }
        }
      }
    });
  } else {
    var nOCI = Math.ceil(nOP / 4);
    ctArray = [true, true, true, true];
    for (var j = 0; j < nOCI; j++) {
      var div = document.createElement("div");
      div.classList.add("carousel-item");
      if (j == 0) {
        div.classList.add("active");
      }
      var flDiv = document.createElement("div");
      flDiv.classList.add("d-flex");
      flDiv.classList.add("flex-row");
      div.setAttribute("data-interval", "13000");
      var n = ((nOP - (j * 4)) / 4) < 1 ? ((nOP - (j * 4))) : 4;
      for (var i = 0; i < n; i++) {
        let k = (j * 4) + (i);
        cArray[k].classList.add('w-25');
        if (i != 3) {
          cArray[k].classList.add('mr-1');
        }
        flDiv.appendChild(cArray[k]);
      }
      ccArray[j] = [j * 4, i + (j * 4)];
      div.appendChild(flDiv);
      document.querySelector("#carousel-inner").appendChild(div);
    }

    for (var i = 1; i <= 4; i++) {
      renderAllItemsOf(i, 4);
      for (var z = 0.01; z <= 1.00; z += 0.01)
        cArray[i-1].style.opacity = z;
    }
    $("#carousel").on('slide.bs.carousel', function(evt) {
      var from = evt.from;
      for (var x = (from * 4); x < (from * 4) + 4; x++) {
        window.clearInterval(intervalIds[x]);
        statusC[x] = false;
      }
      if(ccArrayI == (nOP / 4) - 1) {
        ccArrayI = 0;
      } else {
        ccArrayI++;
      }

    });
    $("#carousel").on('slid.bs.carousel', function(evt) {
      var to = evt.to;
      for(var x = (to * 4); x < (to * 4) + 4; x++) {
        if (ctArray[x] != true) {
          renderAllItemsOf(x + 1, 4);
          for (var z = 0.01; z <= 1.00; z += 0.01)
            cArray[x].style.opacity = z;
          ctArray[x] = true;
        } else {
          if(statusC[x]==false) {
            intervalIds[x] = setInterval(renderingFs[x], 40);
            statusC[x]= true;
          }
          
        }
      }
    });
  }


  document.querySelector('#contactForma').addEventListener("click",function(){

    var contactObj ={
      from_name : document.querySelector("#from_name").value,
      email_add : document.querySelector("#email_add").value,
      organization : document.querySelector("#organization").value,
      message_html : document.querySelector("#message_html").value
    };
    var truth = [];
    truth[0] = contactObj.from_name.length == 0;
    truth[1] = contactObj.organization.length == 0;
    truth[2] = contactObj.message_html.length == 0;
    truth[3] = checkemail(contactObj.email_add);

    if(truth[0] || truth[1] || truth[2] || truth[3] ){
      var msgg = "";
      for(var s = 0; s<4; s++){
        if(truth[s] == true){

          switch (s) {
            case 0:
              msgg = msgg + "Please Insert Valid Name";
              break;
            case 1:
              msgg = msgg + "<br>Please Insert Valid Organization";
              break;
            case 2:
              msgg = msgg + "<br>Please Insert Valid Message";
              break;
            case 3:
              msgg = msgg + "<br>Please Insert Valid Email Address";
              break;
            default:
              // statements_def
              break;
          }
        }
      }
      document.querySelector("#ModalFailedMsg").innerHTML = msgg;
      $('#failedModal').modal('show');
    }else{
     emailjs.send('gmail', 'evolzEmail', contactObj).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);

       $('#successModal').modal('show');

     }, function(error) {
       console.log('FAILED...', error);
      $('#ModalFailedMsg').innerHTML = "Sorry for the inconvenience";
       $('#failedModal').modal('show');
     });
    }

    function checkemail(em){
      var i = em.indexOf("@");
      var j = em.lastIndexOf(".");
      if(i>0 && j>(i+1)){
        return false;
      }
      return true;
    }
  });
});


$(function(){
	/*Mobile Navigation Code Goes Here*/
	$("#nav_open").click(function(){
		$(".mobmenu").slideDown(600);
		$(".mobicon").fadeOut(300);
		$(".mobcloseicon").fadeIn(600);

	});
	$("#nav_close").click(function(){
		$(".mobmenu").slideUp(600);
		$(".mobcloseicon").fadeOut(300);
		$(".mobicon").fadeIn(600);
	});
	/*Mobile Navigation Code Ends Here*/

	/*Desktop Navigation Link Animation Scroll*/
	$(".homeSection").click(function(event){
		$('body,html').animate({
			scrollTop : $("#HomePage").offset().top
		},600);
	});
	$(".portfolioSection").click(function(event){
		$('body,html').animate({
			scrollTop : $("#Portfolio").offset().top
		},600);
	});
	$(".servicesSection").click(function(event){
		$('body,html').animate({
			scrollTop : $("#Services").offset().top
		},600);
	});
	$(".ourteamSection").click(function(event){
		$('body,html').animate({
			scrollTop : $("#OurTeam").offset().top
		},600);
	});
	$(".contactusSection").click(function(event){
		$('body,html').animate({
			scrollTop : $("#contactUs").offset().top
		},600);
	});
	/*Desktop Navigation Link Animation Scroll*/

	/*Mobile Navigation Link Animation Scroll starts*/
	$(".mobHome").click(function(event){
		$(".mobmenu").slideUp(600);
		$(".mobcloseicon").fadeOut(300);
		$(".mobicon").fadeIn(600);
		$('body,html').animate({
			scrollTop : $("#HomePage").offset().top
		},800);
	});
  $(".mobPortfolio").click(function(event){
    $(".mobmenu").slideUp(600);
    $(".mobcloseicon").fadeOut(300);
    $(".mobicon").fadeIn(600);
    $('body,html').animate({
      scrollTop : $("#Portfolio").offset().top
    },800);
  });
	$(".mobServices").click(function(event){
		$(".mobmenu").slideUp(600);
		$(".mobcloseicon").fadeOut(300);
		$(".mobicon").fadeIn(600);
		$('body,html').animate({
			scrollTop : $("#Services").offset().top
		},800);
	});
	$(".mobOurTeam").click(function(event){
		$(".mobmenu").slideUp(600);
		$(".mobcloseicon").fadeOut(300);
		$(".mobicon").fadeIn(600);
		$('body,html').animate({
			scrollTop : $("#OurTeam").offset().top
		},800);
	});
	$(".mobContact").click(function(event){
		$(".mobmenu").slideUp(600);
		$(".mobcloseicon").fadeOut(300);
		$(".mobicon").fadeIn(600);
		$('body,html').animate({
			scrollTop : $("#contactUs").offset().top
		},800);
	});
	/*Mobile Navigation Link Animation Scroll ends*/

	/*Typing jS Starts here*/
	var app = document.getElementById('myMessage');

	var typewriter = new Typewriter(app, {
	    loop: true
	});

	typewriter.typeString('We Design')
		.start()
	    .pauseFor(2500)
	    .deleteAll()
	    .typeString('We Code')
	    .pauseFor(2500)
	    .deleteAll()
	    .typeString('But we do more than just<br/> <strong>Coding and Designing</strong>')
	    .pauseFor(2500)
	    .deleteAll()
	    .typeString('We try untel')
	    .pauseFor(1000)
	    .deleteChars(2)
	    .typeString("il We get Perfect")
	    .pauseFor(2500)
	    .deleteAll()

	/*Typing JS ends here*/  

	/*Mapping JS starts here*/
	$(".main_content_1").addClass("activeSec");
	$(".firstSec").click(function(event){
		if($(".main_content_1").hasClass("activeSec")){
			event.preventDefault();
		}
		else{
			event.preventDefault();
			$(".activeSec").fadeOut(500).removeClass("activeSec");
			$(".main_content_1").delay(500);
			$(".main_content_1").fadeIn(500);
			$(".main_content_1").addClass('activeSec');
		}
	});	

	$(".secondSec").click(function(event){
		if($(".main_content_2").hasClass("activeSec")){
			event.preventDefault();
		}
		else{
			event.preventDefault();
			$(".activeSec").fadeOut(500).removeClass("activeSec");
			$(".main_content_2").delay(500);
			$(".main_content_2").fadeIn(500);
			$(".main_content_2").addClass('activeSec');
		}
	});

	$(".thirdSec").click(function(event){
		if($(".main_content_3").hasClass("activeSec")){
			event.preventDefault();
		}
		else{
			event.preventDefault();
			$(".activeSec").fadeOut(500).removeClass("activeSec");
			$(".main_content_3").delay(500);
			$(".main_content_3").fadeIn(500);
			$(".main_content_3").addClass('activeSec');
		}
	});

	$(".fourthSec").click(function(event){
		if($(".main_content_4").hasClass("activeSec")){
			event.preventDefault();
		}
		else{
			event.preventDefault();
			$(".activeSec").fadeOut(500).removeClass("activeSec");
			$(".main_content_4").delay(500);
			$(".main_content_4").fadeIn(500);
			$(".main_content_4").addClass('activeSec');
		}
	});

	$(".fifthSec").click(function(event){
		if($(".main_content_5").hasClass("activeSec")){
			event.preventDefault();
		}
		else{
			event.preventDefault();
			$(".activeSec").fadeOut(500).removeClass("activeSec");
			$(".main_content_5").delay(500);
			$(".main_content_5").fadeIn(500);
			$(".main_content_5").addClass('activeSec');
		}
	});

	$(".sixthSec").click(function(event){
		if($(".main_content_6").hasClass("activeSec")){
			event.preventDefault();
		}
		else{
			event.preventDefault();
			$(".activeSec").fadeOut(500).removeClass("activeSec");
			$(".main_content_6").delay(500);
			$(".main_content_6").fadeIn(500);
			$(".main_content_6").addClass('activeSec');
		}
	});	
	/*Mapping JS ends here*/
});	

//Portfolio functions 

function renderAllItemsOf(k, s) {
  var c = document.querySelector("#c" + k);

  var ci = [];
  var ciLeft = [];
  var ciTop = [];
  var cicn = [];

  for (let i = 0; i < 4; i++) {
    ci[i] = document.querySelector("#c" + k + "i" + (i + 1));
    cicn[i] = ci[i].childNodes;
    //console.log(" " + i + " " + ci[i]);
  }
  //console.log(k);

  var initialHeight = ci[0].offsetHeight;
  var initialWidth = ci[0].offsetWidth;

  //console.log(initialWidth);

  var imageInitialHeight = cicn[0][1].offsetHeight;
  var imageInitialWidth = cicn[0][1].offsetWidth;

  var ch = c.offsetHeight; //If border use clientHeight
  var cw = c.offsetWidth; //If border use clientWidth

  //Items initial sizing
  var hSum = 0;
  var tempSum = 0;

  var mid = (ch / 2) - (initialHeight / 4);

  var hDist = (ch) / 4;
  for (let i = 0; i < 4; i++) {
    ciTop[i] = (hDist * (i)) + 10; // 10 margin between to ci;
    let temp = getFactor(ciTop[i], ch, mid);
    if (temp >= 0.8 && temp <= 1.2) {
      cicn[i][3].style.visibility = "visible";
    }

    let h = (temp * imageInitialHeight);
    let w = (temp * imageInitialWidth);
    cicn[i][1].style.height = h + "px";
    cicn[i][1].style.width = w + "px";
  }

  var ch2 = ch / 2;

  //Items initial positioning
  for (let i = 0; i < 4; i++) {
    ciLeft[i] = Math.abs(Math.sqrt(Math.abs(Math.pow((ch2), 2) - Math.pow((ciTop[i] - (ch2)), 2))) - (ch2));
    ci[i].style.top = (ciTop[i] - (ci[i].offsetHeight / 2)) + "px";
    if (k % s == 0) {
      ci[i].style.left = (ciLeft[i] + (s * 4) + ((s - 1) * cw)) + "px";
    } else {
      ci[i].style.left = (ciLeft[i] + (s * 4) + (((k % s) - 1) * cw)) + "px";
    }
  }
  //}



  renderingFs[k - 1] = function() {
    window.requestAnimationFrame(function() {
      for (var i = 0; i < 4; i++) {

        ciTop[i] = ciTop[i] + (1);
        let factor = getFactor(ciTop[i], ch, mid);

        if (factor >= 0.8 && factor <= 1.2) {
          cicn[i][3].style.visibility = "visible";
        } else {
          cicn[i][3].style.visibility = "hidden";
        }


        cicn[i][1].style.height = (factor * imageInitialHeight) + "px";
        cicn[i][1].style.width = (factor * imageInitialWidth) + "px";



        ciLeft[i] = Math.abs(Math.sqrt(Math.abs(Math.pow((ch2), 2) - Math.pow((ciTop[i] - (ch2)), 2))) - (ch2));

        ci[i].style.top = (ciTop[i] - (ci[i].offsetHeight / 2)) + "px";
        if (k % s == 0) {
          ci[i].style.left = (ciLeft[i] + (s * 4) + ((s - 1) * cw)) + "px";
        } else {
          ci[i].style.left = (ciLeft[i] + (s * 4) + (((k % s) - 1) * cw)) + "px";
        }
        if (ciTop[i] >= ch) {
          ciTop[i] = 0;
        }
      }
    });
  }

  intervalIds[k - 1] = setInterval(renderingFs[k - 1], 40);



 c.addEventListener("mouseover", function() {
    window.clearInterval(intervalIds[k - 1]);
    statusC[k-1] = false;
  });
  c.addEventListener("mouseleave", function() {
    if(statusC[k-1] == false){
      intervalIds[k - 1] = setInterval(renderingFs[k - 1], 40);
      statusC[k-1]= true;
    }
  });
}

function getFactor(ciTop, ch, mid) {
  if (ciTop <= mid) {
    return (ciTop / mid);
  } else if (ciTop > mid) {
    return ((ch) - ciTop) / (ch - mid);
  }
}

const top_scr = document.querySelector(".top-scr");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100){
    top_scr.classList.add("active");
  }
  else{
    top_scr.classList.remove("active");
  }
})




