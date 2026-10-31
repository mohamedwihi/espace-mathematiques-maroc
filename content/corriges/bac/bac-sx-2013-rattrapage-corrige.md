---
id: bac-sx-2013-rattrapage-corrige
titre: Corrigé — Examen national 2013, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(0;0;1)$, $B(1;1;1)$, $C(2;1;2)$ ; $(\mathcal S)$ de centre $\Omega(1;-1;0)$ et de rayon $\sqrt3$.

:::methode Questions 1 à 3
1. $(x-1)^2+(y+1)^2+z^2=3\iff x^2+y^2+z^2-2x+2y-1=0$. Pour $A$ : $0+0+1-0+0-1=0$, donc $A\in(\mathcal S)$.

2. a) $\overrightarrow{AB}(1;1;0)$ et $\overrightarrow{AC}(2;1;1)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(1;-1;-1)=\vec i-\vec j-\vec k$. D’où $(ABC):x-y-z+d=0$ avec $A$ : $d=1$.

b) $d\left(\Omega,(ABC)\right)=\dfrac{\lvert1+1-0+1\rvert}{\sqrt3}=\sqrt3$ : le plan est tangent à $(\mathcal S)$ ; comme $A$ appartient aux deux, le point de contact est $A$.

3. a) $(\Delta):x=1+t$, $y=-1-t$, $z=-t$. b) Dans l’équation de $(\mathcal S)$ : $t^2+t^2+t^2=3$, soit $t=\pm1$ : les points d’intersection sont $(2;-2;-1)$ et $(0;0;1)=A$.
:::

# Exercice 2 (3 points) — nombres complexes

:::methode Questions 1 et 2
1. $z^2-8z+25=0$ : $\Delta'=16-25=-9=(3i)^2$, donc $z=4+3i$ ou $z=4-3i$.

2. a) $d=a+(c-b)=4+3i+6+6i=10+9i$.

b) $\dfrac{b-a}{d-a}=\dfrac{-6i}{6+6i}=\dfrac{-i}{1+i}=\dfrac{-i(1-i)}{2}=-\dfrac12(1+i)$.

c) $-\dfrac12(1+i)=\dfrac{\sqrt2}2\left(\cos\dfrac{5\pi}4+i\sin\dfrac{5\pi}4\right)$, donc $\left(\overrightarrow{AD},\overrightarrow{AB}\right)\equiv\dfrac{5\pi}4\ [2\pi]$.
:::

# Exercice 3 (3 points) — suites

$u_0=2$ et $u_{n+1}=\dfrac15u_n+\dfrac45$.

:::methode Questions 1 à 3
1. $u_{n+1}-1=\dfrac15u_n-\dfrac15=\dfrac15(u_n-1)$.

2. a) Par récurrence, $u_n>1$. b) $u_{n+1}-u_n=\dfrac45(1-u_n)<0$ : décroissante et minorée par $1$, elle converge.

3. a) $v_{n+1}=\dfrac15v_n$, $v_0=1$ : $v_n=\left(\dfrac15\right)^n$. b) $u_n=1+\left(\dfrac15\right)^n\to1$.
:::

# Exercice 4 (3 points) — probabilités

Neuf jetons : trois noirs, quatre blancs, deux verts ; on en tire trois simultanément : $\binom93=84$.

:::methode Questions 1 et 2
1. $p(A)=\dfrac{\binom33+\binom43}{84}=\dfrac5{84}$ et $p(B)=\dfrac{3\times4\times2}{84}=\dfrac{24}{84}=\dfrac27$.

2. a) $X$ (nombre de jetons noirs) prend les valeurs $0$, $1$, $2$, $3$.

b) $p(X=1)=\dfrac{3\times\binom62}{84}=\dfrac{45}{84}=\dfrac{15}{28}$ et $p(X=2)=\dfrac{\binom32\times6}{84}=\dfrac{18}{84}=\dfrac3{14}$.

c) $p(X=0)=\dfrac{\binom63}{84}=\dfrac{20}{84}=\dfrac5{21}$ et $p(X=3)=\dfrac1{84}$ (total $20+45+18+1=84$).
:::

# Exercice 5 (8 points) — étude de fonction et aire

:::methode Partie I : $g(x)=x^2-x-\ln x$
1. $(2x+1)(x-1)=2x^2-x-1$.

2. $g'(x)=2x-1-\dfrac1x=\dfrac{2x^2-x-1}x=\dfrac{(2x+1)(x-1)}x$.

3. $g$ décroît sur $]0;1]$ et croît sur $[1;+\infty[$ ; minimum $g(1)=0$, donc $g(x)\ge0$.
:::

:::methode Partie II : $f(x)=x^2-1-(\ln x)^2$ (unité $1$ cm)
1. a) $\lim\limits_{0^+}f=-\infty$ : asymptote verticale $x=0$. b) $\lim\limits_{+\infty}f=+\infty$ et $\dfrac{f(x)}x=x-\dfrac1x-\dfrac{(\ln x)^2}x\to+\infty$ : branche parabolique de direction l’axe des ordonnées.

2. a) $f'(x)=2x-\dfrac{2\ln x}x$ et $\dfrac{g(x)}x+1=x-1-\dfrac{\ln x}x+1=x-\dfrac{\ln x}x=\dfrac12f'(x)$.

b) Comme $g\ge0$, $f'(x)=2\left(\dfrac{g(x)}x+1\right)>0$ : $f$ est strictement croissante.

3. a) $f(1)=0$ et $f'(1)=2$ : $(\Delta):y=2x-2$.
:::

```figure
{"type":"graph","x":[-0.3,3.2],"y":[-3,6],"width":320,
 "functions":[{"fn":"x*x-1-log(x)*log(x)","label":"(C)","color":"brand","domain":[0.2,3]},{"fn":"2*x-2","label":"(Δ)","color":"saffron","domain":[0,3]}],
 "points":[{"x":1,"y":0,"label":"A(1;0)"}],
 "caption":"$(\\mathcal C)$ et sa tangente $(\\Delta)$ en $A$."}
```

:::methode Question 4
a) $\left(x(\ln x-1)\right)'=\ln x-1+1=\ln x$ ; donc $\displaystyle\int_1^e\ln x\,dx=\Big[x(\ln x-1)\Big]_1^e=0-(-1)=1$.

b) Par parties ($u=(\ln x)^2$, $v'=1$) : $\displaystyle\int_1^e(\ln x)^2dx=\Big[x(\ln x)^2\Big]_1^e-2\int_1^e\ln x\,dx=e-2$.

c) Sur $[1;e]$, $f(x)\ge f(1)=0$ : l’aire vaut
$$\int_1^e\left(x^2-1\right)dx-(e-2)=\left[\frac{x^3}3-x\right]_1^e-e+2=\frac{e^3}3-2e+\frac83\approx3{,}93\ \text{cm}^2.$$
:::
