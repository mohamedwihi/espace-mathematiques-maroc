---
id: bac-sx-2006-normale-corrige
titre: Corrigé — Examen national 2006, session normale
niveau: 2bac
duree: 3 heures (coefficient 7)
---

:::remarque Sciences expérimentales — mathématiques
Corrigé rédigé par Prof Wihi Mohamed. Le sujet officiel est disponible séparément sur le site.
:::

# Exercice 1 (2 points) — équations différentielles

:::methode Questions 1 et 2
1. $y''-6y'+9y=0$ : $r^2-6r+9=(r-3)^2$, racine double $3$ : $y=(\alpha x+\beta)e^{3x}$.

2. a) $u(x)=x^2e^{3x}$ : $u'=(3x^2+2x)e^{3x}$ et $u''=(9x^2+12x+2)e^{3x}$. Alors $u''-6u'+9u=\left(9x^2+12x+2-18x^2-12x+9x^2\right)e^{3x}=2e^{3x}$ : $u$ est solution de $(E)$.

b) $y$ est solution de $(E)$ si et seulement si $y-u$ est solution de l’équation homogène : $y=\left(x^2+\alpha x+\beta\right)e^{3x}$.
:::

# Exercice 2 (4 points) — nombres complexes

$z^2-2\sqrt3(1+i)z+8i=0$.

:::methode Question 1
$\Delta'=3(1+i)^2-8i=6i-8i=-2i=(1-i)^2$. Donc $z=\sqrt3(1+i)\pm(1-i)$ :
$$z_1=\left(\sqrt3+1\right)+i\left(\sqrt3-1\right)\qquad z_2=\left(\sqrt3-1\right)+i\left(\sqrt3+1\right).$$
:::

:::methode Question 2
a) $i\,\overline{z_1}=i\left(\sqrt3+1\right)+\left(\sqrt3-1\right)=z_2$ ; $z_1^2=\left(\sqrt3+1\right)^2-\left(\sqrt3-1\right)^2+2i\left(\sqrt3+1\right)\left(\sqrt3-1\right)=4\sqrt3+4i=4\left(\sqrt3+i\right)$.

b) $4\left(\sqrt3+i\right)=8\left(\cos\dfrac\pi6+i\sin\dfrac\pi6\right)$.

c) $\lvert z_1\rvert^2=8$, $\lvert z_1\rvert=2\sqrt2$, et $2\arg z_1\equiv\dfrac\pi6\ [2\pi]$ ; comme $z_1$ a ses parties réelle et imaginaire positives, $\arg z_1\equiv\dfrac\pi{12}$ : $z_1=2\sqrt2\left(\cos\dfrac\pi{12}+i\sin\dfrac\pi{12}\right)$. Puis $z_2=i\overline{z_1}=2\sqrt2\left(\cos\dfrac{5\pi}{12}+i\sin\dfrac{5\pi}{12}\right)$.
:::

:::methode Question 3
$\dfrac{z_2}{z_1}=e^{i\left(\frac{5\pi}{12}-\frac\pi{12}\right)}=e^{i\frac\pi3}$ : $\arg\dfrac{z_2}{z_1}\equiv\dfrac\pi3$ et $\left\lvert\dfrac{z_2}{z_1}\right\rvert=1$. Donc $OA=OB$ et $\left(\overrightarrow{OA},\overrightarrow{OB}\right)\equiv\dfrac\pi3$ : le triangle $OAB$ est équilatéral.
:::

# Exercice 3 (4 points) — géométrie dans l’espace

$A(1;-1;3)$ et $(\mathcal P):x-y+3z=0$.

:::methode Question 1
a) $\overrightarrow{OA}(1;-1;3)$ dirige $(OA)$ : $x=t$, $y=-t$, $z=3t$.

b) $(Q)$ a pour vecteur normal $\overrightarrow{OA}$ et passe par $A$ : $x-y+3z+d=0$ avec $1+1+9+d=0$, soit $(Q):x-y+3z-11=0$.

c) $(\mathcal P)$ et $(Q)$ ont le même vecteur normal : ils sont parallèles (et distincts).
:::

:::methode Question 2
a) $(\mathcal S)$ est tangente à $(Q)$ en $A$ : son centre $\Omega$ est sur la droite passant par $A$ et perpendiculaire à $(Q)$, c’est-à-dire $(OA)$. Donc $\Omega(a;-a;3a)$ : $b=-a$ et $c=3a$.

