# فضاء الرياضيات بالمغرب — Espace Mathématiques Maroc

منصة تعليمية مغربية لتعلم الرياضيات في التعليم الثانوي الإعدادي والتأهيلي: دروس، تمارين تفاعلية بتصحيح مفصل، فروض وامتحانات، و15 أداة رياضية تعرض خطوات الحل.

*Plateforme éducative marocaine de mathématiques (collège et lycée) : cours, exercices corrigés, devoirs et examens, et 15 outils interactifs. Interface bilingue arabe (RTL) / français (LTR).*

---

## التقنيات

| المجال | التقنية |
| --- | --- |
| الواجهة | React 18 + TypeScript (strict) |
| البناء والتشغيل | Vite 5 |
| التصميم | Tailwind CSS 3 (ألوان وخطوط مخصصة، دعم RTL/LTR) |
| التنقل | React Router 6 (تحميل الصفحات عند الطلب) |
| المعادلات | KaTeX |
| الرسوم البيانية | Mafs |
| الحساب الرياضي | mathjs (بمحلل آمن، بدون `eval`) |
| الاختبارات | Vitest |
| التخزين المحلي | LocalStorage (اللغة، المفضلة، التقدم، سجل الحاسبة) |

لا يوجد أي خادم ولا مفاتيح API ولا حسابات: الموقع ثابت (static) بالكامل.

## التشغيل محلياً

المتطلبات: **Node.js 18.18 أو أحدث** (يُنصح بالإصدار LTS).

```bash
npm install
```

```bash
npm run dev
```

ثم افتح `http://localhost:5173`.

## الأوامر

| الأمر | الوظيفة |
| --- | --- |
| `npm run dev` | خادم التطوير |
| `npm run typecheck` | فحص TypeScript |
| `npm test` | تشغيل الاختبارات (34 اختباراً: الحاسبات، الأمان، سلامة المحتوى) |
| `npm run build` | فحص الأنواع ثم بناء نسخة الإنتاج في `dist/` |
| `npm run preview` | معاينة نسخة الإنتاج محلياً |
| `npm run check:math` | فحص الكتابة الرياضية في كل الدروس والتمارين والفروض (أخطاء KaTeX، الفواصل، الرموز خارج الصيغ) |
| `npm run cours` | فحص الدروس الشاملة المكتوبة في `content/cours/<المستوى>/*.md` ثم توليد ملفات PDF في `public/cours/` — يتطلب Microsoft Edge أو Google Chrome. لدرس واحد: `npm run cours -- --only <id>`، للفحص فقط: `npm run cours -- --check` |

عند وجود درس شامل لدرس ما، تعرض صفحة الدرس ملف PDF مكان المحتوى المختصر. بعد تعديل ملف `.md`، أعد توليد ملف PDF الخاص به ثم ارفع التغييرات.

## بنية المشروع

```
src/
├── App.tsx                 # المسارات (React Router)
├── main.tsx                # نقطة الدخول
├── components/
│   ├── brand/              # الشعار
│   ├── cards/              # بطاقات المستويات والدروس والامتحانات والأدوات
│   ├── exercises/          # بطاقة التمرين التفاعلية
│   ├── layout/             # الرأس والتذييل
│   ├── lesson/             # عرض كتل الدرس (تعاريف، مبرهنات، أمثلة، رسوم)
│   ├── math/               # KaTeX (Tex, MathText) والرسوم البيانية (Mafs)
│   ├── tools/              # الأدوات الخمس عشرة
│   └── ui/                 # حالات التحميل والخطأ، البحث، التصفية…
├── data/
│   ├── levels.ts           # المستويات والشعب ووحدات البرنامج
│   ├── lessons/            # درس في كل ملف
│   ├── exercises.ts        # التمارين والتصحيحات
│   ├── exams.ts            # مكتبة الفروض والامتحانات
│   └── tools.ts            # بيانات الأدوات وحدودها
├── hooks/                  # useI18n, useProgress, usePageMeta, useCompute
├── i18n/                   # ar.ts, fr.ts (نفس البنية، مفحوصة بـ TypeScript)
├── layouts/                # التخطيط العام
├── pages/                  # صفحة لكل قسم + صفحة 404
├── services/
│   ├── math/               # المحرك الآمن، الجبر، التحليل، الإحصاء، الهندسة + الاختبارات
│   ├── content.ts          # استعلامات المحتوى والبحث
│   ├── progressStore.ts    # التقدم المحلي
│   └── storage.ts          # وصول آمن إلى LocalStorage
├── styles/index.css
├── types/index.ts
└── utils/answers.ts        # قراءة إجابات التلاميذ
```

