export function PostData(userData) {
    // let BaseURL = 'https://apipaypal.9lessons.info/apipaypal/';
    let BaseURL = 'http://localhost:3001/api/users';

    return new Promise((resolve, reject) => {
        fetch(BaseURL, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}