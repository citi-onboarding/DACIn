const host = process.env.NODE_ENV === 'production';

export default { 
    url: host ? 'https://dacin-onepage.herokuapp.com' : 'http://localhost:3001'
}