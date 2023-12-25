<template>
    <div class="wrapperLogin">
        <div class="loginContainer">
            <div class="loginContentBold">
                <label>Welcome to PostIt</label>
            </div>
            <div class="loginBlue">
                <label>Create an account</label>
            </div>
            <div class="loginContent">
                <label>or <br>
                    Please log in
                </label>
            </div>
            <form class="loginForm">
                <input class="inputBox" type="email" name="email" placeholder="Email" required v-model="email">
                <br>
                <input class="inputBox" type="password" name="password" placeholder="Password" required v-model="password"><br>
                <br>
                <button @click="LogIn" class="center" id="submit" >LogIn</button>
            </form>
            <div class="loginBlue">
                <label>Forget password</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        LogIn() {
            var data = {email: this.email, password: this.password};
            fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            credentials: 'include',
            body: JSON.stringify(data)})
            .then((response) => response.json())
            .then(() => {
            console.log(data);
            this.$router.push("/")
            })
            .catch((e) => {
            console.log("error");});
      }
    }
}
</script>