---
id: 2bac-calcul-integral
titre: Le calcul intégral
niveau: 2bac
semestre: 2
duree: 14 heures
---

## Objectifs
- Définir l’intégrale d’une fonction continue sur un segment à l’aide d’une primitive.
- Utiliser les propriétés de l’intégrale : relation de Chasles, linéarité, ordre, valeur moyenne.
- Calculer une intégrale par intégration par parties.
- Calculer des aires et des volumes de solides de révolution.

## Prérequis
- Primitives ; fonctions logarithme et exponentielle.
- Étude de fonctions, positions relatives de courbes.

# I. Intégrale d’une fonction continue

:::definition
Soit $f$ continue sur un intervalle $I$, $F$ une primitive de $f$ sur $I$, et $a$, $b$ deux éléments de $I$. Le nombre $F(b)-F(a)$ ne dépend pas de la primitive choisie ; on l’appelle **intégrale** de $f$ de $a$ à $b$ et on note
$$\int_a^bf(x)\,dx=\big[F(x)\big]_a^b=F(b)-F(a).$$
:::

:::exemple
$\displaystyle\int_0^2x^2\,dx=\left[\frac{x^3}3\right]_0^2=\frac83$ ; $\displaystyle\int_1^e\frac{dx}x=\big[\ln x\big]_1^e=1$ ; $\displaystyle\int_0^{\frac\pi2}\cos x\,dx=\big[\sin x\big]_0^{\frac\pi2}=1$.
:::

:::propriete
- $\displaystyle\int_a^af(x)\,dx=0$ et $\displaystyle\int_b^af(x)\,dx=-\int_a^bf(x)\,dx$.
- La fonction $x\mapsto\displaystyle\int_a^xf(t)\,dt$ est **la primitive de $f$ qui s’annule en $a$**.
:::

# II. Propriétés

:::propriete
Pour $f$ et $g$ continues sur $I$, $a$, $b$, $c$ dans $I$ et $\alpha$, $\beta$ réels :
- **Relation de Chasles** : $\displaystyle\int_a^cf=\int_a^bf+\int_b^cf$.
- **Linéarité** : $\displaystyle\int_a^b(\alpha f+\beta g)=\alpha\int_a^bf+\beta\int_a^bg$.
- **Positivité** : si $a\le b$ et $f\ge0$ sur $[a;b]$, alors $\displaystyle\int_a^bf\ge0$.
- **Ordre** : si $a\le b$ et $f\le g$ sur $[a;b]$, alors $\displaystyle\int_a^bf\le\int_a^bg$.
- Si $a\le b$ : $\left|\displaystyle\int_a^bf\right|\le\displaystyle\int_a^b|f|$.
:::

:::exemple
$\displaystyle\int_{-1}^2|x|\,dx=\int_{-1}^0(-x)\,dx+\int_0^2x\,dx=\frac12+2=\frac52$.
:::

:::definition Valeur moyenne
Si $a<b$, la **valeur moyenne** de $f$ sur $[a;b]$ est
$$\mu=\frac1{b-a}\int_a^bf(x)\,dx.$$
Si $m\le f\le M$ sur $[a;b]$, alors $m(b-a)\le\displaystyle\int_a^bf\le M(b-a)$ et $m\le\mu\le M$.
:::

:::exemple
Valeur moyenne de $f(x)=x^2$ sur $[0;3]$ : $\mu=\dfrac13\displaystyle\int_0^3x^2\,dx=\dfrac13\times9=3$.
:::

# III. Intégration par parties

:::theoreme
Si $u$ et $v$ sont dérivables sur $I$ avec $u'$ et $v'$ continues, alors
$$\int_a^bu(x)v'(x)\,dx=\big[u(x)v(x)\big]_a^b-\int_a^bu'(x)v(x)\,dx.$$
:::

:::demonstration
$(uv)'=u'v+uv'$, donc $uv$ est une primitive de $u'v+uv'$ : $\displaystyle\int_a^b(u'v+uv')=\big[uv\big]_a^b$, d’où le résultat par linéarité.
:::

:::methode Choisir $u$ et $v'$
On choisit $u$ qui se simplifie en dérivant (un polynôme, $\ln x$) et $v'$ dont on connaît une primitive ($e^x$, $\cos x$, $x^n$…).
:::

:::exemple
$\displaystyle I=\int_0^1xe^x\,dx$ : $u=x$, $v'=e^x$, $u'=1$, $v=e^x$. $I=\big[xe^x\big]_0^1-\int_0^1e^x\,dx=e-(e-1)=1$.

$\displaystyle J=\int_1^e\ln x\,dx$ : $u=\ln x$, $v'=1$, $u'=\dfrac1x$, $v=x$. $J=\big[x\ln x\big]_1^e-\int_1^e1\,dx=e-(e-1)=1$.
:::

# IV. Calcul d’aires

:::propriete
Le plan est muni d’un repère orthogonal ; l’**unité d’aire** (u.a.) est l’aire du rectangle construit sur les vecteurs unitaires.
- Si $f$ est continue sur $[a;b]$ ($a<b$), l’aire du domaine limité par $(C_f)$, l’axe des abscisses et les droites $x=a$ et $x=b$ est
$$\mathcal A=\int_a^b\left|f(x)\right|dx\ \text{u.a.}$$
En particulier, si $f\ge0$ sur $[a;b]$, $\mathcal A=\displaystyle\int_a^bf(x)\,dx$ u.a.
- L’aire du domaine compris entre les courbes de $f$ et $g$ et les droites $x=a$ et $x=b$ est $\displaystyle\int_a^b\left|f(x)-g(x)\right|dx$ u.a.
:::

