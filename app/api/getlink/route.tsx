
// import axios from 'axios';


export async function GET(req: Request) {
  const link = "https://caleb-d0.netlify.app/notes/2s5s0oltg02uyq4dl3wnshy/"
  return await fetch(link, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  // return new Response(response.text());
}


