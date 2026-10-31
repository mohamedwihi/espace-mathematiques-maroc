---
id: 2bac-suites
titre: Les suites numériques
niveau: 2bac
semestre: 1
duree: 14 heures
---

## Objectifs
- Réinvestir les suites arithmétiques et géométriques.
- Déterminer la limite d’une suite : suites de référence, opérations, comparaison.
- Utiliser les critères de convergence (suite monotone et bornée).
- Étudier les suites $u_{n+1}=f(u_n)$ et $u_n=f(n)$.

## Prérequis
- Suites numériques (1BAC) ; raisonnement par récurrence.
- Limites et continuité des fonctions.

# I. Rappels

:::propriete
- **Suite arithmétique** de raison $r$ : $u_{n+1}=u_n+r$, $u_n=u_p+(n-p)r$ et $u_p+\dots+u_n=\dfrac{(n-p+1)(u_p+u_n)}{2}$.
- **Suite géométrique** de raison $q$ : $u_{n+1}=qu_n$, $u_n=u_pq^{n-p}$ et, si $q\ne1$, $u_p+\dots+u_n=u_p\dfrac{1-q^{n-p+1}}{1-q}$.
- $(u_n)$ est majorée, minorée, bornée, croissante, décroissante… avec les mêmes définitions qu’en 1BAC.
:::

# II. Limite d’une suite

:::definition
- $(u_n)$ **converge** vers un réel $\ell$ si tout intervalle ouvert contenant $\ell$ contient tous les termes $u_n$ à partir d’un certain rang. On note $\lim\limits_{n\to+\infty}u_n=\ell$. Une suite qui ne converge pas est dite **divergente**.
- $\lim u_n=+\infty$ si, pour tout réel $A$, $u_n>A$ à partir d’un certain rang.
:::

:::propriete Suites de référence
- $\lim n=\lim n^2=\lim\sqrt n=+\infty$ ; pour $p\in\mathbb N^*$ : $\lim n^p=+\infty$ et $\lim\dfrac1{n^p}=0$ ; $\lim\dfrac1{\sqrt n}=0$.
- **Limite de $q^n$** :
| Valeur de $q$ | $q\le-1$ | $-1<q<1$ | $q=1$ | $q>1$ |
|---|---|---|---|---|
| $\lim q^n$ | pas de limite | $0$ | $1$ | $+\infty$ |
:::

:::propriete Suite $u_n=f(n)$
Si $u_n=f(n)$ et $\lim\limits_{x\to+\infty}f(x)=\ell$ (fini ou infini), alors $\lim u_n=\ell$.
:::

:::propriete Opérations
Les règles de calcul des limites (somme, produit, quotient) et les formes indéterminées sont les mêmes que pour les fonctions en $+\infty$.
:::

:::exemple
- $\lim\dfrac{3n^2-n+1}{2n^2+5}=\dfrac32$ (rapport des termes de plus haut degré).
- $\lim\left(\sqrt{n+1}-\sqrt n\right)=\lim\dfrac{1}{\sqrt{n+1}+\sqrt n}=0$.
- $\lim\dfrac{2^n-3^n}{3^n+1}=\lim\dfrac{\left(\frac23\right)^n-1}{1+\left(\frac13\right)^n}=-1$.
:::

# III. Limites et ordre

:::theoreme Comparaison
- Si $v_n\le u_n\le w_n$ à partir d’un certain rang et $\lim v_n=\lim w_n=\ell$, alors $\lim u_n=\ell$ (**théorème des gendarmes**).
- Si $|u_n-\ell|\le v_n$ et $\lim v_n=0$, alors $\lim u_n=\ell$.
- Si $u_n\ge v_n$ et $\lim v_n=+\infty$, alors $\lim u_n=+\infty$ ; si $u_n\le w_n$ et $\lim w_n=-\infty$, alors $\lim u_n=-\infty$.
- Si $(u_n)$ converge vers $\ell$ et $u_n\ge0$ (ou $u_n\le M$) à partir d’un certain rang, alors $\ell\ge0$ (resp. $\ell\le M$).
:::

:::exemple
$u_n=\dfrac{(-1)^n}{n}$ : $|u_n|\le\dfrac1n\to0$, donc $\lim u_n=0$.

$u_n=n+\sin n$ : $u_n\ge n-1\to+\infty$, donc $\lim u_n=+\infty$.
:::

# IV. Critères de convergence

:::theoreme
- Toute suite **croissante et majorée** converge.
- Toute suite **décroissante et minorée** converge.
- Une suite croissante non majorée tend vers $+\infty$ ; une suite décroissante non minorée tend vers $-\infty$.
:::

