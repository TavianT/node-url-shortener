const about = (req, res) => {
    res.render("pages/about", {title: "About"})
}

module.exports = {
    about
}