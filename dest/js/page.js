var isMobile = false,
	w_width =  0,
	w_height = 0,
	$mtoph = 0,
	ST = 0,
	navItem = 0,
	$menuBtn=$('.menu-handler'),
	$menuBox=$(".menuBox");
	
//移动端事件和PC事件的切换	
var _mousemove;
var _click;
var _mousedown;
var _mouseup;
if (Modernizr.touch) {
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
    _mouseenter = "touchend";
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
    _mouseenter = "mouseenter";
}; 

function pageBox() {
   	w_width = $(window).width();
    w_height = $(window).height();	
	$mtoph = $('.header').height();
    if (w_width <= 1024) {
        isMobile = true;
    } else if (w_width > 1024) {
        isMobile = false;
    };
	if(isMobile){
		var danNum=0;
		$('.pnav ul').css('display','none');
		$('.pnav').bind(_click,function(){
			if(danNum==1){
				$(this).removeClass('show');
				$(this).find('ul').stop().fadeOut();
				danNum = 0;
			}else{
				$(this).addClass('show');
				$(this).find('ul').stop().fadeIn();
				danNum = 1;
			}
		});
	}else{
		$('.pnav').removeClass('show');
		$('.pnav ul').css('display','block');
		$('.pnav').unbind(_click);
	} 
};
pageBox();
$(window).resize(function () {
    pageBox();
});
$(function () {
	changeTop();
	function changeTop(){
		var st = $(window).scrollTop();
		if(st<1){
			$('#top').addClass('act');
		}else{
			$('#top').removeClass('act');
		}
	};
	$('#top').bind(_click, function() {
		$('html,body').stop().animate({scrollTop: 0}, 800);
	});
	var isopen = 0;
	$('.flinkmore .t').bind(_click, function(){
		if(isopen==0){
			isopen = 1;
			$(this).addClass('act');
			$('.flinkmore ul').stop().slideDown(300);
		}else{
			isopen = 0;
			$(this).removeClass('act');
			$('.flinkmore ul').stop().slideUp(300);
		}
	});
	$('.flinkmore').mouseleave(function(){
		isopen = 0;
		$('.flinkmore .t').removeClass('act');
		$('.flinkmore ul').stop().slideUp(300);
	});

	$(window).scroll(function () {
		var windowTop = $(window).scrollTop();
		if (windowTop < w_height && !isMobile) {
			$('.pbanner .pic2 img').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
		};
		// changeHeader();
		// changePnav();

		changeTop();
    });
 //    function changeHeader(){
	// 	var ST = $(window).scrollTop();
	// 	if(!isMobile){
	// 		if( ST > 1 ){
	// 			$('.header').addClass('sheader');
	// 		}else{
	// 			$('.header').removeClass('sheader');
	// 		}
	// 	}
	// };
	// changeHeader();
	// function changePnav(){
	// 	var ST = $(window).scrollTop();
	// 	if(!isMobile&&$('.pvpos').size()!=0){
	// 		if( ST > $('.pvpos').offset().top - $('.pnav').height() ){
	// 			$('.pnav').addClass('spnav');
	// 		}else{
	// 			$('.pnav').removeClass('spnav');
	// 		}
	// 	}
	// };
	// changePnav();
	$('.navMobile dd p a').bind(_click, function (e) {
		if($(this).parent().next('.mtnav').size() >= 1){
			if(!$(this).hasClass('act')){
				e.preventDefault();
				$('.navMobile dd p a').removeClass('act');
				$('.mtnav').stop().slideUp(300);
				$(this).addClass('act');
				$(this).parent().next('.mtnav').stop().slideDown(300);
			}else{
				$(this).removeClass('act');
				$(this).parent().next('.mtnav').stop().slideUp(300);
			}
		}
	});
	$menuBtn.bind(_click, function () {
		var w = $menuBox.width();
        if (navItem == 0) {
			$('.menuBlack').stop().fadeIn(600);
			$(this).addClass('active');
            $menuBox.show().stop(false,false).animate({right:0});
            navItem = 1;
        } else {
            $('.menuBlack').stop().fadeOut(600);
            $(this).removeClass('active');
            $menuBox.stop(false,false).animate({right:-w+"px"},function(){
                $(this).hide();
            });
            navItem = 0;
        };
    });
	$('.menuBlack').bind(_click, function () {
		var w = $menuBox.width();
		$menuBtn.removeClass('active');
		$('.menuBlack').stop().fadeOut(600);
		$menuBox.stop(false,false).animate({right:-w+"px"},function(){
			$(this).hide();
		});
		navItem = 0;
    });
	//weixin
	setPopUp($('.weixin'), "官方微信");
	function setPopUp(obj, title) {
		obj.click(function () {
			var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title + '<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
		$("body").append(str);
		jQuery(".popUpblack").fadeIn();
		jQuery(".popUp").animate({marginTop:"-127"},400);
		$(".popUp .close").click(function () {
			$(".popUpblack").remove();
		});
		jQuery(".popUpblack").click(function(){$(".popUpblack").remove();});
			return false;
		});
	};
	function setScroll(anchorCur){
		if(jQuery(anchorCur).length>=1){
			jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top-$mtoph}, 0);
		}
	};
	window.onload = function () {
		var hash = location.href.split("#")[1];
		if (hash) {
			setScroll("#" + hash);
		}
	};
	$('.pnav .cur').bind(_click, function(e) {
		var hash = $(this).attr('href').split("#")[1];
        if (hash) {
        	e.preventDefault();
            jQuery("html,body").animate({ scrollTop: jQuery("#"+hash).offset().top-$mtoph},800);
        }
	});
	$('.vwrap .close,.vwrap .videobtg').bind(_click,function(){
        objplay.stop(); 
        $('.vwrap').hide();
        $('#videobox').html('');
    });
	$('.video-btn').bind(_click, function() {
        var $img = $(this).data('img');
        var $video = $(this).data('video');
        Video.load({
            vcontainer: 'videobox',
            vfimg: $img,
            vfiles: $video,
            isautoplay: 'true'
        });
        $('.vwrap').fadeIn();
    });
    $(document).on(_click,'.ly-box',function(e){
		if ($(e.target).hasClass('ly-box')) {
			$('.ly-box').remove();
			$('html').removeClass('open');
		}
	});
	$(document).on(_click,'.ly-close',function(){
		$('.ly-box').remove();
		$('html').removeClass('open');
	});
	$(document).on(_click,'.pt-back .back',function(){
		$('.ly-box').remove();
		$('html').removeClass('open');
	});
	$('.ly-btn').click(function(e){
		e.preventDefault();
		var $this = $(this);
		getLayerAjax($this, $this.attr('href'));
	});
	$(document).on(_click,'.pt-back .arrow',function(e){
		e.preventDefault();
		var $this = $(this),
			url = $this.attr('href');
		if(url!=""){
			getLayerAjax($this, url);
		}else{
			alert("没有了...o(╥﹏╥)o")
		}
	});
});
$(document).on('click','.overlayClose',function(){
 	$('.imgShowBox').removeClass('img-show');
    jQuery('html').removeClass('openImg');
    setTimeout(function () { jQuery('.imgShowBox').remove(); }, 800);
}); 
function openshowImg(num,maxnum) {
    $('html').addClass('openImg');
    jQuery("body").append('<div class="imgShowBox"><ul class="imgstools clearfix"><li><div class="imgPrev"></div></li><li><div class="snumBox"><span class="actnum">0</span>/<span class="allnum">0</span></div></li><li><div class="imgNext"></div></li><li class="lastItem"><a class="overlayClose"><i></i></a></li></ul><div class="imgShowDemo"></div></div>');
    $(".imgstools .snumBox .actnum").html(num);
    $(".imgstools .snumBox .allnum").html(maxnum);
    for(var i = 1 ; i <= maxnum ; i++){
		$('.imgShowDemo').append('<div class="item"><div class="txt"><div class="i"></div></div><img src="" class="img"/></div>');
		var imgurl = $("[data-big-num="+i+"]").attr('data-img');
		var imgtitle = $("[data-big-num="+i+"]").attr('data-title');
		$('.imgShowDemo .item').eq(i-1).find(".img").attr("src",imgurl);
		$('.imgShowDemo .item').eq(i-1).find('.i').html(imgtitle);	
	}
    $(".imgShowBox").css({ height: w_height });
    $('.imgShowDemo').css({ height: w_height,width: w_width });
    $('.imgShowDemo .item').css({ height: w_height });
    
    jQuery(window).resize(function(){
		$(".imgShowBox").css({ height: w_height });
        $('.imgShowDemo').css({ height: w_height,width: w_width });
        $('.imgShowDemo .item').css({ height: w_height });
    });
   
	var imgowl=$('.imgShowDemo').slick({fade:true,arrows:false}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".imgstools .snumBox .actnum").html(nextSlide+1);
	});
	$('.imgstools .imgPrev').click(function(e){
		e.preventDefault();
		imgowl.slick('slickPrev');
	});
	$('.imgstools .imgNext').click(function(e){
		e.preventDefault();
		imgowl.slick('slickNext');
	});
  	$('.imgShowDemo').slick('slickGoTo',num-1);
  	$('.imgShowBox').addClass('img-show');
}; 
function ShowMap(zuobiao, showmapInfo, zoom) {
    var arrzuobiao = zuobiao.split(',');
    var map = new BMap.Map("map");
    var point = new BMap.Point(arrzuobiao[0], arrzuobiao[1]);
    var marker = new BMap.Marker(point, {
        icon: new BMap.Icon("images/mapi.png", new BMap.Size(105, 105))
    })
    map.addOverlay(marker);
	//marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    map.centerAndZoom(point, zoom);
    map.disableScrollWheelZoom();
    var opts = {
        width: 240
    }
    var infoWindow = new BMap.InfoWindow(showmapInfo, opts);
    marker.addEventListener("click", function () {
        map.openInfoWindow(infoWindow,point);
    });
    // map.setMapStyle({style:'grayscale'});
};
var objplay;
var Video = {
	load: function (objs) {
		objplay = jwplayer(objs.vcontainer).setup({
			flashplayer: 'js/video/flashplay.swf',
			html5player: 'js/video/html5player.js',
			file: objs.vfiles,
			image: objs.vfimg,
			width: '100%',
			height: '100%',
			aspectratio: '16:9',
			stretching: 'fill',
			controls: 'true',
			autostart: objs.isautoplay
		});
		return objplay;
	}
};
function setImgMax(img, imgW, imgH, tW, tH) {
    var tWidth = tW || w_width;
    var tHeight = tH || w_height;
    var coe = imgH / imgW;
    var coe2 = tHeight / tWidth;
    if (coe < coe2) {
        var imgWidth = tHeight / coe;
        img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
    } else {
        var imgHeight = tWidth * coe;
        img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
    };
};
function getLayerHeight(item) {
    var h = item.height();
    if(h<w_height){
        var c = w_height - h;
        item.css({ marginTop: c/2 });
    }else{
        item.attr({ style: '' });
    }
};

function imgLoad(item) {
    var maxNum = $('.ly-main img').size();
    var curNum = 0;
    $('.ly-main img').each(function () {
        $(this).load(function () {
            curNum++;
            if (curNum == maxNum) {
                getLayerHeight($('.ly-main'));
            }
        });
    });
};
function changeLayerPosition(){
    getLayerHeight($('.ly-main'));
    imgLoad($('.ly-main img'));
};
function getLayerAjax(item,address){
	$.ajax({
		url: address,
		dataType: "html",
		success: function (data) {
			if (data == "" || data == null) {
				return;
			} else {
				if($('.ly-box').size()!=0){ 
					$('.ly-box').remove();
					$('.footer').after(data);
					$('.ly-box').addClass('show');
					$('html').addClass('open');
				}else{
					$('.footer').after(data);
					changeLayerPosition();
					setTimeout(function(){
						$('html').addClass('open');
						$('.ly-box').addClass('show');
					},300);
				}
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			$('.ly-box').remove();
		}
	})
};

