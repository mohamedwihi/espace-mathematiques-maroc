---
id: bac-sx-2009-normale-corrige
titre: Corrigé — Examen national 2009, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (3 points) — géométrie dans l’espace

$A(-2;2;8)$, $B(6;6;0)$, $C(2;-1;0)$, $D(0;1;-1)$ ; $(\mathcal S)$ est l’ensemble des points $M$ tels que $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$.

:::methode Questions 1 et 2
1. $\overrightarrow{OC}(2;-1;0)$ et $\overrightarrow{OD}(0;1;-1)$ : $\overrightarrow{OC}\wedge\overrightarrow{OD}=(1;2;2)$. Le plan $(OCD)$ passe par $O$ : $x+2y+2z=0$.

2. $(\mathcal S)$ est la sphère de diamètre $[AB]$ : centre le milieu $\Omega(2;4;4)$, rayon $\dfrac{AB}2=\dfrac{\sqrt{64+16+64}}2=6$.
:::

:::methode Question 3
a) $d\left(\Omega,(OCD)\right)=\dfrac{\lvert2+8+8\rvert}{\sqrt{1+4+4}}=\dfrac{18}3=6$.

b) Cette distance est égale au rayon : le plan $(OCD)$ est tangent à $(\mathcal S)$.

c) $\overrightarrow{OA}\cdot\overrightarrow{OB}=-12+12+0=0$, donc $O\in(\mathcal S)$ ; comme $O\in(OCD)$, $O$ est le point de contact.
:::

# Exercice 2 (3 points) — nombres complexes

$a=2-2i$, $b=-\dfrac{\sqrt3}2+\dfrac12i$, $c=1-\sqrt3+\left(1+\sqrt3\right)i$.

:::methode Questions 1 à 3
1. $a=2\sqrt2\left(\cos\left(-\dfrac\pi4\right)+i\sin\left(-\dfrac\pi4\right)\right)$ et $b=\cos\dfrac{5\pi}6+i\sin\dfrac{5\pi}6$.

2. a) La rotation de centre $O$ et d’angle $\dfrac{5\pi}6$ s’écrit $z'=e^{i\frac{5\pi}6}z=bz$.

b) $ba=\left(-\dfrac{\sqrt3}2+\dfrac12i\right)(2-2i)=-\sqrt3+\sqrt3i+i+1=c$ : $C=\mathcal R(A)$.

3. $c=ab$ donne $\arg c\equiv\arg a+\arg b\equiv-\dfrac\pi4+\dfrac{5\pi}6=\dfrac{7\pi}{12}\ [2\pi]$.
:::

# Exercice 3 (3 points) — probabilités

Trois boules blanches, quatre noires et cinq rouges ; on en tire trois simultanément : $\binom{12}3=220$.

:::methode Question 1
- $A$ « même couleur » : $\binom33+\binom43+\binom53=1+4+10=15$, $p(A)=\dfrac{15}{220}=\dfrac3{44}$.
- $B$ « trois couleurs différentes » : $3\times4\times5=60$, $p(B)=\dfrac{60}{220}=\dfrac3{11}$.
:::

:::methode Question 2 : nombre $X$ de couleurs
a) $X\in\{1;2;3\}$.

b) $p(X=1)=\dfrac3{44}$, $p(X=3)=\dfrac{12}{44}$ et $p(X=2)=1-\dfrac{15}{44}=\dfrac{29}{44}$.

$E(X)=\dfrac{3+58+36}{44}=\dfrac{97}{44}$ ; $E\left(X^2\right)=\dfrac{3+116+108}{44}=\dfrac{227}{44}$ ; $V(X)=\dfrac{227}{44}-\left(\dfrac{97}{44}\right)^2=\dfrac{579}{1936}\approx0{,}30$.
:::

# Exercice 4 (2 points) — calcul intégral

:::methode Questions 1 et 2
1. a) $\dfrac x{x+3}=\dfrac{(x+3)-3}{x+3}=1-\dfrac3{x+3}$.

b) $I=\Big[x-3\ln(x+3)\Big]_{-2}^{-1}=(-1-3\ln2)-(-2)=1-3\ln2$.

2. Par parties avec $u=\ln(2x+6)$, $u'=\dfrac{2}{2x+6}=\dfrac1{x+3}$, $v=x$ :
$$J=\Big[x\ln(2x+6)\Big]_{-2}^{-1}-\int_{-2}^{-1}\frac{x}{x+3}dx=(-\ln4+2\ln2)-I=-I.$$
:::

