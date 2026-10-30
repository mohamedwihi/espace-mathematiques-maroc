---
id: 1bac-limites
titre: Limite d’une fonction numérique
niveau: 1bac
semestre: 2
duree: 14 heures
---

## Objectifs
- Comprendre et utiliser les limites finies et infinies en un point et à l’infini.
- Connaître les limites des fonctions usuelles et les opérations sur les limites.
- Reconnaître et lever une forme indéterminée (polynômes, fonctions rationnelles, irrationnelles).
- Utiliser les limites trigonométriques usuelles.
- Utiliser les théorèmes de comparaison (limites et ordre).

## Prérequis
- Généralités sur les fonctions.
- Factorisation, quantité conjuguée.
- Trigonométrie.

# I. Limites usuelles

## 1. Limite finie en un point

:::definition
Soit $f$ une fonction définie au voisinage de $a$ (sauf peut-être en $a$). On dit que $f$ admet pour limite $\ell$ en $a$, et on note $\lim\limits_{x\to a}f(x)=\ell$, si $f(x)$ devient aussi proche que l’on veut de $\ell$ dès que $x$ est suffisamment proche de $a$.
:::

:::propriete
- Si $f$ est un polynôme, une fonction rationnelle définie en $a$, ou $\sqrt x$ avec $a\ge0$, alors $\lim\limits_{x\to a}f(x)=f(a)$.
- $\lim\limits_{x\to0}x^n=0$ ($n\in\mathbb N^*$) ; $\lim\limits_{x\to0^+}\sqrt x=0$.
:::

## 2. Limite infinie en un point — limites à droite et à gauche

:::propriete
$$\lim_{x\to0^+}\frac1x=+\infty\qquad\lim_{x\to0^-}\frac1x=-\infty\qquad\lim_{x\to0}\frac1{x^2}=+\infty\qquad\lim_{x\to0^+}\frac1{\sqrt x}=+\infty.$$
Plus généralement, pour $n\in\mathbb N^*$ : $\lim\limits_{x\to0^+}\dfrac1{x^n}=+\infty$, et $\lim\limits_{x\to0^-}\dfrac1{x^n}=+\infty$ si $n$ est pair, $-\infty$ si $n$ est impair.
:::

:::propriete
$f$ admet une limite $\ell$ en $a$ si et seulement si elle admet en $a$ une limite à droite et une limite à gauche **égales** à $\ell$.
:::

## 3. Limites à l’infini

:::propriete
Pour $n\in\mathbb N^*$ :
$$\lim_{x\to+\infty}x^n=+\infty\qquad\lim_{x\to-\infty}x^n=\begin{cases}+\infty&n\text{ pair}\\-\infty&n\text{ impair}\end{cases}\qquad\lim_{x\to\pm\infty}\frac1{x^n}=0\qquad\lim_{x\to+\infty}\sqrt x=+\infty.$$
:::

# II. Opérations sur les limites

:::propriete
Soient $\ell$ et $\ell'$ des réels. Les limites (en $a$ ou en $\pm\infty$) se calculent ainsi :

| $\lim f$ | $\lim g$ | $\lim(f+g)$ | $\lim(f\times g)$ |
|---|---|---|---|
| $\ell$ | $\ell'$ | $\ell+\ell'$ | $\ell\ell'$ |
| $\ell$ | $+\infty$ | $+\infty$ | $\pm\infty$ selon le signe de $\ell\ne0$ |
| $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ |
| $+\infty$ | $-\infty$ | **F.I.** | $-\infty$ |
| $0$ | $\pm\infty$ | $\pm\infty$ | **F.I.** |

