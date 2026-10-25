/**
 * Réseaux sociaux de l'auteur, affichés dans le pied de page.
 * Laisser `url` vide pour masquer un réseau.
 */
export type SocialNetwork =
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'tiktok'
  | 'whatsapp'
  | 'telegram'
  | 'linkedin'
  | 'x'
  | 'email';

export interface SocialLink {
  network: SocialNetwork;
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { network: 'facebook', label: 'Facebook', url: '' },
  { network: 'instagram', label: 'Instagram', url: 'https://instagram.com/prof.maths01' },
  { network: 'youtube', label: 'YouTube', url: 'https://youtube.com/@ProfWihimohamed' },
  { network: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@mathphysique01' },
  { network: 'whatsapp', label: 'WhatsApp', url: '' },
  { network: 'telegram', label: 'Telegram', url: '' },
  { network: 'linkedin', label: 'LinkedIn', url: '' },
  { network: 'x', label: 'X', url: '' },
  { network: 'email', label: 'E-mail', url: '' },
];

/** Seuls les liens http(s) et mailto: renseignés sont affichés. */
export const activeSocialLinks = socialLinks.filter((s) => /^(https:\/\/|mailto:)/.test(s.url));
