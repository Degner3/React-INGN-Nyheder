export const GetAllNews = `
query AllNews {
  newsfeeds(orderBy: date_DESC, first: 30) {
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
  }
}
`;