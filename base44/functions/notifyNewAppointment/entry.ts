import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';
import { secrets } from 'base44:runtime';

const NOTIFY_EMAIL = "drronitkalfon@gmail.com";
const SENDER_EMAIL = "onboarding@resend.dev";

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();

    const appt = payload.data;

    if (!appt) {
      return Response.json({ error: 'No appointment data' }, { status: 400 });
    }

    const serviceLabels = {
      nutrition: "Nutrition & Suivi Diététique",
      luxopuncture_addiction: "Luxopuncture — Addictions",
      luxopuncture_weight: "Luxopuncture — Perte de Poids",
      luxopuncture_smoking: "Luxopuncture — Arrêt du Tabac",
      luxopuncture_sleep: "Luxopuncture — Sommeil",
      luxopuncture_relaxation: "Luxopuncture — Relaxation",
      luxopuncture_rejuvenation: "Luxopuncture — Rajeunissement Facial",
    };

    const consultationLabels = {
      presentiel: "En Cabinet (Tel Aviv)",
      visio: "En Visioconférence (Zoom / Teams)",
    };

    const serviceName = serviceLabels[appt.service] || appt.service;
    const consultMode = consultationLabels[appt.consultation_type] || appt.consultation_type;

    const body = `
Nouvelle demande de rendez-vous reçue !

👤 Patient : ${appt.full_name}
📧 Email : ${appt.email}
📞 Téléphone : ${appt.phone}
🩺 Service : ${serviceName}
📅 Date souhaitée : ${appt.preferred_date || "Non précisée"}
💻 Mode de consultation : ${consultMode}
${appt.message ? `\n💬 Message : ${appt.message}` : ""}

---
Cet email a été envoyé automatiquement depuis votre site.
    `.trim();

    // Envoi via Resend vers l'adresse externe
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${secrets.get("resendok")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: NOTIFY_EMAIL,
        subject: `Nouvelle demande de RDV — ${appt.full_name} (${serviceName})`,
        text: body,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      throw new Error(`Resend (${resendRes.status}): ${errText}`);
    }

    // Récupérer les admins pour leur envoyer la notification
    const admins = await base44.asServiceRole.entities.User.filter({ role: "admin" });

    for (const admin of admins) {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: admin.email,
        from_name: "Dr. Ronit Kalfon — Site Web",
        subject: `Nouvelle demande de RDV — ${appt.full_name} (${serviceName})`,
        body,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});