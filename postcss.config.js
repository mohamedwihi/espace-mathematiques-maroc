import { fileURLToPath } from 'node:url';

export default {
  plugins: {
    // Chemin explicite : la configuration est trouvée quel que soit le dossier de lancement.
    tailwindcss: { config: fileURLToPath(new URL('./tailwind.config.js', import.meta.url)) },
    autoprefixer: {},
  },
};
