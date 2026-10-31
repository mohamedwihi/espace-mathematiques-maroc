---
id: bac-sx-2005-normale-corrige
titre: Corrigé — Examen national 2005, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (4,5 points) — complexes et intégrales

:::methode Question 1
$z^2-2(1+2i)z+1+4i=0$ : $\Delta'=(1+2i)^2-(1+4i)=-3+4i-1-4i=-4=(2i)^2$. Les solutions sont $z=(1+2i)\pm2i$, soit $z_1=1+4i$ et $z_2=1$.
:::

:::methode Question 2
$\dfrac{\sqrt3+i}{2}=\cos\dfrac\pi6+i\sin\dfrac\pi6=e^{i\frac\pi6}$, donc $\left(\dfrac{\sqrt3+i}2\right)^{12}=e^{2i\pi}=1$ (formule de Moivre).
:::

:::methode Question 3
Par parties avec $u=\ln x$ et $v'=x^2$ ($v=\dfrac{x^3}3$) :
$$\int_1^ex^2\ln x\,dx=\left[\frac{x^3}3\ln x\right]_1^e-\int_1^e\frac{x^2}3dx=\frac{e^3}3-\frac{e^3-1}9=\frac{2e^3+1}9.$$
:::

:::methode Question 4
Avec $t=\sqrt{x-1}$ : $x=t^2+1$, $dx=2t\,dt$ ; $x=2\to t=1$, $x=4\to t=\sqrt3$ :
$$\int_2^4\frac{dx}{x\sqrt{x-1}}=\int_1^{\sqrt3}\frac{2t\,dt}{\left(t^2+1\right)t}=2\Big[\arctan t\Big]_1^{\sqrt3}=2\left(\frac\pi3-\frac\pi4\right)=\frac\pi6.$$
:::

# Exercice 2 (2,5 points) — sphère et plan

$(\mathcal S):(x-1)^2+y^2+(z-1)^2=2$ (centre $\Omega(1;0;1)$, rayon $\sqrt2$) et $(\mathcal P):x+y-3=0$.

:::methode Questions 1 et 2
1. $d(\Omega,\mathcal P)=\dfrac{\lvert1+0-3\rvert}{\sqrt2}=\sqrt2$ : le plan est tangent à la sphère.

2. Le point de contact est le projeté orthogonal de $\Omega$ : $H(1+t;t;1)$ avec $2t-2=0$, $t=1$ : $H(2;1;1)$.
:::

# Exercice 3 (3 points) — probabilités

Trois boules blanches et sept noires.

:::methode Question 1
Tirage simultané de deux boules : $\binom{10}2=45$. $p(A)=\dfrac{\binom72}{45}=\dfrac{21}{45}=\dfrac7{15}$ et $B=\overline A$, donc $p(B)=\dfrac8{15}$.
:::

:::methode Question 2
On tire une boule ; si elle est blanche on s’arrête, sinon on la met de côté et on tire une seconde boule parmi les $9$ restantes.

a) $p(C)=\dfrac3{10}$.

b) $p(D)=\dfrac3{10}+\dfrac7{10}\times\dfrac39=\dfrac{27}{90}+\dfrac{21}{90}=\dfrac{48}{90}=\dfrac8{15}$.
:::

# Exercice 4 (10 points) — étude de fonction et suite

:::methode Partie I : $g(x)=x-1-\ln x$ et $h(x)=x+(x-2)\ln x$
1. a) $g'(x)=1-\dfrac1x=\dfrac{x-1}x$ : $g$ décroît sur $]0;1]$, croît sur $[1;+\infty[$. b) Son minimum est $g(1)=0$, donc $g(x)\ge0$.

2. a) $1+g(x)+(x-1)\ln x=1+x-1-\ln x+x\ln x-\ln x=x+(x-2)\ln x=h(x)$.

b) $x-1$ et $\ln x$ ont le même signe sur $]0;+\infty[$, donc $(x-1)\ln x\ge0$.

3. Ainsi $h(x)\ge1>0$.
:::

:::methode Partie II : $f(x)=1+x\ln x-(\ln x)^2$
1. a) $x\ln x\to0$ et $(\ln x)^2\to+\infty$ quand $x\to0^+$ : $\lim\limits_{0^+}f=-\infty$, la droite $x=0$ est asymptote verticale.

b) $f(x)=1+x\ln x\left(1-\dfrac{\ln x}x\right)\to+\infty$. De plus $\dfrac{f(x)}x=\dfrac1x+\ln x-\dfrac{(\ln x)^2}x\to+\infty$ : branche parabolique de direction l’axe des ordonnées.

2. a) $f'(x)=\ln x+1-\dfrac{2\ln x}x=\dfrac{x\ln x+x-2\ln x}{x}=\dfrac{h(x)}x$. b) $h>0$ : $f$ est strictement croissante.

3. a) $f(1)=1$ et $f'(1)=h(1)=1$ : $(\Delta):y=x$.

b) $(\ln x-1)g(x)=x\ln x-\ln x-(\ln x)^2-x+1+\ln x=f(x)-x$.

c) $g\ge0$ (nul en $1$) et $\ln x-1<0$ sur $]0;e[$ : $(\mathcal C)$ est en dessous de $(\Delta)$ sur $]0;e]$, au-dessus sur $[e;+\infty[$ ; ils se coupent en $A(1;1)$ et en $(e;e)$.
:::

```figure
{"type":"graph","x":[-0.2,4.5],"y":[-2,5],"width":330,
 "functions":[{"fn":"1+x*log(x)-log(x)*log(x)","label":"(C)","color":"brand","domain":[0.15,4.5]},{"fn":"x","label":"(Δ)","color":"saffron"}],
 "points":[{"x":1,"y":1,"label":"A"},{"x":2.718,"y":2.718,"label":"(e;e)"}],
 "caption":"$(\\mathcal C)$ et sa tangente $(\\Delta):y=x$ en $A$."}
```

:::methode Partie III : $u_0=\sqrt e$, $u_{n+1}=f(u_n)$
1. Récurrence : $u_0\in[1;e]$ ; si $u_n\in[1;e]$, $f$ étant croissante : $1=f(1)\le u_{n+1}\le f(e)=1+e-1=e$.

2. Sur $[1;e]$, $f(x)-x\le0$ (II.3.c) : $u_{n+1}\le u_n$, la suite est décroissante.

3. Décroissante et minorée par $1$, elle converge vers $\ell\in\left[1;\sqrt e\right]$ avec $f(\ell)=\ell$, soit $(\ln\ell-1)g(\ell)=0$ : $\ell=e$ ou $\ell=1$. Comme $\ell\le\sqrt e<e$ : $\lim u_n=1$.
:::
