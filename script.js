Vue.createApp({
    data: ()=>({
        title: 'To do list with Vue 3',
        placeholderName: 'Enter your new todo',
        inputValue: '',
        notes: [],
        elements:''
    }),
    methods:{
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNote(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        delNote(i){
            this.notes.splice(i,1)
        },
        delAllNotes(){
            this.notes.splice(0, this.notes.length )
        }
    }
}).mount('#app')