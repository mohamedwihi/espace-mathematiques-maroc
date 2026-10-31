---
id: bac-sx-2013-normale-corrige
titre: Corrigé — Examen national 2013, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(-1;1;0)$, $B(1;0;1)$ ; $(\mathcal S)$ de centre $\Omega(1;1;-1)$ et de rayon $3$.

:::methode Questions 1 et 2
1. a) $\overrightarrow{OA}\wedge\overrightarrow{OB}=(1;1;-1)=\vec i+\vec j-\vec k$ ; le plan $(OAB)$ passe par $O$ : $x+y-z=0$.

b) $d\left(\Omega,(OAB)\right)=\dfrac{\lvert1+1+1\rvert}{\sqrt3}=\sqrt3<3$ : le plan coupe la sphère selon un cercle $(\Gamma)$ de rayon $\sqrt{9-3}=\sqrt6$.

2. a) $(\Delta)$ passe par $\Omega$ et est dirigée par $(1;1;-1)$ : $x=1+t$, $y=1+t$, $z=-1-t$.

b) $(1+t)+(1+t)-(-1-t)=0\iff3t+3=0\iff t=-1$ : le centre de $(\Gamma)$ est l’origine $O(0;0;0)$.
:::

# Exercice 2 (3 points) — nombres complexes

$a=7+2i$, $b=4+8i$, $c=-2+5i$.

:::methode Questions 1 et 2
1. a) $(1+i)(-3+6i)=-3+6i-3i-6=-9+3i$. Comme $c-a=-9+3i$ et $b-a=-3+6i$ : $\dfrac{c-a}{b-a}=1+i$.

b) $\lvert1+i\rvert=\sqrt2$ donne $AC=\sqrt2\,AB$, et $\arg(1+i)\equiv\dfrac\pi4$ donne $\left(\overrightarrow{AB},\overrightarrow{AC}\right)\equiv\dfrac\pi4\ [2\pi]$.

2. a) Rotation de centre $B$ et d’angle $\dfrac\pi2$ : $d-b=i(a-b)=i(3-6i)=6+3i$, donc $d=10+11i$.

b) $\dfrac{d-c}{b-c}=\dfrac{12+6i}{6+3i}=2\in\mathbb R$ : $B$, $C$, $D$ sont alignés.
:::

# Exercice 3 (3 points) — probabilités

Dix boules : cinq rouges, trois vertes, deux blanches. On en tire quatre simultanément : $\binom{10}4=210$.

:::methode Questions 1 et 2
1. $p(A)=\dfrac{\binom52\binom32}{210}=\dfrac{30}{210}=\dfrac17$ ; $p(B)=\dfrac{\binom84}{210}=\dfrac{70}{210}=\dfrac13$.

2. a) Il n’y a que deux boules blanches : $X\in\{0;1;2\}$.

b) $p(X=1)=\dfrac{2\times\binom83}{210}=\dfrac{112}{210}=\dfrac8{15}$. Loi de $X$ : $p(X=0)=\dfrac13$, $p(X=1)=\dfrac8{15}$, $p(X=2)=\dfrac{\binom82}{210}=\dfrac{28}{210}=\dfrac2{15}$.
:::

# Exercice 4 (3 points) — suites

$u_1=0$ et $u_{n+1}=\dfrac{25}{10-u_n}$ ; $v_n=\dfrac5{5-u_n}$.

:::methode Questions 1 et 2
1. $5-u_{n+1}=\dfrac{50-5u_n-25}{10-u_n}=\dfrac{5(5-u_n)}{5+(5-u_n)}$ ; par récurrence, $5-u_n>0$.

2. a) $v_{n+1}=\dfrac{5(10-u_n)}{5(5-u_n)}=\dfrac{10-u_n}{5-u_n}$, et $v_{n+1}-v_n=\dfrac{10-u_n-5}{5-u_n}=1$.

b) $(v_n)$ est arithmétique de raison $1$, $v_1=1$, donc $v_n=n$ et $u_n=5-\dfrac5{v_n}=5-\dfrac5n$.

c) $\lim u_n=5$.
:::

# Exercice 5 (8 points) — étude de fonction et aire

$f(x)=(x-2)^2e^x$ (unité $1$ cm).

:::methode Questions 1 à 4
1. $\lim\limits_{+\infty}f=+\infty$ et $\dfrac{f(x)}x=\dfrac{(x-2)^2}xe^x\to+\infty$ : branche parabolique de direction l’axe des ordonnées.

2. a) $f(x)=\left(x^2-4x+4\right)e^x=x^2e^x-4xe^x+4e^x$. b) En $-\infty$, chacun de ces termes tend vers $0$ : $\lim\limits_{-\infty}f=0$, l’axe des abscisses est asymptote.

3. a) $f'(x)=2(x-2)e^x+(x-2)^2e^x=x(x-2)e^x$. b) $f$ croît sur $]-\infty;0]$ et sur $[2;+\infty[$, décroît sur $[0;2]$ ; $f(0)=4$ et $f(2)=0$.

4. a) $f''(x)=(2x-2)e^x+\left(x^2-2x\right)e^x=\left(x^2-2\right)e^x$ s’annule en changeant de signe en $-\sqrt2$ et $\sqrt2$ : deux points d’inflexion.
:::

```figure
{"type":"graph","x":[-5,3.3],"y":[-0.5,6],"width":320,
 "functions":[{"fn":"(x-2)*(x-2)*exp(x)","label":"(C)","color":"brand","domain":[-5,3.2]},{"fn":"1","label":"y=1","color":"saffron"}],
 "points":[{"x":0,"y":4,"label":"(0;4)"},{"x":2,"y":0,"label":"(2;0)"}],
 "caption":"$(\\mathcal C)$ et la droite $y=1$ (question 6)."}
```

:::methode Question 5
a) $H'(x)=e^x+(x-1)e^x=xe^x$ ; donc $\displaystyle\int_0^1xe^xdx=\Big[(x-1)e^x\Big]_0^1=0-(-1)=1$.

b) Par parties ($u=x^2$, $v'=e^x$) : $\displaystyle\int_0^1x^2e^xdx=\Big[x^2e^x\Big]_0^1-2\int_0^1xe^xdx=e-2$.

c) $f\ge0$ : l’aire vaut $\displaystyle\int_0^1\left(x^2-4x+4\right)e^xdx=(e-2)-4\times1+4(e-1)=5e-10=5(e-2)\ \text{cm}^2$.
:::

:::methode Question 6
$x^2=e^{-x}+4x-4\iff(x-2)^2=e^{-x}\iff(x-2)^2e^x=1\iff f(x)=1$. La droite $y=1$ coupe $(\mathcal C)$ en trois points (une fois sur $]-\infty;0[$, où $f$ croît de $0$ à $4$ ; une fois sur $]0;2[$, où $f$ décroît de $4$ à $0$ ; une fois sur $]2;+\infty[$) : l’équation a trois solutions.
:::
