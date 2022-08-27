const art_json = JSON.stringify(article_data);
let article_obj = JSON.parse(art_json);



var load_article_card = (offset, limit, len) => {
    $(".catagories_page_con").html("")
    for (var i = offset; i < limit; i++) {
        if (i < len) {
            if ((article_obj.article[i].article_id.substr(0, 2)) == "ML") {


                var art_title = article_obj.article[i].article_name
                if (art_title.length >= 50) { //if the content length is greater than 14 then split it and add ...
                    art_title = art_title.substring(0, 50) + "..."
                }

                $(".catagories_page_con").append(`
                    <a class="catagories_page_card_con" href="Machine%20Learning/` + article_obj.article[i].article_catagory.replace(" ", "%20") + `/article_` + article_obj.article[i].article_id + `.html">
                        <div class="catagories_page_card_title">` + art_title + `</div>
                        <div class="catagories_page_card_author">By ` + article_obj.article[i].author + `</div>
                        <div class="catagories_page_card_catagory">` + article_obj.article[i].article_catagory + `</div>

                        <div class="catagories_page_card_article_info">Article ID : ` + article_obj.article[i].article_id + `</div>
                    </a>
                `).show('10000')
            }
        }
    }
}


var art_len = article_obj.article.length
var art_lim = 6
var art_tot_page = Math.ceil(art_len / art_lim)


var pg_num = 1
var offset = (pg_num - 1) * art_lim
// console.log(offset, art_tot_page, art_len)

load_article_card(offset, art_lim, art_len)


var pagination_loader = (pg_num, art_tot_page) => {
    page_arr = []
    if (art_tot_page > 1) {
        if (art_tot_page > 5) {
            page_arr.push('<div class="page_pagination_btn page_pagination_btn_disable">Prev</div>')
            page_arr.push('<div class="page_pagination_num_wrap flexc">')
            for (var count = pg_num; count <= pg_num + 2; count++) {
                if (count == pg_num) page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                else page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
            }
            page_arr.push('<span class="page_pagination_dots">...</span>')
            page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + art_tot_page + '">' + art_tot_page + '</div>')
            page_arr.push('</div>')
            page_arr.push('<div class="page_pagination_btn" data_pg_num="' + (pg_num + 1) + '">Next</div>')

        } else {
            page_arr.push('<div class="page_pagination_btn page_pagination_btn_disable">Prev</div>')
            page_arr.push('<div class="page_pagination_num_wrap flexc">')
            for (var count = 1; count <= art_tot_page; count++) {
                if (count == 1) page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                else page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
            }
            page_arr.push('</div>')
            page_arr.push('<div class="page_pagination_btn" data_pg_num="' + (pg_num + 1) + '">Next</div>')
        }
    }
    return page_arr
}

$(".page_pagination_wrap").html(pagination_loader(pg_num, art_tot_page))


