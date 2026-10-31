---
id: bac-sx-2009-rattrapage-corrige
titre: Corrigé — Examen national 2009, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(2;2;-1)$, $(\mathcal P):2x+y+2z-13=0$ et $(\mathcal S)$ de centre $\Omega(1;0;1)$ et de rayon $3$.

:::methode Questions 1 et 2
1. a) $(x-1)^2+y^2+(z-1)^2=9\iff x^2+y^2+z^2-2x-2z-7=0$. Pour $A$ : $4+4+1-4+2-7=0$, donc $A\in(\mathcal S)$.

b) $d(\Omega,\mathcal P)=\dfrac{\lvert2+0+2-13\rvert}{3}=3$ : $(\mathcal P)$ est tangent à $(\mathcal S)$.

2. a) $(D)\perp(\mathcal P)$ : $\vec u(2;1;2)$, vecteur normal à $(\mathcal P)$, dirige $(D)$. Avec $\overrightarrow{\Omega A}(1;2;-2)$ : $\overrightarrow{\Omega A}\wedge\vec u=(6;-6;-3)$.

b) $d\left(\Omega,(D)\right)=\dfrac{\left\lVert\overrightarrow{\Omega A}\wedge\vec u\right\rVert}{\lVert\vec u\rVert}=\dfrac{\sqrt{36+36+9}}3=3$, égal au rayon, et $A\in(D)\cap(\mathcal S)$ : $(D)$ est tangente à $(\mathcal S)$ en $A$.
:::

# Exercice 2 (3 points) — nombres complexes

:::methode Questions 1 et 2
1. $z^2-6z+25=0$ : $\Delta'=9-25=-16=(4i)^2$, donc $z=3+4i$ ou $z=3-4i$.

2. a) $\dfrac{d-c}{a-c}=\dfrac{3+3i}{1+i}=3\in\mathbb R$ : $A$, $C$, $D$ sont alignés.

b) L’homothétie de centre $B$ et de rapport $\dfrac32$ : $p-b=\dfrac32(a-b)=\dfrac32\times8i=12i$, donc $p=3-4i+12i=3+8i$.

c) $\dfrac{d-p}{a-p}=\dfrac{2-2i}{-4i}=\dfrac{(2-2i)i}{4}=\dfrac{1+i}2=\dfrac{\sqrt2}2\left(\cos\dfrac\pi4+i\sin\dfrac\pi4\right)$. Donc $\left(\overrightarrow{PA},\overrightarrow{PD}\right)\equiv\dfrac\pi4\ [2\pi]$ et $\dfrac{PD}{PA}=\dfrac{\sqrt2}2$, c’est-à-dire $PA=\sqrt2PD$.
:::

# Exercice 3 (3 points) — probabilités

Sept boules noires et deux blanches ; deux tirages successifs sans remise : $9\times8=72$ issues. $X$ est le nombre de boules blanches restant dans l’urne.

:::methode Questions 1 à 3
1. $X\in\{0;1;2\}$.

2. $X=0$ : les deux blanches sont tirées, $p=\dfrac{2\times1}{72}=\dfrac1{36}$. $X=1$ : une seule blanche tirée, $p=\dfrac{2\times(2\times7)}{72}=\dfrac{28}{72}=\dfrac7{18}$.

3. $p(X=2)=\dfrac{7\times6}{72}=\dfrac7{12}$ ; $E(X)=\dfrac7{18}+2\times\dfrac7{12}=\dfrac{28}{18}=\dfrac{14}9$.
:::

# Exercice 4 (3 points) — suites

$u_0=0$ et $u_{n+1}=\dfrac{1+4u_n}{7-2u_n}$.

:::methode Questions 1 et 2
1. $1-u_{n+1}=\dfrac{7-2u_n-1-4u_n}{7-2u_n}=\dfrac{6(1-u_n)}{5+2(1-u_n)}$. Par récurrence, si $1-u_n>0$, alors $1-u_{n+1}>0$ ($1-u_0=1>0$).

