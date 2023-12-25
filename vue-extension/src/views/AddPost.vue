<template>
    <body>
        <div class="add-post-container">
            <div class="add-post-wrapper">
                <div class="add-post-contents">
                    <div id="add-post-body">
                        <textarea id="title" name="title" cols="25" rows="1" placeholder="title" v-model="title" ></textarea>
                        <h2>post Body</h2>
                        <textarea id="post-text-input-form" name="text form" rows="15" cols="45" v-model="body">Textarea</textarea>
                    </div>
                    <div id="add-post-submit">
                        <button class="submit-post-button" type="button" @click="addPost">Create Post</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    addPost() {
      const currentdate = new Date()
      const newDate = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
      const payload = {
        title: this.title,
        body: this.body,
        date: newDate,
      };
      console.log(payload)
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      .then((response) => {
        console.log(response.data);
        //this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>