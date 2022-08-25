const art_json = JSON.stringify(article_data);
let article_obj = JSON.parse(art_json);

var url = window.location.href
var url_arr = url.split("/")

var url_article_id = (url_arr[url_arr.length - 1].split("."))[0]
url_article_id = url_article_id.split("_")[1]

// If the article code given in the filename dosent match with the article id the page wont load
var json_fliter_article_id = (url_article_id) => {
    for (var i = 0; i < article_obj.article.length; i++) {
        if (article_obj.article[i].article_id == url_article_id) {
            return i;
        }
    }
    return null;
}

// var result = art_json.filter(obj => obj.article[0].article_id == url_article_id);
var json_fliter_artId_index = json_fliter_article_id(url_article_id);

if (json_fliter_artId_index == null) {
    window.location.replace("../../../error.html");
}


// chnage the document title
var doc_title = (url_arr[url_arr.length - 1].split("."))[0]
var doc_title = doc_title.split("_")
var title = doc_title[0][0].toUpperCase() + doc_title[0].substring(1).toLowerCase();
$(document).prop('title', "Academy - " + article_obj.article[json_fliter_artId_index].article_catagory + " -- " + title + "_" + doc_title[1]);