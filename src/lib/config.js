// export const server_url = 'https://api.binstd.com';
let server_url = 'https://api.binstd.com';
if (process.env.NODE_ENV === 'production') {
    server_url = 'https://api.binstd.com';
} else {
    server_url = 'http://127.0.0.1:3000';
}

console.log('server_url:',server_url);
export {server_url};
