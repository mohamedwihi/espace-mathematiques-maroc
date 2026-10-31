---
id: bac-sx-2011-normale-corrige
titre: Corrigé — Examen national 2011, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (2,5 points) — équations et inéquation avec $\ln$

:::methode Questions 1 et 2
1. a) $x^2+4x-5=(x-1)(x+5)=0$ : $x=1$ ou $x=-5$.

b) Sur $]0;+\infty[$ : $\ln\left(x^2+5\right)=\ln\left(2x(x+2)\right)\iff x^2+5=2x^2+4x\iff x^2+4x-5=0$. Seule la solution positive convient : $S=\{1\}$.

2. Sur $]0;+\infty[$ : $\ln\left(x(x+1)\right)\ge\ln\left(x^2+1\right)\iff x^2+x\ge x^2+1\iff x\ge1$. $S=[1;+\infty[$.
:::

# Exercice 2 (3 points) — suites

$u_0=1$ et $u_{n+1}=\dfrac{u_n}{5+8u_n}$ ; $v_n=\dfrac1{u_n}+2$.

:::methode Questions 1 et 2
1. Récurrence immédiate : $u_n>0$.

2. a) $v_{n+1}=\dfrac{5+8u_n}{u_n}+2=\dfrac5{u_n}+10=5\left(\dfrac1{u_n}+2\right)=5v_n$ : géométrique de raison $5$, $v_0=3$, donc $v_n=3\times5^n$.

b) $u_n=\dfrac1{v_n-2}=\dfrac1{3\times5^n-2}$ et $\lim u_n=0$.
:::

# Exercice 3 (5 points) — nombres complexes

$a=9+i$, $b=9-i$, $c=11-i$.

:::methode Questions 1 et 2
1. $z^2-18z+82=0$ : $\Delta'=81-82=-1$, donc $z=9+i$ ou $z=9-i$.

2. a) $\dfrac{c-b}{a-b}=\dfrac2{2i}=-i$ : $BC=BA$ et $\left(\overrightarrow{BA},\overrightarrow{BC}\right)\equiv-\dfrac\pi2$ ; $ABC$ est rectangle et isocèle en $B$.

b) $4(1-i)=4\sqrt2\left(\cos\left(-\dfrac\pi4\right)+i\sin\left(-\dfrac\pi4\right)\right)$.

c) $(c-a)(c-b)=(2-2i)\times2=4(1-i)$. En passant aux modules : $AC\times BC=4\sqrt2$.

d) Rotation de centre $B$ et d’angle $\dfrac{3\pi}2$ : $z'-b=-i(z-b)$, soit $z'=-iz+(1+i)b=-iz+10+8i$. Alors $c'=-i(11-i)+10+8i=9-3i$.
:::

# Exercice 4 (9,5 points) — étude de fonction et aire

:::methode Partie I : $g(x)=(1-x)e^x-1$
1. a) $g'(x)=-e^x+(1-x)e^x=-xe^x$. b) $g$ croît sur $]-\infty;0]$, décroît sur $[0;+\infty[$ et $g(0)=0$.

2. $g(0)=0$ est le maximum : $g(x)\le0$ pour tout réel $x$.
:::

:::methode Partie II : $f(x)=(2-x)e^x-x$ (unité $2$ cm)
1. a) En $+\infty$ : $(2-x)e^x\to-\infty$, donc $f\to-\infty$. b) $\dfrac{f(x)}x=\left(\dfrac2x-1\right)e^x-1\to-\infty$ : branche parabolique de direction l’axe des ordonnées.

2. a) En $-\infty$ : $(2-x)e^x=2e^x-xe^x\to0$, donc $f\to+\infty$ et $f(x)+x\to0$. b) $(D):y=-x$ est asymptote en $-\infty$.

3. a) $f'(x)=-e^x+(2-x)e^x-1=(1-x)e^x-1=g(x)$. b) $f'(0)=0$ : tangente horizontale au point $(0;2)$. c) $f'\le0$ et ne s’annule qu’en $0$ : $f$ est strictement décroissante.

4. $f$ est continue et strictement décroissante de $\mathbb R$ sur $\mathbb R$ : $f(x)=0$ a une unique solution $\alpha$. $f(2)=-2<0$ et $f\left(\dfrac32\right)=\dfrac12e^{\frac32}-\dfrac32>0$ (car $e^{\frac32}>3$) : $\dfrac32<\alpha<2$.

5. a) $f(x)+x=(2-x)e^x=0\iff x=2$ : $(\mathcal C)$ et $(D)$ se coupent en $A(2;-2)$. b) $f(x)+x$ a le signe de $2-x$. c) $(\mathcal C)$ est au-dessus de $(D)$ sur $]-\infty;2[$ et en dessous sur $]2;+\infty[$.

6. a) $f''=g'=-xe^x$ s’annule en changeant de signe en $0$ : le point $(0;2)$ est un point d’inflexion.
:::

```figure
{"type":"graph","x":[-4,2.6],"y":[-3,5],"width":320,"orthonormal":true,
 "functions":[{"fn":"(2-x)*exp(x)-x","label":"(C)","color":"brand"},{"fn":"-x","label":"(D)","color":"saffron"}],
 "points":[{"x":0,"y":2,"label":"(0;2)"},{"x":2,"y":-2,"label":"A"}],
 "caption":"$(\\mathcal C)$, l’asymptote $(D):y=-x$ et le point d’inflexion $(0;2)$."}
```

:::methode Question 7
a) Par parties ($u=2-x$, $v'=e^x$) :
$$\int_{-1}^0(2-x)e^xdx=\Big[(2-x)e^x\Big]_{-1}^0+\int_{-1}^0e^xdx=\left(2-\frac3e\right)+\left(1-\frac1e\right)=3-\frac4e.$$

b) Sur $[-1;0]$, $f(x)-(-x)=(2-x)e^x\ge0$ : l’aire vaut $\left(3-\dfrac4e\right)$ u.a. $=\left(12-\dfrac{16}e\right)\ \text{cm}^2\approx6{,}11\ \text{cm}^2$ ($1$ u.a. $=4\ \text{cm}^2$).
:::
