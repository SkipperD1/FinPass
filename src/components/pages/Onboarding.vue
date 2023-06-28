<template>
    <div>
        <h4>{{ title }}</h4>
        <router-link to="/"><h1>{{ name }}</h1></router-link>
        <p>{{ note1 }}<br/> {{ note2 }}</p>
    </div>
    <div class="submit">
        <router-link to="/signIn"><button>Sign In</button></router-link>
        <router-link to="/signUp"><button>Sign Up</button></router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'FinPass KYC',
                title: 'Welcome aboard to',
                note1: 'We hold the key to your financial security, anywhere, any day.',
                note2: 'You are secured with us'
            }
        },
    }
</script>

<style scoped>
h1{
    text-align: center;
    color: #053fb4;
    padding-top: 10px;
    text-decoration: none;
    
}
h4{
    text-align: center;
    color: #053fb4;
    padding-top: 130px;
}
p{
    text-align: center;
    color: #053fb4;
    padding: 30px;

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
.submit{text-align: center;
}
</style>