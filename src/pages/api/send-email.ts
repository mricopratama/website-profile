// src/pages/api/send-email.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Ambil API key dari environment variable
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Validasi sederhana
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({ message: 'Semua field harus diisi!' }),
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
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
      return new Response(
        JSON.stringify({ message: 'Gagal mengirim email.', error: error.message }),
        { status: 500 }
      );
    }
    
    // Sukses
    return new Response(
      JSON.stringify({ message: 'Pesan berhasil dikirim!' }),
      { status: 200 }
    );

  } catch (e) {
    const error = e as Error;
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Terjadi kesalahan pada server.', error: error.message }),
      { status: 500 }
    );
  }
};