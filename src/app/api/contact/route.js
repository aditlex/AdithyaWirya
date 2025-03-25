export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { 
        status: 400 
      });
    }

    return new Response(JSON.stringify({ message: "Message sent successfully!" }), { 
      status: 200 
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { 
      status: 500 
    });
  }
}
