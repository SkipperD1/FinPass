<template>
    <div>
        <h5>{{ name }}</h5>
        <h2>{{ title }}</h2>
        <p>{{ page }}</p>
    </div>
    <div>
        <select name="address" class="id">
            <option value="" class="value">Proof of Address</option>
            <option value="" class="value">Utility bills</option>
            <option value="" class="value">Bank statement</option>
            <option value="" class="value">Lease agreement</option>
        </select>
        <input type="text" placeholder="Enter number">
    </div>
    <div class="submit">
        <router-link to="/signUp1"><button>Back</button></router-link>
        <router-link to="/signUp3"><button>Next</button></router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'FinePass',
                title: 'Sign Up',
                page: 'Proof of Address'
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
.id{
    width: 350px;
    padding: 10px 6px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    margin-left: 35em;
    color: #737373;
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