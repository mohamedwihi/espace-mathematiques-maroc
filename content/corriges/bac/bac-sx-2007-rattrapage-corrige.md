---
id: bac-sx-2007-rattrapage-corrige
titre: Corrigé — Examen national 2007, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3,5 points) — sphère et plan

$A(2;0;-1)$, $B(2;4;2)$, $C(3;3;3)$ et $(\mathcal S):x^2+y^2+z^2-4x-4y-8z+20=0$.

:::methode Questions 1 à 3
1. $(x-2)^2+(y-2)^2+(z-4)^2=4+4+16-20=4$ : centre $\Omega(2;2;4)$, rayon $2$.

2. $\overrightarrow{BC}(1;-1;1)$ est normal à $(\mathcal P)$ : $x-y+z+d=0$ avec $A$ : $2-0-1+d=0$, $d=-1$. Donc $(\mathcal P):x-y+z-1=0$.

3. a) $d(\Omega,\mathcal P)=\dfrac{\lvert2-2+4-1\rvert}{\sqrt3}=\sqrt3<2$ : le plan coupe la sphère selon un cercle de rayon $\sqrt{4-3}=1$.

b) $(\Delta):x=2+t$, $y=2-t$, $z=4+t$ ($t\in\mathbb R$).

c) $\omega=(\Delta)\cap(\mathcal P)$ : $(2+t)-(2-t)+(4+t)-1=0\iff3t=-3\iff t=-1$, donc $\omega(1;3;3)$.
:::

# Exercice 2 (2,5 points) — probabilités

Trois boules blanches et quatre noires ; on en tire trois simultanément : $\binom73=35$.

:::methode Questions 1 à 3
1. Exactement deux blanches : $\dfrac{\binom32\times4}{35}=\dfrac{12}{35}$.

2. Même couleur : $\dfrac{\binom33+\binom43}{35}=\dfrac5{35}=\dfrac17$.

3. Au moins une blanche : $1-\dfrac{\binom43}{35}=1-\dfrac4{35}=\dfrac{31}{35}$.
:::

# Exercice 3 (3 points) — suites

$u_0=2$, $u_{n+1}=\dfrac15\left(u_n-4n-1\right)$ et $v_n=u_n+n-1$.

:::methode Questions 1 à 3
1. $v_{n+1}=u_{n+1}+n=\dfrac15\left(u_n-4n-1\right)+n=\dfrac15\left(u_n+n-1\right)=\dfrac15v_n$ : géométrique de raison $\dfrac15$, $v_0=1$.

2. a) $v_n=\left(\dfrac15\right)^n$. b) $u_n=\left(\dfrac15\right)^n-n+1$ et $\lim u_n=-\infty$.

3. $T_n=\displaystyle\sum_{k=0}^n\left(\frac15\right)^k=\frac{1-\left(\frac15\right)^{n+1}}{1-\frac15}=\frac54\left(1-\frac1{5^{n+1}}\right)=\frac14\left(5-\frac1{5^n}\right)$.

Et $S_n=\displaystyle\sum_{k=0}^n\left(v_k-k+1\right)=T_n-\frac{n(n+1)}2+(n+1)=T_n-\frac{(n+1)(n-2)}2$.
:::

# Exercice 4 (3 points) — nombres complexes

:::methode Questions 1 et 2
1. $\left(\sqrt2+2i\right)^2=2+4\sqrt2i-4=-2+4\sqrt2i$.

2. $\Delta=\left(\sqrt2+2\right)^2-4\left(2+\sqrt2-\sqrt2i\right)=-2+4\sqrt2i=\left(\sqrt2+2i\right)^2$. Donc $z=\dfrac{\left(\sqrt2+2\right)\pm\left(\sqrt2+2i\right)}2$ : $1+\sqrt2+i$ et $1-i$.
:::

:::methode Question 3 : $z_1=1-i$ et $z_2=1+\sqrt2+i$
a) $z_1=\sqrt2\left(\cos\left(-\dfrac\pi4\right)+i\sin\left(-\dfrac\pi4\right)\right)$.

b) $z_1z_2=(1-i)\left(1+\sqrt2+i\right)=2+\sqrt2-\sqrt2i=\sqrt2\left(1+\sqrt2-i\right)=\sqrt2\,\overline{z_2}$. En passant aux arguments : $\arg z_1+\arg z_2\equiv-\arg z_2$, d’où $\arg z_1+2\arg z_2\equiv0\ [2\pi]$.

c) $2\arg z_2\equiv\dfrac\pi4\ [2\pi]$ ; comme $z_2$ a ses parties réelle et imaginaire positives, $\arg z_2\equiv\dfrac\pi8\ [2\pi]$.
:::

# Exercice 5 (8 points) — étude de fonction et aire

:::methode Partie I : $g(x)=x-\dfrac1x-2\ln x$
1. $g'(x)=1+\dfrac1{x^2}-\dfrac2x=\dfrac{(x-1)^2}{x^2}\ge0$ : $g$ est croissante sur $]0;+\infty[$.

2. $g(1)=0$ : $g(x)\le0$ sur $]0;1]$ et $g(x)\ge0$ sur $[1;+\infty[$.
:::

:::methode Partie II : $f(x)=x+\dfrac1x-(\ln x)^2-2$
1. a) Avec $t=\sqrt x$ : $\dfrac{(\ln x)^2}x=4\left(\dfrac{\ln t}t\right)^2\to0$. Donc $f(x)=x\left[1+\dfrac1{x^2}-\dfrac{(\ln x)^2}x-\dfrac2x\right]\to+\infty$.

b) $f\left(\dfrac1x\right)=\dfrac1x+x-(-\ln x)^2-2=f(x)$.

c) $\lim\limits_{x\to0^+}f(x)=\lim\limits_{t\to+\infty}f\left(\dfrac1t\right)=\lim\limits_{t\to+\infty}f(t)=+\infty$ : la droite $x=0$ est asymptote verticale.

d) $\dfrac{f(x)}x\to1$ et $f(x)-x=\dfrac1x-(\ln x)^2-2\to-\infty$ : branche parabolique de direction la droite $y=x$.

2. $f'(x)=1-\dfrac1{x^2}-\dfrac{2\ln x}x=\dfrac{g(x)}x$ : $f$ décroît sur $]0;1]$ et croît sur $[1;+\infty[$ ; minimum $f(1)=0$, donc $f\ge0$.
:::

```figure
{"type":"graph","x":[-0.2,6],"y":[-0.5,4],"width":330,
 "functions":[{"fn":"x+1/x-log(x)*log(x)-2","label":"(C)","color":"brand","domain":[0.2,6]}],
 "points":[{"x":1,"y":0,"label":"(1;0)"}],
 "caption":"$(\\mathcal C)$ : minimum $0$ en $x=1$."}
```

:::methode Question 4
a) $G'(x)=\ln x+x\times\dfrac1x-1=\ln x$.

b) Par parties ($u=(\ln x)^2$, $v'=1$) : $\displaystyle\int_1^e(\ln x)^2dx=\Big[x(\ln x)^2\Big]_1^e-2\int_1^e\ln x\,dx=e-2\Big[x\ln x-x\Big]_1^e=e-2$.

c) $f\ge0$ : l’aire vaut
$$\int_1^ef(x)\,dx=\left[\frac{x^2}2+\ln x-2x\right]_1^e-(e-2)=\left(\frac{e^2}2+1-2e\right)-\left(\frac12-2\right)-e+2=\frac{e^2}2-3e+\frac92\approx0{,}04\ \text{u.a.}$$
:::
