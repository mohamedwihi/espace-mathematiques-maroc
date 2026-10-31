---
id: bac-sx-2005-rattrapage-corrige
titre: Corrigé — Examen national 2005, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (4 points) — questions indépendantes

:::methode Question 1 : $(H):y''+y'-6y=0$
Équation caractéristique $r^2+r-6=(r-2)(r+3)=0$ : $y=\alpha e^{2x}+\beta e^{-3x}$ ($\alpha$, $\beta$ réels).
:::

:::methode Question 2
$1+i\sqrt3=2e^{i\frac\pi3}$ et $1-i=\sqrt2e^{-i\frac\pi4}$ : $z=\sqrt2e^{i\left(\frac\pi3+\frac\pi4\right)}=\sqrt2\left(\cos\dfrac{7\pi}{12}+i\sin\dfrac{7\pi}{12}\right)$.
:::

:::methode Question 3
Par parties : $u=\ln(1+\cos x)$, $v'=\cos x$, $u'=\dfrac{-\sin x}{1+\cos x}$, $v=\sin x$ :
$$\int_0^{\frac\pi2}\cos x\ln(1+\cos x)\,dx=\Big[\sin x\ln(1+\cos x)\Big]_0^{\frac\pi2}+\int_0^{\frac\pi2}\frac{\sin^2x}{1+\cos x}dx.$$
Le crochet est nul ($\ln1=0$) et $\dfrac{\sin^2x}{1+\cos x}=\dfrac{(1-\cos x)(1+\cos x)}{1+\cos x}=1-\cos x$. L’intégrale vaut $\Big[x-\sin x\Big]_0^{\frac\pi2}=\dfrac\pi2-1$.
:::

:::methode Question 4
$S_n=\displaystyle\sum_{k=1}^nk+\sum_{k=1}^n\left(\frac13\right)^k=\frac{n(n+1)}2+\frac13\times\frac{1-\left(\frac13\right)^n}{1-\frac13}=\frac{n(n+1)}2+\frac12\left(1-\left(\frac13\right)^n\right).$
:::

# Exercice 2 (2 points) — sphère et plan

$(\mathcal P):x-z+1=0$ ; $(\mathcal S)$ de centre $\Omega(1;0;0)$ et de rayon $R=2$.

:::methode Questions 1 et 2
1. $d(\Omega,\mathcal P)=\dfrac{\lvert1-0+1\rvert}{\sqrt2}=\sqrt2<2$ : le plan coupe la sphère selon un cercle $(\Gamma)$.

2. Son centre $H$ est le projeté de $\Omega$ : $H(1+t;0;-t)$ avec $2t+2=0$, $t=-1$ : $H(0;0;1)$. Son rayon : $r=\sqrt{R^2-d^2}=\sqrt{4-2}=\sqrt2$.
:::

# Exercice 3 (2,5 points) — nombres complexes

:::methode Questions 1 à 3
1. $(1-i)^2=-2i$.

2. $z^2-2(1+2i)z-(3-6i)=0$ : $\Delta'=(1+2i)^2+3-6i=-2i=(1-i)^2$, donc $z=(1+2i)\pm(1-i)$ : $z_1=2+i$ et $z_2=3i$.

3. $\lvert z-3i\rvert=\lvert z-(2+i)\rvert\iff MA=MB$ : $(D)$ est la médiatrice de $[AB]$. Avec $z=x+iy$ : $x^2+(y-3)^2=(x-2)^2+(y-1)^2\iff4x-4y+4=0$, soit $(D):y=x+1$.
:::

# Exercice 4 (3,5 points) — probabilités

Quatre boules blanches et deux noires.

:::methode Questions 1 à 3
1. $p=\dfrac46=\dfrac23$.

2. Cinq tirages avec remise : loi binomiale $\mathcal B\left(5;\dfrac23\right)$, $p=\dbinom52\left(\dfrac23\right)^2\left(\dfrac13\right)^3=\dfrac{40}{243}$.

3. a) Contraire : aucune boule blanche en $n$ tirages, probabilité $\left(\dfrac13\right)^n$ ; donc $p=1-\left(\dfrac13\right)^n$.

b) $1-\left(\dfrac13\right)^n\ge0{,}999\iff3^n\ge1000\iff n\ge\dfrac{\ln1000}{\ln3}\approx6{,}29$ : il faut au moins $7$ tirages ($3^6=729$ et $3^7=2187$).
:::

