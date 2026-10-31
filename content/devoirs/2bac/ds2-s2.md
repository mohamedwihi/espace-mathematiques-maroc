---
id: devoir-2bac-ds2-s2
titre: Devoir surveillé n°2 — Semestre 2
niveau: 2bac
semestre: 2
duree: 2 heures
---

:::remarque Consignes
Calculatrice non programmable autorisée. Le barème est indiqué entre parenthèses. Calcul intégral, équations différentielles, géométrie dans l’espace, probabilités.
:::


:::exercice Calcul intégral (4 points)
1. Par intégration par parties, calculer $I=\displaystyle\int_0^1xe^{2x}dx$. (1,5 pt)
2. Calculer $J=\displaystyle\int_1^e\frac{\ln x}{x^2}dx$. (1,5 pt)
3. Calculer la valeur moyenne de $x\mapsto x^2$ sur $[0;3]$. (1 pt)
:::

:::exercice Équations différentielles (4 points)
1. Résoudre $y'+2y=4$, puis déterminer la solution vérifiant $y(0)=0$. (2 pts)
2. Résoudre $y''-4y'+13y=0$, puis déterminer la solution telle que $y(0)=1$ et $y'(0)=2$. (2 pts)
:::

:::exercice Géométrie dans l’espace (7 points)
On donne $A(1;0;2)$, $B(2;1;1)$, $C(0;1;3)$ et $\Omega(1;1;0)$.
1. Calculer $\overrightarrow{AB}\wedge\overrightarrow{AC}$ et en déduire que $A$, $B$, $C$ ne sont pas alignés. (1,5 pt)
2. Montrer que $x+z-3=0$ est une équation du plan $(ABC)$. (1 pt)
3. Calculer l’aire du triangle $ABC$. (1 pt)
4. Soit $(\mathcal S)$ la sphère de centre $\Omega$ et de rayon $\sqrt6$.
   a) Calculer $d\left(\Omega,(ABC)\right)$ et en déduire que $(ABC)$ coupe $(\mathcal S)$ selon un cercle dont on donnera le rayon. (2 pts)
   b) Montrer que le centre de ce cercle est le point $B$. (1,5 pt)
:::

:::exercice Probabilités (5 points)
Une urne contient trois boules rouges et deux blanches. On tire simultanément deux boules ; $X$ est le nombre de boules rouges tirées.
1. Déterminer la loi de probabilité de $X$. (2 pts)
2. Calculer l’espérance $E(X)$. (1 pt)
3. On répète trois fois l’épreuve (en remettant les boules) : calculer la probabilité d’obtenir exactement deux fois deux boules rouges. (2 pts)
:::

# Corrigés

:::corrige
1. $u=x$, $v'=e^{2x}$, $v=\dfrac{e^{2x}}2$ : $I=\left[\dfrac{xe^{2x}}2\right]_0^1-\displaystyle\int_0^1\frac{e^{2x}}2dx=\dfrac{e^2}2-\dfrac{e^2-1}4=\dfrac{e^2+1}4$.
2. $u=\ln x$, $v=-\dfrac1x$ : $J=\left[-\dfrac{\ln x}x\right]_1^e+\displaystyle\int_1^e\frac{dx}{x^2}=-\dfrac1e+1-\dfrac1e=1-\dfrac2e$.
3. $\mu=\dfrac13\displaystyle\int_0^3x^2dx=\dfrac13\times9=3$.
:::

:::corrige
1. $y'=-2y+4$ : $y=Ce^{-2x}+2$ ; $y(0)=C+2=0$, $C=-2$ : $y=2-2e^{-2x}$.
2. $r^2-4r+13=0$ : $\Delta=-36$, $r=2\pm3i$ : $y=e^{2x}\left(\alpha\cos3x+\beta\sin3x\right)$. $y(0)=\alpha=1$ ; $y'(0)=2\alpha+3\beta=2$, $\beta=0$ : $y=e^{2x}\cos3x$.
:::

:::corrige
1. $\overrightarrow{AB}(1;1;-1)$, $\overrightarrow{AC}(-1;1;1)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(2;0;2)\ne\vec0$.
2. $(1;0;1)$ est normal ; $A$ : $1+2-3=0$ ; $B$ : $2+1-3=0$ ; $C$ : $0+3-3=0$.
3. $\mathcal A=\dfrac12\left\lVert\overrightarrow{AB}\wedge\overrightarrow{AC}\right\rVert=\dfrac12\sqrt8=\sqrt2$.
4. a) $d=\dfrac{\lvert1+0-3\rvert}{\sqrt2}=\sqrt2<\sqrt6$ : cercle de rayon $\sqrt{6-2}=2$.
   b) Le centre est le projeté de $\Omega$ : $(1+t;1;t)$ avec $1+t+t-3=0$, $t=1$ : c’est $(2;1;1)=B$.
:::

:::corrige
1. $\binom52=10$ tirages : $p(X=0)=\dfrac1{10}$, $p(X=1)=\dfrac{3\times2}{10}=\dfrac6{10}$, $p(X=2)=\dfrac{\binom32}{10}=\dfrac3{10}$.
2. $E(X)=\dfrac6{10}+2\times\dfrac3{10}=1{,}2$.
3. Loi binomiale $\mathcal B(3;0{,}3)$ : $p=\binom32(0{,}3)^2(0{,}7)=0{,}189$.
:::
