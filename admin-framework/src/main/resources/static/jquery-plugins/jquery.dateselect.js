(function(a){a.fn.dateselect=function(m){var h=a(this),j=m.selYear,e=m.selMonth,b=m.selDay,i=m.minYear,d=m.maxYear;f();l();function f(){var o=new Date().getFullYear();var n=[d>0?d:o,i>0?i:o-80];c(j,n);c(e,[1,12]);j.change(function(p){k(j.val(),e.val());g()});if(e.size()>0){e.change(function(p){k(j.val(),e.val());g()})}if(b.size()>0){b.change(function(p){g()})}h.change(function(p){l()})}function l(){if(h.val()!=""){var n=h.val().split("-");if(n[0]!=undefined){j.val(n[0])}if(n[1]!=undefined&&e.size()>0){e.val(n[1]);k(j.val(),e.val())}if(n[2]!=undefined&&b.size()>0){b.val(n[2])}if(window.Select2!==undefined){j.select2();e.select2();b.select2()}}}function g(){var n="";if(j.val()!="年"){n+=j.val();if(e.size()>0&&e.val()!="月"){n+="-"+e.val();if(b.size()>0&&b.val()!="日"){n+="-"+b.val()}}}h.val(n)}function k(o,p){if(b.size()==0){return}b.empty().html("<option>日</option>");var n=0;if(o!="年"&&p!="月"){o=parseInt(o);p=parseInt(p);if(p==1||p==3||p==5||p==7||p==8||p==10||p==12){n=31}else{if(p==4||p==6||p==9||p==11){n=30}else{if((o%4==0&&o%100!=0)||(o%400==0)){n=29}else{n=28}}}c(b,[1,n])}if(window.Select2!==undefined){b.select2()}}function c(q,n){if(n[1]>=n[0]){for(var p=n[0];p<=n[1];p++){var r=p<=9?"0"+p:p;var o=a("<option></option>").attr({value:r}).text(r).appendTo(q)}}else{for(var p=n[0];p>=n[1];p--){var r=p<=9?"0"+p:p;var o=a("<option></option>").attr({value:p}).text(p).appendTo(q)}}}}})(jQuery);