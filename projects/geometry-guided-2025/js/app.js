
//$(document).ready(function() {
 //   var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
  //      lineNumbers: false,
   //     lineWrapping: true,
    //    readOnly:true
    //});
  //  $(function () {
  //      $('[data-toggle="tooltip"]').tooltip()
  //  });


// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500,
//     // get page height from video duration
//     setHeight = document.getElementById("main"),
//     // select video element
//     vid = document.getElementById('v0');
//     // var vid = $('#v0')[0]; // jquery option




// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// console.log('scroll');
// }

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });


//     window.requestAnimationFrame(scrollPlay);
//});

// JavaScript to handle mouseover and mouseout events
// var activeMethodPill = null;
// var activeScenePill = null;
// var activeModePill = null;
var activeMethodPill_dynerf = null;
var activeScenePill_dynerf = null;
var activeModePill_dynerf = null;
var activeMethodPill_enerf = null;
var activeScenePill_enerf = null;
var activeModePill_enerf = null;
var activeMethodPill_d3dmv = null;
var activeScenePill_d3dmv = null;
var activeModePill_d3dmv = null;
var activeMethodPill_syn = null;
var activeScenePill_syn = null;
var activeModePill_syn = null;
var activeMethodPill_abl = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly: true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];

    activeMethodPill_syn = $('.method-pill-syn').filter('.active')[0];
    activeModePill_syn = $('.mode-pill-syn').filter('.active')[0];
    activeScenePill_syn = $('.scene-pill-syn').filter('.active')[0];

    activeMethodPill_dynerf = $('.method-pill-dynerf').filter('.active')[0];
    activeModePill_dynerf = $('.mode-pill-dynerf').filter('.active')[0];
    activeScenePill_dynerf = $('.scene-pill-dynerf').filter('.active')[0];

    activeMethodPill_enerf = $('.method-pill-enerf').filter('.active')[0];
    activeModePill_enerf = $('.mode-pill-enerf').filter('.active')[0];
    activeScenePill_enerf = $('.scene-pill-enerf').filter('.active')[0];

    activeMethodPill_d3dmv = $('.method-pill-d3dmv').filter('.active')[0];
    activeModePill_d3dmv = $('.mode-pill-d3dmv').filter('.active')[0];
    activeScenePill_d3dmv = $('.scene-pill-d3dmv').filter('.active')[0];

    activeMethodPill_abl = $('.method-pill-abl').filter('.active')[0];


    //resizeAndPlay($('#sparsity')[0]);
});

function selectCompVideo(methodPill, scenePill, n_views, modePill) {
    method = methodPill.getAttribute("data-value");
    if(scenePill != null){
        pill = scenePill.getAttribute("data-value");
    }
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;
    var videoSwitch = document.getElementById("compVideoSwitch");
    var viewNum = document.getElementById("compVideoValue");
    if (method.indexOf("bell") == 0 || method.indexOf("cup") == 0){
        if (activeMethodPill_abl){
            activeMethodPill_abl.classList.remove("active");
        }
        activeMethodPill_abl = methodPill;
    }
    // else if (method.indexOf(""))
    else if (methodPill.className.indexOf("dynerf") >= 0 ) {
        if (activeMethodPill_dynerf) {
            activeMethodPill_dynerf.classList.remove("active");
        }
        if (activeScenePill_dynerf) {
            activeScenePill_dynerf.classList.remove("active");
        }
        if (modePill) {
            activeModePill_dynerf.classList.remove("active");
            modePill.classList.add("active");
            activeModePill_dynerf = modePill;
        }
        activeMethodPill_dynerf = methodPill;
        activeScenePill_dynerf = scenePill;
    }
    else if (methodPill.className.indexOf("enerf") >= 0 ) {
        if (activeMethodPill_enerf) {
            activeMethodPill_enerf.classList.remove("active");
        }
        if (activeScenePill_enerf) {
            activeScenePill_enerf.classList.remove("active");
        }
        if (modePill) {
            activeModePill_enerf.classList.remove("active");
            modePill.classList.add("active");
            activeModePill_enerf = modePill;
        }
        activeMethodPill_enerf = methodPill;
        activeScenePill_enerf = scenePill;
    }
    else if (methodPill.className.indexOf("d3dmv") >= 0 ) {
        if (activeMethodPill_d3dmv) {
            activeMethodPill_d3dmv.classList.remove("active");
        }
        if (activeScenePill_d3dmv) {
            activeScenePill_d3dmv.classList.remove("active");
        }
        if (modePill) {
            activeModePill_d3dmv.classList.remove("active");
            modePill.classList.add("active");
            activeModePill_d3dmv = modePill;
        }
        activeMethodPill_d3dmv = methodPill;
        activeScenePill_d3dmv = scenePill;
    }
    else{
        if (activeMethodPill_syn) {
            activeMethodPill_syn.classList.remove("active");
        }
        if (activeScenePill_syn) {
            activeScenePill_syn.classList.remove("active");
        }
        if (modePill) {
            activeModePill_syn.classList.remove("active");
            modePill.classList.add("active");
            activeModePill_syn = modePill;
        }
        activeMethodPill_syn = methodPill;
        activeScenePill_syn = scenePill;
    }
    methodPill.classList.add("active");
    if(scenePill != null){
        scenePill.classList.add("active");
    }
    //mode = activeModePill.getAttribute("data-value");

    // if (videoSwitch.checked) {
    //     mode = 'depth'
    // } else {
    //     mode = 'rgb'
    // }

    // swap video to avoid flickering
    //console.log(pill.indexOf("nerfds") == 1 ) ;
    if  (method.indexOf("bell") == 0 || method.indexOf("cup") == 0){
        var video_active = document.getElementById("ablVideo");
        video_active.src = "videos/ablation/" + method + "_vs_ours.mp4";
        console.log(video_active.src);
        video_active.load();
    }
    else if (methodPill.className.indexOf("dynerf") >= 0) {
        activeVidID = 0;
        var video_active = document.getElementById("compVideo0");
        video_active.src = "videos/comparison/" + pill + "_" + method + "_vs_ours.mp4";
        console.log(video_active.src);
        video_active.load();
    }
    else if (methodPill.className.indexOf("enerf") >= 0) {
        activeVidID = 1;
        var video_active = document.getElementById("compVideo1");
        video_active.src = "videos/comparison/" + pill + "_" + method + "_vs_ours.mp4";
        console.log(video_active.src);
        video_active.load();
    }
    else if (methodPill.className.indexOf("d3dmv") >= 0) {
        activeVidID = 2;
        var video_active = document.getElementById("compVideo2");
        video_active.src = "videos/comparison/" + pill + "_" + method + "_vs_ours.mp4";
        console.log(video_active.src);
        video_active.load();
    }
    else {
        activeVidID = 3;
        var video_active = document.getElementById("compVideo3");

        var video_rot = document.getElementById("dnerfextraVideoRot");
        video_rot.src = "videos/dnerfextra/" + pill + "_rotate.mp4";
        video_rot.load();

        var video_fix = document.getElementById("dnerfextraVideoFix");
        video_fix.src = "videos/dnerfextra/" + pill + "_fix.mp4";
        video_fix.load();

        var video_track = document.getElementById("dnerfextraVideoTrack");
        video_track.src = "videos/dnerfextra/" + pill + "_track.mp4";
        video_track.load();

        video_active.src = "videos/comparison/" + pill + "_" + method + "_vs_ours.mp4";
        console.log(video_active.src);
        video_active.load();
    }


    if (n_views) {
        viewNum.innerHTML = n_views;
    }
}