var old_num = 1
var new_num
var pagination_fcn = (n) => {

    var cur_pg = n
    var prv_pg = parseInt(n - 1)
    var nxt_pg = parseInt(n + 1)

    new_num = cur_pg

    var n_page_arr = []
    if (new_num != old_num) {
        // console.log(art_tot_page)
        if (art_tot_page > 5) {
            if (cur_pg == 1) {
                n_page_arr.push('<div class="page_pagination_btn page_pagination_btn_disable">Prev</div>')
                n_page_arr.push('<div class="page_pagination_num_wrap flexc">')
                for (var count = pg_num; count <= pg_num + 2; count++) {
                    if (count == pg_num) n_page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                    else n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                n_page_arr.push('<span class="page_pagination_dots">...</span>')
                n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + art_tot_page + '">' + art_tot_page + '</div>')
                n_page_arr.push('</div>')
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + nxt_pg + '">Next</div>')

            } else if ((art_tot_page - cur_pg) > 4) {
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + (prv_pg) + '">Prev</div>')
                n_page_arr.push('<div class="page_pagination_num_wrap flexc">')
                n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + (cur_pg - 1) + '">' + (cur_pg - 1) + '</div>')
                for (var count = cur_pg; count <= cur_pg + 1; count++) {
                    if (count == cur_pg) n_page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                    else n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                n_page_arr.push('<span class="page_pagination_dots">...</span>')
                n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + art_tot_page + '">' + art_tot_page + '</div>')
                n_page_arr.push('</div>')
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + nxt_pg + '">Next</div>')

            } else if (cur_pg != art_tot_page) {
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + prv_pg + '"">Prev</div>')
                n_page_arr.push('<div class="page_pagination_num_wrap flexc">')
                n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="1">1</div>')
                n_page_arr.push('<span class="page_pagination_dots">...</span>')
                n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + (cur_pg - 1) + '">' + (cur_pg - 1) + '</div>')
                for (var count = cur_pg; count <= cur_pg + 1; count++) {
                    if (count == cur_pg) n_page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                    else n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                n_page_arr.push('</div>')
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + nxt_pg + '">Next</div>')

            } else {
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + prv_pg + '">Prev</div>')
                n_page_arr.push('<div class="page_pagination_num_wrap flexc">')
                n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="1">1</div>')
                n_page_arr.push('<span class="page_pagination_dots">...</span>')
                for (var count = cur_pg - 2; count <= cur_pg; count++) {
                    // console.log(count)
                    if (count == cur_pg) n_page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                    else n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                n_page_arr.push('</div>')
                n_page_arr.push('<div class="page_pagination_btn page_pagination_btn_disable">Next</div>')

            }
        } else {
            if (cur_pg == 1) {
                n_page_arr.push('<div class="page_pagination_btn page_pagination_btn_disable">Prev</div>')
                n_page_arr.push('<div class="page_pagination_num_wrap flexc">')
                for (var count = pg_num; count <= art_tot_page - 1; count++) {
                    if (count == pg_num) n_page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                    else n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + art_tot_page + '">' + art_tot_page + '</div>')
                n_page_arr.push('</div>')
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + nxt_pg + '">Next</div>')
            } else if (cur_pg == art_tot_page) {
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + prv_pg + '">Prev</div>')
                n_page_arr.push('<div class="page_pagination_num_wrap flexc">')
                for (var count = pg_num; count <= art_tot_page; count++) {
                    if (count == art_tot_page) n_page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                    else n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                n_page_arr.push('</div>')
                n_page_arr.push('<div class="page_pagination_btn page_pagination_btn_disable">Next</div>')
            } else {
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + prv_pg + '">Prev</div>')
                n_page_arr.push('<div class="page_pagination_num_wrap flexc">')
                for (var count = 1; count < cur_pg; count++) {
                    console.log(count, nxt_pg, prv_pg)
                    n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                for (var count = cur_pg; count <= art_tot_page; count++) {
                    if (count == cur_pg) n_page_arr.push('<div class="page_pagination_num page_pagination_num_active flexc" data_pg_num="' + count + '">' + count + '</div>')
                    else n_page_arr.push('<div class="page_pagination_num flexc" data_pg_num="' + count + '">' + count + '</div>')
                }
                n_page_arr.push('</div>')
                n_page_arr.push('<div class="page_pagination_btn" data_pg_num="' + nxt_pg + '">Next</div>')
            }
        }

        return n_page_arr
    }

}




$(document).on("click", (e) => {
    if ($(e.target).hasClass("page_pagination_num") || $(e.target).hasClass("page_pagination_btn") && !($(e.target).hasClass("page_pagination_btn_disable"))) {
        var n = parseInt($(e.target).attr('data_pg_num'))
        var offset = (n - 1) * art_lim
        var limit = (offset + art_lim)

        // console.log(n)
        load_article_card(offset, limit, art_len)
        $(".page_pagination_wrap").html(pagination_fcn(n))
        old_num = new_num
    }


})