```figure
{"type":"graph","x":[-0.5,2.6],"y":[-0.5,4.5],"width":320,
 "functions":[{"fn":"x*x","label":"y=x^2","color":"brand"}],
 "shade":{"index":0,"from":0,"to":2},
 "caption":"$\\displaystyle\\int_0^2x^2\\,dx=\\frac83$ u.a. : aire du domaine coloré."}
```

:::exemple
Aire entre $y=x$ et $y=x^2$ sur $[0;1]$ (où $x\ge x^2$) : $\displaystyle\int_0^1\left(x-x^2\right)dx=\frac12-\frac13=\frac16$ u.a.

Si l’unité graphique est $2$ cm sur chaque axe, $1$ u.a. $=4\ \text{cm}^2$ et l’aire vaut $\dfrac46=\dfrac23\ \text{cm}^2$.
:::

# V. Volume d’un solide de révolution

:::propriete
L’espace est muni d’un repère orthonormé. Le volume du solide engendré par la rotation, autour de l’axe des abscisses, du domaine limité par $(C_f)$, l’axe des abscisses et les droites $x=a$ et $x=b$ est
$$V=\int_a^b\pi\left(f(x)\right)^2dx\ \text{u.v.}$$
:::

:::exemple
Rotation de la courbe de $f(x)=\sqrt x$ sur $[0;4]$ : $V=\displaystyle\int_0^4\pi x\,dx=\pi\left[\frac{x^2}2\right]_0^4=8\pi$ u.v.

On retrouve le volume d’une boule de rayon $R$ avec $f(x)=\sqrt{R^2-x^2}$ sur $[-R;R]$ : $V=\pi\displaystyle\int_{-R}^{R}\left(R^2-x^2\right)dx=\dfrac43\pi R^3$.
:::

# Exercices

:::exercice Calculs directs
Calculer : $\displaystyle I_1=\int_0^1\left(3x^2-2x+1\right)dx$ ; $\displaystyle I_2=\int_0^1\frac{2x}{x^2+1}dx$ ; $\displaystyle I_3=\int_0^{\ln2}e^{2x}dx$ ; $\displaystyle I_4=\int_0^{\frac\pi4}\sin2x\,dx$.
:::

:::exercice Intégration par parties
Calculer : $\displaystyle K_1=\int_1^ex\ln x\,dx$ ; $\displaystyle K_2=\int_0^{\pi}x\cos x\,dx$ ; $\displaystyle K_3=\int_0^1(x+1)e^{-x}dx$.
:::

:::exercice Encadrement
Montrer que pour tout $x\in[0;1]$ : $\dfrac{1}{2}\le\dfrac{1}{1+x^2}\le1$, et en déduire un encadrement de $\displaystyle\int_0^1\frac{dx}{1+x^2}$.
:::

:::exercice Aire
Soit $f(x)=e^x$ et $g(x)=x+1$. Calculer l’aire du domaine limité par leurs courbes et les droites $x=0$ et $x=1$ (on rappelle que $e^x\ge x+1$).
:::

:::exercice Volume
Calculer le volume du solide engendré par la rotation autour de $(Ox)$ de la courbe de $f(x)=e^{-x}$ sur $[0;1]$.
:::

# Corrigés

:::corrige
$I_1=\big[x^3-x^2+x\big]_0^1=1$ ; $I_2=\big[\ln(x^2+1)\big]_0^1=\ln2$ ; $I_3=\left[\dfrac{e^{2x}}2\right]_0^{\ln2}=\dfrac{4-1}2=\dfrac32$ ; $I_4=\left[-\dfrac{\cos2x}2\right]_0^{\frac\pi4}=\dfrac12$.
:::

:::corrige
- $u=\ln x$, $v'=x$ : $K_1=\left[\dfrac{x^2}2\ln x\right]_1^e-\displaystyle\int_1^e\frac x2dx=\frac{e^2}2-\frac{e^2-1}4=\frac{e^2+1}4$.
- $u=x$, $v'=\cos x$ : $K_2=\big[x\sin x\big]_0^\pi-\displaystyle\int_0^\pi\sin x\,dx=0-2=-2$.
- $u=x+1$, $v'=e^{-x}$, $v=-e^{-x}$ : $K_3=\big[-(x+1)e^{-x}\big]_0^1+\displaystyle\int_0^1e^{-x}dx=\left(-\frac2e+1\right)+\left(1-\frac1e\right)=2-\frac3e$.
:::

:::corrige
Sur $[0;1]$, $1\le1+x^2\le2$, donc $\dfrac12\le\dfrac1{1+x^2}\le1$. Par intégration (ordre) : $\dfrac12\le\displaystyle\int_0^1\frac{dx}{1+x^2}\le1$.
:::

:::corrige
$\mathcal A=\displaystyle\int_0^1\left(e^x-x-1\right)dx=\left[e^x-\frac{x^2}2-x\right]_0^1=\left(e-\frac32\right)-1=e-\frac52\approx0{,}22$ u.a.
:::

:::corrige
$V=\pi\displaystyle\int_0^1e^{-2x}dx=\pi\left[-\frac{e^{-2x}}2\right]_0^1=\frac\pi2\left(1-e^{-2}\right)$ u.v.
:::
