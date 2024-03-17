/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

// function popularPostsIds(posts, minimalComentsQty) {
//   const popularIds = posts.reduce((accumulator, currentPost) => {
//     if (currentPost.comments >= minimalComentsQty) {
//       accumulator.push(currentPost.postId)
//     }
//     return accumulator
//   }, [])

//   return popularIds
// }

const popularPostsIds = (posts, minimalCommentsQty) =>
  posts.reduce(
    (accumulator, post) =>
      post.comments >= minimalCommentsQty
        ? [...accumulator, post.postId]
        : accumulator,
    []
  )

const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []
