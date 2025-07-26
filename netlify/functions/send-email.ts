import { Handler, HandlerEvent } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Semua field harus diisi!' }),
      };
    }

    const { error } = await resend.emails.send({
      from: 'Website Pribadi <onboarding@resend.dev>', 
      to: 'mricopratama13@gmail.com',
      subject: `Pesan dari Form Kontak: ${subject}`,
      html: `<p>Anda menerima pesan dari:</p>
             <p>Nama: ${name}</p>
             <p>Email: ${email}</p>
             <p>Pesan:</p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error({ error });
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Gagal mengirim email.', error: error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Pesan berhasil dikirim!' }),
    };

  } catch (e) {
    const error = e as Error;
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Terjadi kesalahan pada server.', error: error.message }),
    };
  }
};

export { handler };