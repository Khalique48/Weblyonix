import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ── MongoDB Setup (optional – server works without it) ─────
let db = null;

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('⚠️  MONGODB_URI not set – running email-only mode');
    return;
  }
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(process.env.MONGODB_DB || 'weblyonix');
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.warn('⚠️  MongoDB not available – running email-only mode');
    console.warn('   ', err.message);
  }
}

await connectDB();

// ── Gmail Transporter ──────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error('❌ SMTP connection failed:', err.message);
  } else {
    console.log('✅ SMTP ready — emails will be sent to', process.env.GMAIL_USER);
  }
});

// ── Helper: Send Email ─────────────────────────────────────
async function sendEmail({ subject, html }) {
  return transporter.sendMail({
    from: `"Weblyonix Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject,
    html,
  });
}

// ── POST /api/contact ──────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save to MongoDB if available
    if (db) {
      const collection = db.collection('contact_submissions');
      await collection.insertOne({ name, email, message, createdAt: new Date() });
    }

    // Send email notification
    await sendEmail({
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Someone reached out via your website</p>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="color: #64748b; font-weight: 600; margin-bottom: 8px;">Message</p>
              <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #334155; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your inquiry to Weblyonix" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 16px; text-align: center; color: #94a3b8; font-size: 13px;">
            Sent from Weblyonix Contact Form
          </div>
        </div>
      `,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Error processing contact form:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ── POST /api/demo-request ─────────────────────────────────
app.post('/api/demo-request', async (req, res) => {
  const { name, email, company, phone, projectType, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Save to MongoDB if available
    if (db) {
      const collection = db.collection('demo_requests');
      await collection.insertOne({
        name, email, company, phone, projectType, message,
        createdAt: new Date(),
      });
    }

    // Send email notification
    await sendEmail({
      subject: `🎯 New Demo Request from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8b5cf6, #ec4899); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Demo Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Someone wants to schedule a demo!</p>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${email}" style="color: #8b5cf6;">${email}</a></td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${company}</td>
              </tr>` : ''}
              ${phone ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${phone}</td>
              </tr>` : ''}
              ${projectType ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600;">Project Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${projectType}</td>
              </tr>` : ''}
            </table>
            ${message ? `
            <div style="margin-top: 20px;">
              <p style="color: #64748b; font-weight: 600; margin-bottom: 8px;">Message / Requirements</p>
              <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #334155; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>` : ''}
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Your Demo Request with Weblyonix" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 16px; text-align: center; color: #94a3b8; font-size: 13px;">
            Sent from Weblyonix Demo Request Form
          </div>
        </div>
      `,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Error processing demo request:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
