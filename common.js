var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function prepare_search_string(q) {
    q = $.trim(q);
    q = q.replace(/\040/g, "_");
    return q.replace(/[\",\',;,:,<,>,\/,\\\,\,\.,\,\?,\^,\&,\+,\!,\=,\{,\}]/g, '');
}
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

function brandingfooterclose() {
    $('#bottomRe').remove();
    return false;
}


$('#brandingfooterclose').live('click', function () {
    brandingfooterclose();
    return false;
});

$('#brandingfooter').live('click', function () {
    brandingfooterclose();
    return true;
});


jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


var fast_search_wait = false;
var q = "";

function fastSearch() {
    q = $('#qq').val();

    if (q != "") {
        if (fast_search_wait != false) {
            clearInterval(fast_search_wait);
            fast_search_wait = false;
        }
        fast_search_wait = setInterval(function () {
            clearInterval(fast_search_wait);
            fast_search_wait = false;
            $.ajax({
                // try to leverage ajaxQueue plugin to abort previous requests
                async: true,
                url: '/zend/search/index/fast/',
                data: {q: q},
                success: function (data) {
                    if (data.success == true) {
                        $('#fast_search_res').html(data.html);
                        $('#fast_search_res').fadeIn();
                    } else {
                        $('#fast_search_res').fadeOut();
                    }
                    clearInterval(fast_search_wait);
                    fast_search_wait = false;
                },
                error: function () {
                    clearInterval(fast_search_wait);
                    fast_search_wait = false;
                }
            });
        }, 500);
    }
}


function updateAnime() {
    var newDate = new Date;
    var q = newDate.getTime();
    //$('#anime_radio_body img:first').attr('src','https://web.archive.org/web/20190301084101/http://radionami.ru/what.png?'+q);
    var t = setTimeout("updateAnime()", 180000);
}

$(document).ready(function () {


    if ($('#loginWindow').size() > 0) {

        $('#panelLoginButton').live('click', function () {
            $('#loginWindow,#loginBg').fadeIn();
        });

        $('#loginWindow .close,#loginBg').live('click', function () {
            $('#loginWindow,#loginBg').fadeOut();
            $('#loginWindow .login').show();
            $('#loginWindow .error').hide();
        });

        $('#loginWindow form').submit(function (e) {
            e.preventDefault();
            var login = $('#loginWindow #login').val();
            var password = $('#loginWindow #password').val();
            if (login != "" && password != "") {
                $.post('/', {
                    'login_name': login,
                    'login_password': password,
                    'login': 'submit'
                }, function (data) {
                    if (data.success == true) {
                        $('#loginWindow .login').show();
                        $('#loginWindow .error').hide();
                        window.location.reload();
                    } else {
                        $('#loginWindow .login').hide();
                        $('#loginWindow .error').show();
                    }

                });
            }

            return false;
        });
    }

	/*
    var rim = Math.floor(Math.random() * (15 - 11) + 11);
    $('#banner_rt').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://sos.infiplay.ru/g/index.php?a=270"><img src="/templates/main/images/da/pirate_story/' + rim + '.gif"/></a>');
	*/
	
    /*$('#banner_rb').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://ninjawars2.ru/?p=52efc8888ec87">' +
     '<img id="ninja_wars" src="/templates/main/images/da/ninja_wars_02_14/240_400_nw_battle.gif"/>' +
     '</a>');
     */
    $('.rbann').each(function(){
        var rdiv=$(this);
        var bans=rdiv.find('div');

        if(bans.size()>0){
            var barr=[];
            bans.each(function(){
                var ban={};
                ban.link=$(this).attr('data-link');
                ban.img=$(this).attr('data-img');
                ban.src=$(this).attr('data-src');
                barr.push(ban);
            });

            var item=barr[Math.floor(Math.random()*barr.length)];
            if (swfobject.hasFlashPlayerVersion("10.0.0")) {
                var flashvars = {
                    "tcolor": "0x3ad7e7"
                };
                var params = {
                    allowFullScreen: "true",
                    allowScriptAccess: "always",
                    bgcolor: "#000000",
                    wmode: 'transparent',
                    loop: "true"
                };
                var att = {
                    id: rdiv.attr('id')
                };

                new swfobject.embedSWF(
                    item.src,
                    rdiv.attr('id'), rdiv.css('width'), rdiv.css('height'), "10.0.0", true, flashvars,
                    params, att);
            }else{
                rdiv.html('<a target="_blank" href="'+item.link+'"><img src="'+item.img+'"/></a>');
            }

        }
    });
	
    if (swfobject.hasFlashPlayerVersion("10.0.0")) {
        var flashvars = {
            "tcolor": "0x3ad7e7"
        };
        var params = {
            allowFullScreen: "true",
            allowScriptAccess: "always",
            bgcolor: "#000000",
            wmode: 'transparent',
            loop: "true"
        };
        var att = {
            id: "banner_rb"
        };

        var rim =randomInteger(1, 3);
        new swfobject.embedSWF(
            "/templates/main/images/da/shinigame/" + rim + ".swf",
            "banner_rb", "240", "400", "10.0.0", true, flashvars,
            params, att);
    }else{
         var rim =randomInteger(1, 3);
		switch(rim){
			case 1:{
				$('#banner_rb').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://www.sngame.su/ai14"><img src="/templates/main/images/da/shinigame/' + rim + '.png"/></a>');
				break;
			}
			case 2:{
				$('#banner_rb').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://www.sngame.su/am14"><img src="/templates/main/images/da/shinigame/' + rim + '.png"/></a>');
				break;
			}
			case 3:{
				$('#banner_rb').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://www.ninjaworld.ru/ax252"><img src="/templates/main/images/da/shinigame/' + rim + '.png"/></a>');
				break;
			}
		
		}
		
    }
	
	
	/*---top banner*/
	/*
	if (swfobject.hasFlashPlayerVersion("10.0.0")) {
        var flashvars = {
            "tcolor": "0x3ad7e7"
        };
        var params = {
            allowFullScreen: "true",
            allowScriptAccess: "always",
            bgcolor: "#000000",
            wmode: 'transparent',
            loop: "true"
        };
        var att = {
            id: "banner_top_mid"
        };


        var rim = Math.floor(Math.random() * (3 - 1) + 1);
        new swfobject.embedSWF(
            "/templates/main/images/da/shinigame_top/" + rim + ".swf",
            "banner_top_mid", "728", "90", "10.0.0", true, flashvars,
            params, att);
    }else{
        var rim = Math.floor(Math.random() * (3 - 1) + 1);
		if(rim==1){
			$('#banner_top_mid').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://www.sngame.su/aa14"><img src="/templates/main/images/da/shinigame_top/' + rim + '.png"/></a>');
		}
		if(rim==2){
			$('#banner_top_mid').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://www.sngame.su/ab14"><img src="/templates/main/images/da/shinigame_top/' + rim + '.png"/></a>');
		}
		if(rim==3){
			$('#banner_top_mid').html('<a target="_blank" href="https://web.archive.org/web/20190301084101/http://www.sngame.su/ac14"><img src="/templates/main/images/da/shinigame_top/' + rim + '.png"/></a>');
		}
    }
	*/

    $('#toppanel .s').mouseenter(function () {
        var item = $(this);
        item.addClass('hover');
         $('#eventsPanel').removeClass('hover');
        $('#notices').hide();
        setTimeout(function () {
            console.log(item.hasClass('hover'));
            if (item.hasClass('hover')) {
                item.find('ul:first').css('display', 'block');
            }
        }, 300);

    });


    $('#toppanel .sp').mouseenter(function () {
        var item = $(this);
        item.removeClass('ph');
        item.addClass('hover');
        setTimeout(function () {
            console.log(item.hasClass('hover'));
            if (item.hasClass('hover')) {
                item.find('ul:first').css('display', 'block');
            }
        }, 300);

    });
    
      $('#toppanel .sp').mouseleave(function () {
        $('#toppanel .hover.sp:last').find('ul:first').css('display', 'none');
         $('#toppanel .hover.sp:last').addClass('ph');
        $('#toppanel .hover.sp:last').removeClass('hover');
       
    });

    $('#toppanel .s').mouseleave(function () {
        $('#toppanel .hover.s:last').find('ul:first').css('display', 'none');
        $('#toppanel .hover.s:last').removeClass('hover');
    });

    $('#eventsPanel').mouseleave(function () {
        $('#eventsPanel').removeClass('hover');
        $('#notices').hide();
    });

    $('#eventsPanel').mouseenter(function () {
        $('#notices').show();
        $(this).addClass('hover');
        $('#tabep').addClass('hover');
        $('#tabpm').removeClass('hover');
    });

    $('#tabep').mouseenter(function () {
        $('#notices').show();
        $('#tabpm').removeClass('hover');
        $('#tabep').addClass('hover');
    });

    $('#tabpm').mouseenter(function () {
        $('#notices').show();
        $('#tabep').removeClass('hover');
        $('#tabpm').addClass('hover');
    });


    $('body').addClass('loaded');
    if ($('#video_watch').size() > 0) {
        $('#video_watch').fancybox({
            padding: 0,
            afterClose: function () {
                var myPlayer = _V_("video_watch_1");
                myPlayer.pause();
            }
        });
    }
    if ($('#video_watch_inline').size() > 0) {
        _V_("video_watch_1").ready(function(){
            var myPlayer = this;
            myPlayer.muted(true);
            myPlayer.play();
        });
    }




    $('#rotator .slider').slides({
        preload: true,
        generateNextPrev: true,
        pagination: true,
        randomize: false,
        play: 4000,
        pause: 10,
        slideSpeed: 700,
        hoverPause: true
    });

    $('#rotator .shapka a').live('click', function (e) {
        e.preventDefault();
        $('#rotator .shapka a').removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');

        $('#rotator .slider').removeClass('active');

        $(href).addClass('active');

        return false;
    });

    $('#random_preview_body .cnt').load('/zend/preview/index/index/fixed/1');

    $('#random_preview_body .reload').click(function (e) {
        var link = $(this);
        e.preventDefault();
        if (!link.hasClass('busy')) {
            link.addClass('busy');
            $('#random_preview_body .cnt').fadeTo('fast', 0.5);
            var date = new Date();
            r = date.getUTCMilliseconds() + date.getUTCSeconds() + date.getHours();
            $.get('/zend/preview/index/index/?r=' + r, function (data) {
                $('#random_preview_body .cnt').html(data);
                link.removeClass('busy');
                $('#random_preview_body .cnt').fadeTo('fast', 1);
            });

        }
        return false;
    });


    $('#random_anime_body .reload').click(function (e) {
        var link = $(this);
        e.preventDefault();
        if (!link.hasClass('busy')) {
            link.addClass('busy');
            $('#random_anime_body .cnt').fadeTo('fast', 0.5);
            var date = new Date();
            r = date.getUTCMilliseconds() + date.getUTCSeconds() + date.getHours();
            $.get('/zend/trash/footer/random/?r=' + r, function (data) {
                if (data["success"] == true) {
                    $('#random_anime_body .cnt').html(data['random']);
                }
                link.removeClass('busy');
                $('#random_anime_body .cnt').fadeTo('fast', 1);
            });

        }
        return false;
    });

    $('#random_anime_body .img').live('mouseover', function () {
        $('#random_anime_body .descr').show();
    });
    $('#random_anime_body .img').live('mouseout', function () {
        $('#random_anime_body .descr').hide();
    });


    updateAnime();

    $('.amv_video').click(function () {
        if (!$(this).hasClass('act')) {
           
           $(this).children(".player").css("visibility", "visible");

        }
    });

    $('.zag').click(function () {
        if (!$(this).hasClass('act')) {
             $(this).children(".player").css("visibility", "visible");

        }
    });

    $('.news_vidos').click(function () {
        if (!$(this).hasClass('act')) {
           (this).children(".player").css("visibility", "visible");
        }
    });

    $('.news_vidos_backup').click(function () {
        if (!$(this).hasClass('act')) {
            var old_html = $(this).html();
            var new_html = old_html.replace(/<!--/g, "").replace(/-->/g, "");
            $(this).html(new_html);
            $(this).addClass('act');
        }
    });


    if ($('.fav_click').size() > 0) {

        var fav_check = new Object();
        $('.fav_click').each(function (i) {

            fav_check[$(this).attr('id')] = $(this).attr('id');

        });

        $.post('/zend/trash/fav/', {'data': fav_check}, function (data) {
            if (data["success"] == true) {
                $.each(data["items"], function (id, value) {
                    $('#' + id).html("<span onclick=\"doFavorites('" + value + "', 'minus'); return false;\"><img style=\"vertical-align: middle;border: none;\" title=\"??????? ?? ??????????\"  src=\"http://animeonline.su/templates/main/dleimages/minus_fav.gif\">&nbsp;??????? ?? ??????????</span>");
                });
            }
        });
    }


    $('#slides').slides({
        preload: false,
        generateNextPrev: false,
        pagination: true,
        randomize: true,
        animationComplete: function (current) {
            var width = $('#slides .pagination .current').width();
            var left = $('#slides .pagination .current').position().left;
            var t = parseInt(left + width / 2);
            $('#slides .pagination').animate({'margin-left': '-' + t + 'px'});

            var slide = $('#slides .slide:visible');
            slide.find('.item').each(function () {
                var tmb = $(this).attr('data-thumb');
                if ($(this).css('background-image') != tmb) {
                    $(this).css('background-image', 'url(' + tmb + ')');
                }
            });

            var next_slide = $('#slides .slide:visible').next();
            if (next_slide) {
                next_slide.find('.item').each(function () {
                    var tmb = $(this).attr('data-thumb');
                    if ($(this).css('background-image') != tmb) {
                        $(this).css('background-image', 'url(' + tmb + ')');
                    }
                });
            }
            var prev_slide = $('#slides .slide:visible').prev();
            if (prev_slide) {
                prev_slide.find('.item').each(function () {
                    var tmb = $(this).attr('data-thumb');
                    if ($(this).css('background-image') != tmb) {
                        $(this).css('background-image', 'url(' + tmb + ')');
                    }
                });
            }
        }
    });
    var slide = $('#slides .slide:first');
    slide.find('.item').each(function () {
        var tmb = $(this).attr('data-thumb');
        $(this).css('background-image', 'url(' + tmb + ')');
    });
    var next_slide = $('#slides .slide:first').next();
    if (next_slide) {
        next_slide.find('.item').each(function () {
            var tmb = $(this).attr('data-thumb');
            if ($(this).css('background-image') != tmb) {
                $(this).css('background-image', 'url(' + tmb + ')');
            }
        });
    }
    $('.popup').fancybox({padding: 0});

    $('#slides .item').attr('rel', 'sc').fancybox({
        afterLoad: function (current, previous) {
            var ref = current.element.context.id;
            window.location.hash = ref;
        },
        afterClose: function () {
            window.location.hash = '_';
        },
        helpers: {
            thumbs: {
                width: 50,
                height: 50,
                source: function (current) {
                    return $(current.element).attr('data-thumb');
                }
            },
            overlay: {
                css: {
                    'background': 'rgba(0, 0, 0, 0.95)'
                }
            }
        }
    });

    $('.amv_screens .item').attr('rel', 'sc').fancybox({
        afterLoad: function (current, previous) {
            var ref = current.element.context.id;
            window.location.hash = ref;
        },
        helpers: {
            thumbs: {
                width: 50,
                height: 50,
                source: function (current) {
                    return $(current.element).find('img').attr('src');
                }
            },
            overlay: {
                css: {
                    'background': 'rgba(0, 0, 0, 0.95)'
                }
            }
        }
    });

    if ($($('.amv_screens .item')).size() > 0) {
        var hash = window.location.hash;
        if ($(hash).size() > 0) {
            $(hash + ":first").click();
        }
    }
    $('#qq').keyup(function () {
        fastSearch();
    });

    /*
     $('#qq').change(function(){
     fastSearch();
     });
     */
    $('#qq').focus(function (e) {

        fastSearch();
    });

    $('#qq').blur(function (e) {

        $('#fast_search_res').fadeOut();
    });

    var rec_of = $('#recomendyem_body').offset();
    var scroll_height = rec_of.top + $('#recomendyem_body').height() + 40;
    var scroll = $(this).scrollTop() + parseInt($(window).height());
    if (scroll > scroll_height) {
        $('#scroll_up').fadeIn();
    } else {
        $('#scroll_up').fadeOut();
    }


    $(window).scroll(function () {
        $('#toppanel').css('left', -$(this).scrollLeft());
        var scroll = $(this).scrollTop() + parseInt($(window).height());
        if (scroll > scroll_height) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }


        if (scroll > 2000) {
            if ($('#bottomRe').size() == 1) {
                $('#bottomRe').animate({bottom: '0'}, 900);
            }
        }

    });

    $('#scroll_up').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#fullsearch').submit(function (e) {
        e.preventDefault();
        var story = encodeURIComponent(prepare_search_string($('#fullsearch #searchinput').val()));
        window.location = '/search/' + story;
        return false;
    });

    $('#fast_search_form').submit(function (e) {
        e.preventDefault();
        var story = encodeURIComponent(prepare_search_string($('#fast_search_form #qq').val()));
        window.location = '/search/' + story;
        return false;
    });

    if ($('#top_sort').size() > 0) {
        $('#top_sort').css('visibility', 'visible');
        $('#top_sort #year').select2({
            width: '170px', formatNoMatches: function () {
                return "Не найдено";
            }, placeholder: "Все года"

        });

        $('#top_sort #genre').select2({
            width: '190px', formatNoMatches: function () {
                return "Не найдено";
            }, placeholder: "Все жанры"
        });

        $('#top_sort #sort').select2({
            width: '170px',
            minimumResultsForSearch: 5
        });

        $('#top_sort').submit(function (e) {
            e.preventDefault();
            var year = $('#top_sort #year').select2('val');
            var genre = $('#top_sort #genre').select2('val');
            var sort = $('#top_sort #sort').select2('val');
            var link = "/top/";

            if (year != "") {
                year = new String(year);
                year = year.replace(/\,/g, "_");
                link += "year/";
                link += year;
                link += "/";

            }
            if (genre != "") {
                genre = new String(genre);
                genre = genre.replace(/\,/g, "_");
                link += "genre/";
                link += encodeURIComponent(genre);
                link += "/";
            }
            if (sort != "") {
                link += "sort/";
                link += sort;
                link += "/";
            }

            window.location = link;


            return false;
        });
    }


    $('.main_block .mbnext').click(function (e) {
        e.preventDefault();

        var block = $(this).closest('.main_block');
        var content = block.find('.main_block_content');

        if (!content.hasClass('loading')) {
            content.addClass('loading');
            var id = block.attr('id');
            var page = parseInt(block.find('span.current:first').text());

            if (page < 6) {
                current = page + 1;
            } else {
                current = 1;
            }
            block.find('span.current').text(current);
            $.get('/index.php?do=mainblock&block=' + id + '&page=' + current, function (data) {
                if (content.find('.mbslide_new').size() > 0) {
                    var old = content.find('.mbslide_new').html();
                } else {
                    var old = content.html();
                }
                content.html('<div class="mbitem"><div class="mbslide_old">' + old + "</div>" + '<div class="mbslide_new">' + data + "</div></div>");
                block.find('.main_block_content').removeClass('loading');
                content.find('.mbitem').animate({'margin-left': '-730px'}, function () {
                    block.find('.mbslide_old').remove();
                    block.find('.mbitem').css('margin-left', '0px');
                });

            });
        }
        return false;
    });

    $('.main_block .mbprev').click(function (e) {
        e.preventDefault();

        var block = $(this).closest('.main_block');
        var content = block.find('.main_block_content');

        if (!content.hasClass('loading')) {
            content.addClass('loading');
            var id = block.attr('id');
            var page = parseInt(block.find('span.current:first').text());

            if (page > 1) {
                current = page - 1;
            } else {
                current = 6;
            }
            block.find('span.current').text(current);
            $.get('/index.php?do=mainblock&block=' + id + '&page=' + current, function (data) {
                if (content.find('.mbslide_new').size() > 0) {
                    var old = content.find('.mbslide_new').html();
                } else {
                    var old = content.html();
                }
                content.html('<div class="mbitem" style="margin-left:-730px"><div class="mbslide_new">' + data + "</div>" + '<div class="mbslide_old">' + old + "</div></div>");
                block.find('.main_block_content').removeClass('loading');
                content.find('.mbitem').animate({'margin-left': '0px'}, function () {
                    block.find('.mbslide_old').slideUp(1000, function () {
                        block.find('.mbslide_old').remove();
                    });
                });

            });
        }
        return false;
    });
    /*
     $('.parallax-layer').parallax({mouseport: $("#header")}, {xparallax: '150px'}, {xparallax: '50px'}, {xparallax: '30px'});

     */
	if($("#brandParallax").size()>0){
    var scene = document.getElementById('brandParallax');
    var parallax = new Parallax(scene);
	}
	
	if($("#mobile-banner").size()>0){
	$("#mobile-banner").click(function(){
		$('body').removeClass('mobile');
		return true;
	});
		$('body').addClass('mobile');
		
		setTimeout(function(){$('body').removeClass('mobile');}, 6000);
	}
	
});



}
/*
     FILE ARCHIVED ON 08:41:01 Mar 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:55:16 Apr 14, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 182.377
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.067
  RedisCDXSource: 1.062
  esindex: 0.007
  LoadShardBlock: 149.013 (3)
  PetaboxLoader3.datanode: 156.05 (4)
  load_resource: 115.058
  PetaboxLoader3.resolve: 99.818
*/