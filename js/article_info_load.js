var breadcrumb_arr = ['Home']
for (var i = 0; i < url_arr.length; i++) {
    if (i > 3 && i != url_arr.length - 1 && i != url_arr.length - 2) breadcrumb_arr.push(url_arr[i].replace("%20", " "))
    if (i == url_arr.length - 2 && i != url_arr.length - 1) {}
    if (i == url_arr.length - 1) breadcrumb_arr.push((url_arr[i].split("."))[0])
}


for (var k = 0; k < breadcrumb_arr.length; k++) {
    if (k != breadcrumb_arr.length - 1)
        $(".page_header_breadcrumb_con").append('<a class="page_header_breadcrumb" href="">' + breadcrumb_arr[k] + '</a> / ')
    else
        $(".page_header_breadcrumb_con").append('<a class="page_header_breadcrumb page_header_breadcrumb_active">' + breadcrumb_arr[k] + '</a>')

}


$(".page_header_con>h1").text(article_obj.article[json_fliter_artId_index].article_catagory)


$(".page_topic_header").text(article_obj.article[json_fliter_artId_index].article_name)
$(".page_article_info_topic_text").text(article_obj.article[json_fliter_artId_index].article_name)

$(".page_article_id_topic_title").text("Article ID: " + article_obj.article[json_fliter_artId_index].article_id)
$(".page_article_id_pubDate").text("Published on: " + article_obj.article[json_fliter_artId_index].article_published_date)

$(".page_article_info_tag_con").html("")
for (var j = 0; j < article_obj.article[json_fliter_artId_index].article_tags.length; j++) {
    $(".page_article_info_tag_con").append('<a href="" class="page_article_info_tag">' + article_obj.article[json_fliter_artId_index].article_tags[j] + '</a>')
}

$(".page_article_info_author_name").html(article_obj.article[json_fliter_artId_index].author + ' <img src="../../../assests/author/' + article_obj.article[json_fliter_artId_index].author_image_name + '">')
$(".page_author_name").html('by ' + article_obj.article[json_fliter_artId_index].author + ' <img src="../../../assests/author/' + article_obj.article[json_fliter_artId_index].author_image_name + '" class="page_author_img">')