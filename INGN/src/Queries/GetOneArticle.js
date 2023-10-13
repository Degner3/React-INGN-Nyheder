export const GetOneArticle = `
query OneArticle($id: ID) {
    newsfeed(where: {id: $id}) {
      image {
        url
      }
      imagedescription
      title
      description
      date
      author
      content {
        html
      }
    }
}`;