2. a) $2u_{n+1}-1=\dfrac{5(2u_n-1)}{7-2u_n}$ et $u_{n+1}-1=\dfrac{6(u_n-1)}{7-2u_n}$, donc $v_{n+1}=\dfrac56v_n$ ; $v_0=1$ et $v_n=\left(\dfrac56\right)^n$.

b) $v_n(u_n-1)=2u_n-1\iff u_n\left(v_n-2\right)=v_n-1\iff u_n=\dfrac{\left(\frac56\right)^n-1}{\left(\frac56\right)^n-2}$, et $\lim u_n=\dfrac{-1}{-2}=\dfrac12$.
:::

# Exercice 5 (2 points) — calcul intégral

:::methode Questions 1 et 2
1. Une primitive de $2x\left(x^2-1\right)^{2009}$ (de la forme $u'u^{2009}$) est $\dfrac{\left(x^2-1\right)^{2010}}{2010}$ ; donc $\displaystyle\int_1^{\sqrt2}2x\left(x^2-1\right)^{2009}dx=\frac{1-0}{2010}=\frac1{2010}$.

2. Par parties avec $u=\ln(x+1)$ et $v'=2x+1$, $v=x^2+x=x(x+1)$ :
$$\int_0^2(2x+1)\ln(x+1)\,dx=\Big[x(x+1)\ln(x+1)\Big]_0^2-\int_0^2x\,dx=6\ln3-2.$$
:::

# Exercice 6 (6 points) — étude de fonction

$f(x)=x\,\dfrac{e^{2x}-1}{e^{2x}+1}$.

:::methode Questions 1 et 2
1. a) En multipliant numérateur et dénominateur par $e^{-2x}$ : $f(x)=x\,\dfrac{1-e^{-2x}}{1+e^{-2x}}$.

b) $f(-x)=-x\,\dfrac{e^{-2x}-1}{e^{-2x}+1}=-x\,\dfrac{1-e^{2x}}{1+e^{2x}}=f(x)$ : $f$ est paire. Et $f(x)-x=x\,\dfrac{(1-e^{-2x})-(1+e^{-2x})}{1+e^{-2x}}=\dfrac{-2xe^{-2x}}{1+e^{-2x}}$.

c) En $+\infty$ : $\dfrac{1-e^{-2x}}{1+e^{-2x}}\to1$, donc $f(x)\to+\infty$ ; et $xe^{-2x}\to0$, donc $f(x)-x\to0$ : $(D):y=x$ est asymptote en $+\infty$.

2. Pour $x\ge0$, $f(x)-x\le0$ : $(\mathcal C)$ est en dessous de $(D)$ sur $[0;+\infty[$.
:::

:::methode Questions 3 et 4
a) Avec $h(x)=\dfrac{e^{2x}-1}{e^{2x}+1}$, $h'(x)=\dfrac{4e^{2x}}{(e^{2x}+1)^2}$ et $f'=h+xh'$ :
$$f'(x)=\frac{\left(e^{2x}-1\right)\left(e^{2x}+1\right)+4xe^{2x}}{\left(e^{2x}+1\right)^2}=\frac{e^{4x}-1+4xe^{2x}}{\left(e^{2x}+1\right)^2},\quad f'(0)=0.$$

b) Pour $x\ge0$ : $e^{4x}\ge1$ et $4xe^{2x}\ge0$, donc $f'(x)\ge0$.

c) $f$ croît sur $[0;+\infty[$ à partir de $f(0)=0$ ; par parité, elle décroît sur $]-\infty;0]$.
:::

```figure
{"type":"graph","x":[-4,4],"y":[-0.5,4],"width":320,"orthonormal":true,
 "functions":[{"fn":"x*(exp(2*x)-1)/(exp(2*x)+1)","label":"(C)","color":"brand"},{"fn":"x","label":"(D)","color":"saffron","domain":[0,4]},{"fn":"-x","label":"","color":"saffron","domain":[-4,0]}],
 "caption":"$(\\mathcal C)$, symétrique par rapport à l’axe des ordonnées, et ses asymptotes $y=x$ et $y=-x$."}
```
