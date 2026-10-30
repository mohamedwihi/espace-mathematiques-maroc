---
id: 1bac-etude-fonctions
titre: Étude des fonctions numériques
niveau: 1bac
semestre: 2
duree: 16 heures
---

## Objectifs
- Étudier les branches infinies d’une courbe : asymptotes verticales, horizontales, obliques et branches paraboliques.
- Étudier la position relative d’une courbe et d’une asymptote.
- Étudier la concavité d’une courbe et ses points d’inflexion.
- Déterminer un axe ou un centre de symétrie d’une courbe.
- Mener l’étude complète d’une fonction et tracer sa courbe.

## Prérequis
- Limites, dérivation.
- Généralités sur les fonctions.
- Équations de droites.

# I. Branches infinies

## 1. Asymptotes verticales et horizontales

:::definition
- Si $\lim\limits_{x\to a}f(x)=\pm\infty$ (à droite ou à gauche), la droite d’équation $x=a$ est une **asymptote verticale** à $(C_f)$.
- Si $\lim\limits_{x\to\pm\infty}f(x)=b$ (réel), la droite d’équation $y=b$ est une **asymptote horizontale** à $(C_f)$ au voisinage de $\pm\infty$.
:::

:::exemple
$f(x)=\dfrac{2x+1}{x-1}$ : $\lim\limits_{x\to1^+}f(x)=+\infty$ et $\lim\limits_{x\to\pm\infty}f(x)=2$. Les droites $x=1$ et $y=2$ sont asymptotes à $(C_f)$.
:::

## 2. Asymptote oblique

:::definition
La droite d’équation $y=ax+b$ ($a\ne0$) est une **asymptote oblique** à $(C_f)$ au voisinage de $+\infty$ si
$$\lim_{x\to+\infty}\left[f(x)-(ax+b)\right]=0.$$
(De même au voisinage de $-\infty$.)
:::

:::methode Trouver une asymptote oblique
Si $\lim\limits_{x\to+\infty}f(x)=\pm\infty$ :
1. calculer $a=\lim\limits_{x\to+\infty}\dfrac{f(x)}{x}$ ;
2. si $a$ est un réel non nul, calculer $b=\lim\limits_{x\to+\infty}\left[f(x)-ax\right]$ ;
3. si $b$ est un réel, la droite $y=ax+b$ est asymptote oblique.

Souvent, on écrit directement $f(x)=ax+b+g(x)$ avec $\lim g=0$.
:::

:::propriete Position relative
Le signe de $f(x)-(ax+b)$ donne la position de $(C_f)$ par rapport à l’asymptote : au-dessus si positif, en dessous si négatif.
:::

