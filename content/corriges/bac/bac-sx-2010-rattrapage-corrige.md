---
id: bac-sx-2010-rattrapage-corrige
titre: Corrigé — Examen national 2010, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(0;-2;0)$, $B(1;1;-4)$, $C(0;1;-4)$ et $(\mathcal S):x^2+y^2+z^2-2x-4y-6z-11=0$.

:::methode Questions 1 à 3
1. $(x-1)^2+(y-2)^2+(z-3)^2=1+4+9+11=25$ : centre $\Omega(1;2;3)$, rayon $5$.

2. a) $\overrightarrow{AB}(1;3;-4)$ et $\overrightarrow{AC}(0;3;-4)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(0;4;3)=4\vec j+3\vec k$. D’où $(ABC):4y+3z+d=0$ avec $A$ : $d=8$, soit $4y+3z+8=0$.

b) $d\left(\Omega,(ABC)\right)=\dfrac{\lvert8+9+8\rvert}{5}=5$ : le plan est tangent à $(\mathcal S)$.

3. a) $(\Delta):x=1$, $y=2+4t$, $z=3+3t$.

b) $4(2+4t)+3(3+3t)+8=0\iff25t=-25\iff t=-1$ : $H(1;-2;0)$.

c) $H$ est sur le plan et $\Omega H=\sqrt{0+16+9}=5$ : $H$ est sur la sphère, c’est le point de contact.
:::

# Exercice 2 (3 points) — nombres complexes et rotation

:::methode Questions 1 et 2
1. $z^2-8\sqrt3z+64=0$ : $\Delta'=48-64=-16=(4i)^2$, donc $z=4\sqrt3+4i$ ou $z=4\sqrt3-4i$.

2. a) Rotation de centre $O$ et d’angle $\dfrac{4\pi}3$ : $z'=e^{i\frac{4\pi}3}z=\left(-\dfrac12-\dfrac{\sqrt3}2i\right)z$.

b) $\left(-\dfrac12-\dfrac{\sqrt3}2i\right)\times8i=4\sqrt3-4i=b$ : $B=\mathcal R(A)$.

c) $\dfrac{a-b}{c-b}=\dfrac{-4\sqrt3+12i}{4\sqrt3+12i}=\dfrac{\left(-\sqrt3+3i\right)\left(\sqrt3-3i\right)}{12}=\dfrac{6+6\sqrt3i}{12}=\dfrac12+\dfrac{\sqrt3}2i=\cos\dfrac\pi3+i\sin\dfrac\pi3$.

d) $BA=BC$ et $\left(\overrightarrow{BC},\overrightarrow{BA}\right)\equiv\dfrac\pi3$ : $ABC$ est équilatéral.
:::

# Exercice 3 (3 points) — probabilités

Huit boules : trois portent le numéro $1$, trois le numéro $2$ et deux le numéro $3$. On en tire deux successivement sans remise ($8\times7=56$ issues).

:::methode Questions 1 et 2
1. $p(A)=\dfrac{3\times2}{56}=\dfrac3{28}$ ; $p(B)=1-\dfrac{6\times5}{56}=1-\dfrac{15}{28}=\dfrac{13}{28}$.

2. $X$ = nombre de boules portant un numéro impair (cinq boules impaires, trois paires).

a) $X\in\{0;1;2\}$.

b) $p(X=1)=\dfrac{2\times5\times3}{56}=\dfrac{15}{28}$.

c) $p(X=0)=\dfrac{3\times2}{56}=\dfrac3{28}$ et $p(X=2)=\dfrac{5\times4}{56}=\dfrac{10}{28}=\dfrac5{14}$.
:::

# Exercice 4 (3 points) — suites

$u_0=1$ et $u_{n+1}=\dfrac{3u_n}{21+u_n}$.

:::methode Questions 1 à 4
1. Récurrence immédiate : $u_n>0$.

2. $u_{n+1}=u_n\times\dfrac3{21+u_n}<u_n\times\dfrac3{21}=\dfrac17u_n$.

3. Donc $u_{n+1}<u_n$ : la suite est décroissante ; minorée par $0$, elle converge.

4. a) $u_0=1=\left(\dfrac17\right)^0$ et, si $u_n\le\left(\dfrac17\right)^n$, alors $u_{n+1}<\dfrac17u_n\le\left(\dfrac17\right)^{n+1}$. b) Par encadrement, $\lim u_n=0$.
:::

# Exercice 5 (8 points) — étude de fonction et aire

:::methode Partie I : $g(x)=x^3-x-2\ln x+3$
1. a) $(x-1)\left(3x^2+3x+2\right)=3x^3-x-2$. b) $g'(x)=3x^2-1-\dfrac2x=\dfrac{3x^3-x-2}x=\dfrac{(x-1)\left(3x^2+3x+2\right)}x$.

2. a) $3x^2+3x+2$ a un discriminant négatif : il est toujours positif, et $x>0$. b) $g'$ a donc le signe de $x-1$.

3. a) $g$ décroît sur $]0;1]$ et croît sur $[1;+\infty[$. b) Minimum $g(1)=3>0$ : $g(x)>0$.
:::

:::methode Partie II : $f(x)=x-1+\dfrac{x-1+\ln x}{x^2}$
1. $f'(x)=1+\dfrac{\left(1+\frac1x\right)x^2-2x(x-1+\ln x)}{x^4}=1+\dfrac{3-x-2\ln x}{x^3}=\dfrac{g(x)}{x^3}>0$ : $f$ est strictement croissante.

2. a) En $0^+$, $x-1+\ln x\to-\infty$ et $x^2\to0^+$ : $\lim\limits_{0^+}f=-\infty$, asymptote verticale $x=0$.

b) $\dfrac{x-1+\ln x}{x^2}=\dfrac1x-\dfrac1{x^2}+\dfrac{\ln x}x\times\dfrac1x\to0$, donc $\lim\limits_{+\infty}f=+\infty$.

c) $f(x)-(x-1)\to0$ : $(\Delta):y=x-1$ est asymptote oblique en $+\infty$.

3. $f(1)=0$ et $f'(1)=g(1)=3$ : la tangente en $(1;0)$ est $y=3(x-1)$.
:::

```figure
{"type":"graph","x":[-0.3,5],"y":[-3,4.5],"width":330,
 "functions":[{"fn":"x-1+(x-1+log(x))/(x*x)","label":"(C)","color":"brand","domain":[0.35,5]},{"fn":"x-1","label":"(Δ)","color":"saffron"}],
 "points":[{"x":1,"y":0,"label":"(1;0)"}],
 "caption":"$(\\mathcal C)$ et son asymptote oblique $(\\Delta):y=x-1$."}
```

:::methode Question 5
a) Par parties ($u=\ln x$, $v'=\dfrac1{x^2}$, $v=-\dfrac1x$) :
$$\int_1^e\frac{\ln x}{x^2}dx=\left[-\frac{\ln x}x\right]_1^e+\int_1^e\frac{dx}{x^2}=-\frac1e+1-\frac1e=1-\frac2e.$$

b) Sur $[1;e]$, $f(x)-(x-1)=\dfrac{x-1+\ln x}{x^2}\ge0$. L’aire vaut
$$\int_1^e\left(\frac1x-\frac1{x^2}\right)dx+1-\frac2e=\Big[\ln x+\frac1x\Big]_1^e+1-\frac2e=\frac1e+1-\frac2e=\left(1-\frac1e\right)\ \text{cm}^2.$$
:::
