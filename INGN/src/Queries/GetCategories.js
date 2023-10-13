export const GetAllCategories = `
query AllCategories($category_contains: String = "") {
  newsfeeds(orderBy: date_DESC, where: {category_contains: $category_contains}) {
    category
    id
    title
    description
    date
    author
    image {
      url
    }
    imagedescription
    content {
      html
    }
  }
}
`;
