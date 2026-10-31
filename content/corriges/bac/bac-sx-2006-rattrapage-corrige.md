---
id: bac-sx-2006-rattrapage-corrige
titre: Corrigé — Examen national 2006, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(1;2;-2)$, $B(1;-1;1)$, $C(2;1;-2)$.

:::methode Questions 1 et 2
1. a) $\overrightarrow{AB}(0;-3;3)$ et $\overrightarrow{AC}(1;-1;0)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(3;3;3)$.

b) $(1;1;1)$ est normal à $(ABC)$ : $x+y+z+d=0$ avec $A$ : $d=-1$. Donc $(ABC):x+y+z-1=0$.

2. a) $d\left(\Omega,(ABC)\right)=\dfrac{\lvert1+1+1-1\rvert}{\sqrt3}=\dfrac2{\sqrt3}=R$ : le plan est tangent à $(\mathcal S)$. Le point de contact $H(1+t;1+t;1+t)$ vérifie $3+3t-1=0$, $t=-\dfrac23$ : $H\left(\dfrac13;\dfrac13;\dfrac13\right)$.

b) Pour $M(a;b;c)\in(ABC)$ : $OM\ge d\left(O,(ABC)\right)=\dfrac1{\sqrt3}$, donc $a^2+b^2+c^2=OM^2\ge\dfrac13$.
:::

# Exercice 2 (3 points) — suites

$u_0=0$, $u_1=1$, $u_{n+2}=\dfrac25u_{n+1}-\dfrac1{25}u_n$ ; $v_n=u_{n+1}-\dfrac15u_n$ et $w_n=5^nu_n$.

:::methode Questions 1 à 3
1. $v_{n+1}=u_{n+2}-\dfrac15u_{n+1}=\dfrac15u_{n+1}-\dfrac1{25}u_n=\dfrac15v_n$ : géométrique de raison $\dfrac15$, $v_0=1$, donc $v_n=\left(\dfrac15\right)^n$.

2. a) $w_{n+1}-w_n=5^{n+1}\left(u_{n+1}-\dfrac15u_n\right)=5^{n+1}v_n=5$ : arithmétique de raison $5$, $w_0=0$.

b) $w_n=5n$, donc $u_n=\dfrac{5n}{5^n}=\dfrac{n}{5^{n-1}}$.

3. a) Pour $n\ge1$ : $u_n>0$ et $\dfrac{u_{n+1}}{u_n}=\dfrac{n+1}{5n}\le\dfrac25$ (car $n+1\le2n$), donc $0<u_{n+1}\le\dfrac25u_n$ (inégalité stricte dès $n\ge2$).

b) Par récurrence, $0<u_n\le\left(\dfrac25\right)^{n-1}$ pour $n\ge1$, et donc $\lim u_n=0$.
:::

# Exercice 3 (3 points) — probabilités

$\mathcal U_1$ : trois jetons « $2$ » et deux jetons « $3$ ». $\mathcal U_2$ : trois jetons blancs et deux rouges. On tire un jeton de $\mathcal U_1$ (numéro $n$), puis $n$ jetons simultanément de $\mathcal U_2$ ; $X$ est le nombre de jetons rouges.

:::methode Question 1 : loi de $X$
- Si $n=2$ (probabilité $\dfrac35$, $\binom52=10$ tirages) : $X=0$ : $3$ ; $X=1$ : $6$ ; $X=2$ : $1$.
- Si $n=3$ (probabilité $\dfrac25$, $\binom53=10$ tirages) : $X=0$ : $1$ ; $X=1$ : $6$ ; $X=2$ : $3$.

| $x_i$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $p(X=x_i)$ | $\dfrac35\cdot\dfrac3{10}+\dfrac25\cdot\dfrac1{10}=\dfrac{11}{50}$ | $\dfrac35\cdot\dfrac6{10}+\dfrac25\cdot\dfrac6{10}=\dfrac35$ | $\dfrac35\cdot\dfrac1{10}+\dfrac25\cdot\dfrac3{10}=\dfrac9{50}$ |
:::

:::methode Question 2
$E(X)=0\times\dfrac{11}{50}+1\times\dfrac{30}{50}+2\times\dfrac9{50}=\dfrac{48}{50}=\dfrac{24}{25}$.
:::

# Exercice 4 (3 points) — nombres complexes

$z^2+2z+1+i=0$.

:::methode Question 1
$\Delta=4-4(1+i)=-4i=2(1-i)^2=\left[\sqrt2(1-i)\right]^2$ : $z=-1\pm\dfrac{\sqrt2}2(1-i)$. Avec $\operatorname{Im}(z_1)>0$ :
$$z_1=-1-\frac{\sqrt2}2+i\frac{\sqrt2}2\qquad z_2=-1+\frac{\sqrt2}2-i\frac{\sqrt2}2.$$
:::

:::methode Question 2
a) $b=-\dfrac{\sqrt2}2+i\dfrac{\sqrt2}2=\cos\dfrac{3\pi}4+i\sin\dfrac{3\pi}4$.

