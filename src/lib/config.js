// export const server_url = 'https://api.binstd.com';
let server_url = 'https://api.binstd.com';
if (process.env.NODE_ENV === 'dev') {
    server_url = 'https://binstd.herokuapp.com';
    // server_url = 'http://127.0.0.1:3000'
} else {
    // server_url = 'https://binstd.herokuapp.com';
    server_url = 'https://api.binstd.com';
}

console.log('server_url:',server_url);
export {server_url};
