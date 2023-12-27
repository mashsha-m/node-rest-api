import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'

Vue.component('loader', {
    template: `
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="spinner-border" role="status">
            <span class="sr-only"><!--Loading...--></span>
        </div>
    </div>`
})

new Vue({
    el: '#app',
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        // есть смысл разобраться что это
    },
    async mounted() {
        this.loading = true
        const data = await request('/api/contacts')
        const dataPost = await request('/api/contacts', 'POST', {id: 11, name: 'Helovu'})
        console.log(dataPost)
        //тут в существующую переменную засовываем data
        //this.contacts = data
        //или же
        //this.contacts = await request('/api/contacts')

        this.loading = false
    },
    methods: {
        // при отправке методом пост пишем: await request('/api/contacts', 'POST', данные)
        // при удалении данных пишем: await request(`/api/contacts/${id}`, 'DELETE') (id пришло параметром в функцию)
        // при обновлении данных пишем: await request(`/api/contacts/${id}`, 'PUT', {...}) (id пришло параметром в функцию)
        // вторым параметром объект элемента и обновленное значение
    }
})

async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        })

        return await response.json()
    } catch (e) {
        console.warn('Error:', e.message)
    }
}