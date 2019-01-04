Vue.component('child-methods',{
    data(){
        return{
            cmpName: 'Child data CMP'
        }
    },
    methods: {
        showCmpName(){
            console.log(this.cmpName);
        }
    },
    template: `
    <div>
        <h2>Acceso a mètodos del cmp hijo desde el cmp padre</h2>
    </div>
    `
})