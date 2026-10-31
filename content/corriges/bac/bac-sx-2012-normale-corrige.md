---
id: bac-sx-2012-normale-corrige
titre: Corrigé — Examen national 2012, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(1;1;-1)$, $B(0;1;-2)$, $C(3;2;1)$ et $(\mathcal S):x^2+y^2+z^2-2x-2z-1=0$.

:::methode Questions 1 à 3
1. $(x-1)^2+y^2+(z-1)^2=1+1+1=3$ : centre $\Omega(1;0;1)$, rayon $\sqrt3$.

2. a) $\overrightarrow{AB}(-1;0;-1)$ et $\overrightarrow{AC}(2;1;2)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(1;0;-1)=\vec i-\vec k$. Le plan $(ABC)$ : $x-z+d=0$ avec $A$ : $d=-2$, soit $x-z-2=0$.

b) $d\left(\Omega,(ABC)\right)=\dfrac{\lvert1-1-2\rvert}{\sqrt2}=\sqrt2<\sqrt3$ : le plan coupe la sphère selon un cercle $(\Gamma)$ de rayon $\sqrt{3-2}=1$.

3. a) $(\Delta):x=1+t$, $y=0$, $z=1-t$. b) $(1+t)-(1-t)-2=0\iff t=1$ : $H(2;0;0)$. c) Le centre de $(\Gamma)$ est $H(2;0;0)$.
:::

# Exercice 2 (3 points) — nombres complexes

:::methode Questions 1 et 2
1. $z^2-12z+61=0$ : $\Delta'=36-61=-25=(5i)^2$, donc $z=6+5i$ ou $z=6-5i$.

2. a) $\dfrac{a-c}{b-c}=\dfrac{4-6i}{2-3i}=2\in\mathbb R$ : $A$, $B$, $C$ sont alignés.

b) $d=c+(1+5i)=3+6i$.

c) $\dfrac{d-c}{b-c}=\dfrac{1+5i}{2-3i}=\dfrac{(1+5i)(2+3i)}{13}=\dfrac{-13+13i}{13}=-1+i=\sqrt2\left(\cos\dfrac{3\pi}4+i\sin\dfrac{3\pi}4\right)$.

d) Donc $\left(\overrightarrow{CB},\overrightarrow{CD}\right)\equiv\arg\dfrac{d-c}{b-c}\equiv\dfrac{3\pi}4\ [2\pi]$.
:::

# Exercice 3 (3 points) — probabilités

Huit jetons : un porte $0$, cinq portent $1$ et deux portent $2$. On en tire trois simultanément : $\binom83=56$.

:::methode Question
- $A$ « trois numéros différents » : $1\times5\times2=10$, $p(A)=\dfrac{10}{56}=\dfrac5{28}$.
- $B$ « somme égale à $5$ » : $\{1;2;2\}$, $5\times1=5$ tirages, $p(B)=\dfrac5{56}$.
- $C$ « somme égale à $4$ » : $\{0;2;2\}$ ($1$ tirage) ou $\{1;1;2\}$ ($\binom52\times2=20$ tirages), $p(C)=\dfrac{21}{56}=\dfrac38$.
:::

# Exercice 4 (3 points) — suites

$u_0=11$ et $u_{n+1}=\dfrac{10}{11}u_n+\dfrac{12}{11}$.

:::methode Questions 1 à 3
1. $u_{n+1}-12=\dfrac{10}{11}u_n+\dfrac{12-132}{11}=\dfrac{10}{11}\left(u_n-12\right)$.

2. a) Récurrence : $u_0<12$, et $u_{n+1}-12$ a le signe de $u_n-12$. b) $u_{n+1}-u_n=\dfrac{12-u_n}{11}>0$ : la suite est strictement croissante. c) Croissante et majorée par $12$, elle converge.

3. a) $v_{n+1}=\dfrac{10}{11}v_n$ : géométrique, $v_0=-1$, $v_n=-\left(\dfrac{10}{11}\right)^n$. b) $u_n=12-\left(\dfrac{10}{11}\right)^n$ et $\lim u_n=12$.
:::

# Exercice 5 (8 points) — étude de fonction et aire

:::methode Partie I : $g(x)=x^2-1+2x^2\ln x$
1. Sur $]0;1]$ : $x^2-1\le0$ et $2x^2\ln x\le0$, donc $g(x)\le0$.

2. Sur $[1;+\infty[$ : $x^2-1\ge0$ et $2x^2\ln x\ge0$, donc $g(x)\ge0$.
:::

:::methode Partie II : $f(x)=\left(x^2-1\right)\ln x$ (unité d’aire $3\ \text{cm}^2$)
1. a) En $0^+$ : $x^2-1\to-1$ et $\ln x\to-\infty$, donc $f\to+\infty$ : asymptote verticale $x=0$.

b) $\lim\limits_{+\infty}f=+\infty$ et $\dfrac{f(x)}x=\left(x-\dfrac1x\right)\ln x\to+\infty$ : branche parabolique de direction l’axe des ordonnées.

2. a) $f'(x)=2x\ln x+\dfrac{x^2-1}x=\dfrac{g(x)}x$ ; $f'(1)=0$ : tangente horizontale en $(1;0)$.

b) $f$ décroît sur $]0;1]$ et croît sur $[1;+\infty[$. c) Minimum $f(1)=0$ : $f(x)\ge0$.
:::

```figure
{"type":"graph","x":[-0.2,3],"y":[-0.5,5],"width":320,
 "functions":[{"fn":"(x*x-1)*log(x)","label":"(C)","color":"brand","domain":[0.05,2.8]}],
 "points":[{"x":1,"y":0,"label":"(1;0)"}],
 "caption":"$(\\mathcal C)$ : tangente horizontale en $(1;0)$."}
```

:::methode Question 4
a) $u'(x)=x^2-1$.

b) Par parties avec $u=\ln x$ et $v'=x^2-1$ ($v=\dfrac{x^3}3-x$) :
$$\int_1^2\left(x^2-1\right)\ln x\,dx=\left[\left(\frac{x^3}3-x\right)\ln x\right]_1^2-\int_1^2\left(\frac{x^2}3-1\right)dx=\frac23\ln2-\left[\frac{x^3}9-x\right]_1^2=\frac23\ln2+\frac29=\frac29(1+3\ln2).$$

c) $f\ge0$ : l’aire vaut $\dfrac29(1+3\ln2)$ u.a. $=\dfrac23(1+3\ln2)\ \text{cm}^2\approx2{,}05\ \text{cm}^2$.
:::