# Exercice 5 (9 points) — étude de fonction et suite

$f(x)=2\ln\left(e^x-2\sqrt{e^x}+2\right)$.

:::methode Partie I — questions 1 à 3
1. $e^x-2\sqrt{e^x}+2=\left(\sqrt{e^x}-1\right)^2+1\ge1>0$ : $f$ est définie sur $\mathbb R$ (et $f\ge0$). En divisant par $e^x>0$ : $1-\dfrac2{\sqrt{e^x}}+\dfrac2{e^x}>0$.

2. $\lim\limits_{+\infty}f=+\infty$ ; en $-\infty$, $e^x\to0$ donc $f(x)\to2\ln2=\ln4$ : la droite $y=\ln4$ est asymptote horizontale en $-\infty$.

3. a) $\left(\sqrt{e^x}\right)'=\dfrac{\sqrt{e^x}}2$, donc $f'(x)=\dfrac{2\left(e^x-\sqrt{e^x}\right)}{\left(\sqrt{e^x}-1\right)^2+1}=\dfrac{2\sqrt{e^x}\left(\sqrt{e^x}-1\right)}{\left(\sqrt{e^x}-1\right)^2+1}$ et $f'(0)=0$.

b) $\sqrt{e^x}-1\ge0\iff x\ge0$ : $f$ croît sur $[0;+\infty[$, décroît sur $]-\infty;0]$, minimum $f(0)=0$.
:::

:::methode Partie I — questions 4 et 5
4. a) $f(x)=2\ln\left[e^x\left(1-\dfrac2{\sqrt{e^x}}+\dfrac2{e^x}\right)\right]=2x+2\ln\left(1-\dfrac2{\sqrt{e^x}}+\dfrac2{e^x}\right)$.

b) $f(x)-2x\to2\ln1=0$ : $(D):y=2x$ est asymptote oblique en $+\infty$.

5. a) $\left(\sqrt{e^x}-1\right)\left(\sqrt{e^x}-2\right)=e^x-3\sqrt{e^x}+2$.

b) $\sqrt{e^x}-1\ge0\iff x\ge0$ et $\sqrt{e^x}-2\ge0\iff x\ge\ln4$ : le produit est négatif sur $[0;\ln4]$, positif ailleurs.

c) Sur $[0;\ln4]$ : $e^x-3\sqrt{e^x}+2\le0$, soit $e^x-2\sqrt{e^x}+2\le\sqrt{e^x}$.

d) Par croissance de $\ln$ : $f(x)\le2\ln\sqrt{e^x}=x$, et $f(x)\ge0$ : $0\le f(x)\le x$ sur $[0;\ln4]$.
:::

```figure
{"type":"graph","x":[-4,4],"y":[-0.5,5],"width":330,
 "functions":[{"fn":"2*log(exp(x)-2*sqrt(exp(x))+2)","label":"(C)","color":"brand"},{"fn":"2*x","label":"(D)","color":"saffron","domain":[0,2.6]},{"fn":"1.386","label":"y=ln 4","color":"ink"}],
 "caption":"$(\\mathcal C)$, l’asymptote $y=\\ln4$ en $-\\infty$ et $(D):y=2x$ en $+\\infty$."}
```

:::methode Partie II : $u_0=1$, $u_{n+1}=f(u_n)$
1. Récurrence : $0\le u_0=1\le\ln4$ ; $f$ croît sur $[0;\ln4]$ avec $f(0)=0$ et $f(\ln4)=2\ln(4-4+2)=\ln4$, donc $0\le u_{n+1}\le\ln4$.

2. $f(x)\le x$ sur $[0;\ln4]$ : $u_{n+1}\le u_n$, la suite est décroissante.

3. Décroissante et minorée par $0$, elle converge vers $\ell\in[0;1]$ avec $f(\ell)=\ell$. Or $f(x)=x\iff e^x-2\sqrt{e^x}+2=\sqrt{e^x}\iff\left(\sqrt{e^x}-1\right)\left(\sqrt{e^x}-2\right)=0\iff x\in\{0;\ln4\}$. Comme $\ell\le1<\ln4$ : $\lim u_n=0$.
:::
