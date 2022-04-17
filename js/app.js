const loader = document.querySelector(".loader");
         window.onload = function(){
           setTimeout(function(){
			 document.title = 'Cash Price - загрузка'
             loader.style.opacity = "0";
             setTimeout(function(){
               loader.style.display = "none";
			   document.title = 'Cash Price'
             }, 500);
           },500);
         }
		 
const dropDown = document.querySelector(".dropdown-menu");
const closeDrop = document.querySelector(".close-menu");
const openDrop = document.querySelector(".profile");
	
	openDrop.addEventListener("click", () => {
      dropDown.classList.add("active");
    });
	
	closeDrop.addEventListener("click", () => {
      dropDown.classList.remove("active");
    });
	
function renderTime() {
			var currentTime = new Date();
			var diem = "AM";
			var h = currentTime.getHours();
			var m = currentTime.getMinutes();
			var s = currentTime.getSeconds();
			setTimeout('renderTime()',1000);
			if (h == 0) {
				h = 12;
			} else if (h > 12) { 
				h = h - 12;
				diem="PM";
			}
			if (h < 10) {
				h = "0" + h;
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}
			var myClock = document.getElementById('clockDisplay');
			myClock.textContent = h + ":" + m + ":" + s + " " + diem;
			myClock.innerText = h + ":" + m + ":" + s + " " + diem;
			}
			renderTime();
			
function copyBtn() {
    var copyText = document.getElementById('copy-text');
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
	n('Скопировано!', 'success');
}

function copyNumbBtn() {
    var copyNumb = document.getElementById('copy-number');
    copyNumb.select();
    copyNumb.setSelectionRange(0, 99999)
    document.execCommand("copy");
	n('Скопировано!', 'success');
}

function copyDescBtn() {
	var copyDesc = document.getElementById('copy-desc');
    copyDesc.select();
    copyDesc.setSelectionRange(0, 99999)
    document.execCommand("copy");
	n('Скопировано!', 'success');
}

function copyCashBtn() {
	var copyCash = document.getElementById('copy-cash');
    copyCash.select();
    copyCash.setSelectionRange(0, 99999)
    document.execCommand("copy");
	n('Скопировано!', 'success');
}




function n(text, type, time, closein) {
    timen = (time) ? time : 1000;
    bdsd = (closein) ? closein : true;
    new Noty({
        text        : text,
        type        : type,
        dismissQueue: true,
        layout      : 'bottomRight',
        theme       : 'mint',
        progressBar: true,
        timeout: timen,
        killer: bdsd
    }).show();
}

function withdraw() {
	 n('Недостаточно средств', 'error');
}