b) $(\Gamma)$ a pour centre $O$ et pour rayon $\sqrt{33}$, donc $R^2=\Omega O^2+33$ ; et $R=\Omega A$. D’où $\Omega A^2-\Omega O^2=33$. Or $\Omega A^2-\Omega O^2=-2a+2b-6c+11$, donc $a-b+3c=-11$.

c) $a+a+9a=-11$, soit $a=-1$ : $\Omega(-1;1;-3)$ et $R=\Omega A=\sqrt{4+4+36}=2\sqrt{11}$.
:::

# Exercice 4 (10 points) — étude de fonction, aire et suite

:::methode Partie I : $g(x)=\ln(1+x)-x$ sur $[0;+\infty[$
1. a) $g'(x)=\dfrac1{1+x}-1=\dfrac{-x}{1+x}<0$ pour $x>0$ : $g$ est strictement décroissante. b) $g(x)\le g(0)=0$.

2. Pour $x>0$ : $g(x)<0$ donne $\ln(1+x)<x$, et $1+x>1$ donne $\ln(1+x)>0$.
:::

:::methode Partie II : $f(x)=x+\ln\dfrac{x+1}{x-1}$
1. $f(x)$ existe si $\dfrac{x+1}{x-1}>0$, soit $D=]-\infty;-1[\cup]1;+\infty[$.

2. a) $D$ est symétrique et $f(-x)=-x+\ln\dfrac{x-1}{x+1}=-f(x)$ : $f$ est impaire. b) $\lim\limits_{1^+}f=+\infty$ (asymptote $x=1$) et $\lim\limits_{+\infty}f=+\infty$.

3. a) $f'(x)=1+\dfrac1{x+1}-\dfrac1{x-1}=1-\dfrac2{x^2-1}=\dfrac{x^2-3}{x^2-1}$. Sur $]1;+\infty[$ : $f$ décroît sur $\left]1;\sqrt3\right]$ et croît sur $\left[\sqrt3;+\infty\right[$, minimum $f\left(\sqrt3\right)=\sqrt3+\ln\left(2+\sqrt3\right)\approx3{,}05$ (variations symétriques sur $]-\infty;-1[$).

b) $\dfrac{x+1}{x-1}=1+\dfrac2{x-1}$ est $>1$ si $x>1$ et dans $]0;1[$ si $x<-1$ : $\ln\dfrac{x+1}{x-1}>0$ sur $]1;+\infty[$ et $<0$ sur $]-\infty;-1[$.

4. $f(x)-x=\ln\dfrac{x+1}{x-1}$ : $(\mathcal C)$ est au-dessus de $(\Delta):y=x$ sur $]1;+\infty[$ et en dessous sur $]-\infty;-1[$ ; comme $f(x)-x\to0$ en $\pm\infty$, $(\Delta)$ est asymptote oblique.
:::

```figure
{"type":"graph","x":[-6,6],"y":[-7,7],"width":330,"orthonormal":true,
 "functions":[{"fn":"x+log((x+1)/(x-1))","label":"(C)","color":"brand","domain":[1.01,6]},{"fn":"x+log((x+1)/(x-1))","label":"","color":"brand","domain":[-6,-1.01]},{"fn":"x","label":"(Δ)","color":"saffron"}],
 "caption":"$(\\mathcal C)$, symétrique par rapport à $O$, et son asymptote $(\\Delta):y=x$."}
```

:::methode Question 6
a) Par parties avec $u=\ln\dfrac{x+1}{x-1}$ ($u'=\dfrac{-2}{x^2-1}$) et $v'=1$ :
$$\int_2^4\ln\frac{x+1}{x-1}dx=\left[x\ln\frac{x+1}{x-1}\right]_2^4+\int_2^4\frac{2x}{x^2-1}dx=\left[x\ln\frac{x+1}{x-1}+\ln\left(x^2-1\right)\right]_2^4.$$
On obtient $\left(4\ln\dfrac53+\ln15\right)-(2\ln3+\ln3)=5\ln5-6\ln3$.

b) Sur $[2;4]$, $f(x)-x>0$ : l’aire vaut $5\ln5-6\ln3\approx1{,}46\ \text{cm}^2$.
:::

:::methode Partie III : $u_n=f(n)-n$ pour $n\ge2$
1. a) $u_n=\ln\dfrac{n+1}{n-1}=\ln\left(1+\dfrac2{n-1}\right)$. b) $n\mapsto\dfrac2{n-1}$ décroît et $\ln$ croît : $(u_n)$ est décroissante.

2. a) D’après I.2 avec $x=\dfrac2{n-1}>0$ : $0<u_n<\dfrac2{n-1}$. b) Par encadrement, $\lim u_n=0$.
:::
