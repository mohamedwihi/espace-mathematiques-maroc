---
id: 1bac-derivabilite
titre: La dérivation
niveau: 1bac
semestre: 2
duree: 16 heures
---

## Objectifs
- Étudier la dérivabilité d’une fonction en un point, à droite et à gauche ; interpréter géométriquement.
- Déterminer l’équation de la tangente et une approximation affine.
- Calculer la fonction dérivée à l’aide des dérivées usuelles et des opérations ; calculer une dérivée seconde.
- Utiliser le signe de la dérivée pour étudier les variations et les extremums d’une fonction.

## Prérequis
- Limites.
- Coefficient directeur et équation d’une droite.
- Généralités sur les fonctions.

# I. Dérivabilité en un point

:::definition
Soit $f$ définie sur un intervalle ouvert contenant $x_0$. On dit que $f$ est **dérivable en $x_0$** si la limite
$$\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}$$
existe et est **finie**. Cette limite, notée $f'(x_0)$, est le **nombre dérivé** de $f$ en $x_0$.
:::

:::exemple
$f(x)=x^2$ en $x_0=3$ : $\dfrac{f(x)-f(3)}{x-3}=\dfrac{x^2-9}{x-3}=x+3\to6$. Donc $f'(3)=6$.
:::

## Interprétation géométrique : la tangente

:::propriete
Si $f$ est dérivable en $x_0$, la courbe $(C_f)$ admet au point $A(x_0;f(x_0))$ une **tangente** de coefficient directeur $f'(x_0)$, d’équation
$$y=f'(x_0)(x-x_0)+f(x_0).$$
:::

:::propriete Approximation affine
Pour $h$ proche de $0$ : $f(x_0+h)\approx f(x_0)+hf'(x_0)$.
:::

:::exemple
$f(x)=\sqrt x$, $x_0=4$ : $f'(4)=\dfrac14$, d’où $\sqrt{4{,}1}\approx2+0{,}1\times\dfrac14=2{,}025$ (la calculatrice donne $2{,}0248\ldots$).
:::

```figure
{"type":"graph","x":[-2,3],"y":[-2,5],"width":320,
 "functions":[{"fn":"x*x","label":"y=x^2","color":"brand"},{"fn":"2*x-1","label":"T:\\ y=2x-1","color":"saffron"}],
 "points":[{"x":1,"y":1,"label":"A(1;1)"}],
 "caption":"Tangente à la parabole au point d’abscisse $1$ : son coefficient directeur est $f'(1)=2$."}
```

## Dérivabilité à droite et à gauche

:::definition
$f$ est **dérivable à droite** en $x_0$ si $\lim\limits_{x\to x_0^+}\dfrac{f(x)-f(x_0)}{x-x_0}=\ell_d$ est finie ; de même **à gauche** avec $\ell_g$. $f$ est dérivable en $x_0$ si et seulement si elle est dérivable à droite et à gauche avec $\ell_d=\ell_g$.
:::

:::remarque Interprétations
- Si $\ell_d\ne\ell_g$ (finis), la courbe a deux **demi-tangentes** de directions différentes : on parle de **point anguleux**.
- Si la limite du taux est $\pm\infty$, la courbe admet une **demi-tangente verticale**.
:::

:::exemple
- $f(x)=|x|$ en $0$ : $\ell_d=1$ et $\ell_g=-1$ : $f$ n’est pas dérivable en $0$ (point anguleux).
- $g(x)=\sqrt x$ en $0$ : $\dfrac{\sqrt x}{x}=\dfrac1{\sqrt x}\to+\infty$ : demi-tangente verticale en $O$.
:::

# II. Fonction dérivée

:::definition
$f$ est **dérivable sur un intervalle** $I$ si elle est dérivable en tout point de $I$ (à droite ou à gauche aux extrémités). La fonction $f':x\mapsto f'(x)$ est la **fonction dérivée** de $f$. Si $f'$ est elle-même dérivable, sa dérivée $f''$ est la **dérivée seconde**.
:::

