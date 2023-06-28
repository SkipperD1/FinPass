<template>
    <div>
        <h1>FinPass</h1>
    </div>
    <!-- <div class="btn">
        <router-link to="/onboarding"><button>Sign In</button></router-link>
    </div> -->
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*{
    margin: 0 auto;
    height: 100vh;
    background-color: #053fb4;
}
h1{
    color: white;
    text-align: center;
    padding-top: 20%;
}
button{
    width: 220px;
    background: white;
    text-align: center;
    color: #053fb4;
    border: 0;
    padding: 10px 20px;
    border-radius: 20px;
    justify-content: center;
}
.btn{text-align: center;
}

@media only screen and (max-width: 768px) {
    h1{
        padding-top: 70%;
    }
}
</style>