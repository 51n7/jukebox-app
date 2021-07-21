// import fetch from 'isomorphic-unfetch';
// import useSWR from 'swr';

export default (req, res) => {
  if (req.method === 'POST') {

    // login
    fetch(`${process.env.BASE_URL}/api/get_token?email=${req.body.email}&password=${req.body.password}`)
      .then( r => r.json() )
      .then( data => {
        res.status(200).json(data);
      }).catch( error => {
        res.json({error: true, message: 'auth failed'});
        // res.status(500).json({error: true, message: 'Auth Failed'});
      });
    
  } else {

    // handle any other HTTP method
    res.statusCode = 401;
    res.end();
  }
};