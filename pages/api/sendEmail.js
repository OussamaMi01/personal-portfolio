import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method Not Allowed'
        });
    }

    const { name, email, subject, message } = req.body;

    // Enhanced validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            error: 'All fields are required.'
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a valid email address.'
        });
    }

    // Create transporter with better error handling
    let transporter;
    try {
        transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.EMAIL_PORT) || 587,
            secure: parseInt(process.env.EMAIL_PORT) === 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Verify connection
        await transporter.verify();
        console.log('✅ Email server connection verified');
    } catch (error) {
        console.error('❌ Email configuration error:', error);
        return res.status(500).json({
            success: false,
            error: 'Email service configuration error. Please check your environment variables.'
        });
    }

    const formattedMessage = message.replace(/\n/g, '<br>');
    const currentYear = new Date().getFullYear();
    const portfolioUrl = process.env.PORTFOLIO_URL || 'https://yourportfolio.com';

    try {
        // --- EMAIL 1: Send notification to YOU (Oussama) ---
        const yourEmail = process.env.EMAIL_TO || process.env.EMAIL_USER;

        if (!yourEmail) {
            throw new Error('No recipient email configured for notifications.');
        }

        console.log('📧 Sending notification email to YOU:', yourEmail);

        const notificationPromise = transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            replyTo: email, // So you can reply directly to the client
            to: yourEmail, // This goes to YOU (Oussama)
            subject: `🎯 New Project Inquiry: ${subject} - From ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; background: #f8fafc; }
                        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                        .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 30px; color: white; text-align: center; }
                        .content { padding: 30px; }
                        .info-card { background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 4px solid #6366f1; }
                        .message-box { background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
                        .footer { text-align: center; padding: 20px; background: #f1f5f9; color: #64748b; }
                        .btn { display: inline-block; padding: 12px 24px; background: #6366f1; color: white; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚀 New Project Inquiry</h1>
                            <p>From your portfolio website</p>
                        </div>
                        <div class="content">
                            <div class="info-card">
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Project Type:</strong> ${subject}</p>
                                <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
                            </div>
                            <div class="message-box">
                                <h3>Client's Message:</h3>
                                <p>${formattedMessage}</p>
                            </div>
                            <div style="text-align: center; margin-top: 30px;">
                                <a href="mailto:${email}" class="btn">📧 Reply to Client</a>
                                <a href="${portfolioUrl}" class="btn" style="background: #8b5cf6;">🌐 View Portfolio</a>
                            </div>
                        </div>
                        <div class="footer">
                            <p>© ${currentYear} Oussama Missaoui - Full Stack Developer</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        // --- EMAIL 2: Send auto-reply to CLIENT (person who filled the form) ---
        console.log('📧 Sending auto-reply email to CLIENT:', email);

        const autoReplyPromise = transporter.sendMail({
            from: `"Oussama Missaoui" <${process.env.EMAIL_USER}>`,
            to: email, // This goes to the CLIENT who filled the form
            subject: `Thank you for your inquiry, ${name}!`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
                        .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 40px; color: white; text-align: center; }
                        .content { padding: 40px; }
                        .steps { display: grid; gap: 15px; margin: 30px 0; }
                        .step { display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 10px; }
                        .step-number { width: 30px; height: 30px; background: #6366f1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
                        .contact-info { background: #f0f9ff; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #6366f1; }
                        .footer { text-align: center; padding: 30px; background: #1e293b; color: #94a3b8; }
                        .btn { display: inline-block; padding: 15px 30px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; text-decoration: none; border-radius: 10px; font-weight: 600; margin: 10px 5px; transition: transform 0.2s; }
                        .btn:hover { transform: translateY(-2px); }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0; font-size: 2.5em;">✨ Thank You, ${name}!</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your project inquiry has been received</p>
                        </div>
                        <div class="content">
                            <p style="font-size: 1.1em; color: #374151; line-height: 1.6;">
                                Thank you for reaching out regarding <strong>${subject}</strong>! I've received your message and I'm excited to learn more about your project.
                            </p>

                            <div class="steps">
                                <div class="step">
                                    <div class="step-number">1</div>
                                    <div>I'll review your project requirements carefully</div>
                                </div>
                                <div class="step">
                                    <div class="step-number">2</div>
                                    <div>Provide initial thoughts and questions</div>
                                </div>
                                <div class="step">
                                    <div class="step-number">3</div>
                                    <div>Get back to you within <strong>24 hours</strong></div>
                                </div>
                            </div>

                            <div class="contact-info">
                                <h3 style="color: #1e293b; margin-top: 0;">For urgent matters:</h3>
                                <p>📧 <strong>Email:</strong> oussama.missaoui.it@gmail.com</p>
                                <p>📱 <strong>WhatsApp:</strong> +216 23 257 784</p>
                                <p>✈️ <strong>Telegram:</strong> @Oussema_missaoui</p>
                            </div>

                            <div style="text-align: center; margin-top: 40px;">
                                <a href="${portfolioUrl}" class="btn">🚀 View My Portfolio</a>
                                <a href="https://wa.me/+21623257784" class="btn" style="background: linear-gradient(135deg, #10b981, #059669);">💬 Chat on WhatsApp</a>
                            </div>
                        </div>
                        <div class="footer">
                            <p style="margin: 0;">© ${currentYear} Oussama Missaoui - Full Stack Developer & AI Engineer</p>
                            <p style="margin: 10px 0 0 0; font-size: 0.9em;">Building digital experiences with passion and innovation</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        // Wait for both emails to be sent
        await Promise.all([notificationPromise, autoReplyPromise]);

        console.log('✅ Both emails sent successfully:');
        console.log('   - Notification sent to:', yourEmail);
        console.log('   - Auto-reply sent to:', email);

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully! I\'ll get back to you within 24 hours.'
        });
    } catch (error) {
        console.error('❌ Error sending email:', error);

        // More specific error messages
        let errorMessage = 'Failed to send email. Please try again or contact me directly at oussama.missaoui.it@gmail.com';

        if (error.code === 'EENVELOPE') {
            if (error.command === 'API') {
                errorMessage = 'Email configuration error. Please check recipient email settings.';
            }
        } else if (error.code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Please check email credentials.';
        }

        res.status(500).json({
            success: false,
            error: errorMessage
        });
    }
}