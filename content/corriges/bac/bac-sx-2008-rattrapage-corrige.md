---
id: bac-sx-2008-rattrapage-corrige
titre: Corrigé — Examen national 2008, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — nombres complexes et rotation

:::methode Questions 1 et 2
1. $z^2-8z+17=0$ : $\Delta'=16-17=-1=i^2$, donc $z=4+i$ ou $z=4-i$.

2. a) La rotation de centre $\Omega(1+2i)$ et d’angle $\dfrac{3\pi}2$ s’écrit $z'-\omega=e^{i\frac{3\pi}2}(z-\omega)=-i(z-\omega)$, soit $z'=-iz+i(1+2i)+1+2i=-iz-1+3i$.

b) $-i(4+i)-1+3i=-4i+1-1+3i=-i=c$ : $C=\mathcal R(A)$.

c) $b-c=8+4i=2(4+2i)=2(a-c)$ : les vecteurs $\overrightarrow{CB}$ et $\overrightarrow{CA}$ sont colinéaires, donc $A$, $B$, $C$ sont alignés.
:::

# Exercice 2 (3 points) — sphère et plan

$(\mathcal P):x+2y+z-1=0$ et $(\mathcal S):x^2+y^2+z^2-4x-6y+2z+5=0$.

:::methode Questions 1 à 3
1. $(x-2)^2+(y-3)^2+(z+1)^2=4+9+1-5=9$ : centre $I(2;3;-1)$, rayon $3$.

2. a) $d(I,\mathcal P)=\dfrac{\lvert2+6-1-1\rvert}{\sqrt6}=\dfrac6{\sqrt6}=\sqrt6$. b) $\sqrt6<3$ : le plan coupe la sphère selon un cercle de rayon $\sqrt{9-6}=\sqrt3$.

3. a) $(D):x=2+t$, $y=3+2t$, $z=-1+t$. b) $(2+t)+2(3+2t)+(-1+t)-1=0\iff6t+6=0\iff t=-1$ : le centre du cercle est $H(1;1;-2)$.
:::

# Exercice 3 (3 points) — probabilités

Quatre boules blanches et trois rouges ; trois tirages successifs sans remise : $7\times6\times5=210$ issues.

:::methode Questions 1 à 3
1. Trois blanches : $\dfrac{4\times3\times2}{210}=\dfrac{24}{210}=\dfrac4{35}$.

2. Même couleur : $\dfrac{24+3\times2\times1}{210}=\dfrac{30}{210}=\dfrac17$.

3. Au moins une blanche : $1-\dfrac6{210}=\dfrac{34}{35}$.
:::

# Exercice 4 (3 points) — suites

$u_0=2$ et $u_{n+1}=\dfrac{5u_n}{2u_n+3}$.

:::methode Questions 1 et 2
1. Récurrence : $u_0>1$ ; et $u_{n+1}-1=\dfrac{3(u_n-1)}{2u_n+3}$, positif si $u_n>1$.

2. a) $v_{n+1}=\dfrac{u_{n+1}-1}{u_{n+1}}=\dfrac{3(u_n-1)}{2u_n+3}\times\dfrac{2u_n+3}{5u_n}=\dfrac35v_n$ : géométrique de raison $\dfrac35$, $v_0=\dfrac12$, donc $v_n=\dfrac12\left(\dfrac35\right)^n$.

b) $v_n=1-\dfrac1{u_n}$, donc $u_n=\dfrac1{1-v_n}=\dfrac2{2-\left(\frac35\right)^n}$ et $\lim u_n=1$.
:::

# Exercice 5 (8 points) — étude de fonction

:::methode Partie I : $g(x)=e^{2x}-2x$
1. $g'(x)=2\left(e^{2x}-1\right)$ : $g$ décroît sur $]-\infty;0]$ et croît sur $[0;+\infty[$.

2. Son minimum est $g(0)=1$ : $g(x)>0$ pour tout réel $x$.
:::

:::methode Partie II : $f(x)=\ln\left(e^{2x}-2x\right)$ — branches infinies
1. a) En $-\infty$ : $e^{2x}\to0$ et $-2x\to+\infty$, donc $f(x)\to+\infty$.

b) Pour $x\ne0$ : $\dfrac{f(x)}x=\left(\dfrac{e^{2x}}x-2\right)\dfrac{\ln\left(e^{2x}-2x\right)}{e^{2x}-2x}$.

c) En $-\infty$, le premier facteur tend vers $-2$ et, avec $t=e^{2x}-2x\to+\infty$, $\dfrac{\ln t}t\to0$ : $\dfrac{f(x)}x\to0$. d) Branche parabolique de direction l’axe des abscisses.

2. a) Pour $x>0$ : $e^{2x}-2x=e^{2x}\left(1-\dfrac{2x}{e^{2x}}\right)$ avec $1-\dfrac{2x}{e^{2x}}=\dfrac{g(x)}{e^{2x}}>0$, d’où $f(x)=2x+\ln\left(1-\dfrac{2x}{e^{2x}}\right)$.

b) $\dfrac{2x}{e^{2x}}\to0$, donc $f(x)\to+\infty$. c) $f(x)-2x\to\ln1=0$ : $(D):y=2x$ est asymptote oblique en $+\infty$.

d) Pour $x\ge0$ : $0<1-\dfrac{2x}{e^{2x}}\le1$, donc $f(x)-2x\le0$ : $(\mathcal C)$ est en dessous de $(D)$ sur $[0;+\infty[$.
:::

:::methode Partie II — variations et tracé
3. a) $f'(x)=\dfrac{2e^{2x}-2}{e^{2x}-2x}=\dfrac{2\left(e^{2x}-1\right)}{g(x)}$.

b) $f$ décroît sur $]-\infty;0]$, croît sur $[0;+\infty[$, minimum $f(0)=\ln1=0$.
:::

```figure
{"type":"graph","x":[-4,3],"y":[-1,5],"width":330,"orthonormal":true,
 "functions":[{"fn":"log(exp(2*x)-2*x)","label":"(C)","color":"brand"},{"fn":"2*x","label":"(D)","color":"saffron","domain":[-0.5,2.5]}],
 "caption":"$(\\mathcal C)$ et son asymptote $(D):y=2x$ en $+\\infty$."}
```
