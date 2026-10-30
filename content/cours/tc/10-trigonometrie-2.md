---
id: tc-trigonometrie-2
titre: Calcul trigonométrique (partie 2)
niveau: tc
semestre: 2
duree: 8 heures
---

## Objectifs
- Résoudre les équations trigonométriques élémentaires $\cos x=a$, $\sin x=a$ et $\tan x=a$.
- Représenter les solutions sur le cercle trigonométrique.
- Résoudre des inéquations trigonométriques élémentaires sur un intervalle.

## Prérequis
- Cercle trigonométrique, abscisses curvilignes.
- Lignes trigonométriques, valeurs remarquables et relations entre les angles (partie 1).

# I. Équations trigonométriques élémentaires

## 1. L’équation $\cos x=a$

:::propriete
- Si $a<-1$ ou $a>1$, l’équation $\cos x=a$ n’a **pas de solution**.
- Si $-1\le a\le1$, il existe un réel $\alpha\in[0;\pi]$ tel que $\cos\alpha=a$, et
$$\cos x=\cos\alpha\iff x=\alpha+2k\pi\ \text{ ou }\ x=-\alpha+2k\pi\qquad(k\in\mathbb Z).$$
:::

:::exemple
Résoudre $\cos x=\dfrac12$ dans $\mathbb R$ puis dans $[0;2\pi[$.

$\cos x=\cos\dfrac\pi3\iff x=\dfrac\pi3+2k\pi$ ou $x=-\dfrac\pi3+2k\pi$. Dans $[0;2\pi[$ : $S=\left\{\dfrac\pi3;\dfrac{5\pi}3\right\}$.
:::

## 2. L’équation $\sin x=a$

:::propriete
- Si $a<-1$ ou $a>1$ : pas de solution.
- Si $-1\le a\le1$, il existe $\alpha\in\left[-\dfrac\pi2;\dfrac\pi2\right]$ tel que $\sin\alpha=a$, et
$$\sin x=\sin\alpha\iff x=\alpha+2k\pi\ \text{ ou }\ x=\pi-\alpha+2k\pi\qquad(k\in\mathbb Z).$$
:::

:::exemple
Résoudre $2\sin x+\sqrt3=0$ dans $]-\pi;\pi]$.

$\sin x=-\dfrac{\sqrt3}2=\sin\left(-\dfrac\pi3\right)\iff x=-\dfrac\pi3+2k\pi$ ou $x=\pi+\dfrac\pi3+2k\pi=\dfrac{4\pi}3+2k\pi$. Dans $]-\pi;\pi]$ : $S=\left\{-\dfrac{2\pi}3;-\dfrac\pi3\right\}$.
:::

## 3. L’équation $\tan x=a$

