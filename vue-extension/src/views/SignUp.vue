<template>
    <div class="resgisterWrapper">
        <div class="sign-up-container">
            <div class="registerLabels">
                <label>Email</label>
                <label>Password</label>
            </div>
        
            <form class="registerForm">
                <input type="email" class="registerInputBox" name="email" required v-model="email">
                <br>
                <input type="password" class="registerInputBox" name="password" required v-model="password">
                <br>
                <button @click="SignUp" class="registerLoginButton">SignUp</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    name: "SignUp",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        SignUp() {
        //console.log("Hello! see tootab") // jh

        var data = {email: this.email, password: this.password};
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: 'include',
          body: JSON.stringify(data)})
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          //this.$router.push("/login")
        })
        .catch((e) => {
          console.log("error")
        });
    },
}
}
</script>