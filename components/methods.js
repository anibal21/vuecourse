Vue.component('methods', {
    data () {
        return {
            name: 'Anibal',
            surname: 'Rodríguez'
        }
    },
    computed: {
        fullName () {
            return `${this.name} ${this.surname}`
        }
    },
    methods: {
        hello(){
            alert(this.fullName)
        }
    },
    template: `
    <div>
        <h2>Ejecutar métodos con Vue JS 2</h2>
        <p @click="hello">Pulsa aquí para ejecutar método hello</p>
    </div>
    `
})