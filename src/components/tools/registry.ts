import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { ToolId } from '@/data/tools';
import type { ToolProps } from './types';

/** Chaque outil est chargé à la demande (mathjs n'est téléchargé que sur les pages d'outils). */
export const toolComponents: Record<ToolId, LazyExoticComponent<ComponentType<ToolProps>>> = {
  scientific: lazy(() => import('./ScientificTool')),
  fractions: lazy(() => import('./FractionsTool')),
  simplify: lazy(() => import('./SimplifyTool')),
  equations: lazy(() => import('./EquationsTool')),
  systems: lazy(() => import('./SystemsTool')),
  factor: lazy(() => import('./FactorTool')),
  powers: lazy(() => import('./PowersTool')),
  gcd: lazy(() => import('./GcdTool')),
  percent: lazy(() => import('./PercentTool')),
  table: lazy(() => import('./TableTool')),
  grapher: lazy(() => import('./GrapherTool')),
  derivative: lazy(() => import('./DerivativeTool')),
  integral: lazy(() => import('./IntegralTool')),
  geometry: lazy(() => import('./GeometryTool')),
  stats: lazy(() => import('./StatsTool')),
};
