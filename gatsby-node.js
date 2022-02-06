exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
  
    if (page.path.length > 1) {
      page.context.layout = "full"
      createPage(page)
    }
  }