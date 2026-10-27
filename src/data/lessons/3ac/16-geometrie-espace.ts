import type { LessonModule } from '@/types';

const lessonId = '3ac-geometrie-espace';

export const geometrieEspace: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'space',
    title: { ar: 'الهندسة الفضائية', fr: 'Géométrie dans l’espace' },
    summary: {
      ar: 'التعامد والتوازي في الفضاء، فيثاغورس وطاليس في المجسمات، التكبير والتصغير، وحساب الحجوم والمساحات.',
      fr: 'Orthogonalité et parallélisme dans l’espace, Pythagore et Thalès dans les solides, agrandissement et réduction, volumes et aires.',
    },
    objectives: [
      { ar: 'التعرف على تعامد مستقيم ومستوى.', fr: 'Reconnaître l’orthogonalité d’une droite et d’un plan.' },
      { ar: 'حساب أطوال في مجسم بفيثاغورس.', fr: 'Calculer des longueurs dans un solide avec Pythagore.' },
      { ar: 'حساب الحجوم واستعمال التكبير والتصغير.', fr: 'Calculer des volumes et utiliser agrandissement et réduction.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['espace', 'orthogonal', 'pyramide', 'cône', 'sphère', 'volume', 'agrandissement', 'réduction', 'هندسة فضائية', 'هرم', 'مخروط', 'كرة', 'حجم', 'تكبير', 'تصغير'],
    sections: [
      {
        id: 'positions',
        title: { ar: 'التعامد والتوازي', fr: 'Orthogonalité et parallélisme' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• يكون مستقيم عمودياً على مستوى إذا كان عمودياً على مستقيمين متقاطعين من هذا المستوى، ويكون حينئذ عمودياً على كل مستقيم منه.\n\n• يكون مستقيم موازياً لمستوى إذا كان موازياً لمستقيم من هذا المستوى.',
              fr: '• Une droite est orthogonale à un plan si elle est orthogonale à deux droites sécantes de ce plan ; elle est alors orthogonale à toute droite du plan.\n\n• Une droite est parallèle à un plan si elle est parallèle à une droite de ce plan.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'مكعب طول حرفه $a$. احسب طول قطره.', fr: 'Un cube a une arête $a$. Calculer la longueur de sa diagonale.' },
            steps: [
              { ar: 'قطر وجه: $\\sqrt{a^2+a^2}=a\\sqrt2$.', fr: 'Diagonale d’une face : $\\sqrt{a^2+a^2}=a\\sqrt2$.' },
              { ar: 'قطر المكعب: $\\sqrt{(a\\sqrt2)^2+a^2}=\\sqrt{3a^2}=a\\sqrt3$.', fr: 'Diagonale du cube : $\\sqrt{(a\\sqrt2)^2+a^2}=\\sqrt{3a^2}=a\\sqrt3$.' },
            ],
          },
        ],
      },
      {
        id: 'volumes',
        title: { ar: 'الحجوم', fr: 'Volumes' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: 'متوازي المستطيلات: $V=L\\times\\ell\\times h$.', fr: 'Pavé droit : $V=L\\times\\ell\\times h$.' },
              { ar: 'الهرم: $V=\\dfrac13\\times B\\times h$ ($B$ مساحة القاعدة).', fr: 'Pyramide : $V=\\dfrac13\\times B\\times h$ ($B$ aire de la base).' },
              { ar: 'المخروط الدوراني: $V=\\dfrac13\\pi r^2h$.', fr: 'Cône de révolution : $V=\\dfrac13\\pi r^2h$.' },
              { ar: 'الكرة: $V=\\dfrac43\\pi r^3$ ومساحة الفلكة $S=4\\pi r^2$.', fr: 'Boule : $V=\\dfrac43\\pi r^3$ et aire de la sphère $S=4\\pi r^2$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'التكبير والتصغير', fr: 'Agrandissement et réduction' },
            content: {
              ar: 'في تكبير أو تصغير نسبته $k$: الأطوال تضرب في $k$، والمساحات في $k^2$، والحجوم في $k^3$.',
              fr: 'Dans un agrandissement ou une réduction de rapport $k$ : les longueurs sont multipliées par $k$, les aires par $k^2$, les volumes par $k^3$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'قطر مكعب حرفه $a$: $a\\sqrt3$.', fr: 'Diagonale d’un cube d’arête $a$ : $a\\sqrt3$.' },
      { ar: 'الهرم والمخروط: ثلث القاعدة في الارتفاع.', fr: 'Pyramide et cône : un tiers de base × hauteur.' },
      { ar: 'الحجوم تضرب في $k^3$.', fr: 'Les volumes sont multipliés par $k^3$.' },
    ],
  },
  exercises: [
    {
      id: '3ac-esp-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'حجم هرم', fr: 'Volume d’une pyramide' },
      statement: { ar: 'هرم مساحة قاعدته $12\\,\\text{cm}^2$ وارتفاعه $5\\,\\text{cm}$. احسب حجمه.', fr: 'Une pyramide a une base de $12\\,\\text{cm}^2$ et une hauteur de $5\\,\\text{cm}$. Calculer son volume.' },
      question: { type: 'numeric', answer: 20, unit: 'cm³' },
      hints: [{ ar: '$\\dfrac13\\times12\\times5$.', fr: '$\\dfrac13\\times12\\times5$.' }],
      solution: [{ ar: '$V=\\dfrac{60}3=20\\,\\text{cm}^3$.', fr: '$V=\\dfrac{60}3=20\\,\\text{cm}^3$.' }],
    },
    {
      id: '3ac-esp-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'قطر متوازي مستطيلات', fr: 'Diagonale d’un pavé' },
      statement: { ar: 'متوازي مستطيلات أبعاده $3$ و $4$ و $12$. احسب طول قطره.', fr: 'Un pavé droit a pour dimensions $3$, $4$ et $12$. Calculer la longueur de sa diagonale.' },
      question: { type: 'numeric', answer: 13 },
      hints: [{ ar: '$\\sqrt{3^2+4^2+12^2}$.', fr: '$\\sqrt{3^2+4^2+12^2}$.' }],
      solution: [{ ar: '$\\sqrt{9+16+144}=\\sqrt{169}=13$.', fr: '$\\sqrt{9+16+144}=\\sqrt{169}=13$.' }],
    },
    {
      id: '3ac-esp-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'تصغير', fr: 'Réduction' },
      statement: { ar: 'مجسم حجمه $80\\,\\text{cm}^3$ نصغره بنسبة $k=\\dfrac12$. ما حجم المجسم المصغر؟', fr: 'Un solide de volume $80\\,\\text{cm}^3$ est réduit de rapport $k=\\dfrac12$. Quel est le volume du solide réduit ?' },
      question: { type: 'numeric', answer: 10, unit: 'cm³' },
      hints: [{ ar: 'الحجم يضرب في $k^3=\\dfrac18$.', fr: 'Le volume est multiplié par $k^3=\\dfrac18$.' }],
      solution: [{ ar: '$80\\times\\dfrac18=10\\,\\text{cm}^3$.', fr: '$80\\times\\dfrac18=10\\,\\text{cm}^3$.' }],
    },
    {
      id: '3ac-esp-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'حجم مخروط', fr: 'Volume d’un cône' },
      statement: { ar: 'مخروط دوراني شعاع قاعدته $3$ وارتفاعه $4$. ما حجمه؟', fr: 'Un cône de révolution a un rayon de base $3$ et une hauteur $4$. Quel est son volume ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$12\\pi$', fr: '$12\\pi$' }, { ar: '$36\\pi$', fr: '$36\\pi$' }, { ar: '$4\\pi$', fr: '$4\\pi$' }, { ar: '$48\\pi$', fr: '$48\\pi$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\dfrac13\\pi\\times9\\times4$.', fr: '$\\dfrac13\\pi\\times9\\times4$.' }],
      solution: [{ ar: '$V=\\dfrac13\\pi\\times9\\times4=12\\pi$.', fr: '$V=\\dfrac13\\pi\\times9\\times4=12\\pi$.' }],
    },
  ],
};
