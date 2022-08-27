var breadcrumb_links = document.querySelectorAll(".page_header_breadcrumb")
for (const breadcrumb_link of breadcrumb_links) {
    breadcrumb_link.addEventListener('click', (e) => {
        e.preventDefault()
        var link = $(breadcrumb_link).text()
        var link_arr = link.split(" ")

        if (breadcrumb_arr[breadcrumb_arr.length - 1] != link) {
            for (var i = 0; i < link_arr.length; i++) {
                if (i == 0) link = link_arr[i].toLowerCase()
                else link += link_arr[i]
            }


            if (link == "catagories") {
                window.location.replace("../../../catagories.html");
            } else if (link == "home") {
                window.location.replace("../../../index.html");
            } else {
                window.location.replace("../../" + link + ".html");
            }
        }


    })
}