Vue.component('tableInfo', {
	template: 
    `<div class="table">

        <form class="items" @submit.prevent="onSubmit" >
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" placeholder="Name">

            <label for="practice">Practice:</label>
            <input type="number" name="practice" id="practice" v-model="practice">

            <label for="competitive">Competitive:</label>
            <input type="number" name="competitive" id="competitive" v-model="competitive">

            <p>
            <input type="submit" value="Submit" >  
            </p> 

        </form>

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

    </div>`,
data () {
    return {
        name: null,
        practice: null,
        competitive: null,
        tableInformation: [],
        errors: []
    }
},
methods: {
    onSubmit() {
        if(this.name && this.practice && this.competitive) {
            var userInformation = {
                name: this.name,
                practice: this.practice,
                competitive: this.competitive
            }
            this.$emit('information-sent', userInformation)
            this.name = null
            this.practice = null
            this.competitive = null
        } else {
            if(!this.name) this.errors.push("Name required.")
            if(!this.practice) this.errors.push("Review required.")
            if(!this.competitive) this.errors.push("Rating required.")
    }},

    addInformation(userInformation) {
        this.tableInformation.push(userInformation)
    }
}

})

var app = new Vue({
    el: '#app'
  })