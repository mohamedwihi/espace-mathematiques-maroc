---
id: bac-sx-2003-normale-corrige
titre: Corrigé — Examen national 2003, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site ; chaque exercice rappelle ici les données utiles.
:::

# Exercice 1 (2 points) — calcul intégral

:::methode Question 1 : $I=\displaystyle\int_1^2\ln x\,dx$
Intégration par parties avec $u=\ln x$, $v'=1$, donc $u'=\dfrac1x$, $v=x$ :
$$I=\big[x\ln x\big]_1^2-\int_1^2 1\,dx=2\ln2-1.$$
:::

:::methode Question 2 : $J=\displaystyle\int_0^{\ln4}x\sqrt{e^{x}}\,dx$
$\sqrt{e^x}=e^{\frac x2}$. Par parties avec $u=x$, $v'=e^{\frac x2}$, $v=2e^{\frac x2}$ :
$$J=\Big[2xe^{\frac x2}\Big]_0^{\ln4}-\int_0^{\ln4}2e^{\frac x2}dx=\Big[2xe^{\frac x2}-4e^{\frac x2}\Big]_0^{\ln4}.$$
Comme $e^{\frac{\ln4}2}=2$ : $J=(4\ln4-8)-(-4)=4\ln4-4=8\ln2-4$.
:::

# Exercice 2 (2,5 points) — probabilités

Le sac contient $8$ boules : $6$ blanches numérotées $0$ ; $0$ ; $0$ ; $1$ ; $1$ ; $2$ et $2$ noires numérotées $0$ et $1$. On tire simultanément $2$ boules : $\operatorname{card}\Omega=\binom82=28$.

:::methode Question 1
- $A$ « même couleur » : $\binom62+\binom22=15+1=16$, donc $p(A)=\dfrac{16}{28}=\dfrac47$.
- $B$ « produit nul » : l’événement contraire est « les deux numéros sont non nuls ». Les boules non nulles sont $1$ ; $1$ ; $2$ (blanches) et $1$ (noire), soit $4$ boules : $\binom42=6$. Donc $p(B)=1-\dfrac6{28}=\dfrac{11}{14}$.
:::

:::methode Question 2 : loi de $X$ (somme des numéros)
Il y a quatre boules « $0$ », trois boules « $1$ » et une boule « $2$ ». $X$ prend les valeurs $0$, $1$, $2$, $3$ :
| $x_i$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Tirages | $\binom42=6$ | $4\times3=12$ | $\binom32+4\times1=7$ | $3\times1=3$ |
| $p(X=x_i)$ | $\dfrac3{14}$ | $\dfrac37$ | $\dfrac14$ | $\dfrac3{28}$ |

Vérification : $6+12+7+3=28$.
:::

# Exercice 3 (3,5 points) — nombres complexes

$m$ est un complexe de module $\sqrt2$ et d’argument $\alpha$ ; $(E):mz^2-2z+\overline m=0$.

:::methode Question 1
Discriminant réduit : $\Delta'=1-m\overline m=1-\lvert m\rvert^2=1-2=-1=i^2$. Les solutions sont
$$z'=\frac{1+i}{m}\qquad z''=\frac{1-i}{m}.$$
:::

:::methode Question 2
$m=\sqrt2e^{i\alpha}$, $1+i=\sqrt2e^{i\frac\pi4}$ et $1-i=\sqrt2e^{-i\frac\pi4}$ :
- $z'=e^{i\left(\frac\pi4-\alpha\right)}=\cos\left(\dfrac\pi4-\alpha\right)+i\sin\left(\dfrac\pi4-\alpha\right)$ ;
- $z''=e^{-i\left(\frac\pi4+\alpha\right)}=\cos\left(\dfrac\pi4+\alpha\right)-i\sin\left(\dfrac\pi4+\alpha\right)$ ;
- $\dfrac{z'}{z''}=\dfrac{1+i}{1-i}=i=\cos\dfrac\pi2+i\sin\dfrac\pi2$.
:::

:::methode Question 3 : $OACB$ est un carré
$\overrightarrow{OC}=\overrightarrow{OA}+\overrightarrow{OB}$ (affixes $z'+z''=z'+z''$) : $OACB$ est un parallélogramme. De plus $\lvert z'\rvert=\lvert z''\rvert=1$, donc $OA=OB$, et $\dfrac{z'}{z''}=i$ donne $\left(\overrightarrow{OB},\overrightarrow{OA}\right)\equiv\dfrac\pi2\ [2\pi]$ : deux côtés consécutifs égaux et perpendiculaires, c’est un carré.
:::

# Exercice 4 (2 points) — géométrie dans l’espace

$A(2;0;2)$ et $(\mathcal P):x+y-z-3=0$.

:::methode Questions 1 et 2
$\vec n(1;1;-1)$ est normal à $(\mathcal P)$ et dirige $(D)$ : $(D):\ x=2+t,\ y=t,\ z=2-t$ ($t\in\mathbb R$).

Intersection : $(2+t)+t-(2-t)-3=0\iff3t=3\iff t=1$, donc $B(3;1;1)$.
:::

:::methode Question 3
$B$ est le projeté orthogonal de $A$ sur $(\mathcal P)$ : $d(A,\mathcal P)=AB=\sqrt{1+1+1}=\sqrt3$. Le rayon $R$ de la sphère vérifie $R^2=AB^2+r^2=3+4=7$, donc $R=\sqrt7$ et
$$(\mathcal S):(x-2)^2+y^2+(z-2)^2=7.$$
:::

