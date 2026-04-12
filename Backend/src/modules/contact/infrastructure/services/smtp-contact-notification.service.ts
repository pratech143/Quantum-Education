import nodemailer, { type Transporter } from 'nodemailer';
import type { ContactRequest } from '../../domain/contact-request.js';
import type { ContactNotificationService } from '../../application/ports/contact-notification.service.js';
import { env } from '../../../../shared/config/env.js';
import { ConsoleLogger } from '../../../../shared/logger/console-logger.js';

const logger = new ConsoleLogger();

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const formatOptional = (value: string | undefined) => value?.trim() || 'Not provided';

export class SmtpContactNotificationService implements ContactNotificationService {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth:
        env.SMTP_USER && env.SMTP_PASS
          ? {
              user: env.SMTP_USER,
              pass: env.SMTP_PASS
            }
          : undefined
    });
  }

  async notifyNewContactRequest(contactRequest: ContactRequest): Promise<void> {
    const adminPanelLink = env.ADMIN_PANEL_URL
      ? `Visit the admin panel for full details: ${env.ADMIN_PANEL_URL}`
      : 'Visit the admin panel for full details.';

    const text = [
      'New website lead received.',
      '',
      'A new visitor submitted the contact form.',
      '',
      `Name: ${contactRequest.fullName}`,
      `Email: ${contactRequest.email}`,
      `Phone: ${formatOptional(contactRequest.phoneNumber)}`,
      `Preferred Destination: ${formatOptional(contactRequest.preferredDestination)}`,
      `Submitted At: ${contactRequest.createdAt.toISOString()}`,
      '',
      'Message:',
      contactRequest.message,
      '',
      adminPanelLink
    ].join('\n');

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
        <h2 style="margin-bottom: 12px;">New Website Lead Received</h2>
        <p style="margin-bottom: 16px;">
          A new visitor submitted the contact form on the website.
        </p>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tr><td style="padding: 8px; font-weight: 600;">Name</td><td style="padding: 8px;">${escapeHtml(contactRequest.fullName)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Email</td><td style="padding: 8px;">${escapeHtml(contactRequest.email)}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Phone</td><td style="padding: 8px;">${escapeHtml(formatOptional(contactRequest.phoneNumber))}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Preferred Destination</td><td style="padding: 8px;">${escapeHtml(formatOptional(contactRequest.preferredDestination))}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Submitted At</td><td style="padding: 8px;">${escapeHtml(contactRequest.createdAt.toISOString())}</td></tr>
        </table>
        <div style="margin-top: 20px;">
          <p style="margin-bottom: 8px; font-weight: 600;">Message</p>
          <div style="padding: 12px; background: #f3f4f6; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(contactRequest.message)}</div>
        </div>
        <p style="margin-top: 20px;">
          ${
            env.ADMIN_PANEL_URL
              ? `<a href="${escapeHtml(env.ADMIN_PANEL_URL)}" style="color: #2563eb;">Open the admin panel</a> to review the full lead details.`
              : 'Visit the admin panel to review the full lead details.'
          }
        </p>
      </div>
    `;

    try {
      await this.transporter.sendMail({
        from: env.SMTP_FROM_EMAIL,
        to: env.CONTACT_NOTIFICATION_TO_EMAIL,
        subject: env.CONTACT_NOTIFICATION_SUBJECT,
        text,
        html
      });
    } catch (error) {
      logger.error('Failed to send new contact notification email', {
        email: contactRequest.email,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
}
