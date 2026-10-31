---
id: bac-sx-2004-normale-corrige
titre: Corrigé — Examen national 2004, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3,5 points) — géométrie dans l’espace

$(\mathcal S):x^2+y^2+z^2-4y+2z+2=0$.

:::methode Question 1
$x^2+(y-2)^2+(z+1)^2=4+1-2=3$ : $(\mathcal S)$ est la sphère de centre $\Omega(0;2;-1)$ et de rayon $\sqrt3$.
:::

:::methode Question 2
a) Pour $A(-1;1;0)$ : $1+1+0-4+0+2=0$, donc $A\in(\mathcal S)$.

b) Le plan tangent en $A$ est normal à $\overrightarrow{\Omega A}(-1;-1;1)$ : $-(x+1)-(y-1)+z=0$, soit $(\mathcal P):x+y-z=0$.
:::

:::methode Question 3
$B(1;3;-2)$ vérifie $1+3-2-2=0$ et $\vec n(1;1;1)$ est normal au plan d’équation $x+y+z-2=0$ : c’est bien le plan $(Q)$.
:::

# Exercice 2 (3,5 points) — nombres complexes

$(E):z^2-4iz-4(1+i)=0$.

:::methode Question 1
$\Delta=(-4i)^2+16(1+i)=16i$ et $\left[2\sqrt2(1+i)\right]^2=8\times2i=16i$. Donc
$$z=\frac{4i\pm2\sqrt2(1+i)}{2}=2i\pm\sqrt2(1+i).$$
Comme $\operatorname{Re}(z_1)>0$ : $z_1=\sqrt2+i\left(2+\sqrt2\right)$ et $z_2=-\sqrt2+i\left(2-\sqrt2\right)$.
:::

:::methode Question 2
$a=2i$ et $b=\sqrt2(1+i)$ : $z_1=a+b$ et $z_2=a-b$. Formes trigonométriques :
$$a=2\left(\cos\frac\pi2+i\sin\frac\pi2\right)\qquad b=2\left(\cos\frac\pi4+i\sin\frac\pi4\right).$$
:::

:::methode Question 3
a) $OA=\lvert a\rvert=2=\lvert b\rvert=OB$ et $z_1=a+b$ donne $\overrightarrow{OC}=\overrightarrow{OA}+\overrightarrow{OB}$.

b) $OBCA$ est un parallélogramme avec $OA=OB$ : c’est un losange. Sa diagonale $[OC]$ est la bissectrice de l’angle $\left(\overrightarrow{OB},\overrightarrow{OA}\right)$, d’où
$$\arg z_1\equiv\frac12\left(\frac\pi4+\frac\pi2\right)=\frac{3\pi}8\ [2\pi].$$
:::

# Exercice 3 (3 points) — probabilités

Neuf jetons : $2$ blancs (numéros $1$ ; $1$), $3$ rouges ($1$ ; $1$ ; $2$), $4$ noirs ($1$ ; $1$ ; $2$ ; $2$). On en tire $3$ simultanément : $\operatorname{card}\Omega=\binom93=84$.

:::methode Question 1
- $A$ « un jeton de chaque couleur » : $2\times3\times4=24$, $p(A)=\dfrac{24}{84}=\dfrac27$.
- $B$ « même numéro » : six jetons portent $1$ et trois portent $2$ : $\binom63+\binom33=21$, $p(B)=\dfrac{21}{84}=\dfrac14$.
- $C$ « au moins un rouge » : $p(C)=1-\dfrac{\binom63}{84}=1-\dfrac{20}{84}=\dfrac{16}{21}$.
:::

:::methode Question 2
$A\cap B$ : un jeton de chaque couleur portant le même numéro. Aucun jeton blanc ne porte $2$, donc tous portent $1$ : $2\times2\times2=8$ tirages, $p(A\cap B)=\dfrac8{84}=\dfrac2{21}$.
:::

# Exercice 4 (10 points) — étude de fonction, intégrale et suite

