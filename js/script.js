const { createApp } = Vue;
createApp({
    data() {
        return{
            emails:[]
        }

    },
    methods:{
        getData() {
            const emailPromises = [];
            for (let i = 0; i < 10; i++) {
                emailPromises.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
            }
            Promise.all(emailPromises)
            .then((responses) => {
                // Estrarre le email dalle risposte e aggiungerle all'array emails
                responses.forEach(response => {
                    this.emails.push(response.data.response);
                });
            })
        }

    },
    create(){
        this.getData();
        }
}).mount('#app');