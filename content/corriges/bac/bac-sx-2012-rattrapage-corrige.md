---
id: bac-sx-2012-rattrapage-corrige
titre: Corrigé — Examen national 2012, session de rattrapage
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(-3;0;0)$, $B(0;0;-3)$, $C(0;2;-2)$ ; $(\mathcal S)$ de centre $\Omega(1;1;1)$ et de rayon $3$.

:::methode Questions 1 et 2
1. a) $\overrightarrow{AB}(3;0;-3)$ et $\overrightarrow{AC}(3;2;-2)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(6;-3;6)$, colinéaire à $(2;-1;2)$. D’où $(ABC):2x-y+2z+d=0$ avec $A$ : $d=6$.

b) $d\left(\Omega,(ABC)\right)=\dfrac{\lvert2-1+2+6\rvert}{3}=3$ : le plan est tangent à $(\mathcal S)$.

2. a) $(D)$ passe par $\Omega$ et est dirigée par $(2;-1;2)$ : $x=1+2t$, $y=1-t$, $z=1+2t$.

b) $2(1+2t)-(1-t)+2(1+2t)+6=0\iff9t+9=0\iff t=-1$ : le point de contact est $H(-1;2;-1)$.
:::

# Exercice 2 (3 points) — nombres complexes

$a=2-i$, $b=6-7i$, $c=8+3i$.

:::methode Questions 1 et 2
1. a) $\dfrac{c-a}{b-a}=\dfrac{6+4i}{4-6i}=\dfrac{(6+4i)(4+6i)}{52}=\dfrac{52i}{52}=i$.

b) $AC=AB$ et $\left(\overrightarrow{AB},\overrightarrow{AC}\right)\equiv\dfrac\pi2$ : $ABC$ est rectangle et isocèle en $A$.

2. a) $\omega=\dfrac{b+c}2=7-2i$.

b) Rotation de centre $\Omega$ et d’angle $-\dfrac\pi2$ : $z'-\omega=-i(z-\omega)$, soit $z'=-iz+(1+i)(7-2i)=-iz+9+5i$.

c) $-i(2-i)+9+5i=-2i-1+9+5i=8+3i=c$ : $C=\mathcal R(A)$.
:::

# Exercice 3 (3 points) — suites

$u_0=3$ et $u_{n+1}=\dfrac{4u_n+3}{3u_n+4}$ ; $v_n=\dfrac{u_n-1}{u_n+1}$.

:::methode Questions 1 à 3
1. $u_{n+1}-1=\dfrac{u_n-1}{3u_n+4}$ : par récurrence, $u_n>1$.

2. a) $1-v_n=\dfrac{(u_n+1)-(u_n-1)}{u_n+1}=\dfrac2{u_n+1}>0$.

b) $v_n(u_n+1)=u_n-1\iff u_n(1-v_n)=1+v_n\iff u_n=\dfrac{1+v_n}{1-v_n}$.

3. a) $v_{n+1}=\dfrac{u_{n+1}-1}{u_{n+1}+1}=\dfrac{u_n-1}{7u_n+7}=\dfrac17v_n$ : $(v_n)$ est géométrique de raison $\dfrac17$, $v_0=\dfrac12$, $v_n=\dfrac12\left(\dfrac17\right)^n$.

b) $\lim v_n=0$, donc $\lim u_n=\dfrac{1+0}{1-0}=1$.
:::

# Exercice 4 (3 points) — probabilités

Cinq boules rouges, quatre blanches et trois vertes ; on en tire trois simultanément : $\binom{12}3=220$.

:::methode Questions 1 à 3
1. Trois rouges : $\dfrac{\binom53}{220}=\dfrac{10}{220}=\dfrac1{22}$.

2. Même couleur : $\dfrac{10+4+1}{220}=\dfrac{15}{220}=\dfrac3{44}$.

3. Au moins une rouge : $1-\dfrac{\binom73}{220}=1-\dfrac{35}{220}=\dfrac{37}{44}$.
:::

# Exercice 5 (8 points) — étude de fonction et aire

$f(x)=x+\dfrac{e^x-1}{e^x+1}$.

:::methode Questions 1 à 4
1. $f(-x)=-x+\dfrac{e^{-x}-1}{e^{-x}+1}=-x+\dfrac{1-e^x}{1+e^x}=-f(x)$ : $f$ est impaire et $O$ est centre de symétrie de $(\mathcal C)$.

2. $\dfrac{e^x-1}{e^x+1}=\dfrac{(e^x+1)-2}{e^x+1}$, donc $f(x)=x+1-\dfrac2{e^x+1}$.

3. a) $f'(x)=1+\dfrac{2e^x}{\left(e^x+1\right)^2}$ et $f'(0)=1+\dfrac24=\dfrac32$. b) $f'>0$ : $f$ est croissante. c) $f(0)=0$ : $(T):y=\dfrac32x$.

4. a) $\lim\limits_{+\infty}f=+\infty$. b) $f(x)-(x+1)=-\dfrac2{e^x+1}\to0$ : $(D):y=x+1$ est asymptote en $+\infty$. c) Cette différence est négative : $(\mathcal C)$ est sous $(D)$.
:::

```figure
{"type":"graph","x":[-4,4],"y":[-5,5],"width":320,"orthonormal":true,
 "functions":[{"fn":"x+(exp(x)-1)/(exp(x)+1)","label":"(C)","color":"brand"},{"fn":"x+1","label":"(D)","color":"saffron","domain":[-1,4]},{"fn":"1.5*x","label":"(T)","color":"ink","domain":[-2.5,2.5]}],
 "caption":"$(\\mathcal C)$, symétrique par rapport à $O$, avec $(D)$ et $(T)$."}
```

:::methode Question 6
a) $H'(x)=1-\dfrac{e^x}{e^x+1}=\dfrac1{e^x+1}$.

b) $\displaystyle\int_0^{\ln2}\frac{dx}{e^x+1}=\Big[x-\ln\left(e^x+1\right)\Big]_0^{\ln2}=\ln2-\ln3+\ln2=\ln4-\ln3$.

c) Sur $[0;\ln2]$, $(x+1)-f(x)=\dfrac2{e^x+1}>0$ : l’aire vaut $2(\ln4-\ln3)=2\ln\dfrac43$ u.a.
:::
