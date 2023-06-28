<template>
    <div>
        <h5>{{ name }}</h5>
        <h2>{{ title }}</h2>
        <p>{{ page }}</p>
    </div>
    <div>
        <input type="text" placeholder="Passport Number" required v-model="text">
        <input type="text" placeholder="License Number" required v-model="text">
        <input type="text" placeholder="ID" required v-model="text">
    </div>
    <div class="submit">
        <router-link to="/signUp"><button>Back</button></router-link>
        <router-link to="/signUp2"><button>Next</button></router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'FinePass',
                title: 'Sign Up',
                page: 'Proof of Identity'
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
    color: #053fb4;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 60px;
}
input{
    display: block;
    width: 350px;
    padding: 10px 6px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #aaa;
}
button{
    width: 150px;
    background: #053fb4;
    text-align: center;
    color: white;
    border: 0;
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 10px;
    margin-top: 60px;
}
.submit{text-align: center;
}
</style>