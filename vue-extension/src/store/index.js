import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    // Post list in the state
    posts: [
        {
          id: 1,
          userProfilePicture: "",
          createTime: "Oct 22, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
        id: 2,
        userProfilePicture: "",
        createTime: "Oct 22, 2022",
        postPicture: "images/skunk.jpg",
        postHeader: "Hello! 2",
        postContent: "Post content (description) ",
        likes: 0
    },
    {
      id: 3,
      userProfilePicture: "",
      createTime: "Oct 22, 2022",
      postPicture: "images/skunk.jpg",
      postHeader: "Hello! 3",
      postContent: "Post content (description) ",
      likes: 0
  },
    ]
  },
  getters: {
    postPicture: (state) => state.postPicture,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
