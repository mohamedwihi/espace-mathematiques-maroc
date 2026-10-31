import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, Download, Eye, EyeOff, FileText, Printer } from 'lucide-react';
import { getLevel } from '@/data/levels';
import { getExam } from '@/services/content';
import { MathText } from '@/components/math/MathText';
import { SolutionSteps } from '@/components/exercises/ExerciseCard';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

/** N'accepte que des fichiers PDF locaux servis depuis /exams/ (pas d'URL externe arbitraire). */
const isSafePdf = (url?: string): url is string => !!url && /^\/exams\/[\w\-./]+\.pdf$/i.test(url) && !url.includes('..');

export default function ExamPage() {
  const { examId } = useParams();
  const { t, L, fmt } = useI18n();
  const exam = getExam(examId);
  const [open, setOpen] = useState<Record<number, boolean>>({});
  usePageMeta(exam ? L(exam.title) : t.exams.notFound);

  if (!exam) {
    return (
      <div className="container-page py-16">
        <EmptyState title={t.exams.notFound} action={<Link to="/exams" className="btn-primary">{t.nav.exams}</Link>} />
      </div>
    );
  }
  const level = getLevel(exam.levelId)!;
  const total = exam.parts?.reduce((s, p) => s + p.points, 0);
  const pdf = isSafePdf(exam.pdfUrl) ? exam.pdfUrl : undefined;
  const correctionPdf = isSafePdf(exam.correctionPdfUrl) ? exam.correctionPdfUrl : undefined;

  return (
    <article>
      <PageHeader
        title={L(exam.title)}
        crumbs={[{ label: t.nav.exams, to: '/exams' }, { label: L(exam.title) }]}
        eyebrow={
          <div className="flex flex-wrap gap-2">
            <span className="chip bg-ink-900 text-white" dir="ltr">{level.code}</span>
            <span className="chip bg-ink-50 text-ink-600">{t.exams.kinds[exam.kind]}</span>
            <span className="chip bg-ink-50 text-ink-600" dir="ltr">{exam.year}</span>
            {exam.semester && <span className="chip bg-ink-50 text-ink-600">{fmt(t.common.semesterN, { n: exam.semester })}</span>}
            {exam.session && <span className="chip bg-ink-50 text-ink-600">{t.exams.sessions[exam.session]}</span>}
            {exam.durationMinutes && (
              <span className="chip bg-ink-50 text-ink-600">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {fmt(t.exams.duration, { n: exam.durationMinutes })}
              </span>
            )}
            {exam.official ? <span className="chip bg-brand-50 text-brand-700">{t.exams.official}</span> : <span className="chip bg-saffron-50 text-saffron-800">{t.exams.platform}</span>}
          </div>
        }
        actions={
          exam.parts && (
            <button type="button" className="btn-secondary" onClick={() => window.print()}>
              <Printer className="h-4 w-4" aria-hidden="true" />
              {t.exams.print}
            </button>
          )
        }
      />
      <div className="container-page max-w-4xl space-y-6 py-8">
        <Notice tone={exam.official ? 'success' : 'warning'}>
          <strong>{t.exams.source} : </strong>
          {L(exam.source)}
        </Notice>

        {(pdf || correctionPdf) && (
          <section className="card p-5" aria-labelledby="pdf-title">
            <h2 id="pdf-title" className="mb-3 flex items-center gap-2 font-bold">
              <FileText className="h-5 w-5 text-brand-600" aria-hidden="true" />
              {t.exams.pdfTitle}
            </h2>
            <div className="mb-4 flex flex-wrap gap-2">
              {pdf && (
                <>
                  <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm">{t.exams.viewPdf}</a>
                  <a href={pdf} download className="btn-primary btn-sm"><Download className="h-4 w-4" aria-hidden="true" />{t.exams.downloadPdf}</a>
                </>
              )}
              {correctionPdf && <a href={correctionPdf} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm"><FileText className="h-4 w-4" aria-hidden="true" />{t.exams.correctionPdf}</a>}
            </div>
            {pdf && <object data={pdf} type="application/pdf" className="h-[70vh] w-full rounded-xl border border-ink-100" aria-label={L(exam.title)}><p className="p-4 text-sm">{t.exams.viewPdf}: <a className="text-brand-700 underline" href={pdf}>{pdf}</a></p></object>}
          </section>
        )}

        {!pdf && !exam.parts && <EmptyState icon={<FileText className="h-7 w-7" aria-hidden="true" />} title={t.exams.noPdf} />}

        {exam.parts && (
          <>
            {total !== undefined && <p className="text-sm text-ink-500" dir="auto">Σ = {fmt(t.exams.points, { n: total })}</p>}
            {exam.parts.map((part, i) => (
              <section key={i} className="card print-expand p-5 sm:p-6" aria-labelledby={`part-${i}`}>
                <div className="flex items-center justify-between gap-3">
                  <h2 id={`part-${i}`} className="text-lg font-bold">{L(part.title)}</h2>
                  <span className="chip bg-ink-50 text-ink-700">{fmt(t.exams.points, { n: part.points })}</span>
                </div>
                <MathText text={L(part.statement)} block className="mt-3 leading-8" />
                <button
                  type="button"
                  className="btn-ghost btn-sm no-print mt-4"
                  aria-expanded={!!open[i]}
                  onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                >
                  {open[i] ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                  {open[i] ? t.exams.hideCorrection : t.exams.showCorrection}
                </button>
                <div hidden={!open[i]} className="mt-3 rounded-xl border border-brand-100 bg-brand-50/40 p-4">
                  <h3 className="mb-3 text-sm font-bold text-brand-800">{t.exams.correction}</h3>
                  <SolutionSteps steps={part.correction} />
                </div>
              </section>
            ))}
          </>
        )}
      </div>
    </article>
  );
}
