---
id: 2bac-primitives
titre: Les fonctions primitives
niveau: 2bac
semestre: 1
duree: 6 heures
---

## Objectifs
- Connaître la définition d’une primitive et l’ensemble des primitives d’une fonction.
- Déterminer la primitive qui prend une valeur donnée en un point.
- Utiliser le tableau des primitives usuelles et les opérations pour calculer des primitives.

## Prérequis
- Dérivation : dérivées usuelles, dérivée d’une composée.
- Continuité.

# I. Définition et propriétés

:::definition
Soit $f$ une fonction définie sur un intervalle $I$. Une **primitive** de $f$ sur $I$ est une fonction $F$ **dérivable** sur $I$ telle que
$$F'(x)=f(x)\quad\text{pour tout }x\in I.$$
:::

:::exemple
$F(x)=x^3+2x$ est une primitive de $f(x)=3x^2+2$ sur $\mathbb R$ ; $G(x)=x^3+2x-7$ en est une autre.
:::

:::theoreme
- Toute fonction **continue** sur un intervalle $I$ admet des primitives sur $I$.
- Si $F$ est une primitive de $f$ sur $I$, alors les primitives de $f$ sur $I$ sont exactement les fonctions $x\mapsto F(x)+c$, où $c$ est un réel.
- Pour $x_0\in I$ et $y_0\in\mathbb R$, il existe une **unique** primitive $G$ de $f$ sur $I$ telle que $G(x_0)=y_0$.
:::

:::demonstration Deuxième point
Si $G$ est une autre primitive, $(G-F)'=f-f=0$ sur l’intervalle $I$, donc $G-F$ est constante.
:::

:::propriete Linéarité
Si $F$ et $G$ sont des primitives de $f$ et $g$ sur $I$ et $k$ un réel, alors $F+G$ est une primitive de $f+g$ et $kF$ une primitive de $kf$.
:::

# II. Primitives usuelles

