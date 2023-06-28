<template>
    <div>
        <h5>{{ name }}</h5>
        <h2>{{ title }}</h2>
    </div>

    <div class="formBody">
       <form action="">
        <input type="email" placeholder="Email" required v-model="email">
        <input type="password" placeholder="Password" required v-model="password">
       </form>
    </div>

    <div class="submit">
        <router-link to="/onboarding"><button>Back</button></router-link>
        <button>Sign In</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                name: 'FinPass',
                title: 'Sign In'
            }
        },
    }
</script>

<style scoped>
h5{
    text-align: center;
    color: #053fb4;
    padding-top: 150px;
}
h2{
    color: #053fb4;
    text-align: center;
    padding-top: 40px;
}
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
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
}
.submit{text-align: center;}


@media all and (max-width: 400px){
    h5{
        text-align: center;
    }
    h2{
        text-align: center;
    }
    form{
        width: 220px;
        align-items: center;
        align-content: center;
    }
    input{
        width: 250px;
        align-items: center;
        align-content: center;
    }
    h5{
        padding-top: 100px;
    }
    h2{
        padding-top: 20px;
    }
    button{
        width: 250px;
    }
    .formBody{
        align-items: center;
        align-content: center;
        text-align: center;
        justify-content: center;
    }
}
</style>