Pour le quotient : $\lim\dfrac fg=\dfrac{\ell}{\ell'}$ si $\ell'\ne0$ ; $\dfrac{\ell}{\pm\infty}\to0$ ; $\dfrac{\ell}{0^\pm}\to\pm\infty$ (selon les signes) si $\ell\ne0$ ; $\dfrac00$ et $\dfrac\infty\infty$ sont des **formes indéterminées**.
:::

:::remarque
Les quatre formes indéterminées sont : $+\infty-\infty$ ; $0\times\infty$ ; $\dfrac00$ ; $\dfrac\infty\infty$. Il faut alors transformer l’expression.
:::

# III. Lever une indétermination

:::propriete Polynômes et fonctions rationnelles à l’infini
- La limite d’un polynôme en $\pm\infty$ est celle de son **terme de plus haut degré**.
- La limite d’une fonction rationnelle en $\pm\infty$ est celle du **quotient des termes de plus haut degré**.
:::

:::exemple
$$\lim_{x\to-\infty}\left(2x^3-5x^2+1\right)=\lim_{x\to-\infty}2x^3=-\infty\qquad\lim_{x\to+\infty}\frac{3x^2-x}{1-2x^2}=\lim_{x\to+\infty}\frac{3x^2}{-2x^2}=-\frac32.$$
:::

:::methode Forme $\dfrac00$ en $a$
Factoriser numérateur et dénominateur par $(x-a)$, puis simplifier.
:::

:::exemple
$$\lim_{x\to2}\frac{x^2-3x+2}{x^2-4}=\lim_{x\to2}\frac{(x-2)(x-1)}{(x-2)(x+2)}=\lim_{x\to2}\frac{x-1}{x+2}=\frac14.$$
:::

:::methode Fonctions irrationnelles
- En un point : multiplier par la **quantité conjuguée**.
- À l’infini : factoriser par le terme dominant sous la racine, en utilisant $\sqrt{x^2}=|x|$.
:::

:::exemple
$$\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}=\lim_{x\to0}\frac{x}{x\left(\sqrt{x+1}+1\right)}=\frac12.$$
$$\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)=\lim_{x\to+\infty}\frac{x}{\sqrt{x^2+x}+x}=\lim_{x\to+\infty}\frac{1}{\sqrt{1+\frac1x}+1}=\frac12.$$
:::

# IV. Limites trigonométriques

:::propriete
$$\lim_{x\to0}\frac{\sin x}{x}=1\qquad\lim_{x\to0}\frac{\tan x}{x}=1\qquad\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12.$$
:::

:::exemple
$$\lim_{x\to0}\frac{\sin3x}{x}=\lim_{x\to0}3\times\frac{\sin3x}{3x}=3\qquad\lim_{x\to0}\frac{1-\cos x}{x\sin x}=\lim_{x\to0}\frac{1-\cos x}{x^2}\times\frac{x}{\sin x}=\frac12.$$
:::

```figure
{"type":"graph","x":[-10,10],"y":[-0.5,1.5],"width":380,
 "functions":[{"fn":"abs(x)<1e-9?1:sin(x)/x","label":"y=\\frac{\\sin x}{x}","color":"brand"}],
 "points":[{"x":0,"y":1,"label":"(0;1)"}],
 "caption":"Quand $x$ tend vers $0$, $\\dfrac{\\sin x}x$ tend vers $1$."}
```

# V. Limites et ordre

:::theoreme Théorèmes de comparaison
Soient $f$, $u$ et $v$ définies au voisinage de $a$ ($a$ réel ou $\pm\infty$).
- **Gendarmes** : si $u(x)\le f(x)\le v(x)$ et $\lim u=\lim v=\ell$, alors $\lim f=\ell$.
- Si $|f(x)-\ell|\le u(x)$ et $\lim u=0$, alors $\lim f=\ell$.
- Si $f(x)\ge u(x)$ et $\lim u=+\infty$, alors $\lim f=+\infty$.
- Si $f(x)\le v(x)$ et $\lim v=-\infty$, alors $\lim f=-\infty$.
:::

:::exemple
$\lim\limits_{x\to+\infty}\dfrac{\sin x}{x}$ : pour $x>0$, $\left|\dfrac{\sin x}x\right|\le\dfrac1x$ et $\lim\limits_{x\to+\infty}\dfrac1x=0$, donc la limite vaut $0$.

$\lim\limits_{x\to+\infty}(x+\cos x)$ : $x+\cos x\ge x-1$ et $\lim(x-1)=+\infty$, donc la limite vaut $+\infty$.
:::

# Exercices

:::exercice Polynômes et rationnelles
Calculer : $\lim\limits_{x\to+\infty}\left(-3x^4+x^2-7\right)$ ; $\lim\limits_{x\to-\infty}\dfrac{2x^3+1}{x^2-x}$ ; $\lim\limits_{x\to+\infty}\dfrac{5x+2}{2x-3}$ ; $\lim\limits_{x\to1^+}\dfrac{2x}{x-1}$ et $\lim\limits_{x\to1^-}\dfrac{2x}{x-1}$.
:::

