import axios from 'axios';

export function PostData(userData) {

    return new Promise((resolve, reject) => {
        axios.post('/api/users', JSON.stringify(userData))
            .then((response) => console.log(response))
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}