:::remarque
Ce théorème assure l’existence de la limite, sans la donner : il faut ensuite la calculer, par exemple avec la propriété ci-dessous.
:::

# V. Suites $u_{n+1}=f(u_n)$

:::theoreme
Soit $f$ une fonction **continue** sur un intervalle $I$ telle que $f(I)\subset I$, et $(u_n)$ définie par $u_0\in I$ et $u_{n+1}=f(u_n)$. Si $(u_n)$ converge vers $\ell$ et si $\ell\in I$, alors $\ell$ est solution de l’équation
$$f(\ell)=\ell.$$
:::

:::exemple
$u_0=0$ et $u_{n+1}=\sqrt{u_n+2}$, avec $f(x)=\sqrt{x+2}$ continue et croissante sur $I=[0;2]$, $f(I)=\left[\sqrt2;2\right]\subset I$.
1. Par récurrence, $0\le u_n\le u_{n+1}\le2$ : $(u_n)$ est croissante et majorée par $2$, donc convergente.
2. Sa limite $\ell\in[0;2]$ vérifie $\ell=\sqrt{\ell+2}$, soit $\ell^2-\ell-2=0$ et $\ell\ge0$ : $(\ell-2)(\ell+1)=0$, donc $\ell=2$.
:::

```figure
{"type":"graph","x":[-0.4,3],"y":[-0.4,3],"width":300,"orthonormal":true,
 "functions":[{"fn":"sqrt(x+2)","label":"y=\\sqrt{x+2}","color":"brand","domain":[-0.4,3]},{"fn":"x","label":"y=x","color":"saffron"}],
 "segments":[{"from":[0,0],"to":[0,1.414],"dashed":true},{"from":[0,1.414],"to":[1.414,1.414],"dashed":true},{"from":[1.414,1.414],"to":[1.414,1.848],"dashed":true},{"from":[1.414,1.848],"to":[1.848,1.848],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"u₀"},{"x":1.414,"y":0,"label":"u₁"},{"x":1.848,"y":0,"label":"u₂"},{"x":2,"y":2,"label":"ℓ"}],
 "caption":"Construction des premiers termes : la suite monte vers le point d’intersection $\\ell=2$."}
```

:::methode Suite auxiliaire géométrique
Pour $u_{n+1}=au_n+b$ ($a\ne1$), on pose $v_n=u_n-\ell$ avec $\ell=\dfrac{b}{1-a}$ ; $(v_n)$ est géométrique de raison $a$, donc $u_n=\ell+v_0a^n$. Si $|a|<1$, $\lim u_n=\ell$.
:::

# Exercices

:::exercice Limites
Calculer : $\lim\dfrac{2n+3}{5-n}$ ; $\lim\left(n^2-3n\right)$ ; $\lim\dfrac{3^n+2^n}{4^n}$ ; $\lim\left(\sqrt{n^2+n}-n\right)$ ; $\lim\dfrac{\cos n}{n^2}$.
:::

:::exercice Suite homographique
Soit $u_0=\dfrac12$ et $u_{n+1}=\dfrac{3u_n+2}{u_n+4}$.
1. Montrer par récurrence que $0<u_n<1$.
2. Montrer que $u_{n+1}-u_n=\dfrac{(1-u_n)(u_n+2)}{u_n+4}$ et en déduire la monotonie de $(u_n)$.
3. Justifier la convergence et déterminer la limite.
:::

:::exercice Suite auxiliaire
Soit $u_0=5$ et $u_{n+1}=\dfrac12u_n+1$. On pose $v_n=u_n-2$.
1. Montrer que $(v_n)$ est géométrique ; exprimer $u_n$ en fonction de $n$.
2. Calculer $\lim u_n$ et $S_n=u_0+u_1+\dots+u_n$.
:::

:::exercice Comparaison
Soit $u_n=\displaystyle\sum_{k=1}^{n}\frac{1}{\sqrt{k}}=1+\frac1{\sqrt2}+\dots+\frac1{\sqrt n}$. Montrer que $u_n\ge\dfrac{n}{\sqrt n}=\sqrt n$ et en déduire $\lim u_n$.
:::

:::exercice Série — suite récurrente
On définit $u_0=1$ et $u_{n+1}=\sqrt{u_n+2}$.
1. Montrer par récurrence que $0\le u_n\le2$ pour tout $n$.
2. Montrer que $(u_n)$ est croissante.
3. En déduire qu’elle converge et déterminer sa limite.
:::

