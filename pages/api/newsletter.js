import { MongoClient } from 'mongodb';

function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://giorgi-firebasebetterrr:gorgiscool314@cluster0.rdqjyia.mongodb.net/events?retryWrites=true&w=majority'
  );
  return client;
}


function insertDocument(client, document) {
 const db = client.db();
  await db.collection('newsletter').insertOne({ email: userEmail });
}



async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;


    try { 
      const client = await connectDatabase();


    }catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    }catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });   
    }


 

   
    await db.collection('newsletter').insertOne({ email: userEmail });
  
  
  client.close();
    
    console.log('Registered email:', userEmail);
    res.status(201).json({ message: 'Successfully registered email!' });
  }
}

    // Here you could add code to store the email in a database or send it to a newsletter service

export default handler;