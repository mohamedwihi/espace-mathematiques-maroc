---
id: bac-sx-2007-normale-corrige
titre: Corrigé — Examen national 2007, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — sphère et plan

$(\mathcal S):x^2+y^2+z^2-2x-4y-6z+8=0$ et $(\mathcal P):x-y+2z+1=0$.

:::methode Questions 1 à 3
1. $(x-1)^2+(y-2)^2+(z-3)^2=1+4+9-8=6$ : centre $\Omega(1;2;3)$, rayon $\sqrt6$.

2. $d(\Omega,\mathcal P)=\dfrac{\lvert1-2+6+1\rvert}{\sqrt{1+1+4}}=\dfrac6{\sqrt6}=\sqrt6$ : $(\mathcal P)$ est tangent à $(\mathcal S)$.

3. a) $(\Delta):x=1+t$, $y=2-t$, $z=3+2t$ ($t\in\mathbb R$).

b) $H\in(\Delta)\cap(\mathcal P)$ : $(1+t)-(2-t)+2(3+2t)+1=0\iff6t+6=0\iff t=-1$, donc $H(0;3;1)$.
:::

# Exercice 2 (3 points) — nombres complexes

:::methode Questions 1 et 2
1. a) $(3-2i)^2=9-12i-4=5-12i$.

b) $\Delta'=(4+i)^2-(10+20i)=15+8i-10-20i=5-12i=(3-2i)^2$ : $z=(4+i)\pm(3-2i)$, soit $z_1=7-i$ et $z_2=1+3i$.

2. a) $\dfrac{c-a}{b-a}=\dfrac{4+6i}{6-4i}=\dfrac{(4+6i)(6+4i)}{52}=\dfrac{52i}{52}=i$.

b) Donc $AC=AB$ et $\left(\overrightarrow{AB},\overrightarrow{AC}\right)\equiv\dfrac\pi2\ [2\pi]$ : $ABC$ est rectangle et isocèle en $A$.
:::

# Exercice 3 (2,5 points) — calcul intégral

:::methode Questions 1 à 3
1. $(x-1)(x+1)+1=x^2$, donc $\dfrac{x^2}{x+1}=x-1+\dfrac1{x+1}$ pour $x\ne-1$.

2. $\displaystyle\int_0^2\frac{x^2}{x+1}dx=\left[\frac{x^2}2-x+\ln(x+1)\right]_0^2=\ln3$.

3. Par parties avec $u=\ln(x+1)$ et $v'=x$ ($v=\dfrac{x^2}2$) :
$$\int_0^2x\ln(x+1)\,dx=\left[\frac{x^2}2\ln(x+1)\right]_0^2-\frac12\int_0^2\frac{x^2}{x+1}dx=2\ln3-\frac12\ln3=\frac32\ln3.$$
:::

# Exercice 4 (2,5 points) — probabilités

Sept jetons numérotés $0$ ; $0$ ; $0$ ; $-1$ ; $1$ ; $1$ ; $1$. On en tire trois simultanément : $\binom73=35$ tirages.

:::methode Question
- $A$ « aucun $0$ » : $\binom43=4$, $p(A)=\dfrac4{35}$.
- $B$ « trois numéros deux à deux différents » : un $0$, le $-1$ et un $1$ : $3\times1\times3=9$, $p(B)=\dfrac9{35}$.
- $C$ « somme nulle » : $\{0;0;0\}$ ($1$ tirage) ou $\{0;-1;1\}$ ($9$ tirages) : $p(C)=\dfrac{10}{35}=\dfrac27$.
:::

# Exercice 5 (9 points) — étude de fonction et suite

:::methode Partie I : $g(x)=e^{-x}+x-1$
1. $g'(x)=1-e^{-x}$ : positive sur $[0;+\infty[$, négative sur $]-\infty;0]$ ; $g$ croît sur $[0;+\infty[$ et décroît sur $]-\infty;0]$.

2. Son minimum est $g(0)=0$ : $g(x)\ge0$, c’est-à-dire $e^{-x}+x\ge1$ pour tout réel $x$.
:::

:::methode Partie II : $f(x)=\dfrac{x}{x+e^{-x}}$
1. $x+e^{-x}\ge1>0$ : $D_f=\mathbb R$.

2. a) Pour $x\ne0$ : $f(x)=\dfrac{1}{1+\frac{e^{-x}}x}=\dfrac1{1+\frac1{xe^x}}$.

b) En $+\infty$ : $xe^x\to+\infty$, donc $f(x)\to1$ ; en $-\infty$ : $xe^x\to0^-$, donc $\dfrac1{xe^x}\to-\infty$ et $f(x)\to0$. Asymptotes horizontales $y=1$ en $+\infty$ et $y=0$ en $-\infty$.

3. a) $f'(x)=\dfrac{\left(x+e^{-x}\right)-x\left(1-e^{-x}\right)}{\left(x+e^{-x}\right)^2}=\dfrac{(x+1)e^{-x}}{\left(x+e^{-x}\right)^2}$.

b) $f$ décroît sur $]-\infty;-1]$ et croît sur $[-1;+\infty[$ ; minimum $f(-1)=\dfrac{-1}{e-1}=\dfrac1{1-e}\approx-0{,}6$.

4. a) $f(0)=0$ et $f'(0)=1$ : tangente $(\Delta):y=x$.

b) $x-f(x)=\dfrac{x\left(x+e^{-x}-1\right)}{x+e^{-x}}=\dfrac{xg(x)}{g(x)+1}$, du signe de $x$ (car $g\ge0$).

c) $(\mathcal C)$ est au-dessus de $(\Delta)$ sur $]-\infty;0]$ et en dessous sur $[0;+\infty[$ ; $O$ est un point d’inflexion.
:::

```figure
{"type":"graph","x":[-4,5],"y":[-1.5,2],"width":330,
 "functions":[{"fn":"x/(x+exp(-x))","label":"(C)","color":"brand"},{"fn":"x","label":"(Δ)","color":"saffron","domain":[-1.5,2]},{"fn":"1","label":"y=1","color":"ink"}],
 "points":[{"x":-1,"y":-0.582,"label":"min"}],
 "caption":"$(\\mathcal C)$, sa tangente $(\\Delta)$ en $O$ et l’asymptote $y=1$."}
```

:::methode Partie III : $u_0=1$, $u_{n+1}=f(u_n)$
1. Récurrence : $0\le u_0\le1$ ; si $0\le u_n\le1$, $f$ étant croissante sur $[0;1]$ : $0=f(0)\le u_{n+1}\le f(1)=\dfrac1{1+e^{-1}}\le1$.

2. Sur $[0;1]$, $f(x)\le x$ (II.4.b) : $u_{n+1}\le u_n$, la suite est décroissante.

3. Décroissante et minorée par $0$, elle converge vers $\ell\in[0;1]$ avec $f(\ell)=\ell$, soit $\ell g(\ell)=0$ ; or $g(\ell)=0\iff\ell=0$. Donc $\lim u_n=0$.
:::
