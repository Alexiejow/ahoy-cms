export const mapApiCategoriesToSelectView = (categories) => {
    return categories.map(c => {
        return {
            value: c.category,
            label: c.category
        }
    })
}