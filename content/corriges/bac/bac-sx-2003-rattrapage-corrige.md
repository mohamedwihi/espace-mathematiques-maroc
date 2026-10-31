---
id: bac-sx-2003-rattrapage-corrige
titre: Corrigé — Examen national 2003, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (2,5 points) — sphère et plan

$(\mathcal P):x-2y+2z-2=0$ et $(\mathcal S):x^2+y^2+z^2-2x+2z+1=0$.

:::methode Question 1
$(x-1)^2+y^2+(z+1)^2=1+1-1=1$ : centre $\Omega(1;0;-1)$, rayon $r=1$.
:::

:::methode Question 2
$d(\Omega,\mathcal P)=\dfrac{\lvert1-0-2-2\rvert}{\sqrt{1+4+4}}=\dfrac33=1=r$ : le plan est tangent à la sphère.
:::

:::methode Question 3
Le point de contact $H$ est le projeté orthogonal de $\Omega$ sur $(\mathcal P)$ : $H(1+t;-2t;-1+2t)$ avec $(1+t)+4t+2(-1+2t)-2=0$, soit $9t=3$, $t=\dfrac13$. Donc $H\left(\dfrac43;-\dfrac23;-\dfrac13\right)$.
:::

# Exercice 2 (2,5 points) — calcul intégral

:::methode Question 1
Sur $\left[\dfrac1e;1\right]$, $\ln x\le0$ ; sur $[1;e]$, $\ln x\ge0$. Avec $\left(\dfrac{(\ln x)^2}2\right)'=\dfrac{\ln x}x$ :
$$I=\left[-\frac{(\ln x)^2}2\right]_{\frac1e}^1+\left[\frac{(\ln x)^2}2\right]_1^e=\frac12+\frac12=1.$$
:::

:::methode Question 2
a) $\dfrac{2t}{1+t}=\dfrac{2(1+t)-2}{1+t}=2-\dfrac2{1+t}$ : $a=2$, $b=-2$.

b) Avec $t=\sqrt{2+x}$ : $x=t^2-2$, $dx=2t\,dt$ ; $x=2\to t=2$ et $x=7\to t=3$ :
$$J=\int_2^3\frac{2t}{1+t}dt=\Big[2t-2\ln(1+t)\Big]_2^3=2-2\ln4+2\ln3=2+2\ln\frac34.$$
:::

# Exercice 3 (3 points) — probabilités

Six boules numérotées $-2$ ; $-1$ ; $0$ ; $1$ ; $1$ ; $2$. On en tire $3$ simultanément : $\operatorname{card}\Omega=\binom63=20$.

:::methode Question 1
a) Contraire de $A$ : aucune boule « $1$ », on choisit $3$ boules parmi les $4$ autres : $p(A)=1-\dfrac{\binom43}{20}=1-\dfrac4{20}=\dfrac45$.

b) Triplets de somme nulle : $\{-2;0;2\}$ ($1$ tirage), $\{-2;1;1\}$ ($1$ tirage), $\{-1;0;1\}$ ($2$ tirages, car il y a deux boules « $1$ »). Donc $p(S)=\dfrac4{20}=\dfrac15$.
:::

:::methode Question 2
On répète $4$ fois l’épreuve de façon indépendante ; le nombre de réalisations de $S$ suit la loi binomiale $\mathcal B\left(4;\dfrac15\right)$ :
$$p=\binom43\left(\frac15\right)^3\frac45=\frac{16}{625}.$$
:::

# Exercice 4 (3,5 points) — nombres complexes

:::methode Question 1
a) $(4+i)^2=16+8i-1=15+8i$.

b) $\Delta=(2-3i)^2+20(1+i)=-5-12i+20+20i=15+8i=(4+i)^2$. Donc
$$z_1=\frac{-2+3i+4+i}2=1+2i\qquad z_2=\frac{-2+3i-4-i}2=-3+i.$$
:::

