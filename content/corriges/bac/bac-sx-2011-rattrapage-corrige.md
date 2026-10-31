---
id: bac-sx-2011-rattrapage-corrige
titre: Corrigé — Examen national 2011, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (2,5 points) — équations et inéquation avec $\exp$

:::methode Questions 1 et 2
1. a) $x^2-2x-3=(x-3)(x+1)=0$ : $x=3$ ou $x=-1$.

b) Avec $X=e^x>0$ : $X-\dfrac3X-2=0\iff X^2-2X-3=0$, d’où $X=3$ ($X=-1$ est exclu) : $x=\ln3$.

2. $e^{x+1}\ge e^{-x}\iff x+1\ge-x\iff x\ge-\dfrac12$ : $S=\left[-\dfrac12;+\infty\right[$.
:::

# Exercice 2 (4 points) — nombres complexes

:::methode Questions 1 et 2
1. $z^2-6z+18=0$ : $\Delta'=9-18=-9=(3i)^2$, donc $z=3+3i$ ou $z=3-3i$.

2. a) $a=3\sqrt2\left(\cos\dfrac\pi4+i\sin\dfrac\pi4\right)$ et $b=3\sqrt2\left(\cos\left(-\dfrac\pi4\right)+i\sin\left(-\dfrac\pi4\right)\right)$.

b) La translation de vecteur $\overrightarrow{OA}$ : $b'=b+a=6$.

c) $\dfrac{b-b'}{a-b'}=\dfrac{-3-3i}{-3+3i}=\dfrac{1+i}{1-i}=i$ : $B'B=B'A$ et $\left(\overrightarrow{B'A},\overrightarrow{B'B}\right)\equiv\dfrac\pi2$, le triangle $ABB'$ est rectangle et isocèle en $B'$.

d) $b'=a+b$ donne $\overrightarrow{OB'}=\overrightarrow{OA}+\overrightarrow{OB}$ : $OAB'B$ est un parallélogramme ; $OA=OB$ et $\left(\overrightarrow{OB},\overrightarrow{OA}\right)\equiv\dfrac\pi2$ : c’est un carré.
:::

# Exercice 3 (3,5 points) — suites

$u_0=1$ et $u_{n+1}=\dfrac{6u_n}{1+15u_n}$ ; $v_n=1-\dfrac1{3u_n}$.

:::methode Questions 1 à 3
1. a) $u_{n+1}-\dfrac13=\dfrac{18u_n-1-15u_n}{3(1+15u_n)}=\dfrac{u_n-\frac13}{15u_n+1}$. b) Par récurrence, $u_n>\dfrac13$.

2. $v_{n+1}=1-\dfrac{1+15u_n}{18u_n}=\dfrac{3u_n-1}{18u_n}=\dfrac16\left(1-\dfrac1{3u_n}\right)=\dfrac16v_n$ : géométrique de raison $\dfrac16$, $v_0=\dfrac23$, $v_n=\dfrac23\left(\dfrac16\right)^n$.

3. $\dfrac1{3u_n}=1-v_n$, donc $u_n=\dfrac1{3(1-v_n)}=\dfrac1{3-2\left(\frac16\right)^n}$ et $\lim u_n=\dfrac13$.
:::

# Exercice 4 (10 points) — étude de fonction et aire

:::methode Partie I : $g(x)=x-1+\ln x$ sur $I=]0;+\infty[$
1. a) $g'(x)=1+\dfrac1x=\dfrac{x+1}x$. b) $g'>0$ : $g$ est strictement croissante.

2. $g(1)=0$ : $g\ge0$ sur $[1;+\infty[$ et $g\le0$ sur $]0;1]$.
:::

:::methode Partie II : $f(x)=\dfrac{x-1}x\ln x$ (unité $1$ cm)
1. a) En $0^+$ : $\dfrac{x-1}x\to-\infty$ et $\ln x\to-\infty$, donc $f\to+\infty$ : asymptote verticale $x=0$.

b) En $+\infty$ : $\dfrac{x-1}x\to1$, donc $f\to+\infty$ ; et $\dfrac{f(x)}x=\dfrac{x-1}x\times\dfrac{\ln x}x\to0$. c) Branche parabolique de direction l’axe des abscisses.

2. a) $f(x)=\left(1-\dfrac1x\right)\ln x$, donc $f'(x)=\dfrac{\ln x}{x^2}+\left(1-\dfrac1x\right)\dfrac1x=\dfrac{\ln x+x-1}{x^2}=\dfrac{g(x)}{x^2}$.

b) $f$ décroît sur $]0;1]$ et croît sur $[1;+\infty[$ ; minimum $f(1)=0$.
:::

```figure
{"type":"graph","x":[-0.2,6],"y":[-0.5,4],"width":330,
 "functions":[{"fn":"(x-1)/x*log(x)","label":"(C)","color":"brand","domain":[0.12,6]}],
 "points":[{"x":1,"y":0,"label":"(1;0)"}],
 "caption":"$(\\mathcal C)$ : minimum $0$ en $x=1$."}
```

:::methode Questions 4 et 5
4. a) $H'(x)=\dfrac{2\ln x}{2}\times\dfrac1x=\dfrac{\ln x}x$. b) $\displaystyle\int_1^e\frac{\ln x}xdx=\frac{1-0}2=\frac12$. c) Par parties : $\displaystyle\int_1^e\ln x\,dx=\Big[x\ln x\Big]_1^e-\int_1^e1\,dx=e-(e-1)=1$.

5. a) $f(x)=\left(1-\dfrac1x\right)\ln x=\ln x-\dfrac{\ln x}x$.

b) $f\ge0$ sur $[1;e]$ : l’aire vaut $\displaystyle\int_1^ef(x)\,dx=1-\frac12=\frac12$ u.a., soit $0{,}5\ \text{cm}^2$.
:::
