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

    // Security check: Basic input sanitization
    const sanitizeInput = (input) => {
        return input.replace(/[<>]/g, '').trim();
    };

    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

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

    const formattedMessage = sanitizedMessage.replace(/\n/g, '<br>');
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
            subject: `🔐 New Inquiry from ${sanitizedName}: ${sanitizedSubject}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; background: #0f172a; }
                        .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 1px solid #334155; }
                        .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 30px; color: white; text-align: center; }
                        .security-badge { background: #10b981; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8em; display: inline-block; margin-left: 10px; }
                        .content { padding: 30px; color: #cbd5e1; }
                        .info-card { background: #1e293b; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 4px solid #6366f1; }
                        .message-box { background: #1e293b; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #334155; }
                        .footer { text-align: center; padding: 20px; background: #1e293b; color: #94a3b8; border-top: 1px solid #334155; }
                        .btn { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; text-decoration: none; border-radius: 6px; margin: 10px 5px; border: none; font-weight: 600; }
                        .security-note { background: #064e3b; color: #a7f3d0; padding: 10px; border-radius: 6px; margin: 15px 0; font-size: 0.9em; border-left: 4px solid #10b981; }
                        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
                        .skill-tag { background: #374151; color: #d1d5db; padding: 4px 12px; border-radius: 15px; font-size: 0.85em; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">🔐 New Security/Development Inquiry</h1>
                            <p>From portfolio contact form</p>
                        </div>
                        <div class="content">
                            <div style="text-align: center; margin-bottom: 20px;">
                                <span class="security-badge">Computer Science B.S.</span>
                                <span class="security-badge" style="background: #3b82f6;">Cybersecurity M.S. Student</span>
                            </div>
                            
                            <div class="info-card">
                                <h3 style="color: #60a5fa; margin-top: 0;">📋 Inquiry Details</h3>
                                <p><strong>👤 Name:</strong> ${sanitizedName}</p>
                                <p><strong>📧 Email:</strong> ${email}</p>
                                <p><strong>🎯 Subject:</strong> ${sanitizedSubject}</p>
                                <p><strong>⏰ Received:</strong> ${new Date().toLocaleString()}</p>
                                <p><strong>📍 IP Address:</strong> ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}</p>
                            </div>
                            
                            <div class="message-box">
                                <h3 style="color: #60a5fa;">📝 Client Message:</h3>
                                <p>${formattedMessage}</p>
                            </div>
                            
                            <div class="security-note">
                                <strong>💡 My Expertise Match:</strong>
                                <div class="skill-tags">
                                    <span class="skill-tag">Full-Stack Development</span>
                                    <span class="skill-tag">Application Security</span>
                                    <span class="skill-tag">Secure Coding</span>
                                    <span class="skill-tag">Cybersecurity</span>
                                    <span class="skill-tag">DevSecOps</span>
                                </div>
                            </div>
                            
                            <div style="text-align: center; margin-top: 30px;">
                                <a href="mailto:${email}" class="btn">📧 Reply to Client</a>
                                <a href="${portfolioUrl}" class="btn" style="background: linear-gradient(135deg, #10b981, #059669);">🔍 View Portfolio</a>
                                <a href="https://linkedin.com/in/oussama-missaoui-a48589246" class="btn" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">💼 LinkedIn Profile</a>
                            </div>
                        </div>
                        <div class="footer">
                            <p>© ${currentYear} Oussama Missaoui | Computer Science Graduate & Cybersecurity Master's Student</p>
                            <p style="font-size: 0.9em; margin-top: 10px;">Building secure, resilient software systems</p>
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
            subject: `🔐 Inquiry Received: ${sanitizedSubject} | Oussama Missaoui`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); }
                        .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid #334155; }
                        .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 40px; color: white; text-align: center; position: relative; }
                        .security-shield { position: absolute; top: 20px; right: 20px; font-size: 2em; }
                        .content { padding: 40px; color: #cbd5e1; }
                        .steps { display: grid; gap: 15px; margin: 30px 0; }
                        .step { display: flex; align-items: center; gap: 15px; padding: 15px; background: #1e293b; border-radius: 10px; border: 1px solid #334155; }
                        .step-number { width: 32px; height: 32px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
                        .contact-info { background: #1e293b; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #6366f1; border: 1px solid #334155; }
                        .expertise-section { background: #1e293b; padding: 20px; border-radius: 10px; margin: 25px 0; border: 1px solid #334155; }
                        .skill-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 15px; }
                        .skill-item { background: #374151; padding: 8px 12px; border-radius: 6px; font-size: 0.9em; }
                        .footer { text-align: center; padding: 30px; background: #1e293b; color: #94a3b8; border-top: 1px solid #334155; }
                        .btn { display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; text-decoration: none; border-radius: 10px; font-weight: 600; margin: 10px 5px; transition: transform 0.2s, box-shadow 0.2s; border: none; }
                        .btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3); }
                        .security-badge { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.9em; display: inline-block; margin: 5px; font-weight: 600; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <div class="security-shield">🛡️</div>
                            <h1 style="margin: 0; font-size: 2.5em;">Thank You, ${sanitizedName}!</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your inquiry has been securely received</p>
                            <div style="margin-top: 15px;">
                                <span class="security-badge">Secure Connection</span>
                                <span class="security-badge" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">Encrypted</span>
                            </div>
                        </div>
                        <div class="content">
                            <p style="font-size: 1.1em; line-height: 1.6; color: #e2e8f0;">
                                Thank you for reaching out regarding <strong style="color: #60a5fa;">${sanitizedSubject}</strong>! I've received your inquiry and I'm excited to discuss how my expertise in both <strong>software development</strong> and <strong>cybersecurity</strong> can benefit your project.
                            </p>

                            <div class="expertise-section">
                                <h3 style="color: #60a5fa; margin-top: 0;">🎯 My Expertise</h3>
                                <p>As a <strong>Computer Science graduate</strong> currently pursuing a <strong>Master's in Cybersecurity</strong>, I offer a unique combination of technical skills:</p>
                                <div class="skill-grid">
                                    <div class="skill-item">Full-Stack Development</div>
                                    <div class="skill-item">Application Security</div>
                                    <div class="skill-item">Secure Coding</div>
                                    <div class="skill-item">Cybersecurity Principles</div>
                                    <div class="skill-item">DevSecOps</div>
                                    <div class="skill-item">Threat Analysis</div>
                                </div>
                            </div>

                            <div class="steps">
                                <div class="step">
                                    <div class="step-number">1</div>
                                    <div>Review your requirements & security considerations</div>
                                </div>
                                <div class="step">
                                    <div class="step-number">2</div>
                                    <div>Analyze security implications and provide recommendations</div>
                                </div>
                                <div class="step">
                                    <div class="step-number">3</div>
                                    <div>Get back to you within <strong>24 hours</strong> with detailed feedback</div>
                                </div>
                            </div>

                            <div class="contact-info">
                                <h3 style="color: #60a5fa; margin-top: 0;">📞 Direct Contact</h3>
                                <p>📧 <strong>Email:</strong> oussama.missaoui.it@gmail.com</p>
                                <p>📱 <strong>WhatsApp:</strong> +216 23 257 784</p>
                                <p>🔐 <strong>Telegram (Secure):</strong> @Oussema_missaoui</p>
                                <p>💼 <strong>LinkedIn:</strong> linkedin.com/in/oussama-missaoui-a48589246</p>
                            </div>

                            <div style="text-align: center; margin-top: 40px;">
                                <a href="${portfolioUrl}" class="btn">🚀 View My Portfolio</a>
                                <a href="https://wa.me/+21623257784" class="btn" style="background: linear-gradient(135deg, #10b981, #059669);">💬 Secure WhatsApp Chat</a>
                                <a href="https://github.com/OussamaMi01" class="btn" style="background: linear-gradient(135deg, #6b7280, #374151);">👨‍💻 GitHub Projects</a>
                            </div>
                        </div>
                        <div class="footer">
                            <p style="margin: 0; font-size: 0.9em;">© ${currentYear} Oussama Missaoui | Computer Science Graduate & Cybersecurity Master's Student</p>
                            <p style="margin: 10px 0 0 0; font-size: 0.85em; color: #94a3b8;">Specializing in secure software development and application security</p>
                            <p style="margin: 5px 0 0 0; font-size: 0.8em; color: #64748b;">This message was sent securely and is GDPR compliant</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        // Wait for both emails to be sent
        await Promise.all([notificationPromise, autoReplyPromise]);

        console.log('✅ Both emails sent successfully:');
        console.log('   - Security notification sent to:', yourEmail);
        console.log('   - Auto-reply sent to:', email);

        res.status(200).json({
            success: true,
            message: 'Your message has been sent securely! I\'ll review it with both development and security perspectives and get back to you within 24 hours.'
        });
    } catch (error) {
        console.error('❌ Error sending email:', error);

        // More specific error messages
        let errorMessage = 'Failed to send email securely. Please try again or contact me directly at oussama.missaoui.it@gmail.com';

        if (error.code === 'EENVELOPE') {
            if (error.command === 'API') {
                errorMessage = 'Email configuration error. Please check recipient email settings.';
            }
        } else if (error.code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Please check email credentials.';
        } else if (error.message.includes('spam')) {
            errorMessage = 'Message blocked by spam filters. Please try alternative contact methods.';
        }

        res.status(500).json({
            success: false,
            error: errorMessage,
            alternative: 'You can also reach me directly via WhatsApp: +216 23 257 784'
        });
    }
}