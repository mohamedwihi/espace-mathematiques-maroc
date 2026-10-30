---
id: 1bac-generalites-fonctions
titre: Généralités sur les fonctions numériques
niveau: 1bac
semestre: 1
duree: 14 heures
---

## Objectifs
- Déterminer l’ensemble de définition d’une fonction (polynôme, rationnelle, irrationnelle, trigonométrique).
- Étudier la parité et la périodicité d’une fonction.
- Étudier les variations d’une fonction ; utiliser le taux d’accroissement.
- Reconnaître une fonction majorée, minorée, bornée et déterminer ses extremums.
- Comparer deux fonctions ; étudier la composée de deux fonctions et ses variations.
- Représenter les fonctions $x\mapsto ax^2+bx+c$, $x\mapsto\dfrac{ax+b}{cx+d}$, $x\mapsto\sqrt{x+a}$ et $x\mapsto ax^3$.

## Prérequis
- Généralités sur les fonctions (tronc commun).
- Ordre, intervalles, valeur absolue.
- Trigonométrie.

# I. Ensemble de définition

:::definition
L’**ensemble de définition** $D_f$ d’une fonction $f$ est l’ensemble des réels $x$ pour lesquels $f(x)$ existe.
:::

:::methode
| Type de fonction | Condition d’existence |
|---|---|
| Polynôme | aucune : $D_f=\mathbb R$ |
| Rationnelle $\dfrac{P(x)}{Q(x)}$ | $Q(x)\ne0$ |
| Irrationnelle $\sqrt{u(x)}$ | $u(x)\ge0$ |
| $\dfrac{1}{\sqrt{u(x)}}$ | $u(x)>0$ |
| $\tan x$ | $x\ne\dfrac\pi2+k\pi$ |
:::

