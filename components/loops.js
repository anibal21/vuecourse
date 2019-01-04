Vue.component('loops',{
    data(){
        return{
            frameworks: [
                {id : 1, name: 'Vuejs 2'},
                {id : 2, name: 'Reactjs'},
                {id : 3, name: 'Ember'},                                
                {id : 4, name: 'Adonisjs'},
                {id : 5, name: 'Angular'},
                {id : 6, name: 'Laravel'},                                
            ]
        }
    },
    template: `
    <div>
        <h2>bucles con v-for</h2>
        <ul>
            <li v-for="framework in frameworks">
                {{framework.name}}
            </li>    
        </ul>
    </div>`
})