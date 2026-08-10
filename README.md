# Oxford County Café Google Profile Audit

A focused lead-generation landing page for Jack Brown's pilot Google Business Profile audit service. The first audience is independent cafés, bakeries, and small neighbourhood food businesses in Oxford County, Ontario.

## Why this version exists

The original landing page addressed local businesses broadly. This version tests a narrower offer with a clearer customer, a concrete sample deliverable, and measurable conversion steps. It deliberately avoids invented testimonials, unsupported performance claims, and fixed service pricing before the offer has been validated.

## Files

- `index.html` — page structure, copy, SEO metadata, form, and structured data
- `styles.css` — responsive editorial design and accessibility states
- `script.js` — form handling, UTM capture, and GA4 events

## Form setup

The form uses Netlify Forms and includes a honeypot field. After deploying:

1. Confirm that Netlify detects the `cafe-google-audit` form.
2. Add an email notification for new submissions.
3. Send one test submission and confirm the success state.
4. Delete the test lead before beginning outreach.

Do not collect more information than is needed to prepare and return the audit.

## Analytics

The page currently uses the GA4 property already present in Jack's marketing portfolio: `G-WCWLQZ4PG9`.

Tracked events:

- `nav_audit_click`
- `hero_audit_click`
- `hero_sample_click`
- `form_start`
- `form_submit_attempt`
- `generate_lead`
- `form_error`

The form also records `utm_source`, `utm_medium`, and `utm_campaign` with each lead. Verify the GA4 property and all events with Google Tag Assistant before sending real traffic.

## Recommended first campaign

1. Build a list of 15 independent cafés and bakeries in Oxford County.
2. Score each Google profile with the same five-point audit framework.
3. Send five personalized invitations with tagged landing-page links.
4. Complete two or three audits and ask owners what was useful.
5. Revise the offer using that feedback before adding prices or broader services.

This repository should eventually become a case study containing outreach numbers, page conversions, audit completion rates, owner feedback, and any client outcome that can be documented honestly.
