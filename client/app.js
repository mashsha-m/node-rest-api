const App = {
    data() {
        return {
            servers: [],
            name: '',
        }
    },
    async mounted() {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    },
    methods: {
        async deleteEl(id) {
            console.log("id", id)
            fetch(`/api/server/${id}`, {method: 'DELETE'})
            this.servers = this.servers.filter(s => s.id !== id)
        },
        async createServer() {
            console.log(this.name)
            const data = {
                name: this.name,
                status: 'created'
            }
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const newServer = await res.json()
            console.log(newServer)
            this.servers = newServer

        }
    }
}

Vue.createApp(App).mount("#app")