import { Coordinates, Line, Mafs, Plot, Point, Polygon, Text, Theme } from 'mafs';
import 'mafs/core.css';
import type { LessonBlock } from '@/types';
import { Tex } from './Tex';

export const graphColors = {
  brand: Theme.green,
  ink: Theme.blue,
  saffron: Theme.orange,
  red: Theme.red,
} as const;

type GraphBlock = Extract<LessonBlock, { kind: 'graph' }>;
type GeometryBlock = Extract<LessonBlock, { kind: 'geometry' }>;

/** Graphique de fonctions pour les cours (données statiques). */
export function FunctionGraph({ block, height = 300 }: { block: GraphBlock; height?: number }) {
  const shade = block.shade ? block.functions[block.shade.index] : undefined;
  const shadePoints: [number, number][] = [];
  if (block.shade && shade) {
    const { from, to } = block.shade;
    const n = 60;
    shadePoints.push([from, 0]);
    for (let i = 0; i <= n; i++) {
      const x = from + ((to - from) * i) / n;
      shadePoints.push([x, shade.fn(x)]);
    }
    shadePoints.push([to, 0]);
  }
  return (
    <figure className="graph-frame">
      <div className="overflow-hidden rounded-xl border border-ink-100">
        <Mafs viewBox={{ x: block.x, y: block.y }} preserveAspectRatio={false} height={height} pan={false}>
          <Coordinates.Cartesian subdivisions={false} />
          {shadePoints.length > 0 && <Polygon points={shadePoints} color={Theme.green} fillOpacity={0.18} strokeOpacity={0} />}
          {block.lines?.map((l, i) => (
            <Line.Segment key={i} point1={l.from} point2={l.to} style={l.dashed ? 'dashed' : 'solid'} color={Theme.foreground} />
          ))}
          {block.functions.map((f, i) => (
            <Plot.OfX key={i} y={f.fn} color={graphColors[f.color ?? 'brand']} domain={f.domain} />
          ))}
          {block.points?.map((p, i) => (
            <g key={i}>
              <Point x={p.x} y={p.y} color={Theme.foreground} />
              {p.label && (
                <Text x={p.x} y={p.y} attach="ne" size={14}>
                  {p.label}
                </Text>
              )}
            </g>
          ))}
        </Mafs>
      </div>
      <figcaption className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm" dir="ltr">
        {block.functions.map((f, i) => f.label && (
          <span key={i} className="inline-flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-5 rounded" style={{ background: graphColors[f.color ?? 'brand'] }} aria-hidden="true" />
            <Tex tex={f.label} />
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

const polyColors = { brand: Theme.green, ink: Theme.blue, saffron: Theme.orange };

/** Figure géométrique statique (polygones, segments, points). */
export function GeometryFigure({ block, height = 280 }: { block: GeometryBlock; height?: number }) {
  return (
    <figure className="graph-frame">
      <div className="overflow-hidden rounded-xl border border-ink-100">
        <Mafs viewBox={{ x: block.x, y: block.y }} preserveAspectRatio="contain" height={height} pan={false}>
          {block.polygons?.map((p, i) => (
            <Polygon key={i} points={p.points} color={polyColors[p.color ?? 'brand']} fillOpacity={0.12} />
          ))}
          {block.segments?.map((s, i) => (
            <Line.Segment key={i} point1={s.from} point2={s.to} style={s.dashed ? 'dashed' : 'solid'} color={Theme.foreground} />
          ))}
          {block.rightAngles?.map((r, i) => {
            const k = 0.35;
            const a: [number, number] = [r.at[0] + r.u[0] * k, r.at[1] + r.u[1] * k];
            const b: [number, number] = [a[0] + r.v[0] * k, a[1] + r.v[1] * k];
            const c: [number, number] = [r.at[0] + r.v[0] * k, r.at[1] + r.v[1] * k];
            return <Polygon key={i} points={[r.at, a, b, c]} color={Theme.foreground} fillOpacity={0} weight={1.5} />;
          })}
          {block.points?.map((p, i) => (
            <g key={i}>
              <Point x={p.x} y={p.y} color={Theme.foreground} />
              {p.label && (
                <Text x={p.x} y={p.y} attach="sw" attachDistance={14} size={15}>
                  {p.label}
                </Text>
              )}
            </g>
          ))}
        </Mafs>
      </div>
    </figure>
  );
}
