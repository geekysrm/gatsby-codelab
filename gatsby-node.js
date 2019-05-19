const path = require('path')
const fs = require('fs')

exports.createPages = async({actions}) => {
    const data = JSON.parse(
        fs.readFileSync('src/data/programs.json')
    )
    const blogPostTemplate = path.resolve('src/templates/template.js')

    data.pages.forEach((item) => {
        console.log(item)
        createPage({
            path: item.slug,
            component:blogPostTemplate,
            context: item
        })
    })
}