# Exercice 5 (8 points) — fonction et fonction réciproque

$f(x)=\ln\dfrac{x}{2-x}$ sur $]0;2[$.

:::methode Questions 1 et 2
1. a) $\lim\limits_{x\to2^-}\dfrac x{2-x}=+\infty$, donc $\lim\limits_{2^-}f=+\infty$ ; $\lim\limits_{0^+}\dfrac x{2-x}=0^+$, donc $\lim\limits_{0^+}f=-\infty$.

b) $f(x)=\ln x-\ln(2-x)$ : $f'(x)=\dfrac1x+\dfrac1{2-x}=\dfrac2{x(2-x)}$. c) $f'>0$ : $f$ est strictement croissante sur $]0;2[$.

2. a) Pour $x\in]0;2[$, $2-x\in]0;2[$ et $f(2-x)=\ln\dfrac{2-x}x=-f(x)$, soit $f(2-x)+f(x)=2\times0$ : $A(1;0)$ est centre de symétrie.

b) $f(1)=0$ et $f'(1)=2$ : $(D):y=2x-2$.
:::

:::methode Question 3 : $\psi(x)=f(x)-x$
a) $\psi\left(\dfrac74\right)=\ln7-\dfrac74\approx1{,}94-1{,}75>0$ et $\psi\left(\dfrac32\right)=\ln3-\dfrac32\approx1{,}1-1{,}5<0$.

b) $\psi'(x)=\dfrac{2-x(2-x)}{x(2-x)}=\dfrac{(x-1)^2+1}{x(2-x)}>0$ : $\psi$ est continue et strictement croissante, l’équation $f(x)=x$ a une unique solution $\alpha$, et $\dfrac32<\alpha<\dfrac74$. Graphiquement, $(\mathcal C_f)$ coupe la droite $y=x$ au point d’abscisse $\alpha$.
:::

:::methode Questions 4 et 5
4. a) $f$ est continue et strictement croissante de $]0;2[$ sur $\mathbb R$ : elle admet une réciproque $f^{-1}:\mathbb R\to]0;2[$.

b) $y=\ln\dfrac x{2-x}\iff e^y(2-x)=x\iff x\left(1+e^y\right)=2e^y\iff x=\dfrac{2e^y}{1+e^y}$.

5. $(\mathcal C_{f^{-1}})$ est le symétrique de $(\mathcal C_f)$ par rapport à la droite $y=x$.
:::

```figure
{"type":"graph","x":[-3,3],"y":[-3,3],"width":330,"orthonormal":true,
 "functions":[{"fn":"log(x/(2-x))","label":"C_f","color":"brand","domain":[0.05,1.95]},{"fn":"2*exp(x)/(1+exp(x))","label":"C_{f^{-1}}","color":"saffron"},{"fn":"x","label":"y=x","color":"ink"}],
 "points":[{"x":1,"y":0,"label":"A"},{"x":1.68,"y":1.68,"label":"α"}],
 "caption":"$(\\mathcal C_f)$ et $(\\mathcal C_{f^{-1}})$, symétriques par rapport à $y=x$."}
```

:::methode Question 6
a) $\displaystyle\int_0^\alpha\frac{e^x}{1+e^x}dx=\Big[\ln\left(1+e^x\right)\Big]_0^\alpha=\ln\frac{1+e^\alpha}{2}$.

b) Le domaine est symétrique par rapport à $y=x$ ; sa partie située au-dessus de cette droite est comprise, pour $x\in[0;\alpha]$, entre $y=x$ et $y=f^{-1}(x)$. L’aire vaut donc
$$\mathcal A=2\int_0^\alpha\left(f^{-1}(x)-x\right)dx=2\left[2\ln\frac{1+e^\alpha}2-\frac{\alpha^2}2\right]=4\ln\frac{1+e^\alpha}2-\alpha^2\ \text{u.a.}$$
Comme $f(\alpha)=\alpha$, $e^\alpha=\dfrac\alpha{2-\alpha}$ et $\dfrac{1+e^\alpha}2=\dfrac1{2-\alpha}$ : $\mathcal A=-4\ln(2-\alpha)-\alpha^2$ u.a.
:::