b) $z_1-a=z_1+1=b$, donc $\overrightarrow{AM_1}=\overrightarrow{OB}$ ; et $\dfrac{z_1+z_2}2=-1=a$ : $A$ est le milieu de $[M_1M_2]$.

c) $\overrightarrow{AM_1}=\overrightarrow{OB}$ : $AOBM_1$ est un parallélogramme, avec $OA=\lvert a\rvert=1=\lvert b\rvert=OB$ : c’est un losange. Comme $z_1=a+b$, $[OM_1]$ est la diagonale issue de $O$, bissectrice de l’angle formé par $\overrightarrow{OA}$ (argument $\pi$) et $\overrightarrow{OB}$ (argument $\dfrac{3\pi}4$) : $\arg z_1\equiv\dfrac12\left(\pi+\dfrac{3\pi}4\right)=\dfrac{7\pi}8\ [2\pi]$.
:::

# Exercice 5 (8 points) — équation différentielle et étude de fonction

:::methode Partie I : $(E):y''-2y'+y=x-1$
1. $r^2-2r+1=(r-1)^2$ : solutions de l’équation homogène $y=(\alpha x+\beta)e^x$.

2. a) $y_p=ax+b$ : $-2a+ax+b=x-1$, donc $a=1$, $b=1$ : $y_p=x+1$. b) Solution générale : $y=(\alpha x+\beta)e^x+x+1$.

c) $h(0)=\beta+1=0$ et $h'(0)=\alpha+\beta+1=1$ : $\beta=-1$, $\alpha=1$, donc $h(x)=(x-1)e^x+x+1$.

3. a) $g(x)=(x-1)e^x+x+1$ : $g'(x)=xe^x+1>0$ sur $[0;+\infty[$, $g$ est strictement croissante. b) $g(x)\ge g(0)=0$.
:::

:::methode Partie II : $f(x)=\dfrac{xe^x}{(e^x-1)^2}$ sur $\mathbb R^*$
1. $\left(e^{-x}-1\right)^2=e^{-2x}\left(1-e^x\right)^2$, donc $f(-x)=\dfrac{-xe^{-x}e^{2x}}{(e^x-1)^2}=-f(x)$ : $f$ est impaire.

2. a) $f(x)=\dfrac{x}{e^x-1}\times\dfrac{e^x}{e^x-1}$ : le premier facteur tend vers $1$, le second vers $+\infty$ quand $x\to0^+$ ; asymptote verticale $x=0$.

b) $f(x)=\dfrac{x}{e^x\left(1-e^{-x}\right)^2}\to0$ : l’axe des abscisses est asymptote en $+\infty$.

3. a) $f'(x)=\dfrac{e^x\left[(1+x)(e^x-1)-2xe^x\right]}{(e^x-1)^3}=\dfrac{-e^x\left[(x-1)e^x+x+1\right]}{(e^x-1)^3}=\dfrac{-e^x}{(e^x-1)^3}g(x)$.

b) Sur $]0;+\infty[$, $g(x)>0$ et $(e^x-1)^3>0$ : $f$ est strictement décroissante, de $+\infty$ à $0$.
:::

```figure
{"type":"graph","x":[-5,5],"y":[-4,4],"width":320,"orthonormal":true,
 "functions":[{"fn":"x*exp(x)/((exp(x)-1)*(exp(x)-1))","label":"(C)","color":"brand","domain":[0.15,5]},{"fn":"x*exp(x)/((exp(x)-1)*(exp(x)-1))","label":"","color":"brand","domain":[-5,-0.15]}],
 "caption":"$(\\mathcal C)$ est symétrique par rapport à l’origine."}
```

:::methode Questions 5 et 6
5. a) $\dfrac1{t(t-1)}=\dfrac1{t-1}-\dfrac1t$, donc $\displaystyle\int_2^3\frac{dt}{t(t-1)}=\Big[\ln(t-1)-\ln t\Big]_2^3=(\ln2-\ln3)+\ln2=2\ln2-\ln3$ (c’est la valeur demandée ; l’intégrande doit se lire $\dfrac1{t(t-1)}$).

b) Avec $t=e^x$ ($dx=\dfrac{dt}t$) : $f(x)\,dx=\dfrac{t\ln t}{(t-1)^2}\times\dfrac{dt}t=\dfrac{\ln t}{(t-1)^2}dt$, et les bornes deviennent $2$ et $3$.

6. a) Par parties avec $u=\ln t$, $v'=\dfrac1{(t-1)^2}$, $v=-\dfrac1{t-1}$ :
$$\int_2^3\frac{\ln t}{(t-1)^2}dt=\left[-\frac{\ln t}{t-1}\right]_2^3+\int_2^3\frac{dt}{t(t-1)}=\left(-\frac{\ln3}2+\ln2\right)+2\ln2-\ln3=3\ln2-\frac32\ln3.$$

b) $f>0$ sur $[\ln2;\ln3]$ : l’aire vaut $3\ln2-\dfrac32\ln3\approx3\times0{,}7-1{,}5\times1{,}1=0{,}45$ u.a.
:::