:::propriete Dérivées usuelles
| $f(x)$ | $f'(x)$ | Intervalle |
|---|---|---|
| $k$ (constante) | $0$ | $\mathbb R$ |
| $x$ | $1$ | $\mathbb R$ |
| $x^n$ ($n\in\mathbb N^*$) | $nx^{n-1}$ | $\mathbb R$ |
| $\dfrac1x$ | $-\dfrac1{x^2}$ | $\mathbb R^*$ |
| $\dfrac1{x^n}$ | $-\dfrac{n}{x^{n+1}}$ | $\mathbb R^*$ |
| $\sqrt x$ | $\dfrac1{2\sqrt x}$ | $]0;+\infty[$ |
| $\sin x$ | $\cos x$ | $\mathbb R$ |
| $\cos x$ | $-\sin x$ | $\mathbb R$ |
| $\tan x$ | $1+\tan^2x=\dfrac1{\cos^2x}$ | $x\ne\dfrac\pi2+k\pi$ |
:::

:::propriete Opérations
Si $u$ et $v$ sont dérivables sur $I$ et $k$ est un réel :
| Fonction | Dérivée |
|---|---|
| $u+v$ | $u'+v'$ |
| $ku$ | $ku'$ |
| $uv$ | $u'v+uv'$ |
| $\dfrac1v$ ($v\ne0$) | $-\dfrac{v'}{v^2}$ |
| $\dfrac uv$ ($v\ne0$) | $\dfrac{u'v-uv'}{v^2}$ |
| $u^n$ | $nu'u^{n-1}$ |
| $\sqrt u$ ($u>0$) | $\dfrac{u'}{2\sqrt u}$ |
| $x\mapsto u(ax+b)$ | $x\mapsto au'(ax+b)$ |
:::

:::exemple
- $f(x)=(x^2+1)(3x-2)$ : $f'(x)=2x(3x-2)+3(x^2+1)=9x^2-4x+3$.
- $g(x)=\dfrac{2x+1}{x-3}$ : $g'(x)=\dfrac{2(x-3)-(2x+1)}{(x-3)^2}=\dfrac{-7}{(x-3)^2}$.
- $h(x)=\sqrt{x^2+9}$ : $h'(x)=\dfrac{2x}{2\sqrt{x^2+9}}=\dfrac{x}{\sqrt{x^2+9}}$.
- $k(x)=\sin(3x)$ : $k'(x)=3\cos(3x)$ ; $(2x-1)^5$ a pour dérivée $10(2x-1)^4$.
:::

# III. Applications de la dérivée

:::theoreme Sens de variation
Soit $f$ dérivable sur un intervalle $I$.
- Si $f'\ge0$ sur $I$ (s’annulant en un nombre fini de points), $f$ est **strictement croissante** sur $I$.
- Si $f'\le0$ sur $I$ (s’annulant en un nombre fini de points), $f$ est **strictement décroissante** sur $I$.
- Si $f'=0$ sur $I$, $f$ est **constante** sur $I$.
:::

:::propriete Extremums
Si $f$ est dérivable sur un intervalle ouvert $I$ et si $f'$ s’annule en $x_0\in I$ **en changeant de signe**, alors $f(x_0)$ est un **extremum local** de $f$ (maximum si $f'$ passe de $+$ à $-$, minimum si $f'$ passe de $-$ à $+$).
:::

:::exemple
$f(x)=x^3-3x+1$ : $f'(x)=3x^2-3=3(x-1)(x+1)$.
| $x$ | $-\infty$ … $-1$ | $-1$ … $1$ | $1$ … $+\infty$ |
|---|---|---|---|
| $f'(x)$ | $+$ | $-$ | $+$ |
| $f$ | croissante jusqu’à $f(-1)=3$ | décroissante jusqu’à $f(1)=-1$ | croissante |

$f(-1)=3$ est un maximum local et $f(1)=-1$ un minimum local.
:::

:::remarque
Si $f'(x_0)=0$ sans changement de signe, il n’y a pas d’extremum : par exemple $x\mapsto x^3$ en $0$.
:::

# Exercices

:::exercice Par la définition
1. Montrer que $f(x)=x^2-3x$ est dérivable en $2$ et calculer $f'(2)$.
2. Étudier la dérivabilité de $g(x)=\sqrt{x+3}$ en $1$ et à droite en $-3$.
:::

:::exercice Tangente et approximation
Soit $f(x)=\dfrac{1}{x}$. Écrire l’équation de la tangente au point d’abscisse $2$, puis donner une valeur approchée de $\dfrac{1}{2{,}01}$.
:::

:::exercice Calcul de dérivées
Calculer les dérivées de : $f_1(x)=4x^3-\dfrac{2}{x}+\sqrt x$ ; $f_2(x)=\dfrac{x^2}{x+1}$ ; $f_3(x)=(1-2x)^4$ ; $f_4(x)=\sqrt{1-x^2}$ ; $f_5(x)=x\cos x$ ; $f_6(x)=\tan(2x)$.
:::

:::exercice Variations
Étudier les variations de $f(x)=\dfrac{x^2+3}{x-1}$ sur $\mathbb R\setminus\{1\}$ et préciser ses extremums locaux.
:::

:::exercice Problème d’optimisation
On veut fabriquer un enclos rectangulaire de $200\ \text{m}^2$ le long d’un mur (le côté le long du mur n’a pas de clôture). Soit $x$ la largeur (côtés perpendiculaires au mur). Exprimer la longueur de clôture $L(x)$ et déterminer $x$ pour qu’elle soit minimale.
:::

# Corrigés

:::corrige
1. $\dfrac{f(x)-f(2)}{x-2}=\dfrac{x^2-3x+2}{x-2}=\dfrac{(x-2)(x-1)}{x-2}=x-1\to1$ : $f'(2)=1$.
2. En $1$ : $\dfrac{\sqrt{x+3}-2}{x-1}=\dfrac{1}{\sqrt{x+3}+2}\to\dfrac14$ : $g'(1)=\dfrac14$. À droite en $-3$ : $\dfrac{\sqrt{x+3}}{x+3}=\dfrac1{\sqrt{x+3}}\to+\infty$ : non dérivable, demi-tangente verticale.
:::

:::corrige
$f(2)=\dfrac12$, $f'(x)=-\dfrac1{x^2}$, $f'(2)=-\dfrac14$ : $y=-\dfrac14(x-2)+\dfrac12=-\dfrac14x+1$. $\dfrac1{2{,}01}\approx\dfrac12-0{,}01\times\dfrac14=0{,}4975$.
:::

:::corrige
- $f_1'(x)=12x^2+\dfrac2{x^2}+\dfrac1{2\sqrt x}$.
- $f_2'(x)=\dfrac{2x(x+1)-x^2}{(x+1)^2}=\dfrac{x^2+2x}{(x+1)^2}$.
- $f_3'(x)=4\times(-2)(1-2x)^3=-8(1-2x)^3$.
- $f_4'(x)=\dfrac{-2x}{2\sqrt{1-x^2}}=-\dfrac{x}{\sqrt{1-x^2}}$ sur $]-1;1[$.
- $f_5'(x)=\cos x-x\sin x$.
- $f_6'(x)=2\left(1+\tan^2(2x)\right)$.
:::

:::corrige
$f'(x)=\dfrac{2x(x-1)-(x^2+3)}{(x-1)^2}=\dfrac{x^2-2x-3}{(x-1)^2}=\dfrac{(x-3)(x+1)}{(x-1)^2}$. $f$ est croissante sur $]-\infty;-1]$, décroissante sur $[-1;1[$ et sur $]1;3]$, croissante sur $[3;+\infty[$. Maximum local $f(-1)=-2$ ; minimum local $f(3)=6$.
:::

:::corrige
La longueur parallèle au mur vaut $\dfrac{200}x$, donc $L(x)=2x+\dfrac{200}{x}$ pour $x>0$. $L'(x)=2-\dfrac{200}{x^2}=\dfrac{2(x^2-100)}{x^2}$, négatif sur $]0;10]$ et positif sur $[10;+\infty[$ : $L$ est minimale pour $x=10$ m (longueur $20$ m, clôture $40$ m).
:::
