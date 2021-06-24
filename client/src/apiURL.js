const host = process.env.NODE_ENV;

export default { 
    url: host === 'production' ? 'http://localhost:3001' : 'https://dacin-onepage.herokuapp.com'
}