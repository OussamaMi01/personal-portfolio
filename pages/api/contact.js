import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, service, message } = req.body;

    // Basic validation for required fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, Email, and Message are required fields.' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 587,
        secure: process.env.EMAIL_PORT == 465, // Use 'true' for 465 (SSL), 'false' for 587 (TLS)
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const formattedMessage = message.replace(/\n/g, '<br>');

    // Define the content for the auto-reply email to the client
    const autoReplyContentToClient = `
        Dear ${name},<br><br>
        Thank you for contacting me! I've successfully received your message and appreciate you reaching out.<br><br>
        I'm reviewing your inquiry regarding ${service ? `<b>${service}</b>` : 'your request'} and will get back to you personally within <b>1-2 business days</b>. Your message is important to me, and I look forward to connecting soon.<br><br>
        In the meantime, feel free to explore more of my work on my portfolio:<br>
        <a href="https://yourportfolio.com" style="color: #6366f1; text-decoration: none;">https://yourportfolio.com</a><br><br>
        Best regards,<br>
        Oussama Missaoui
    `;

    try {
        // --- EMAIL 1: Send Contact Inquiry to You (Oussama) ---
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Sender is the client's name and email
            to: process.env.EMAIL_TO, // Your email address
            subject: `New Contact Form Submission: ${name} - ${service || 'General Inquiry'}`, // Subject line
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>New Contact Form Submission Received</title>
                    <style>
                        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f4; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border: 1px solid #e0e0e0; }
                        .header { background-color: #6366f1; padding: 25px 30px; color: #ffffff; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; }
                        .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
                        .content { padding: 30px; color: #4a4a4a; }
                        .content p { margin-bottom: 15px; font-size: 16px; }
                        .content strong { color: #333333; font-weight: 600; }
                        .detail-card { background-color: #f9f9f9; border: 1px solid #eeeeee; border-left: 4px solid #8b5cf6; border-radius: 6px; padding: 20px; margin-bottom: 25px; }
                        .detail-card p { margin: 0 0 10px 0; }
                        .detail-card p:last-child { margin-bottom: 0; }
                        .message-box { background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 20px; font-style: italic; color: #555555; }
                        .footer { text-align: center; padding: 20px 30px; font-size: 13px; color: #888888; border-top: 1px solid #eeeeee; background-color: #fcfcfc; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
                        .footer p { margin: 0; }
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>New Contact Form Submission</h1>
                        </div>
                        <div class="content">
                            <p>Hello Oussama,</p>
                            <p>You have received a new message from your portfolio website's contact form. An automatic acknowledgment has been sent to the client.</p>

                            <div class="detail-card">
                                <p><strong>From:</strong> ${name}</p>
                                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></p>
                                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                                ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
                            </div>

                            <p><strong>Client's Message:</strong></p>
                            <div class="message-box">
                                <p style="margin: 0;">${formattedMessage}</p>
                            </div>
                        </div>
                        <div class="footer">
                            <p>&copy; ${new Date().getFullYear()} Oussama Missaoui. All rights reserved.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        // --- EMAIL 2: Send Auto-Reply to Client ---
        await transporter.sendMail({
            from: `"Oussama Missaoui" <${process.env.EMAIL_USER}>`, // Your sending email address, with your name
            to: email, // Client's email address
            subject: `Thank you for your message, ${name}!`, // Personalized subject for client
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thank You for Your Message</title>
                    <style>
                        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f4; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border: 1px solid #e0e0e0; }
                        .header { background-color: #8b5cf6; /* Purple 500 */ padding: 25px 30px; color: #ffffff; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; }
                        .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
                        .content { padding: 30px; color: #4a4a4a; }
                        .content p { margin-bottom: 15px; font-size: 16px; }
                        .content strong { color: #333333; font-weight: 600; }
                        .footer { text-align: center; padding: 20px 30px; font-size: 13px; color: #888888; border-top: 1px solid #eeeeee; background-color: #fcfcfc; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
                        .footer p { margin: 0; }
                        .link-button { display: inline-block; background-color: #6366f1; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px; margin-top: 15px; }
                        .link-button:hover { background-color: #5a5ceb; }
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Thank You For Your Message!</h1>
                        </div>
                        <div class="content">
                            <p>${autoReplyContentToClient}</p>
                            
                            <p style="text-align: center;">
                                If you have any urgent questions, feel free to reply to this email or use the social links from my portfolio.
                            </p>
                            <p style="text-align: center;">
                                <a href="https://yourportfolio.com" class="link-button">Visit My Portfolio</a>
                            </p>
                        </div>
                        <div class="footer">
                            <p>&copy; ${new Date().getFullYear()} Oussama Missaoui. All rights reserved.</p>
                            <p>Built with passion and code.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        res.status(200).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Error sending contact form email:', error);
        res.status(500).json({ error: 'Failed to send message. Please check server logs.' });
    }
}