:::propriete Primitives des fonctions usuelles ($c\in\mathbb R$)
| $f(x)$ | Une primitive $F(x)$ | Intervalle |
|---|---|---|
| $a$ (constante) | $ax$ | $\mathbb R$ |
| $x^n$ ($n\in\mathbb N$) | $\dfrac{x^{n+1}}{n+1}$ | $\mathbb R$ |
| $\dfrac1{x^2}$ | $-\dfrac1x$ | $]-\infty;0[$ ou $]0;+\infty[$ |
| $\dfrac1{x^n}$ ($n\ge2$) | $-\dfrac{1}{(n-1)x^{n-1}}$ | $]-\infty;0[$ ou $]0;+\infty[$ |
| $\dfrac1{\sqrt x}$ | $2\sqrt x$ | $]0;+\infty[$ |
| $x^r$ ($r\in\mathbb Q$, $r\ne-1$) | $\dfrac{x^{r+1}}{r+1}$ | $]0;+\infty[$ |
| $\cos x$ | $\sin x$ | $\mathbb R$ |
| $\sin x$ | $-\cos x$ | $\mathbb R$ |
| $1+\tan^2x=\dfrac1{\cos^2x}$ | $\tan x$ | $\left]-\dfrac\pi2+k\pi;\dfrac\pi2+k\pi\right[$ |
:::

# III. Opérations et formes composées

:::propriete
Si $u$ est dérivable sur $I$ (avec les conditions indiquées) :
| Fonction | Une primitive |
|---|---|
| $u'u^n$ ($n\in\mathbb N$) | $\dfrac{u^{n+1}}{n+1}$ |
| $\dfrac{u'}{u^2}$ ($u\ne0$) | $-\dfrac1u$ |
| $\dfrac{u'}{u^n}$ ($n\ge2$, $u\ne0$) | $-\dfrac{1}{(n-1)u^{n-1}}$ |
| $\dfrac{u'}{\sqrt u}$ ($u>0$) | $2\sqrt u$ |
| $u'u^r$ ($r\in\mathbb Q$, $r\ne-1$, $u>0$) | $\dfrac{u^{r+1}}{r+1}$ |
| $u'\cos u$ | $\sin u$ |
| $u'\sin u$ | $-\cos u$ |
| $\cos(ax+b)$ ($a\ne0$) | $\dfrac1a\sin(ax+b)$ |
| $\sin(ax+b)$ ($a\ne0$) | $-\dfrac1a\cos(ax+b)$ |
:::

:::methode Reconnaître une forme composée
On repère une fonction $u$ dont la **dérivée apparaît** (à une constante multiplicative près), puis on ajuste le coefficient.
:::

:::exemple
- $f(x)=3x^2-4x+5$ : $F(x)=x^3-2x^2+5x$.
- $f(x)=x\left(x^2+1\right)^3=\dfrac12\times2x\left(x^2+1\right)^3$ : $F(x)=\dfrac{\left(x^2+1\right)^4}{8}$.
- $f(x)=\dfrac{2x+1}{\left(x^2+x+1\right)^2}$ : forme $\dfrac{u'}{u^2}$, donc $F(x)=-\dfrac{1}{x^2+x+1}$.
- $f(x)=\dfrac{x}{\sqrt{x^2+3}}=\dfrac12\times\dfrac{2x}{\sqrt{x^2+3}}$ : $F(x)=\sqrt{x^2+3}$.
- $f(x)=\sin x\cos^2x$ : $f=-u'u^2$ avec $u=\cos x$, donc $F(x)=-\dfrac{\cos^3x}{3}$.
- $f(x)=\cos(3x)+\sin(2x)$ : $F(x)=\dfrac13\sin3x-\dfrac12\cos2x$.
:::

:::exemple Primitive vérifiant une condition
Déterminer la primitive $F$ de $f(x)=(2x-1)^3$ telle que $F(1)=0$. On a $f=\dfrac12\times2(2x-1)^3$, donc $F(x)=\dfrac{(2x-1)^4}{8}+c$ et $F(1)=\dfrac18+c=0$ : $F(x)=\dfrac{(2x-1)^4-1}{8}$.
:::

:::remarque Linéarisation
Pour les puissances de $\cos$ et $\sin$, on linéarise : $\cos^2x=\dfrac{1+\cos2x}2$, donc une primitive de $\cos^2x$ est $\dfrac x2+\dfrac{\sin2x}4$.
:::

# Exercices

:::exercice Primitives directes
Déterminer une primitive sur l’intervalle indiqué : $f_1(x)=4x^3-6x+1$ sur $\mathbb R$ ; $f_2(x)=\dfrac{3}{x^2}-\dfrac{1}{\sqrt x}$ sur $]0;+\infty[$ ; $f_3(x)=\sqrt x$ sur $]0;+\infty[$ ; $f_4(x)=2\cos x-3\sin x$ sur $\mathbb R$.
:::

:::exercice Formes composées
Déterminer une primitive de : $g_1(x)=(3x+2)^5$ ; $g_2(x)=\dfrac{x}{(x^2+1)^3}$ ; $g_3(x)=\dfrac{2x+1}{\sqrt{x^2+x+1}}$ ; $g_4(x)=\cos x\sin^4x$ ; $g_5(x)=\sin^2x$.
:::

:::exercice Condition initiale
Déterminer la primitive $F$ de $f(x)=\dfrac{1}{(2x+1)^2}$ sur $\left]-\dfrac12;+\infty\right[$ telle que $F(0)=1$.
:::

:::exercice Vérification
Montrer que $F(x)=\dfrac{x}{\sqrt{x^2+1}}$ est une primitive de $f(x)=\dfrac{1}{\left(x^2+1\right)\sqrt{x^2+1}}$ sur $\mathbb R$.
:::

:::exercice Série — primitives usuelles
Déterminer une primitive de : $f(x)=(2x+1)(x^2+x)^3$ ; $g(x)=\dfrac{x}{\sqrt{x^2+1}}$ ; $h(x)=\cos x\sin^2x$ ; $k(x)=\dfrac{1}{(3x-1)^2}$ sur $\left]\dfrac13;+\infty\right[$.
:::

:::exercice Série — primitive vérifiant une condition
Déterminer la primitive $F$ de $f(x)=3x^2-\dfrac{2}{x^2}$ sur $]0;+\infty[$ telle que $F(1)=4$.
:::

:::exercice Approfondissement — décomposition en éléments simples
1. Déterminer $a$ et $b$ tels que $\dfrac{1}{x(x+1)}=\dfrac ax+\dfrac{b}{x+1}$ pour $x>0$.
2. En déduire une primitive de $x\mapsto\dfrac{1}{x(x+1)}$ sur $]0;+\infty[$.
:::

:::exercice Approfondissement — linéarisation
1. Montrer que $\sin^2x=\dfrac{1-\cos2x}{2}$ et $\cos^3x=\cos x-\cos x\sin^2x$.
2. En déduire une primitive de $\sin^2x$ et de $\cos^3x$.
:::

# Corrigés

:::corrige
$F_1(x)=x^4-3x^2+x$ ; $F_2(x)=-\dfrac3x-2\sqrt x$ ; $F_3(x)=\dfrac23x^{\frac32}=\dfrac23x\sqrt x$ ; $F_4(x)=2\sin x+3\cos x$.
:::

:::corrige
- $G_1(x)=\dfrac{(3x+2)^6}{18}$.
- $g_2=\dfrac12\times\dfrac{2x}{(x^2+1)^3}$ : $G_2(x)=-\dfrac{1}{4\left(x^2+1\right)^2}$.
- $G_3(x)=2\sqrt{x^2+x+1}$.
- $G_4(x)=\dfrac{\sin^5x}{5}$.
- $\sin^2x=\dfrac{1-\cos2x}2$ : $G_5(x)=\dfrac x2-\dfrac{\sin2x}4$.
:::

:::corrige
$f=\dfrac12\times\dfrac{2}{(2x+1)^2}$ : $F(x)=-\dfrac{1}{2(2x+1)}+c$ ; $F(0)=-\dfrac12+c=1$, donc $c=\dfrac32$ et $F(x)=\dfrac32-\dfrac1{2(2x+1)}$.
:::

:::corrige
$F'(x)=\dfrac{\sqrt{x^2+1}-x\times\frac{x}{\sqrt{x^2+1}}}{x^2+1}=\dfrac{x^2+1-x^2}{\left(x^2+1\right)\sqrt{x^2+1}}=f(x)$.
:::

:::corrige
- $F(x)=\dfrac{(x^2+x)^4}{4}$ ($u'u^3$).
- $G(x)=\sqrt{x^2+1}$.
- $H(x)=\dfrac{\sin^3x}{3}$.
- $K(x)=-\dfrac{1}{3(3x-1)}$.
:::

:::corrige
$F(x)=x^3+\dfrac2x+c$ ; $F(1)=3+c=4$, $c=1$ : $F(x)=x^3+\dfrac2x+1$.
:::

:::corrige
1. $\dfrac ax+\dfrac b{x+1}=\dfrac{(a+b)x+a}{x(x+1)}$ : $a=1$, $b=-1$.
2. $F(x)=\ln x-\ln(x+1)=\ln\dfrac{x}{x+1}$.
:::

:::corrige
1. $\cos2x=1-2\sin^2x$ ; $\cos^3x=\cos x\left(1-\sin^2x\right)$.
2. $\displaystyle\int\sin^2x=\dfrac x2-\dfrac{\sin2x}4+c$ ; $\cos^3x$ a pour primitive $\sin x-\dfrac{\sin^3x}3+c$ ($u'u^2$ avec $u=\sin x$).
:::
