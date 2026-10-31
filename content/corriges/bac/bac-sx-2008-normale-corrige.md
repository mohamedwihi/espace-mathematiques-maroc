---
id: bac-sx-2008-normale-corrige
titre: Corrigé — Examen national 2008, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(0;-1;1)$, $B(1;-1;0)$ et $(\mathcal S):x^2+y^2+z^2-2x-4z+2=0$.

:::methode Questions 1 à 3
1. $(x-1)^2+y^2+(z-2)^2=1+4-2=3$ : centre $\Omega(1;0;2)$, rayon $\sqrt3$. Pour $A$ : $0+1+1-0-4+2=0$, donc $A\in(\mathcal S)$.

2. $\overrightarrow{OA}(0;-1;1)$ et $\overrightarrow{OB}(1;-1;0)$ : $\overrightarrow{OA}\wedge\overrightarrow{OB}=(1;1;1)$. Le plan $(OAB)$ passe par $O$ : $x+y+z=0$.

3. $d\left(\Omega,(OAB)\right)=\dfrac{\lvert1+0+2\rvert}{\sqrt3}=\sqrt3$ : le plan est tangent à $(\mathcal S)$, et comme $A$ appartient aux deux, le point de contact est $A$.
:::

# Exercice 2 (3 points) — nombres complexes

:::methode Questions 1 et 2
1. $z^2-6z+34=0$ : $\Delta'=9-34=-25=(5i)^2$, donc $z=3+5i$ ou $z=3-5i$.

2. a) La translation de vecteur d’affixe $4-2i$ s’écrit $z'=z+4-2i$. Et $a+4-2i=7+3i=c$ : $C=T(A)$.

b) $\dfrac{b-c}{a-c}=\dfrac{-4-8i}{-4+2i}=\dfrac{(4+8i)(4+2i)}{20}=\dfrac{40i}{20}=2i$.

c) $\left\lvert\dfrac{b-c}{a-c}\right\rvert=2$ donne $CB=2CA$, et $\arg(2i)\equiv\dfrac\pi2$ donne $\left(\overrightarrow{CA},\overrightarrow{CB}\right)\equiv\dfrac\pi2$ : $ABC$ est rectangle en $C$ et $BC=2AC$.
:::

# Exercice 3 (3 points) — probabilités

Six boules rouges et trois vertes.

:::methode Question 1
Tirage simultané de trois boules : $\binom93=84$.

a) Deux rouges et une verte : $\dfrac{\binom62\times3}{84}=\dfrac{45}{84}=\dfrac{15}{28}$.

b) Au moins une verte : $1-\dfrac{\binom63}{84}=1-\dfrac{20}{84}=\dfrac{16}{21}$.

c) Tirages successifs sans remise : $p=\dfrac69\times\dfrac58\times\dfrac47=\dfrac{120}{504}=\dfrac5{21}$.
:::

# Exercice 4 (11 points) — étude de fonction, aire et suite

:::methode Partie I : $g(x)=x-2\ln x$
1. a) $g'(x)=1-\dfrac2x=\dfrac{x-2}x$. b) $g$ décroît sur $]0;2]$ et croît sur $[2;+\infty[$.

2. Le minimum est $g(2)=2-2\ln2=2(1-\ln2)>0$ : $g(x)>0$ sur $]0;+\infty[$.
:::

:::methode Partie II : $f(x)=x-(\ln x)^2$
1. $\lim\limits_{0^+}(\ln x)^2=+\infty$, donc $\lim\limits_{0^+}f=-\infty$ : asymptote verticale $x=0$.

2. a) Avec $t=\sqrt x$ : $\dfrac{(\ln x)^2}x=4\left(\dfrac{\ln t}t\right)^2\to0$.

b) $f(x)=x\left(1-\dfrac{(\ln x)^2}x\right)\to+\infty$ et $\dfrac{f(x)}x\to1$.

c) $f(x)-x=-(\ln x)^2\to-\infty$ : branche parabolique de direction $(\Delta):y=x$.

d) $f(x)-x=-(\ln x)^2\le0$ : $(\mathcal C)$ est sous $(\Delta)$ (contact en $x=1$).

3. a) $f'(x)=1-\dfrac{2\ln x}x=\dfrac{g(x)}x>0$ : $f$ est strictement croissante. c) $f(1)=1$ et $f'(1)=1$ : la tangente en $x=1$ est $y=x$.

4. $f$ est continue et strictement croissante de $]0;+\infty[$ sur $\mathbb R$ : $f(x)=0$ a une unique solution $\alpha$. $f\left(\dfrac1e\right)=\dfrac1e-1<0$ et $f\left(\dfrac12\right)=\dfrac12-(\ln2)^2\approx0{,}02>0$, donc $\dfrac1e<\alpha<\dfrac12$.
:::

```figure
{"type":"graph","x":[-0.3,6],"y":[-2.5,5],"width":330,
 "functions":[{"fn":"x-log(x)*log(x)","label":"(C)","color":"brand","domain":[0.12,6]},{"fn":"x","label":"(Δ)","color":"saffron"}],
 "points":[{"x":1,"y":1,"label":"(1;1)"},{"x":2.718,"y":1.718,"label":"I"}],
 "caption":"$(\\mathcal C)$ sous la droite $(\\Delta):y=x$, tangente en $(1;1)$ ; point d’inflexion $I(e;e-1)$."}
```

:::methode Question 6
a) $H'(x)=\ln x+1-1=\ln x$, donc $\displaystyle\int_1^e\ln x\,dx=\Big[x\ln x-x\Big]_1^e=0-(-1)=1$.

b) $\displaystyle\int_1^e(\ln x)^2dx=\Big[x(\ln x)^2\Big]_1^e-2\int_1^e\ln x\,dx=e-2$.

c) L’aire comprise entre $(\mathcal C)$ et $(\Delta)$ vaut $\displaystyle\int_1^e\left(x-f(x)\right)dx=\int_1^e(\ln x)^2dx=e-2$ u.a.
:::

:::methode Partie III : $u_0=2$, $u_{n+1}=f(u_n)$
1. Récurrence : si $1\le u_n\le2$, $f$ étant croissante, $1=f(1)\le u_{n+1}\le f(2)=2-(\ln2)^2\le2$.

2. $f(x)\le x$ (II.2.d) : $u_{n+1}\le u_n$, la suite est décroissante.

3. Décroissante et minorée par $1$, elle converge vers $\ell\in[1;2]$ tel que $f(\ell)=\ell$, soit $(\ln\ell)^2=0$ : $\lim u_n=1$.
:::
