export default {
    getCharacters() {
        return fetch('/api/characters')
            .then(response => response.json());
    },
    getCharacter(id) {
        return fetch(`/api/characters/${id}`)
            .then(response => response.json());
    },
    addCharacter(character) {
        return fetch('/api/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
            .then(response => response.json());
    }
};