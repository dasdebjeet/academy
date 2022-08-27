var breadcrumb_links = document.querySelectorAll(".page_header_breadcrumb")
for (const breadcrumb_link of breadcrumb_links) {
    breadcrumb_link.addEventListener('click', (e) => {
        e.preventDefault()
        var link = $(breadcrumb_link).text()
        link = link.toLowerCase().replace(" ", "")
        // console.log(link)

        if (link == "catagories") {
            window.location.replace("../../../catagories.html");
        } else if (link == "home") {
            window.location.replace("../../../index.html");
        } else {
            window.location.replace("../../" + link + ".html");
        }
    })
}