## إضافة المحتوى

- **درس جديد:** أنشئ ملفاً في `src/data/lessons/` على غرار الأمثلة، ثم أضفه إلى `src/data/lessons/index.ts`. اترك `reviewed: false` حتى يراجعه أستاذ. الصيغ تكتب بين `$...$` (داخل السطر) أو `$$...$$` (كتلة).
- **تمرين:** أضف عنصراً إلى `src/data/exercises.ts` (أنواع: `mcq`، `numeric`، `open`). اختبار «سلامة المحتوى» يتحقق من ربط كل تمرين بدرس موجود.
- **امتحان رسمي:** ضع ملف PDF في `public/exams/`، ثم أضف سجلاً في `src/data/exams.ts` مع المصدر الحقيقي و`pdfUrl: '/exams/…pdf'`. لا تضع `official: true` إلا بعد التحقق من المصدر.
- **لغة جديدة:** أنشئ ملفاً بنفس بنية `src/i18n/ar.ts` (النوع `Dictionary` يفرض المفاتيح نفسها) وسجّله في `src/i18n/index.ts`.

## الأمان والجودة

- لا `eval` ولا `new Function`: التعابير تُحلَّل بمحلل mathjs ثم تُفحص شجرتها بقائمة بيضاء (عمليات ودوال ومتغيرات مسموح بها فقط). الاختبارات تتحقق من رفض محاولات الحقن.
- النص العادي يُعرض كنص React (مُهرَّب)؛ الـ HTML الوحيد المحقون هو مخرجات KaTeX مع `trust: false`.
- روابط PDF مقبولة فقط من المجلد المحلي `/exams/`.
- ترويسات أمان في `netlify.toml` و`vercel.json`.
- عنوان ووصف لكل صفحة، وسوم دلالية، روابط تخطي، تسميات ARIA، ودعم لوحة المفاتيح.

## النشر على الإنترنت

### 1. رفع المشروع إلى GitHub

أنشئ مستودعاً فارغاً على github.com، ثم من داخل مجلد المشروع:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Première version d'Espace Mathématiques Maroc"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/<اسم-المستخدم>/espace-mathematiques-maroc.git
```

```bash
git push -u origin main
```

### 2. Netlify

1. سجّل الدخول إلى netlify.com ← **Add new site** ← **Import an existing project** ← GitHub.
2. اختر المستودع. الإعدادات تُقرأ تلقائياً من `netlify.toml` (أمر البناء `npm run build`، مجلد النشر `dist`).
3. اضغط **Deploy**. إعادة التوجيه اللازمة لـ React Router موجودة في `netlify.toml` و`public/_redirects`.

### أو Vercel

1. vercel.com ← **Add New Project** ← استورد المستودع.
2. الإطار Vite يُكتشف تلقائياً، و`vercel.json` يضبط البناء وإعادة التوجيه.
3. اضغط **Deploy**.

### 3. التحديث لاحقاً

كل `git push` إلى الفرع `main` يعيد البناء والنشر تلقائياً على Netlify أو Vercel.

## حدود النسخة الأولى

- **المحتوى تجريبي:** 8 دروس و37 تمريناً و4 مواضيع تدريبية، كلها معلَّمة «غير مراجعة رسمياً». لا تغطي المقرر كاملاً.
- **وحدات البرنامج** في `levels.ts` استرشادية ويجب مقارنتها بالتوجيهات التربوية الرسمية.
- **مكتبة الامتحانات الرسمية فارغة** عمداً حتى تُضاف ملفات حقيقية بمصادر موثقة.
- **الأدوات** تذكر حدودها في كل صفحة (مثلاً: المعادلات حتى الدرجة الثانية، الدوال الأصلية الاعتيادية فقط).
- التقدم محفوظ في المتصفح فقط (لا مزامنة بين الأجهزة).
