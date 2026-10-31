---
id: bac-sx-2010-normale-corrige
titre: Corrigé — Examen national 2010, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(-1;0;3)$, $B(3;0;0)$, $C(7;1;-3)$ et $(\mathcal S):x^2+y^2+z^2-6x-2y-15=0$.

:::methode Questions 1 à 3
1. $\overrightarrow{AB}(4;0;-3)$ et $\overrightarrow{AC}(8;1;-6)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(3;0;4)=3\vec i+4\vec k$. Le plan $(ABC)$ : $3x+4z+d=0$ avec $A$ : $-3+12+d=0$, soit $3x+4z-9=0$.

2. $(x-3)^2+(y-1)^2+z^2=9+1+15=25$ : centre $\Omega(3;1;0)$, rayon $5$.

3. a) $(\Delta)$ passe par $\Omega$ et est dirigée par $(3;0;4)$ : $x=3+3t$, $y=1$, $z=4t$.

b) Un point de $(\Delta)$ est sur $(\mathcal S)$ si $(3t)^2+0+(4t)^2=25$, soit $t^2=1$ : $t=1$ donne $E(6;1;4)$ et $t=-1$ donne $F(0;1;-4)$.
:::

# Exercice 2 (3 points) — nombres complexes et rotation

:::methode Questions 1 et 2
1. $z^2-6z+10=0$ : $\Delta'=-1$, donc $z=3+i$ ou $z=3-i$.

2. a) Rotation de centre $A(3-i)$ et d’angle $\dfrac\pi2$ : $z'-a=i(z-a)$, soit $z'=iz-i(3-i)+3-i=iz+2-4i$.

b) $c'=i(7-3i)+2-4i=5+3i$.

c) $\dfrac{c'-b}{c-b}=\dfrac{2+2i}{4-4i}=\dfrac{1+i}{2(1-i)}=\dfrac{(1+i)^2}4=\dfrac12i$. Donc $\left(\overrightarrow{BC},\overrightarrow{BC'}\right)\equiv\dfrac\pi2$ et $BC'=\dfrac12BC$ : $BCC'$ est rectangle en $B$ et $BC=2BC'$.
:::

# Exercice 3 (3 points) — probabilités

Cinq boules blanches, trois rouges et deux noires ; on en tire quatre simultanément : $\binom{10}4=210$.

:::methode Questions 1 et 2
1. $p(A)=\dfrac{3\times\binom73}{210}=\dfrac{105}{210}=\dfrac12$ ; $p(B)=1-\dfrac{\binom54}{210}=1-\dfrac5{210}=\dfrac{41}{42}$.

2. $X$ (nombre de boules rouges) prend les valeurs $0$, $1$, $2$, $3$ :

| $x_i$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $p(X=x_i)$ | $\dfrac{\binom74}{210}=\dfrac16$ | $\dfrac12$ | $\dfrac{3\times\binom72}{210}=\dfrac3{10}$ | $\dfrac{7}{210}=\dfrac1{30}$ |
:::

# Exercice 4 (3 points) — suites

$u_0=2$ et $u_{n+1}=\dfrac{3u_n-1}{2u_n}$.

:::methode Questions 1 à 3
1. $u_{n+1}-1=\dfrac{u_n-1}{2u_n}$ : par récurrence, $u_n-1>0$.

2. a) $u_{n+1}-1=\dfrac{u_n-1}{2u_n}$ et $2u_{n+1}-1=\dfrac{2u_n-1}{u_n}$, donc $v_{n+1}=\dfrac12v_n$ : $v_0=\dfrac13$ et $v_n=\dfrac13\left(\dfrac12\right)^n$.

b) $v_n(2u_n-1)=u_n-1\iff u_n=\dfrac{v_n-1}{2v_n-1}$, et $v_n\to0$ donne $\lim u_n=1$.

3. $w_n=\ln u_n\to\ln1=0$.
:::

# Exercice 5 (8 points) — étude de fonction et aire

:::methode Partie I : $g(x)=1+4xe^{2x}$
1. $g'(x)=4e^{2x}+8xe^{2x}=4(2x+1)e^{2x}$.

2. $g$ décroît sur $\left]-\infty;-\dfrac12\right]$ et croît sur $\left[-\dfrac12;+\infty\right[$.

3. Son minimum est $g\left(-\dfrac12\right)=1-\dfrac2e>0$ : donc $g(x)>0$ pour tout réel $x$.
:::

:::methode Partie II : $f(x)=(2x-1)e^{2x}+x+1$ (unité $2$ cm)
1. $\lim\limits_{+\infty}f=+\infty$. En $-\infty$, $(2x-1)e^{2x}=2xe^{2x}-e^{2x}\to0$, donc $f(x)\to-\infty$.

2. $f'(x)=2e^{2x}+2(2x-1)e^{2x}+1=4xe^{2x}+1=g(x)>0$ : $f$ est strictement croissante.

3. a) $\dfrac{f(x)}x=\left(2-\dfrac1x\right)e^{2x}+1+\dfrac1x\to+\infty$ : branche parabolique de direction l’axe des ordonnées.

b) $f(x)-(x+1)=(2x-1)e^{2x}\to0$ en $-\infty$ : $(\Delta):y=x+1$ est asymptote.

c) $f(x)-(x+1)=0\iff x=\dfrac12$ : point d’intersection $\left(\dfrac12;\dfrac32\right)$. $(\mathcal C)$ est sous $(\Delta)$ sur $\left]-\infty;\dfrac12\right[$ et au-dessus sur $\left]\dfrac12;+\infty\right[$.

4. a) $f(0)=0$ et $f'(0)=g(0)=1$ : $(T):y=x$. b) $f''=g'$ s’annule en changeant de signe en $-\dfrac12$ : point d’inflexion d’abscisse $-\dfrac12$.
:::

```figure
{"type":"graph","x":[-4,1.4],"y":[-3,4],"width":320,"orthonormal":true,
 "functions":[{"fn":"(2*x-1)*exp(2*x)+x+1","label":"(C)","color":"brand","domain":[-4,1.1]},{"fn":"x+1","label":"(Δ)","color":"saffron"},{"fn":"x","label":"(T)","color":"ink","domain":[-1,1.4]}],
 "points":[{"x":0.5,"y":1.5,"label":"(1/2;3/2)"}],
 "caption":"$(\\mathcal C)$, son asymptote $(\\Delta)$ et sa tangente $(T)$ en $O$."}
```

:::methode Question 6
a) Par parties ($u=2x-1$, $v'=e^{2x}$, $v=\dfrac{e^{2x}}2$) :
$$\int_0^{\frac12}(2x-1)e^{2x}dx=\left[\frac{(2x-1)e^{2x}}2\right]_0^{\frac12}-\int_0^{\frac12}e^{2x}dx=\frac12-\frac{e-1}2=1-\frac e2.$$

b) $f(x)-x=(2x-1)e^{2x}+1$ est croissant (sa dérivée $4xe^{2x}$ est positive sur $\left[0;\frac12\right]$) et nul en $0$ : il est positif. L’aire vaut $\displaystyle\int_0^{\frac12}\left(f(x)-x\right)dx=1-\frac e2+\frac12=\frac{3-e}2$ u.a. ; avec $1$ u.a. $=4\ \text{cm}^2$, elle vaut $(6-2e)\ \text{cm}^2$.
:::
