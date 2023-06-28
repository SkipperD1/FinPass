<template>
    <div>
        <h5>{{ name }}</h5>
        <h2>{{ title }}</h2>
        <p>{{ page }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'FinePass',
                title: 'Congratulaions!',
                page: 'You have registered successfully'
            }
        },
    }
</script>

<style scoped>
h5{
    text-align: center;
    color: #053fb4;
    padding-top: 100px;
}
h2{
    color: #053fb4;
    text-align: center;
    padding-top: 20px;
}
p{
    color: #011337;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 60px;
}
</style>