<template>
    <div class="container">
        <h1>hello</h1>
    </div>
</template>

<script>
import Chuck from '../services/ChuckService'

export default {
    created() {
        Chuck.getRandomJoke()
            .then((response) => {
               console.log(response);
               
                
            })
    }
}
</script>

<style>

</style>