:::methode Question 2
a) $c-a=-1+4i$ et $b-a=-4-i$ : $\dfrac{c-a}{b-a}=\dfrac{(-1+4i)(-4+i)}{17}=\dfrac{-17i}{17}=-i=\cos\left(-\dfrac\pi2\right)+i\sin\left(-\dfrac\pi2\right)$.

b) $\left\lvert\dfrac{c-a}{b-a}\right\rvert=1$ donne $AC=AB$, et $\left(\overrightarrow{AB},\overrightarrow{AC}\right)\equiv-\dfrac\pi2\ [2\pi]$ : $ABC$ est rectangle et isocèle en $A$.
:::

# Exercice 5 (9 points) — fonctions, suite et fonction réciproque

$f(x)=x-2\sqrt x+2=\left(\sqrt x-1\right)^2+1$ sur $[0;+\infty[$.

:::methode Partie I
1. $f(x)=\sqrt x\left(\sqrt x-2\right)+2\to+\infty$.
2. $\dfrac{f(x)-f(0)}{x}=1-\dfrac2{\sqrt x}\to-\infty$ quand $x\to0^+$ : $f$ n’est pas dérivable à droite en $0$ ; demi-tangente verticale.
3. $f'(x)=1-\dfrac1{\sqrt x}=\dfrac{\sqrt x-1}{\sqrt x}$ : $f$ décroît sur $[0;1]$, croît sur $[1;+\infty[$, minimum $f(1)=1$.
:::

:::methode Partie II : $u_0=2$, $u_{n+1}=f(u_n)$
1. Récurrence : $u_0=2\in[1;2]$. Si $1\le u_n\le2$, $f$ étant croissante sur $[1;2]$ : $1=f(1)\le u_{n+1}\le f(2)=4-2\sqrt2\le2$.
2. $f(x)-x=2-2\sqrt x\le0$ pour $x\ge1$, donc $u_{n+1}\le u_n$ : la suite est décroissante.
3. Décroissante et minorée par $1$, elle converge vers $\ell\in[1;2]$ avec $f(\ell)=\ell$, soit $2-2\sqrt\ell=0$ : $\ell=1$.
:::

:::methode Partie III : $g(x)=\ln\left(x-2\sqrt x+2\right)=\ln f(x)$
Comme $f(x)\ge1>0$, $g$ est définie sur $[0;+\infty[$ et $g(x)\ge0$.

1. a) $\lim\limits_{+\infty}g=+\infty$. b) $\dfrac{g(x)}x=\dfrac{\ln f(x)}{f(x)}\times\dfrac{f(x)}x\to0\times1=0$ : branche parabolique de direction l’axe des abscisses.

2. $g'=\dfrac{f'}{f}$ a le signe de $f'$ : $g$ décroît sur $[0;1]$, croît sur $[1;+\infty[$ ; $g(0)=\ln2$, $g(1)=0$ ; demi-tangente verticale en $0$ (comme $f$).

4. a) $h$, restriction de $g$ à $[1;+\infty[$, est continue et strictement croissante : bijection de $[1;+\infty[$ sur $J=[0;+\infty[$.

b) $y=\ln\left(\left(\sqrt x-1\right)^2+1\right)\iff\left(\sqrt x-1\right)^2=e^y-1\iff\sqrt x=1+\sqrt{e^y-1}$ (car $\sqrt x\ge1$). Donc $h^{-1}(x)=\left(1+\sqrt{e^x-1}\right)^2$ pour $x\ge0$.
:::

```figure
{"type":"graph","x":[-0.3,9],"y":[-0.5,3],"width":330,
 "functions":[{"fn":"log(x-2*sqrt(x)+2)","label":"(C_g)","color":"brand","domain":[0,9]}],
 "points":[{"x":0,"y":0.693,"label":"ln 2"},{"x":1,"y":0,"label":"(1;0)"},{"x":4,"y":0.693,"label":"(4;ln 2)"}],
 "caption":"Allure de $(\\mathcal C)$ : minimum $0$ en $x=1$, et $g(4)=g(0)=\\ln2$."}
```
