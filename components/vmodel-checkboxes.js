Vue.component('vmodel-checkboxes', {
    data() {
        return {
            frameworks : []
        }
    },
    template: `
    <div>
        <h2>Vmodel con Arrays</h2>
        <input type="checkbox" id="vuejs2" value="Vuejs 2" v-model="frameworks" />
        <label for ="vuejs2">Vuejs 2</label>
        <input type="checkbox" id="reactjs" value="ReactJS" v-model="frameworks" />
        <label for ="reactjs">React JS</label>
        <input type="checkbox" id="angular" value="Angular JS" v-model="frameworks" />
        <label for ="angular">Angular JS</label>                
        <p>Frameworks seleccionados : {{ frameworks}}</p>
    </div>
    `

})