:::exemple
- $f(x)=\dfrac{2x}{x^2-x-2}$ : $x^2-x-2=(x+1)(x-2)\ne0$, donc $D_f=\mathbb R\setminus\{-1;2\}$.
- $g(x)=\sqrt{\dfrac{x-1}{x+3}}$ : il faut $\dfrac{x-1}{x+3}\ge0$ et $x\ne-3$ ; un tableau de signes donne $D_g=]-\infty;-3[\cup[1;+\infty[$.
:::

# II. Parité et périodicité

:::definition
Soit $f$ une fonction dont l’ensemble de définition est symétrique par rapport à $0$.
- $f$ est **paire** si $f(-x)=f(x)$ pour tout $x\in D_f$ : sa courbe est symétrique par rapport à l’axe des ordonnées.
- $f$ est **impaire** si $f(-x)=-f(x)$ pour tout $x\in D_f$ : sa courbe est symétrique par rapport à l’origine.
:::

:::definition
Une fonction $f$ est **périodique** de période $T>0$ si, pour tout $x\in D_f$ : $x+T\in D_f$, $x-T\in D_f$ et $f(x+T)=f(x)$. Il suffit alors de l’étudier sur un intervalle de longueur $T$.
:::

:::exemple
- $\cos$ et $\sin$ sont $2\pi$-périodiques ; $\tan$ est $\pi$-périodique.
- $f(x)=\cos(2x)$ est $\pi$-périodique : $f(x+\pi)=\cos(2x+2\pi)=\cos(2x)$.
- $g(x)=\sin(3x)$ est impaire et $\dfrac{2\pi}3$-périodique.
:::

# III. Variations

:::definition
Soit $I$ un intervalle inclus dans $D_f$. $f$ est **croissante** (resp. **strictement croissante**) sur $I$ si, pour tous $a<b$ de $I$, $f(a)\le f(b)$ (resp. $f(a)<f(b)$). On définit de même une fonction décroissante. Une fonction croissante ou décroissante sur $I$ est dite **monotone** sur $I$.
:::

:::propriete Taux d’accroissement
Si $T(a,b)=\dfrac{f(b)-f(a)}{b-a}>0$ (resp. $<0$) pour tous $a\ne b$ de $I$, alors $f$ est strictement croissante (resp. décroissante) sur $I$.
:::

:::exemple
$f(x)=\dfrac1{x-1}$ sur $]1;+\infty[$ : $T(a,b)=\dfrac{\frac1{b-1}-\frac1{a-1}}{b-a}=\dfrac{-1}{(a-1)(b-1)}<0$. $f$ est strictement décroissante sur $]1;+\infty[$.
:::

# IV. Fonction majorée, minorée, bornée — extremums

:::definition
Soit $f$ définie sur $I$.
- $f$ est **majorée** sur $I$ s’il existe $M$ tel que $f(x)\le M$ pour tout $x\in I$.
- $f$ est **minorée** sur $I$ s’il existe $m$ tel que $f(x)\ge m$ pour tout $x\in I$.
- $f$ est **bornée** sur $I$ si elle est majorée et minorée, c’est-à-dire s’il existe $k>0$ tel que $|f(x)|\le k$ pour tout $x\in I$.
- $f(a)$ est la **valeur maximale** (resp. **minimale**) de $f$ sur $I$ si $f(x)\le f(a)$ (resp. $f(x)\ge f(a)$) pour tout $x\in I$.
:::

:::exemple
- $f(x)=\dfrac{1}{1+x^2}$ : $0<f(x)\le1$, donc $f$ est bornée ; $1=f(0)$ est sa valeur maximale.
- $g(x)=\sin x+\cos x$ : $|g(x)|\le|\sin x|+|\cos x|\le2$, donc $g$ est bornée sur $\mathbb R$.
:::

# V. Comparaison de deux fonctions

:::definition
Soient $f$ et $g$ définies sur $I$. On dit que $f\le g$ sur $I$ si $f(x)\le g(x)$ pour tout $x\in I$ : la courbe de $f$ est alors **en dessous** de celle de $g$. Pour comparer, on étudie le signe de $f(x)-g(x)$.
:::

:::exemple
Comparer $f(x)=x^2$ et $g(x)=x$ : $f(x)-g(x)=x(x-1)$, négatif sur $[0;1]$ et positif ailleurs. Donc $x^2\le x$ sur $[0;1]$ et $x^2\ge x$ sur $]-\infty;0]\cup[1;+\infty[$.
:::

# VI. Composée de deux fonctions

:::definition
Soient $f$ définie sur $I$ et $g$ définie sur $J$ avec $f(I)\subset J$. La **composée** de $f$ suivie de $g$ est la fonction $g\circ f$ définie sur $I$ par
$$(g\circ f)(x)=g\left(f(x)\right).$$
:::

:::exemple
$f(x)=2x+1$ et $g(x)=\sqrt x$ : $(g\circ f)(x)=\sqrt{2x+1}$, définie pour $x\ge-\dfrac12$ ; et $(f\circ g)(x)=2\sqrt x+1$. En général $g\circ f\ne f\circ g$.
:::

:::propriete Variations d’une composée
Soient $f$ monotone sur $I$ et $g$ monotone sur $J$ avec $f(I)\subset J$.
- Si $f$ et $g$ ont la **même monotonie**, $g\circ f$ est **croissante** sur $I$.
- Si elles ont des **monotonies contraires**, $g\circ f$ est **décroissante** sur $I$.
:::

:::exemple
$h(x)=\sqrt{4-x}$ sur $]-\infty;4]$ : $h=g\circ f$ avec $f(x)=4-x$ décroissante et $g(x)=\sqrt x$ croissante sur $[0;+\infty[$. Donc $h$ est décroissante sur $]-\infty;4]$.
:::

# VII. Fonctions de référence

:::propriete La fonction $x\mapsto ax^2+bx+c$ ($a\ne0$)
Sa courbe est une parabole de sommet $S\left(-\dfrac b{2a};f\left(-\dfrac b{2a}\right)\right)$ et d’axe la droite $x=-\dfrac b{2a}$. Si $a>0$, $f$ est décroissante puis croissante ; si $a<0$, croissante puis décroissante.
:::

:::propriete La fonction homographique $x\mapsto\dfrac{ax+b}{cx+d}$ ($c\ne0$, $ad-bc\ne0$)
Elle est définie sur $\mathbb R\setminus\left\{-\dfrac dc\right\}$. Sa courbe est une **hyperbole** de centre $\Omega\left(-\dfrac dc;\dfrac ac\right)$ et d’asymptotes les droites $x=-\dfrac dc$ et $y=\dfrac ac$. Elle est monotone sur chacun des deux intervalles, du signe de $ad-bc$ (croissante si $ad-bc>0$, décroissante si $ad-bc<0$).
:::

:::propriete Les fonctions $x\mapsto\sqrt{x+a}$ et $x\mapsto ax^3$
- $x\mapsto\sqrt{x+a}$ est définie et strictement croissante sur $[-a;+\infty[$ ; sa courbe est une demi-parabole.
- $x\mapsto ax^3$ est impaire ; elle est strictement croissante sur $\mathbb R$ si $a>0$, strictement décroissante si $a<0$.
:::

```figure
{"type":"graph","x":[-4,6],"y":[-4,8],"width":360,
 "functions":[{"fn":"(2*x+1)/(x-1)","label":"y=\\frac{2x+1}{x-1}","color":"saffron","domain":[1.1,6]},{"fn":"(2*x+1)/(x-1)","label":"","color":"saffron","domain":[-4,0.9]},{"fn":"sqrt(x+2)","label":"y=\\sqrt{x+2}","color":"brand","domain":[-2,6]}],
 "segments":[{"from":[1,-4],"to":[1,8],"dashed":true},{"from":[-4,2],"to":[6,2],"dashed":true}],
 "points":[{"x":1,"y":2,"label":"Ω(1;2)"}],
 "caption":"Hyperbole de centre $\\Omega(1;2)$ (asymptotes en pointillés) et demi-parabole $y=\\sqrt{x+2}$."}
```

# Exercices

:::exercice Ensembles de définition
Déterminer $D_f$ : $f_1(x)=\dfrac{x+3}{2x^2-5x+2}$ ; $f_2(x)=\sqrt{x^2-4}$ ; $f_3(x)=\dfrac{\sqrt{x}}{x-4}$ ; $f_4(x)=\dfrac{1}{\cos x}$.
:::

:::exercice Parité, périodicité
1. Étudier la parité de $f(x)=\dfrac{x^3}{x^2-1}$ et de $g(x)=x\sin x$.
2. Montrer que $h(x)=\cos^2x$ est $\pi$-périodique.
:::

:::exercice Variations et extremum
Soit $f(x)=\dfrac{x}{x^2+1}$. Montrer que pour tout réel $x$ : $f(x)\le\dfrac12$, puis que $\dfrac12$ est la valeur maximale de $f$ sur $\mathbb R$. Montrer que $f$ est bornée.
:::

:::exercice Composée
Soit $u(x)=x^2-2x$ et $v(x)=\sqrt x$.
1. Déterminer l’ensemble de définition de $v\circ u$ et l’expression de $(v\circ u)(x)$.
2. Étudier les variations de $u$ sur $[2;+\infty[$, puis celles de $v\circ u$ sur cet intervalle.
:::

:::exercice Homographique
Soit $f(x)=\dfrac{2x-1}{x+1}$. Déterminer $D_f$, le centre et les asymptotes de sa courbe, et son sens de variation.
:::

# Corrigés

:::corrige
- $2x^2-5x+2=(2x-1)(x-2)$ : $D_{f_1}=\mathbb R\setminus\left\{\dfrac12;2\right\}$.
- $x^2-4\ge0$ : $D_{f_2}=]-\infty;-2]\cup[2;+\infty[$.
- $x\ge0$ et $x\ne4$ : $D_{f_3}=[0;4[\cup]4;+\infty[$.
- $\cos x\ne0$ : $D_{f_4}=\mathbb R\setminus\left\{\dfrac\pi2+k\pi;\ k\in\mathbb Z\right\}$.
:::

:::corrige
1. $D_f=\mathbb R\setminus\{-1;1\}$ est symétrique et $f(-x)=\dfrac{-x^3}{x^2-1}=-f(x)$ : $f$ est impaire. $g(-x)=(-x)\sin(-x)=x\sin x=g(x)$ : $g$ est paire.
2. $h(x+\pi)=\cos^2(x+\pi)=(-\cos x)^2=\cos^2x=h(x)$.
:::

:::corrige
$\dfrac12-f(x)=\dfrac{x^2+1-2x}{2(x^2+1)}=\dfrac{(x-1)^2}{2(x^2+1)}\ge0$, donc $f(x)\le\dfrac12$, et $f(1)=\dfrac12$ : c’est la valeur maximale. Comme $f$ est impaire, $f(x)\ge-\dfrac12$ : $f$ est bornée ($|f(x)|\le\dfrac12$).
:::

:::corrige
1. Il faut $x^2-2x\ge0$, soit $x(x-2)\ge0$ : $D=]-\infty;0]\cup[2;+\infty[$ et $(v\circ u)(x)=\sqrt{x^2-2x}$.
2. $u$ est une parabole de sommet d’abscisse $1$, donc croissante sur $[2;+\infty[$ avec $u\left([2;+\infty[\right)=[0;+\infty[$ ; $v$ est croissante sur $[0;+\infty[$. Même monotonie : $v\circ u$ est croissante sur $[2;+\infty[$.
:::

:::corrige
$D_f=\mathbb R\setminus\{-1\}$. Centre $\Omega(-1;2)$, asymptotes $x=-1$ et $y=2$. $ad-bc=2\times1-(-1)\times1=3>0$ : $f$ est croissante sur $]-\infty;-1[$ et sur $]-1;+\infty[$.
:::
