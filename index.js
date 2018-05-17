const app = {
    init(selectors){
        this.flicks=[]
        this.max = 0
        this.list = document.querySelector(selectors.formSelector)
        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },

    renderListItem(flick){
        const item = document.createElement('li')
        item.dataset.id=flick.id
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
        this.flicks.push(flick)
        const item = this.renderListItem(flick)
        this.list.appendChild(item)
        f.reset()
    },
    
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
})