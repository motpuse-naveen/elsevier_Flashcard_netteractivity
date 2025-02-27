const elm_head = document.querySelector("head");
const elm_html = document.querySelector("html");
const elm_titleCont = document.querySelector(".titleContainer");
const elm_dialogTitle = document.querySelector("#dialogTitle");
const elm_h_hotspot = document.querySelector(".h-hotspot");
const elm_dialogMain = document.querySelector(".dialog")
const elm_closeDialogBtn = document.querySelector(".close");
const elm_commentBtn = document.querySelector(".commentButton");
const elm_dialogModalbg = document.querySelector(".modalbg")

//Add title to document

const elm_title = document.createElement("title");
const elm_titleTxt = document.createTextNode(elm_titleCont.textContent.trim());
elm_title.appendChild(elm_titleTxt);
elm_head.prepend(elm_title)

//Add heading ARIA attribute to title
elm_titleCont.setAttribute("role","heading");
elm_titleCont.setAttribute("aria-level","1");
elm_dialogTitle.setAttribute("role","heading");
elm_dialogTitle.setAttribute("aria-level","2");
elm_html.setAttribute("lang","en");
elm_h_hotspot.setAttribute("role","main");
elm_dialogMain.setAttribute("role", "dialog");
elm_dialogMain.setAttribute("aria-label", "Commentary");
elm_closeDialogBtn.setAttribute("role","button");
elm_commentBtn.setAttribute("role","button");
elm_dialogModalbg.setAttribute('aria-hidden', 'true');

//Hide seperator
const elm_seperators = document.querySelectorAll("hr");
elm_seperators.forEach(elmhrs => {
    elmhrs.setAttribute("aria-hidden", "true");
});
function addWindowEvents() {
	jqnc(window).click(function(e) {
		jqnc('body').removeClass('show-focus-outlines');
	});

	jqnc(window).on('keydown keyup', function(e) {
		if (e.keyCode === 9) {
			jqnc('body').addClass('show-focus-outlines');
		}
		setTimeout(function(){jqnc('body').addClass('show-focus-outlines');},20);
	});
	document.addEventListener('click', function(e) {
		jqnc('body').removeClass('show-focus-outlines');
	});
}

var mainframe1 = document.getElementById("mainframe");
mainframe1.onload = function() {
    mainframe1.setAttribute("scrolling", "no");
    mainframe1.scrolling = "no";
};

//Add role button to hotspots
setTimeout(function(){
    // Get the iframe element correctly
    var mainframe = document.getElementById("mainframe");
    

    if (mainframe) {
        mainframe.setAttribute("title", "Main Frame");
        mainframe.setAttribute("allowFullScreen", "true");
        mainframe.setAttribute("frameborder", "0");
        mainframe.setAttribute("scrolling", "no");
        mainframe.scrolling = "no";
        mainframe.style.cssText = "overflow: hidden !important; border: none !important;";

        // Access the content of the mainframe (Ensure it's from the same origin)
        var mainframeDoc = mainframe.contentDocument || mainframe.contentWindow.document;
        
        if (mainframeDoc) {
            // Get the nested iframe inside mainframe
            var activityFrame = mainframeDoc.getElementById("framecontainer"); // Use ID
            if (activityFrame) {
                activityFrame.setAttribute("title", "Activity Frame");
            }
        }
    }
    /*const frm_activity_document = window.frames["mainframe"].contentWindow.frames["framecontainer"].contentWindow.document;
    const elm_htspots = frm_activity_document.querySelectorAll("#zoomContainer .hotspot div");
    const elm_htspotslbls = frm_activity_document.querySelectorAll("#zoomContainer .labelsdata div");
    elm_htspots.forEach(elmht => {
        elmht.setAttribute("role", "button");
    });
    elm_htspotslbls.forEach(elmhtlbl => {
        elmhtlbl.setAttribute("aria-live", "assertive");
    });*/

    document.addEventListener('click', function(e) {
		jqnc('body').removeClass('show-focus-outlines');
	});

	addWindowEvents();
},1000);