# Exercice 5 (10 points) — étude de fonction et suite

$f(x)=\ln\left(1-x^3\right)$ si $x<0$ et $f(x)=4x\sqrt x-3x^2$ si $x\ge0$.

:::methode 1. Continuité et dérivabilité en $0$
a) $\lim\limits_{x\to0^-}\ln\left(1-x^3\right)=\ln1=0=f(0)$ et $\lim\limits_{x\to0^+}\left(4x\sqrt x-3x^2\right)=0$ : $f$ est continue en $0$.

b) À gauche : $\dfrac{f(x)}{x}=\dfrac{\ln\left(1-x^3\right)}{-x^3}\times\left(-x^2\right)\to1\times0=0$ (avec $t=-x^3\to0$). À droite : $\dfrac{f(x)}x=4\sqrt x-3x\to0$. Donc $f$ est dérivable en $0$ et $f'(0)=0$.
:::

:::methode 2. Variations
- Pour $x<0$ : $f'(x)=\dfrac{-3x^2}{1-x^3}<0$ : $f$ décroît sur $]-\infty;0]$.
- Pour $x>0$ : $f'(x)=6\sqrt x-6x=6\sqrt x\left(1-\sqrt x\right)$, positif sur $]0;1[$ et négatif sur $]1;+\infty[$.

$f$ décroît sur $]-\infty;0]$ et sur $[1;+\infty[$, croît sur $[0;1]$ ; $f(0)=0$ et $f(1)=1$.
:::

:::methode 3. Limites et branches infinies
a) $\lim\limits_{x\to+\infty}f(x)=\lim x^2\left(\dfrac{4}{\sqrt x}-3\right)=-\infty$ ; $\lim\limits_{x\to-\infty}f(x)=\lim\ln\left(1-x^3\right)=+\infty$.

b) Pour $x<0$ : $1-x^3=(-x)^3\left(1-x^{-3}\right)$, donc $f(x)=3\ln(-x)+\ln\left(1-x^{-3}\right)$ et
$$\frac{f(x)}x=3\,\frac{\ln(-x)}{x}+\frac{\ln\left(1-x^{-3}\right)}{x}.$$

c) En $-\infty$ : $\dfrac{\ln(-x)}x=-\dfrac{\ln(-x)}{-x}\to0$ et $\ln\left(1-x^{-3}\right)\to0$, donc $\dfrac{f(x)}x\to0$ : branche parabolique de direction l’axe des abscisses. En $+\infty$ : $\dfrac{f(x)}x=4\sqrt x-3x\to-\infty$ : branche parabolique de direction l’axe des ordonnées.
:::

:::methode 4. Tracé
Points utiles : $O(0;0)$ (tangente horizontale), maximum $(1;1)$, et $f(x)=0$ pour $x>0$ lorsque $4\sqrt x=3x$, soit $x=\dfrac{16}9$.
:::

```figure
{"type":"graph","x":[-2.5,2.6],"y":[-2.5,2.6],"width":330,"orthonormal":true,
 "functions":[{"fn":"x<0 ? log(1-x*x*x) : 4*x*sqrt(x)-3*x*x","label":"(C)","color":"brand","domain":[-2.4,2.5]}],
 "points":[{"x":1,"y":1,"label":"(1;1)"},{"x":1.778,"y":0,"label":"16/9"}],
 "caption":"Allure de la courbe $(\\mathcal C)$."}
```

:::methode 5. Restriction $h$ à $]-\infty;0[$
a) $h$ est continue et strictement décroissante sur $]-\infty;0[$, avec $\lim\limits_{-\infty}h=+\infty$ et $\lim\limits_{0^-}h=0$ : $h$ est une bijection de $]-\infty;0[$ sur $J=]0;+\infty[$.

b) Pour $y>0$ : $\ln\left(1-x^3\right)=y\iff x^3=1-e^y\iff x=-\sqrt[3]{e^y-1}$ (car $e^y-1>0$). Donc $h^{-1}(x)=-\sqrt[3]{e^x-1}$ pour $x\in J$.
:::

:::methode 6. La suite $u_{n+1}=f(u_n)$, $u_0=\dfrac49$
a) Récurrence : $u_0\in\left[\dfrac49;1\right]$. Si $u_n\in\left[\dfrac49;1\right]$, comme $f$ croît sur $[0;1]$ : $f\left(\dfrac49\right)\le u_{n+1}\le f(1)$, avec $f\left(\dfrac49\right)=\dfrac{32}{27}-\dfrac{16}{27}=\dfrac{16}{27}\ge\dfrac49$ et $f(1)=1$.

b) Pour $x\in\left[\dfrac49;1\right]$, avec $t=\sqrt x\in\left[\dfrac23;1\right]$ : $f(x)-x=x\left(-3t^2+4t-1\right)=x(3t-1)(1-t)\ge0$. Donc $u_{n+1}\ge u_n$ : la suite est croissante.

c) Croissante et majorée par $1$, elle converge vers $\ell\in\left[\dfrac49;1\right]$ ; $f$ étant continue, $f(\ell)=\ell$, soit $\ell(3\sqrt\ell-1)(1-\sqrt\ell)=0$. La seule solution dans $\left[\dfrac49;1\right]$ est $\ell=1$.
:::
