---
id: tc-generalites-fonctions
titre: Généralités sur les fonctions numériques
niveau: tc
semestre: 2
duree: 14 heures
---

## Objectifs
- Déterminer l’ensemble de définition d’une fonction et lire sa courbe représentative.
- Étudier la parité d’une fonction et en déduire une symétrie de sa courbe.
- Étudier le sens de variation d’une fonction, notamment à l’aide du taux d’accroissement.
- Déterminer les extremums d’une fonction.
- Étudier et représenter les fonctions $x\mapsto ax^2$, $x\mapsto ax^2+bx+c$ et $x\mapsto\dfrac ax$.

## Prérequis
- Fonctions linéaires et affines (3AC).
- Ordre dans ℝ, intervalles.
- Polynômes, équations du second degré.

# I. Généralités

:::definition
- Une **fonction numérique** $f$ associe à chaque réel $x$ d’un ensemble $D_f$ un unique réel noté $f(x)$, appelé **image** de $x$. Si $f(x)=y$, $x$ est un **antécédent** de $y$.
- $D_f$ est l’**ensemble de définition** de $f$.
- Dans un repère, la **courbe représentative** $(C_f)$ de $f$ est l’ensemble des points $M(x;f(x))$ avec $x\in D_f$.
:::

:::methode Déterminer $D_f$
- Un polynôme est défini sur $\mathbb R$.
- $\dfrac{P(x)}{Q(x)}$ est défini si et seulement si $Q(x)\ne0$.
- $\sqrt{u(x)}$ est défini si et seulement si $u(x)\ge0$.
:::

