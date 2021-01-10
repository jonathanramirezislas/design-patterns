function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
  }
  
  function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
      userId: userId
    })
  }
  
  getUsers().then(users => { //get all users
    users.forEach(user => { //with each user 
      getUserPosts(user.id).then(posts => { // get post from each user
        console.log(user.name)
        console.log(posts.length)
      })
    })
  })

  function getFetch(url, params = {}) {
    return axios({
      url: url,
      method: "GET",
      params: params
    }).then(res => res.data)
  }