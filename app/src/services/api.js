export default {
    getGrapplers() {
        return fetch('/api/data/grapplers')
            .then(response => response.json());
    },
    getGrappler(id) {
        return fetch(`/api/data/grapplers/${id}`)
            .then (response => response.json());
    },

    addGrappler(grappler) {
        return fetch('/api/data/grapplers', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grappler)
        })
            .then(response => response.json());
    }
};