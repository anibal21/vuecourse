Vue.component('vmodel',{
    data(){
        return {
            framework: 'Vuejs 2'
        }
    },
    template: `
    <div>
        <h2>trabajando con Vmodel</h2>
        <input v-model="framework"></input>
        <p>El framework escogido es: {{ framework }}</p>
    </div>
    `
})