$f(x)=1-\dfrac12x-\dfrac2{e^x+1}$ sur $\mathbb R$.

:::methode Partie I — questions 1 et 2
1. a) $\dfrac1{e^{-x}+1}=\dfrac{e^x}{1+e^x}=1-\dfrac1{e^x+1}$.

b) $f(-x)=1+\dfrac x2-2\left(1-\dfrac1{e^x+1}\right)=-1+\dfrac x2+\dfrac2{e^x+1}=-f(x)$ : $f$ est impaire.

2. $\dfrac2{e^x+1}\to0$ et $-\dfrac x2\to-\infty$ : $\lim\limits_{+\infty}f=-\infty$ (et $\lim\limits_{-\infty}f=+\infty$ par imparité).
:::

:::methode Partie I — question 3
a) $f'(x)=-\dfrac12+\dfrac{2e^x}{(e^x+1)^2}=\dfrac{-(e^x+1)^2+4e^x}{2(e^x+1)^2}=-\dfrac12\left(\dfrac{e^x-1}{e^x+1}\right)^2$.

b) $f'(x)\le0$ et ne s’annule qu’en $0$ : $f$ est strictement décroissante sur $\mathbb R$, avec $f(0)=0$.

c) Pour $x\ge0$ : $f(x)\le f(0)=0$, soit $1-\dfrac2{e^x+1}\le\dfrac12x$.
:::

:::methode Partie I — questions 4 et 5
4. $f(x)-\left(1-\dfrac12x\right)=-\dfrac2{e^x+1}\to0$ en $+\infty$ : la droite $(D):y=1-\dfrac12x$ est asymptote oblique à $(\mathcal C)$ en $+\infty$, et la courbe est en dessous. Par symétrie, $y=-1-\dfrac12x$ est asymptote en $-\infty$.

5. La courbe passe par $O$ (centre de symétrie) avec la tangente horizontale $y=0$.
:::

```figure
{"type":"graph","x":[-6,6],"y":[-4,4],"width":330,"orthonormal":true,
 "functions":[{"fn":"1-x/2-2/(exp(x)+1)","label":"(C)","color":"brand"},{"fn":"1-x/2","label":"(D)","color":"saffron"},{"fn":"-1-x/2","label":"","color":"saffron"}],
 "caption":"$(\\mathcal C)$ et ses deux asymptotes obliques."}
```

:::methode Partie I — question 6
a) $\dfrac1{1+e^x}=\dfrac{e^{-x}}{e^{-x}+1}$, de la forme $-\dfrac{u'}u$ avec $u=e^{-x}+1$ :
$$\int_{-1}^0\frac{dx}{1+e^x}=\Big[-\ln\left(e^{-x}+1\right)\Big]_{-1}^0=-\ln2+\ln(e+1)=\ln\frac{e+1}2.$$

b) Sur $[-1;0]$, $f(x)\ge f(0)=0$. L’aire vaut
$$\int_{-1}^0f(x)\,dx=\Big[x-\frac{x^2}4\Big]_{-1}^0-2\ln\frac{e+1}2=\frac54-2\ln\frac{e+1}2\ \text{u.a.}\approx0{,}01\ \text{u.a.}$$
:::

:::methode Partie II : $u_0=1$, $u_{n+1}=1-\dfrac2{e^{u_n}+1}$
1. Récurrence : $u_0>0$ ; si $u_n>0$, alors $e^{u_n}+1>2$ et $u_{n+1}>0$.

2. a) D’après I.3.c appliqué à $x=u_n\ge0$ : $u_{n+1}\le\dfrac12u_n$. b) Donc $u_{n+1}<u_n$ : la suite est décroissante.

3. Récurrence : $u_0=1=\left(\dfrac12\right)^0$ et $u_{n+1}\le\dfrac12u_n\le\left(\dfrac12\right)^{n+1}$. Comme $0<u_n\le\left(\dfrac12\right)^n\to0$ : $\lim u_n=0$.
:::