:::exemple
$f(x)=\dfrac{x^2+x+1}{x}=x+1+\dfrac1x$ : $f(x)-(x+1)=\dfrac1x\to0$ en $\pm\infty$. La droite $y=x+1$ est asymptote oblique ; $(C_f)$ est au-dessus sur $]0;+\infty[$ et en dessous sur $]-\infty;0[$.
:::

## 3. Branches paraboliques

:::propriete
Si $\lim\limits_{x\to+\infty}f(x)=\pm\infty$ :
| $\lim\limits_{x\to+\infty}\dfrac{f(x)}{x}$ | $\lim\limits_{x\to+\infty}\left[f(x)-ax\right]$ | Nature de la branche |
|---|---|---|
| $\pm\infty$ | — | branche parabolique de direction l’axe des ordonnées |
| $0$ | — | branche parabolique de direction l’axe des abscisses |
| $a\ne0$ | $b$ réel | asymptote oblique $y=ax+b$ |
| $a\ne0$ | $\pm\infty$ | branche parabolique de direction la droite $y=ax$ |
:::

:::exemple
- $f(x)=x^2$ : $\dfrac{f(x)}x=x\to+\infty$ : direction l’axe des ordonnées.
- $g(x)=\sqrt x$ : $\dfrac{g(x)}x=\dfrac1{\sqrt x}\to0$ : direction l’axe des abscisses.
- $h(x)=x+\sqrt x$ : $\dfrac{h(x)}x\to1$ et $h(x)-x=\sqrt x\to+\infty$ : direction la droite $y=x$.
:::

# II. Concavité et points d’inflexion

:::definition
Soit $f$ deux fois dérivable sur un intervalle $I$.
- Si $f''\ge0$ sur $I$, la courbe est **convexe** sur $I$ : elle est au-dessus de ses tangentes (concavité tournée vers les $y$ positifs).
- Si $f''\le0$ sur $I$, la courbe est **concave** sur $I$ : elle est en dessous de ses tangentes.
- Un **point d’inflexion** est un point où la courbe traverse sa tangente : si $f''$ s’annule en $x_0$ **en changeant de signe**, le point $(x_0;f(x_0))$ est un point d’inflexion.
:::

:::exemple
$f(x)=x^3-3x^2+2$ : $f'(x)=3x^2-6x$ et $f''(x)=6x-6$. $f''<0$ sur $]-\infty;1[$ (concave), $f''>0$ sur $]1;+\infty[$ (convexe). Le point $I(1;0)$ est un point d’inflexion.
:::

# III. Éléments de symétrie

:::propriete Axe de symétrie
La droite d’équation $x=a$ est un **axe de symétrie** de $(C_f)$ si et seulement si, pour tout $x\in D_f$ : $2a-x\in D_f$ et $f(2a-x)=f(x)$.
:::

:::propriete Centre de symétrie
Le point $\Omega(a;b)$ est un **centre de symétrie** de $(C_f)$ si et seulement si, pour tout $x\in D_f$ : $2a-x\in D_f$ et $f(2a-x)+f(x)=2b$.
:::

:::exemple
- $f(x)=x^2-4x+1$ : $f(4-x)=(4-x)^2-4(4-x)+1=x^2-4x+1=f(x)$ : la droite $x=2$ est axe de symétrie.
- $f(x)=x+1+\dfrac1x$ : $f(-x)+f(x)=(-x+1-\tfrac1x)+(x+1+\tfrac1x)=2$ : $\Omega(0;1)$ est centre de symétrie.
:::

:::remarque Périodicité
Si $f$ est périodique de période $T$, on l’étudie sur un intervalle de longueur $T$ puis on complète la courbe par des translations de vecteur $kT\vec i$.
:::

# IV. Plan d’étude d’une fonction

:::methode
1. Ensemble de définition ; éventuellement parité, périodicité, symétries (pour réduire l’intervalle d’étude).
2. Limites aux bornes de l’ensemble de définition ; asymptotes.
3. Dérivée, signe de la dérivée, **tableau de variations**, extremums.
4. Branches infinies, position relative avec les asymptotes.
5. Éventuellement dérivée seconde, concavité, points d’inflexion.
6. Points particuliers (intersections avec les axes, tangentes remarquables) puis **tracé** de la courbe.
:::

:::exemple Étude de $f(x)=\dfrac{x^2+x+1}{x}$
1. $D_f=\mathbb R^*$ ; $f(x)=x+1+\dfrac1x$.
2. $\lim\limits_{x\to0^+}f(x)=+\infty$, $\lim\limits_{x\to0^-}f(x)=-\infty$ : asymptote verticale $x=0$. $\lim\limits_{x\to\pm\infty}f(x)=\pm\infty$.
3. $f'(x)=1-\dfrac1{x^2}=\dfrac{(x-1)(x+1)}{x^2}$ : $f$ croît sur $]-\infty;-1]$, décroît sur $[-1;0[$ et sur $]0;1]$, croît sur $[1;+\infty[$. Maximum local $f(-1)=-1$, minimum local $f(1)=3$.
4. Asymptote oblique $y=x+1$ (voir I.2).
5. Centre de symétrie $\Omega(0;1)$.
:::

```figure
{"type":"graph","x":[-6,6],"y":[-7,9],"width":360,
 "functions":[{"fn":"x+1+1/x","label":"y=x+1+\\frac1x","color":"brand","domain":[0.12,6]},{"fn":"x+1+1/x","label":"","color":"brand","domain":[-6,-0.12]},{"fn":"x+1","label":"y=x+1","color":"saffron"}],
 "points":[{"x":1,"y":3,"label":"(1;3)"},{"x":-1,"y":-1,"label":"(−1;−1)"},{"x":0,"y":1,"label":"Ω"}],
 "caption":"La courbe, son asymptote oblique $y=x+1$, son asymptote verticale (l’axe des ordonnées) et son centre de symétrie $\\Omega(0;1)$."}
```

# Exercices

:::exercice Asymptotes
Déterminer les asymptotes de la courbe de $f(x)=\dfrac{3x-1}{x+2}$ et de $g(x)=\dfrac{x^2-3}{x-1}$ (écrire $g(x)=x+1+\dfrac{c}{x-1}$).
:::

:::exercice Branches infinies
Étudier les branches infinies en $+\infty$ de : $f_1(x)=x^2-3x$ ; $f_2(x)=\sqrt{x+1}$ ; $f_3(x)=2x-\sqrt x$ ; $f_4(x)=\sqrt{x^2+1}$.
:::

:::exercice Inflexion
Soit $f(x)=x^3-6x^2+9x$. Étudier la concavité de $(C_f)$ et déterminer son point d’inflexion.
:::

:::exercice Symétries
1. Montrer que la droite $x=-1$ est un axe de symétrie de la courbe de $f(x)=x^2+2x-3$.
2. Montrer que $\Omega(1;2)$ est un centre de symétrie de la courbe de $g(x)=\dfrac{2x+1}{x-1}$.
:::

:::exercice Étude complète
Soit $f(x)=x^3-3x$ sur $\mathbb R$. Étudier la parité, les limites, les variations, les branches infinies et la concavité, puis tracer la courbe.
:::

# Corrigés

:::corrige
- $f$ : asymptote verticale $x=-2$ et horizontale $y=3$.
- $g(x)=x+1-\dfrac{2}{x-1}$ (car $(x+1)(x-1)-2=x^2-3$) : asymptote verticale $x=1$ et asymptote oblique $y=x+1$.
:::

:::corrige
- $f_1$ : $\dfrac{f_1(x)}x=x-3\to+\infty$ : branche parabolique de direction $(Oy)$.
- $f_2$ : $\dfrac{f_2(x)}x\to0$ : branche parabolique de direction $(Ox)$.
- $f_3$ : $\dfrac{f_3(x)}x\to2$ et $f_3(x)-2x=-\sqrt x\to-\infty$ : branche parabolique de direction $y=2x$.
- $f_4$ : $\dfrac{f_4(x)}x\to1$ et $f_4(x)-x=\dfrac{1}{\sqrt{x^2+1}+x}\to0$ : asymptote oblique $y=x$.
:::

:::corrige
$f''(x)=6x-12$ : négatif sur $]-\infty;2[$ (concave), positif sur $]2;+\infty[$ (convexe). Point d’inflexion $I(2;f(2))=(2;2)$.
:::

:::corrige
1. $f(-2-x)=(-2-x)^2+2(-2-x)-3=x^2+4x+4-4-2x-3=x^2+2x-3=f(x)$.
2. $g(2-x)+g(x)=\dfrac{2(2-x)+1}{1-x}+\dfrac{2x+1}{x-1}=\dfrac{-(5-2x)+(2x+1)}{x-1}=\dfrac{4x-4}{x-1}=4=2\times2$.
:::

:::corrige
$f$ est impaire (courbe symétrique par rapport à $O$). $\lim\limits_{x\to\pm\infty}f(x)=\pm\infty$ et $\dfrac{f(x)}x=x^2-3\to+\infty$ : branches paraboliques de direction $(Oy)$. $f'(x)=3(x-1)(x+1)$ : croissante sur $]-\infty;-1]$, décroissante sur $[-1;1]$, croissante sur $[1;+\infty[$ ; maximum local $f(-1)=2$, minimum local $f(1)=-2$. $f''(x)=6x$ : point d’inflexion $O(0;0)$. La courbe coupe l’axe des abscisses en $-\sqrt3$, $0$ et $\sqrt3$.
:::