:::exercice Forme $\frac00$
Calculer : $\lim\limits_{x\to-1}\dfrac{x^2+3x+2}{x+1}$ ; $\lim\limits_{x\to3}\dfrac{x^2-9}{x^2-x-6}$ ; $\lim\limits_{x\to4}\dfrac{\sqrt x-2}{x-4}$.
:::

:::exercice Irrationnelles à l’infini
Calculer : $\lim\limits_{x\to+\infty}\left(\sqrt{x^2+1}-x\right)$ ; $\lim\limits_{x\to-\infty}\dfrac{\sqrt{x^2+1}}{x}$ ; $\lim\limits_{x\to+\infty}\left(x-\sqrt x\right)$.
:::

:::exercice Trigonométrie
Calculer : $\lim\limits_{x\to0}\dfrac{\sin5x}{2x}$ ; $\lim\limits_{x\to0}\dfrac{\tan x}{\sin2x}$ ; $\lim\limits_{x\to0}\dfrac{1-\cos2x}{x^2}$.
:::

:::exercice Comparaison
1. Montrer que pour tout $x>0$ : $\dfrac{x-1}{x}\le\dfrac{x+\sin x}{x}\le\dfrac{x+1}{x}$ et en déduire $\lim\limits_{x\to+\infty}\dfrac{x+\sin x}{x}$.
2. Calculer $\lim\limits_{x\to-\infty}\left(x^2+2\sin x\right)$.
:::

:::exercice Série — formes indéterminées
Calculer : $\lim\limits_{x\to2}\dfrac{x^2-4}{x^2-3x+2}$ ; $\lim\limits_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$ ; $\lim\limits_{x\to0}\dfrac{\sqrt{x+4}-2}{x}$.
:::

:::exercice Série — trigonométrie
Calculer : $\lim\limits_{x\to0}\dfrac{\sin3x}{x}$ ; $\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}$ ; $\lim\limits_{x\to0}\dfrac{\tan2x}{\sin x}$.
:::

# Corrigés

:::corrige
$-\infty$ ; $\lim\limits_{x\to-\infty}\dfrac{2x^3}{x^2}=\lim 2x=-\infty$ ; $\dfrac52$ ; en $1^+$, $\dfrac{2}{0^+}\to+\infty$ et en $1^-$, $\dfrac2{0^-}\to-\infty$.
:::

:::corrige
- $\dfrac{(x+1)(x+2)}{x+1}=x+2\to1$.
- $\dfrac{(x-3)(x+3)}{(x-3)(x+2)}=\dfrac{x+3}{x+2}\to\dfrac65$.
- $\dfrac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\dfrac1{\sqrt x+2}\to\dfrac14$.
:::

:::corrige
- $\dfrac{1}{\sqrt{x^2+1}+x}\to0$.
- Pour $x<0$, $\sqrt{x^2+1}=|x|\sqrt{1+\frac1{x^2}}=-x\sqrt{1+\frac1{x^2}}$, donc le quotient vaut $-\sqrt{1+\frac1{x^2}}\to-1$.
- $x-\sqrt x=\sqrt x\left(\sqrt x-1\right)\to+\infty$.
:::

:::corrige
- $\dfrac52\times\dfrac{\sin5x}{5x}\to\dfrac52$.
- $\dfrac{\tan x}{x}\times\dfrac{2x}{\sin2x}\times\dfrac12\to\dfrac12$.
- $1-\cos2x=2\sin^2x$, donc $\dfrac{2\sin^2x}{x^2}\to2$.
:::

:::corrige
1. $-1\le\sin x\le1$ donne l’encadrement (en divisant par $x>0$). Les deux bornes tendent vers $1$ : d’après le théorème des gendarmes, la limite vaut $1$.
2. $x^2+2\sin x\ge x^2-2$ et $\lim\limits_{x\to-\infty}(x^2-2)=+\infty$ : la limite vaut $+\infty$.
:::

:::corrige
- $\dfrac{(x-2)(x+2)}{(x-2)(x-1)}=\dfrac{x+2}{x-1}\to4$.
- $\dfrac{x}{\sqrt{x^2+x}+x}=\dfrac{1}{\sqrt{1+\frac1x}+1}\to\dfrac12$.
- $\dfrac{x}{x\left(\sqrt{x+4}+2\right)}\to\dfrac14$.
:::

:::corrige
- $3\times\dfrac{\sin3x}{3x}\to3$.
- $\dfrac12$ (limite de référence).
- $\dfrac{\tan2x}{2x}\times\dfrac{x}{\sin x}\times2\to2$.
:::
