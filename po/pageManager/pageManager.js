class PageManager {

    constructor() {
        this.pages = {};
        this.currentPage = null;
    }

    addPage(pageName, pageObject) {
        this.pages[pageName] = pageObject;
    }

    getPage(pageName) {
        const page = this.pages[pageName];
        if (!page) {
            throw new Error(`Page ${pageName} not found`);
        }
        return page;
    }

    setCurrentPage(pageName) {
        const page = this.getPage(pageName);
        this.currentPage = page;
        console.log(`Current page set to: ${page.name}`);
    }
}

module.exports = new PageManager();
