<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <label>&nbsp;|&nbsp;</label>
            <router-link to="/add-post">Add Post</router-link>
        </nav>
        <nav>
            <router-link to="/login">Log in</router-link>
            <router-link to="/signup">Sign up</router-link>
        </nav>
        <div class="dropdown">
            <img onclick="myfunction()" class="dropbtn" src="@/assets/profiil.png" alt="Profiili pilt" 
                width="75" height="75">
            <div id="myDropdown" class="dropdown-content">
                <label>John Doe <br></label>
                <label>johndoe@ut.ee <br> </label>
                <label> logout <br></label>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderTemplate",
}
</script>

