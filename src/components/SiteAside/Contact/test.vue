<template>
    <div class="test-container">
        <Contact />
    </div>
</template>

<script>
import Contact from './'
export default {
    components: {
        Contact
    }
}
</script>

<style>
.test-container {
    width: 200px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
    background: #000;
    position: relative;
}
</style>