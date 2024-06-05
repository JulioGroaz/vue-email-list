const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [] // Array per memorizzare le email
        };
    },
    methods: {
        getData() {
            // Creiamo un array di promesse per ottenere 10 email
            const emailPromises = [];
            for (let i = 0; i < 10; i++) {
                emailPromises.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
            }
            
            
            Promise.all(emailPromises)
                .then((responses) => {
                    // Estrarre le email dalle risposte e aggiungerle all'array emails
                    this.emails = responses.map(response => response.data.response);
                })
        }
    },
    created() {
        this.getData();
    }
}).mount('#app');
