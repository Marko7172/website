<template>
    <div class="post-header">
        <img src="@/assets/profiil.png" alt="Profiili pilt" width="40" height="40">
        <p class="post-date">{{ createTime }}</p>
    </div>
    <div class="post-description">
        <h2>{{ postHeader }}</h2>
        <p>{{ postContent }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Post',
  props: {
    id: Number,
    postHeader: String,
    postContent: String,
    createTime: String,
  },
  computed: {
    ...mapGetters(['postPicture'])
  }
}

</script>


