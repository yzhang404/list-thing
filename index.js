const app = {
    init: function(formSelector){
        this.max = 0
        this.list = document.querySelector(selectors.formSelector)
        document
        .querySelector(init.formSelector)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },

    renderListItem: function(){
        const item = document.createElement('li')
        item.textContent = flick.name
        return item
    },

    handleSubmit: function(ev){
        ev.preventDefault()
        const f = ev.target
        const flick = {
            id: ++ this.max,
            name: f.flickName.value,
        }
        console.log(flick)

        const item = this.renderListItem(flick)
        this.list.appendChild(item)
        f.reset()
    },
    
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
}
    
)