---
id: bac-sx-2004-rattrapage-corrige
titre: Corrigé — Examen national 2004, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (2,5 points) — suite numérique

$u_0=1$ et $u_{n+1}=\dfrac{u_n^3}{3u_n^2+1}$.

:::methode Questions 1 et 2
1. a) Récurrence : $u_0>0$ ; si $u_n>0$, numérateur et dénominateur sont positifs, donc $u_{n+1}>0$.

b) $\dfrac{u_{n+1}}{u_n}=\dfrac{u_n^2}{3u_n^2+1}<1$ : la suite est décroissante. c) Décroissante et minorée par $0$, elle converge.

2. a) $u_{n+1}=u_n\times\dfrac{u_n^2}{3u_n^2+1}$ et $\dfrac{u_n^2}{3u_n^2+1}<\dfrac{u_n^2}{3u_n^2}=\dfrac13$, donc $u_{n+1}<\dfrac13u_n$.

b) Par récurrence, $u_n\le\left(\dfrac13\right)^n$ pour tout $n$ (avec inégalité stricte dès $n\ge1$). Comme $0<u_n\le\left(\dfrac13\right)^n\to0$ : $\lim u_n=0$.
:::

# Exercice 2 (3,5 points) — géométrie dans l’espace

$A(1;2;-2)$, $B(0;3;-3)$, $C(1;1;-2)$, $(\mathcal P):x+y-3=0$ et $\Omega(0;1;-1)$.

:::methode Question 1
a) $d(\Omega,\mathcal P)=\dfrac{\lvert0+1-3\rvert}{\sqrt2}=\sqrt2$.

b) La sphère de centre $\Omega$ tangente à $(\mathcal P)$ a pour rayon $\sqrt2$ : $x^2+(y-1)^2+(z+1)^2=2$, soit $x^2+y^2+z^2-2y+2z=0$.
:::

:::methode Question 2
a) $\overrightarrow{AB}(-1;1;-1)$ et $\overrightarrow{AC}(0;-1;0)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(-1;0;1)\ne\vec0$, donc $A$, $B$, $C$ ne sont pas alignés.

b) $(ABC)$ a pour vecteur normal $(-1;0;1)$ : $-x+z+d=0$ avec $A$ : $d=3$, soit $x-z-3=0$.
:::

:::methode Question 3
a) $d\left(\Omega,(ABC)\right)=\dfrac{\lvert0+1-3\rvert}{\sqrt2}=\sqrt2$ : le plan $(ABC)$ est tangent à $(\mathcal S)$.

b) $\Omega C=\sqrt{1+0+1}=\sqrt2$ et $C\in(ABC)$ : $C$ est le point de contact.
:::

# Exercice 3 (3 points) — nombres complexes

:::methode Question 1
$(E):2z^2-2iz-1=0$ : $\Delta=(-2i)^2+8=4$, $z=\dfrac{2i\pm2}{4}$. Donc $z_1=\dfrac12+\dfrac12i=\dfrac{\sqrt2}2\left(\cos\dfrac\pi4+i\sin\dfrac\pi4\right)$ et $z_2=-\dfrac12+\dfrac12i=\dfrac{\sqrt2}2\left(\cos\dfrac{3\pi}4+i\sin\dfrac{3\pi}4\right)$.
:::

:::methode Question 2
a) $\dfrac{a-s}{b-s}=\dfrac{\frac12-\frac12i}{-\frac12-\frac12i}=-\dfrac{1-i}{1+i}=-\dfrac{(1-i)^2}{2}=i=\cos\dfrac\pi2+i\sin\dfrac\pi2$.

b) $SA=SB$ et $\left(\overrightarrow{SB},\overrightarrow{SA}\right)\equiv\dfrac\pi2\ [2\pi]$ : $SAB$ est rectangle et isocèle en $S$.

c) $a+b=i=s$, donc $\overrightarrow{OS}=\overrightarrow{OA}+\overrightarrow{OB}$ : $OASB$ est un parallélogramme ; $OA=OB=\dfrac{\sqrt2}2$ et $\dfrac ab=-i$ donne $(OA)\perp(OB)$ : c’est un carré.
:::

# Exercice 4 (3 points) — probabilités

$\mathcal U_1$ : $2$ jetons « $1$ » et $4$ jetons « $2$ ». $\mathcal U_2$ : $3$ boules rouges et $4$ vertes.

:::methode Question 1
$p(A)=\dfrac26=\dfrac13$ et $p(B)=\dfrac46=\dfrac23$.
:::

:::methode Question 2
Si le jeton porte $1$, on tire une boule de $\mathcal U_2$ ; s’il porte $2$, on en tire deux simultanément ($\binom72=21$ tirages).

