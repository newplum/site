<template>
    <div class="test-container">
        <Menu />
    </div>
</template>

<script>
import Menu from './'
export default {
    components: {
        Menu
    }
}
</script>

<style>
.test-container {
    width: 200px;
    height: 600px;
    border: 1px solid red;
    margin: 0 auto;
    background: #000;
}
</style>