:::propriete
Pour tout réel $a$, il existe un unique $\alpha\in\left]-\dfrac\pi2;\dfrac\pi2\right[$ tel que $\tan\alpha=a$, et
$$\tan x=\tan\alpha\iff x=\alpha+k\pi\qquad(k\in\mathbb Z),\quad\text{avec } x\ne\frac\pi2+k\pi.$$
:::

:::exemple
$\tan x=1\iff x=\dfrac\pi4+k\pi$. Dans $[0;2\pi[$ : $S=\left\{\dfrac\pi4;\dfrac{5\pi}4\right\}$.
:::

:::methode Se ramener à une équation élémentaire
- Isoler $\cos x$ (ou $\sin x$, $\tan x$), puis reconnaître une valeur remarquable.
- Pour $\cos(2x)=a$ ou $\sin\left(x-\dfrac\pi4\right)=a$, on résout d’abord en $X=2x$ ou $X=x-\dfrac\pi4$, puis on revient à $x$.
- Pour $2\cos^2x-\cos x-1=0$, on pose $X=\cos x$ : $2X^2-X-1=0$ donne $X=1$ ou $X=-\dfrac12$.
:::

:::exemple
Résoudre $\cos2x=\dfrac{\sqrt2}2$ dans $[0;\pi]$ : $2x=\dfrac\pi4+2k\pi$ ou $2x=-\dfrac\pi4+2k\pi$, soit $x=\dfrac\pi8+k\pi$ ou $x=-\dfrac\pi8+k\pi$. Dans $[0;\pi]$ : $S=\left\{\dfrac\pi8;\dfrac{7\pi}8\right\}$.
:::

# II. Inéquations trigonométriques élémentaires

:::methode
1. Résoudre l’équation associée sur l’intervalle d’étude.
2. Placer les solutions sur le cercle trigonométrique.
3. Repérer l’arc de cercle sur lequel l’inégalité est vérifiée : pour $\cos x\ge a$, les points dont l’**abscisse** est $\ge a$ ; pour $\sin x\ge a$, les points dont l’**ordonnée** est $\ge a$.
4. Lire les solutions en parcourant l’intervalle d’étude dans le sens croissant.
:::

```figure
{"type":"geometry","x":[-1.4,1.6],"y":[-1.3,1.3],"width":290,
 "circles":[{"c":[0,0],"r":1}],
 "segments":[{"from":[-1.3,0],"to":[1.4,0]},{"from":[0,-1.2],"to":[0,1.2]},{"from":[0.5,-1.15],"to":[0.5,1.15],"dashed":true,"color":"brand"}],
 "points":[{"x":0.5,"y":0.866,"label":"π/3"},{"x":0.5,"y":-0.866,"label":"5π/3"},{"x":1,"y":0,"label":"0"}],
 "caption":"$\\cos x\\ge\\dfrac12$ : les points du cercle situés à droite de la droite $x=\\dfrac12$."}
```

:::exemple
Résoudre $\cos x\ge\dfrac12$ dans $[0;2\pi[$. Les solutions de $\cos x=\dfrac12$ sont $\dfrac\pi3$ et $\dfrac{5\pi}3$. Les points d’abscisse $\ge\dfrac12$ sont sur l’arc qui contient $I$ : $S=\left[0;\dfrac\pi3\right]\cup\left[\dfrac{5\pi}3;2\pi\right[$.
:::

:::exemple
Résoudre $\sin x>\dfrac{\sqrt3}2$ dans $[0;2\pi[$. $\sin x=\dfrac{\sqrt3}2$ pour $\dfrac\pi3$ et $\dfrac{2\pi}3$ ; les points d’ordonnée $>\dfrac{\sqrt3}2$ sont sur l’arc supérieur entre eux : $S=\left]\dfrac\pi3;\dfrac{2\pi}3\right[$.
:::

:::exemple
Résoudre $\tan x\le1$ dans $\left]-\dfrac\pi2;\dfrac\pi2\right[$ : $\tan$ est croissante sur cet intervalle, donc $S=\left]-\dfrac\pi2;\dfrac\pi4\right]$.
:::

# Exercices

:::exercice Équations en cosinus
Résoudre dans $\mathbb R$ puis dans $]-\pi;\pi]$ : $\cos x=-\dfrac{\sqrt2}2$ ; $2\cos x-\sqrt3=0$ ; $\cos x=2$.
:::

:::exercice Équations en sinus et tangente
Résoudre dans $[0;2\pi[$ : $\sin x=\dfrac12$ ; $\sqrt2\sin x+1=0$ ; $\tan x=-\sqrt3$.
:::

:::exercice Changement de variable
Résoudre dans $[0;2\pi[$ : $\sin\left(x+\dfrac\pi6\right)=1$ ; $\cos3x=0$.
:::

:::exercice Équation du second degré
Résoudre dans $[0;2\pi[$ : $2\cos^2x-\cos x-1=0$.
:::

:::exercice Inéquations
Résoudre dans $[0;2\pi[$ : $\cos x<-\dfrac12$ ; $2\sin x-1\ge0$. Résoudre dans $]-\pi;\pi]$ : $\cos x>0$.
:::

# Corrigés

:::corrige
- $\cos x=\cos\dfrac{3\pi}4$ : $x=\pm\dfrac{3\pi}4+2k\pi$ ; dans $]-\pi;\pi]$ : $\left\{-\dfrac{3\pi}4;\dfrac{3\pi}4\right\}$.
- $\cos x=\dfrac{\sqrt3}2$ : $x=\pm\dfrac\pi6+2k\pi$ ; dans $]-\pi;\pi]$ : $\left\{-\dfrac\pi6;\dfrac\pi6\right\}$.
- $2>1$ : pas de solution.
:::

:::corrige
- $\left\{\dfrac\pi6;\dfrac{5\pi}6\right\}$.
- $\sin x=-\dfrac{\sqrt2}2=\sin\left(-\dfrac\pi4\right)$ : $x=-\dfrac\pi4+2k\pi$ ou $x=\dfrac{5\pi}4+2k\pi$ ; dans $[0;2\pi[$ : $\left\{\dfrac{5\pi}4;\dfrac{7\pi}4\right\}$.
- $\tan x=\tan\left(-\dfrac\pi3\right)$ : $x=-\dfrac\pi3+k\pi$ ; $\left\{\dfrac{2\pi}3;\dfrac{5\pi}3\right\}$.
:::

:::corrige
- $x+\dfrac\pi6=\dfrac\pi2+2k\pi$, donc $x=\dfrac\pi3+2k\pi$ : $S=\left\{\dfrac\pi3\right\}$.
- $3x=\dfrac\pi2+k\pi$, donc $x=\dfrac\pi6+\dfrac{k\pi}3$ : $S=\left\{\dfrac\pi6;\dfrac\pi2;\dfrac{5\pi}6;\dfrac{7\pi}6;\dfrac{3\pi}2;\dfrac{11\pi}6\right\}$.
:::

:::corrige
Avec $X=\cos x$ : $2X^2-X-1=0$, $\Delta=9$, $X=1$ ou $X=-\dfrac12$. $\cos x=1$ donne $x=0$ ; $\cos x=-\dfrac12$ donne $x=\dfrac{2\pi}3$ ou $x=\dfrac{4\pi}3$. $S=\left\{0;\dfrac{2\pi}3;\dfrac{4\pi}3\right\}$.
:::

:::corrige
- $\cos x=-\dfrac12$ pour $\dfrac{2\pi}3$ et $\dfrac{4\pi}3$ : $S=\left]\dfrac{2\pi}3;\dfrac{4\pi}3\right[$.
- $\sin x\ge\dfrac12$ : $S=\left[\dfrac\pi6;\dfrac{5\pi}6\right]$.
- $\cos x>0$ dans $]-\pi;\pi]$ : $S=\left]-\dfrac\pi2;\dfrac\pi2\right[$.
:::