:::exercice Série — suites adjacentes
On pose $u_n=\displaystyle\sum_{k=1}^{n}\dfrac{1}{k^2}$ et $v_n=u_n+\dfrac1n$ pour $n\ge1$.
Montrer que $(u_n)$ et $(v_n)$ sont adjacentes.
:::

:::exercice Approfondissement — suite définie par une intégrale
On pose $I_n=\displaystyle\int_0^1x^ne^{-x}\,dx$ pour $n\in\mathbb N$.
1. Calculer $I_0$.
2. Montrer que $0\le I_n\le\dfrac{1}{n+1}$ et en déduire $\lim I_n$.
3. Par intégration par parties, montrer que $I_{n+1}=(n+1)I_n-\dfrac1e$.
:::

:::exercice Approfondissement — suite et fonction
$f(x)=\dfrac{x}{2}+\dfrac{1}{x}$ sur $]0;+\infty[$, $u_0=2$ et $u_{n+1}=f(u_n)$.
1. Montrer que $u_n\ge\sqrt2$ pour tout $n$ (on étudiera le minimum de $f$).
2. Montrer que $(u_n)$ est décroissante, puis qu’elle converge vers $\sqrt2$.
:::

:::exercice Série d’entraînement — suites arithmétiques et géométriques
1. $(u_n)$ est arithmétique, $u_2=7$ et $u_7=22$ : calculer la raison, $u_0$ et $S=u_0+\cdots+u_{20}$.
2. $(v_n)$ est géométrique de raison $q=\dfrac12$ et $v_0=8$ : calculer $v_5$ et $v_0+v_1+\cdots+v_9$.
:::

:::exercice Série d’entraînement — limites de suites
Calculer la limite de : $u_n=\dfrac{3n^2-1}{n^2+n}$ ; $v_n=\left(\dfrac23\right)^n+3$ ; $w_n=\dfrac{2^n-3^n}{3^n}$ ; $t_n=\dfrac{(-1)^n}{n+1}$.
:::

:::exercice Série d’entraînement — suite récurrente et fonction
$u_0=0$ et $u_{n+1}=\sqrt{2u_n+3}$.
1. Montrer que $0\le u_n<3$ pour tout $n$.
2. Montrer que $(u_n)$ est croissante et en déduire qu’elle converge ; déterminer sa limite.
:::

:::exercice Série d’entraînement — suite auxiliaire
$u_0=4$ et $u_{n+1}=\dfrac12u_n+1$. On pose $v_n=u_n-2$. Montrer que $(v_n)$ est géométrique, puis exprimer $u_n$ et calculer $\lim u_n$.
:::

:::exercice Série d’entraînement — comparaison
Montrer que $u_n=\dfrac{n+\sin n}{n^2+1}$ tend vers $0$ (encadrer $\sin n$).
:::

# Corrigés

:::corrige
$-2$ ; $+\infty$ ; $\left(\dfrac34\right)^n+\left(\dfrac12\right)^n\to0$ ; $\dfrac{n}{\sqrt{n^2+n}+n}=\dfrac1{\sqrt{1+\frac1n}+1}\to\dfrac12$ ; $\left|\dfrac{\cos n}{n^2}\right|\le\dfrac1{n^2}\to0$, donc $0$.
:::

:::corrige
1. $u_0=\dfrac12\in]0;1[$. Si $0<u_n<1$ : $u_{n+1}=3-\dfrac{10}{u_n+4}$ et $x\mapsto3-\dfrac{10}{x+4}$ est croissante, donc $u_{n+1}\in\left]f(0);f(1)\right[=\left]\dfrac12;1\right[\subset]0;1[$.
2. $u_{n+1}-u_n=\dfrac{3u_n+2-u_n^2-4u_n}{u_n+4}=\dfrac{-u_n^2-u_n+2}{u_n+4}=\dfrac{(1-u_n)(u_n+2)}{u_n+4}>0$ : $(u_n)$ est croissante.
3. Croissante et majorée par $1$ : convergente. Sa limite vérifie $\ell=\dfrac{3\ell+2}{\ell+4}$, soit $(1-\ell)(\ell+2)=0$ ; comme $\ell\in\left[\dfrac12;1\right]$, $\ell=1$.
:::

:::corrige
1. $v_{n+1}=\dfrac12u_n+1-2=\dfrac12v_n$ : géométrique de raison $\dfrac12$, $v_0=3$. Donc $u_n=2+3\left(\dfrac12\right)^n$.
2. $\lim u_n=2$. $S_n=2(n+1)+3\times\dfrac{1-\left(\frac12\right)^{n+1}}{1-\frac12}=2(n+1)+6\left(1-\left(\dfrac12\right)^{n+1}\right)$.
:::

:::corrige
Pour $1\le k\le n$, $\sqrt k\le\sqrt n$, donc $\dfrac1{\sqrt k}\ge\dfrac1{\sqrt n}$. En sommant les $n$ termes : $u_n\ge n\times\dfrac1{\sqrt n}=\sqrt n$. Comme $\lim\sqrt n=+\infty$, $\lim u_n=+\infty$.
:::

:::corrige
1. $u_0=1\in[0;2]$ ; si $0\le u_n\le2$, alors $2\le u_n+2\le4$ et $\sqrt2\le u_{n+1}\le2$.
2. $u_{n+1}-u_n=\dfrac{u_n+2-u_n^2}{\sqrt{u_n+2}+u_n}=\dfrac{(2-u_n)(1+u_n)}{\sqrt{u_n+2}+u_n}\ge0$.
3. Croissante et majorée : elle converge vers $\ell\ge0$ tel que $\ell=\sqrt{\ell+2}$, soit $\ell^2-\ell-2=0$ : $\ell=2$.
:::

:::corrige
$u_{n+1}-u_n=\dfrac1{(n+1)^2}>0$ ; $v_{n+1}-v_n=\dfrac1{(n+1)^2}+\dfrac1{n+1}-\dfrac1n=\dfrac{1}{(n+1)^2}-\dfrac{1}{n(n+1)}=\dfrac{n-(n+1)}{n(n+1)^2}<0$ ; et $v_n-u_n=\dfrac1n\to0$ : les suites sont adjacentes.
:::

:::corrige
1. $I_0=\big[-e^{-x}\big]_0^1=1-\dfrac1e$.
2. Sur $[0;1]$ : $0\le x^ne^{-x}\le x^n$, donc $0\le I_n\le\dfrac1{n+1}$ ; par encadrement, $I_n\to0$.
3. $u=x^{n+1}$, $v'=e^{-x}$ : $I_{n+1}=\big[-x^{n+1}e^{-x}\big]_0^1+(n+1)\displaystyle\int_0^1x^ne^{-x}dx=-\dfrac1e+(n+1)I_n$.
:::

:::corrige
1. $f'(x)=\dfrac12-\dfrac1{x^2}$ s’annule en $\sqrt2$ : minimum $f\left(\sqrt2\right)=\sqrt2$. Donc $f(x)\ge\sqrt2$ pour tout $x>0$, et $u_{n+1}\ge\sqrt2$ ($u_0=2\ge\sqrt2$).
2. $u_{n+1}-u_n=\dfrac1{u_n}-\dfrac{u_n}2=\dfrac{2-u_n^2}{2u_n}\le0$. Décroissante et minorée, elle converge vers $\ell\ge\sqrt2$ avec $\ell=\dfrac\ell2+\dfrac1\ell$, soit $\ell^2=2$, $\ell=\sqrt2$.
:::

:::corrige
1. $5r=15$, $r=3$ ; $u_0=1$ ; $u_{20}=61$ ; $S=21\times\dfrac{1+61}2=651$.
2. $v_5=\dfrac8{32}=\dfrac14$ ; $\displaystyle\sum_{k=0}^9v_k=8\times\frac{1-\left(\frac12\right)^{10}}{1-\frac12}=16\left(1-\frac1{1024}\right)=\frac{1023}{64}$.
:::

:::corrige
$u_n\to3$ ; $v_n\to3$ ; $w_n=\left(\dfrac23\right)^n-1\to-1$ ; $\lvert t_n\rvert\le\dfrac1{n+1}\to0$, donc $t_n\to0$.
:::

:::corrige
1. Récurrence : si $0\le u_n<3$, alors $3\le2u_n+3<9$ et $\sqrt3\le u_{n+1}<3$.
2. $u_{n+1}-u_n=\dfrac{2u_n+3-u_n^2}{\sqrt{2u_n+3}+u_n}=\dfrac{(3-u_n)(u_n+1)}{\sqrt{2u_n+3}+u_n}>0$. Croissante et majorée, elle converge vers $\ell\ge0$ avec $\ell^2=2\ell+3$, soit $\ell=3$.
:::

:::corrige
$v_{n+1}=\dfrac12u_n-1=\dfrac12v_n$, $v_0=2$, $v_n=2\left(\dfrac12\right)^n$ ; $u_n=2+2\left(\dfrac12\right)^n\to2$.
:::

:::corrige
$\dfrac{n-1}{n^2+1}\le u_n\le\dfrac{n+1}{n^2+1}$ et les deux bornes tendent vers $0$.
:::