a) $p(E_2)=\dfrac23\times\dfrac{\binom32}{21}=\dfrac23\times\dfrac3{21}=\dfrac2{21}$ et
$$p(E_1)=\frac13\times\frac37+\frac23\times\frac{3\times4}{21}=\frac3{21}+\frac8{21}=\frac{11}{21}.$$

b) $p_{E_1}(A)=\dfrac{p(A\cap E_1)}{p(E_1)}=\dfrac{\frac3{21}}{\frac{11}{21}}=\dfrac3{11}$.
:::

# Exercice 5 (8 points) — fonction logarithme et intégrale

$f(x)=\ln\left(x^2-2x+2\right)$.

:::methode Questions 1 à 3
1. $x^2-2x+2=(x-1)^2+1\ge1>0$ : $f$ est définie sur $\mathbb R$, et $\lim\limits_{\pm\infty}f=+\infty$.

2. $f(2-x)=\ln\left((1-x)^2+1\right)=f(x)$ : la droite $x=1$ est axe de symétrie de $(\mathcal C)$.

3. a) Pour $x\ge1$ : $x^2-2x+2=x^2\left(1-\dfrac2x+\dfrac2{x^2}\right)$, d’où $f(x)=2\ln x+\ln\left(1-\dfrac2x+\dfrac2{x^2}\right)$.

b) $\dfrac{f(x)}x=2\dfrac{\ln x}x+\dfrac1x\ln\left(1-\dfrac2x+\dfrac2{x^2}\right)\to0$ : branche parabolique de direction l’axe des abscisses.
:::

:::methode Questions 4 et 5
4. $f'(x)=\dfrac{2x-2}{(x-1)^2+1}=\dfrac{2(x-1)}{(x-1)^2+1}$ : $f$ décroît sur $]-\infty;1]$, croît sur $[1;+\infty[$, minimum $f(1)=0$.

5. $f''(x)=\dfrac{2\left[(x-1)^2+1\right]-4(x-1)^2}{\left[(x-1)^2+1\right]^2}=\dfrac{2-2(x-1)^2}{\left[(x-1)^2+1\right]^2}=\dfrac{2x(2-x)}{\left[(x-1)^2+1\right]^2}$.

$(\mathcal C)$ est convexe sur $[0;2]$, concave sur $]-\infty;0]$ et sur $[2;+\infty[$ ; points d’inflexion $(0;\ln2)$ et $(2;\ln2)$.
:::

```figure
{"type":"graph","x":[-3,5],"y":[-0.5,3.5],"width":330,
 "functions":[{"fn":"log(x*x-2*x+2)","label":"(C)","color":"brand"}],
 "points":[{"x":1,"y":0,"label":"(1;0)"},{"x":0,"y":0.693,"label":"I"},{"x":2,"y":0.693,"label":"J"}],
 "caption":"$(\\mathcal C)$ : axe de symétrie $x=1$, points d’inflexion $I(0;\\ln2)$ et $J(2;\\ln2)$."}
```

:::methode Question 7
a) $h$ (restriction à $[1;+\infty[$) est continue et strictement croissante : bijection de $[1;+\infty[$ sur $J=[0;+\infty[$.

b) $y=\ln\left((x-1)^2+1\right)\iff(x-1)^2=e^y-1\iff x=1+\sqrt{e^y-1}$ (car $x\ge1$). Donc $h^{-1}(y)=1+\sqrt{e^y-1}$.
:::

:::methode Question 8
a) Avec $t=x-1$ : $\displaystyle\int_0^1f(x)\,dx=\int_{-1}^0\ln\left(1+t^2\right)dt$.

b) Par parties ($u=\ln(1+t^2)$, $v'=1$) :
$$\int_{-1}^0\ln\left(1+t^2\right)dt=\Big[t\ln\left(1+t^2\right)\Big]_{-1}^0-\int_{-1}^0\frac{2t^2}{1+t^2}dt=\ln2-2\int_{-1}^0\frac{t^2}{1+t^2}dt.$$

c) $\dfrac{t^2}{1+t^2}=1-\dfrac1{1+t^2}$ et une primitive de $\dfrac1{1+t^2}$ est $\arctan t$ : $\displaystyle\int_{-1}^0\frac{t^2}{1+t^2}dt=1-\Big[\arctan t\Big]_{-1}^0=1-\frac\pi4$.

d) $f\ge0$ : l’aire du domaine limité par $(\mathcal C)$, l’axe des abscisses et les droites $x=0$ et $x=1$ (soit $t=-1$ et $t=0$) vaut
$$\ln2-2\left(1-\frac\pi4\right)=\ln2-2+\frac\pi2\approx0{,}26\ \text{u.a.}$$
:::