:::exemple
- $f(x)=\dfrac{3}{x-2}$ : $D_f=\mathbb R\setminus\{2\}=]-\infty;2[\cup]2;+\infty[$.
- $g(x)=\sqrt{x-3}$ : $D_g=[3;+\infty[$.
- $h(x)=\dfrac{x}{x^2-4}$ : $D_h=\mathbb R\setminus\{-2;2\}$.
:::

:::definition Égalité de deux fonctions
Deux fonctions $f$ et $g$ sont égales si $D_f=D_g$ et $f(x)=g(x)$ pour tout $x$ de cet ensemble.
:::

# II. Fonction paire, fonction impaire

:::definition
Soit $f$ une fonction dont l’ensemble de définition $D_f$ est **symétrique par rapport à $0$** (pour tout $x\in D_f$, $-x\in D_f$).
- $f$ est **paire** si, pour tout $x\in D_f$, $f(-x)=f(x)$.
- $f$ est **impaire** si, pour tout $x\in D_f$, $f(-x)=-f(x)$.
:::

:::propriete
- La courbe d’une fonction paire est **symétrique par rapport à l’axe des ordonnées**.
- La courbe d’une fonction impaire est **symétrique par rapport à l’origine** $O$.
:::

:::exemple
- $f(x)=x^2+1$ : $D_f=\mathbb R$ et $f(-x)=x^2+1=f(x)$ : $f$ est paire.
- $g(x)=x^3-x$ : $g(-x)=-x^3+x=-g(x)$ : $g$ est impaire.
- $h(x)=x^2+x$ : $h(-1)=0$ et $h(1)=2$ ; $h(-1)\ne h(1)$ et $h(-1)\ne-h(1)$ : $h$ n’est ni paire ni impaire.
- $k(x)=\sqrt x$ : $D_k=[0;+\infty[$ n’est pas symétrique : $k$ n’est ni paire ni impaire.
:::

# III. Sens de variation

:::definition
Soit $f$ une fonction et $I$ un intervalle inclus dans $D_f$.
- $f$ est **croissante** sur $I$ si, pour tous $a$, $b$ de $I$ : $a<b\Rightarrow f(a)\le f(b)$ (**strictement** croissante si $f(a)<f(b)$).
- $f$ est **décroissante** sur $I$ si $a<b\Rightarrow f(a)\ge f(b)$ (**strictement** si $f(a)>f(b)$).
- $f$ est **constante** sur $I$ si $f(a)=f(b)$ pour tous $a$, $b$ de $I$.
:::

## Taux d’accroissement

:::definition
Pour $a\ne b$ dans $D_f$, le **taux d’accroissement** de $f$ entre $a$ et $b$ est
$$T=\frac{f(b)-f(a)}{b-a}.$$
:::

:::propriete
- Si $T>0$ pour tous $a\ne b$ de $I$, $f$ est strictement croissante sur $I$.
- Si $T<0$ pour tous $a\ne b$ de $I$, $f$ est strictement décroissante sur $I$.
:::

:::exemple
$f(x)=x^2$. Pour $a\ne b$ : $T=\dfrac{b^2-a^2}{b-a}=a+b$.
- Sur $[0;+\infty[$ : $a+b>0$ (avec $a\ne b$), donc $f$ est strictement croissante.
- Sur $]-\infty;0]$ : $a+b<0$, donc $f$ est strictement décroissante.
:::

:::remarque Fonction paire ou impaire et variations
Si $f$ est paire, ses variations sur $]-\infty;0]$ sont **contraires** à celles sur $[0;+\infty[$ ; si $f$ est impaire, elles sont **les mêmes**. On étudie donc $f$ sur $D_f\cap[0;+\infty[$ seulement.
:::

# IV. Extremums

:::definition
Soit $f$ une fonction définie sur un intervalle $I$ et $a\in I$.
- $f(a)$ est la **valeur maximale** de $f$ sur $I$ si $f(x)\le f(a)$ pour tout $x\in I$.
- $f(a)$ est la **valeur minimale** de $f$ sur $I$ si $f(x)\ge f(a)$ pour tout $x\in I$.
:::

:::exemple
$f(x)=(x-1)^2+3$ : pour tout $x$, $(x-1)^2\ge0$ donc $f(x)\ge3=f(1)$. Le minimum de $f$ sur $\mathbb R$ est $3$, atteint en $x=1$.
:::

# V. Étude de fonctions usuelles

## 1. La fonction $x\mapsto ax^2$ ($a\ne0$)

:::propriete
$f(x)=ax^2$ est paire. Sa courbe est une **parabole** de sommet $O$ et d’axe de symétrie l’axe des ordonnées.
- Si $a>0$ : $f$ est décroissante sur $]-\infty;0]$, croissante sur $[0;+\infty[$ ; minimum $0$.
- Si $a<0$ : $f$ est croissante sur $]-\infty;0]$, décroissante sur $[0;+\infty[$ ; maximum $0$.
:::

## 2. La fonction $x\mapsto ax^2+bx+c$ ($a\ne0$)

:::propriete
Avec $\alpha=-\dfrac b{2a}$ et $\beta=f(\alpha)$, on a $f(x)=a(x-\alpha)^2+\beta$. Sa courbe est une parabole de **sommet** $S(\alpha;\beta)$ et d’**axe de symétrie** la droite $x=\alpha$.
| Cas | Sur $]-\infty;\alpha]$ | Sur $[\alpha;+\infty[$ | Extremum |
|---|---|---|---|
| $a>0$ | décroissante | croissante | minimum $\beta$ |
| $a<0$ | croissante | décroissante | maximum $\beta$ |
:::

:::exemple
$f(x)=x^2-4x+1$ : $\alpha=2$, $\beta=f(2)=-3$, donc $f(x)=(x-2)^2-3$. $f$ décroît sur $]-\infty;2]$, croît sur $[2;+\infty[$ ; son minimum est $-3$.
:::

## 3. La fonction $x\mapsto\dfrac ax$ ($a\ne0$)

:::propriete
$f(x)=\dfrac ax$ est définie sur $\mathbb R^*$ et impaire. Sa courbe est une **hyperbole** de centre $O$ et d’asymptotes les axes du repère.
- Si $a>0$ : $f$ est strictement décroissante sur $]-\infty;0[$ et sur $]0;+\infty[$.
- Si $a<0$ : $f$ est strictement croissante sur chacun de ces intervalles.
:::

```figure
{"type":"graph","x":[-4,5],"y":[-4,6],"width":340,"orthonormal":true,
 "functions":[{"fn":"x*x-4*x+1","label":"y=x^2-4x+1","color":"brand"},{"fn":"2/x","label":"y=\\frac2x","color":"saffron","domain":[0.3,5]},{"fn":"2/x","label":"","color":"saffron","domain":[-4,-0.3]}],
 "points":[{"x":2,"y":-3,"label":"S(2;−3)"}],
 "caption":"Parabole de sommet $S(2;-3)$ et hyperbole d’équation $y=\\dfrac2x$."}
```

# Exercices

:::exercice Ensembles de définition
Déterminer l’ensemble de définition de : $f(x)=\dfrac{2x+1}{x^2-9}$ ; $g(x)=\sqrt{4-2x}$ ; $h(x)=\dfrac{1}{\sqrt{x+1}}$ ; $k(x)=\dfrac{x}{x^2+1}$.
:::

:::exercice Parité
Étudier la parité de : $f(x)=3x^4-x^2+2$ ; $g(x)=\dfrac{x}{x^2+1}$ ; $h(x)=x^3+1$ ; $k(x)=|x|+\dfrac1{x^2}$.
:::

:::exercice Taux d’accroissement
Soit $f(x)=\dfrac{1}{x}$ sur $]0;+\infty[$. Calculer le taux d’accroissement de $f$ entre $a$ et $b$ ($a\ne b$) et en déduire le sens de variation de $f$.
:::

:::exercice Parabole
Soit $f(x)=-2x^2+8x-5$.
1. Écrire $f(x)$ sous la forme $a(x-\alpha)^2+\beta$.
2. Dresser le tableau de variation de $f$ et donner son extremum.
3. Préciser le sommet et l’axe de symétrie de sa courbe.
:::

:::exercice Extremum
Montrer que, pour tout réel $x$, $\dfrac{1}{x^2+1}\le1$. En déduire la valeur maximale de $g(x)=\dfrac{1}{x^2+1}$ sur $\mathbb R$.
:::

# Corrigés

:::corrige
- $x^2-9\ne0$ : $D_f=\mathbb R\setminus\{-3;3\}$.
- $4-2x\ge0\iff x\le2$ : $D_g=]-\infty;2]$.
- $x+1>0$ : $D_h=]-1;+\infty[$.
- $x^2+1>0$ toujours : $D_k=\mathbb R$.
:::

:::corrige
- $f(-x)=f(x)$ : paire.
- $g(-x)=\dfrac{-x}{x^2+1}=-g(x)$ : impaire.
- $h(-1)=0$ et $h(1)=2$ : ni paire ni impaire.
- $D_k=\mathbb R^*$ (symétrique) et $k(-x)=k(x)$ : paire.
:::

:::corrige
$T=\dfrac{\frac1b-\frac1a}{b-a}=\dfrac{a-b}{ab(b-a)}=-\dfrac{1}{ab}$. Pour $a$, $b>0$, $T<0$ : $f$ est strictement décroissante sur $]0;+\infty[$.
:::

:::corrige
1. $f(x)=-2\left(x^2-4x\right)-5=-2\left[(x-2)^2-4\right]-5=-2(x-2)^2+3$.
2. $a=-2<0$ : $f$ croît sur $]-\infty;2]$ et décroît sur $[2;+\infty[$ ; maximum $f(2)=3$.
3. Sommet $S(2;3)$ ; axe de symétrie : la droite d’équation $x=2$.
:::

:::corrige
$x^2+1\ge1>0$, donc $\dfrac{1}{x^2+1}\le1$. Comme $g(0)=1$, la valeur maximale de $g$ sur $\mathbb R$ est $1$, atteinte en $0$.
:::
