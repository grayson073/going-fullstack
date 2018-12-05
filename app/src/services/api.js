export default {
    getGrapplers() {
        return fetch('/api/grapplers')
            .then(response => response.json());
    }, 

    addGrappler(grappler) {
        return fetch('/api/grapplers', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grappler)
        })
            .then(response => response.json());
    }
};