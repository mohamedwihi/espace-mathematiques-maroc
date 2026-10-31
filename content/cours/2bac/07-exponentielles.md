---
id: 2bac-exponentielles
titre: Les fonctions exponentielles
niveau: 2bac
semestre: 2
duree: 16 heures
---

## Objectifs
- Définir la fonction exponentielle népérienne comme réciproque de $\ln$ et connaître ses propriétés algébriques.
- Résoudre des équations et inéquations avec $e^x$.
- Connaître les limites de référence ; dériver $e^{u}$ et calculer les primitives de $u'e^u$.
- Étudier des fonctions comportant $e^x$.
- Connaître la fonction exponentielle de base $a$.

## Prérequis
- Fonction logarithme népérien ; fonction réciproque.
- Limites, dérivation, primitives.

# I. Définition

:::definition
La fonction $\ln$ est continue et strictement croissante de $]0;+\infty[$ sur $\mathbb R$ ; elle admet une fonction réciproque, définie sur $\mathbb R$, appelée **fonction exponentielle népérienne** et notée $\exp$ ou $x\mapsto e^x$ :
$$\left(y=e^x,\ x\in\mathbb R\right)\iff\left(x=\ln y,\ y>0\right).$$
:::

:::propriete Conséquences
- Pour tout réel $x$ : $e^x>0$ et $\ln\left(e^x\right)=x$ ; pour tout $x>0$ : $e^{\ln x}=x$.
- $e^0=1$ et $e^1=e$.
- $\exp$ est strictement croissante sur $\mathbb R$ : $e^a=e^b\iff a=b$ et $e^a<e^b\iff a<b$.
- Pour $a>0$ : $e^x=a\iff x=\ln a$.
:::

# II. Propriétés algébriques

:::theoreme
Pour tous réels $a$, $b$ et tout rationnel $r$ :
$$e^{a+b}=e^ae^b\qquad e^{-a}=\frac1{e^a}\qquad e^{a-b}=\frac{e^a}{e^b}\qquad\left(e^a\right)^r=e^{ra}.$$
:::

:::exemple
$e^{2\ln3}=\left(e^{\ln3}\right)^2=9$ ; $\dfrac{e^{3x+1}}{e^{x-1}}=e^{2x+2}$ ; $\left(e^x+e^{-x}\right)^2=e^{2x}+2+e^{-2x}$.
:::

:::exemple Équations et inéquations
- $e^{2x-1}=e^{x+3}\iff2x-1=x+3\iff x=4$.
- $e^{x}=5\iff x=\ln5$ ; $e^x=-2$ n’a pas de solution.
- $e^{2x}-3e^x+2=0$ : avec $X=e^x>0$, $X^2-3X+2=0$ donne $X=1$ ou $X=2$, soit $x=0$ ou $x=\ln2$.
- $e^{1-x}\ge e^2\iff1-x\ge2\iff x\le-1$.
:::

# III. Limites

:::theoreme
$$\lim_{x\to-\infty}e^x=0\qquad\lim_{x\to+\infty}e^x=+\infty\qquad\lim_{x\to0}\frac{e^x-1}{x}=1$$
$$\lim_{x\to+\infty}\frac{e^x}{x}=+\infty\qquad\lim_{x\to-\infty}xe^x=0.$$
Plus généralement, pour $n\in\mathbb N^*$ : $\lim\limits_{x\to+\infty}\dfrac{e^x}{x^n}=+\infty$ et $\lim\limits_{x\to-\infty}x^ne^x=0$.
:::

:::exemple
- $\lim\limits_{x\to+\infty}\left(e^x-x\right)=\lim x\left(\dfrac{e^x}x-1\right)=+\infty$.
- $\lim\limits_{x\to+\infty}(x+1)e^{-x}=\lim\dfrac{x}{e^x}+\dfrac1{e^x}=0$.
- $\lim\limits_{x\to0}\dfrac{e^{2x}-1}{x}=2\times\lim\dfrac{e^{2x}-1}{2x}=2$.
:::

# IV. Dérivée et primitives

:::theoreme
La fonction $\exp$ est dérivable sur $\mathbb R$ et $\left(e^x\right)'=e^x$. Si $u$ est dérivable sur $I$, alors $e^{u}$ est dérivable sur $I$ et
$$\left(e^{u}\right)'=u'e^{u}.$$
Les primitives de $u'e^u$ sont les fonctions $e^u+c$.
:::

:::exemple
- $f(x)=e^{x^2-1}$ : $f'(x)=2xe^{x^2-1}$.
- $g(x)=(x-1)e^x$ : $g'(x)=e^x+(x-1)e^x=xe^x$.
- Une primitive de $e^{3x}$ est $\dfrac13e^{3x}$ ; une primitive de $xe^{x^2}$ est $\dfrac12e^{x^2}$.
:::

# V. Étude de la fonction exponentielle

:::propriete
- $\exp$ est continue, strictement croissante et convexe sur $\mathbb R$ ($\exp''=\exp>0$).
- En $-\infty$, l’axe des abscisses est **asymptote horizontale** ; en $+\infty$, $\dfrac{e^x}x\to+\infty$ : **branche parabolique** de direction l’axe des ordonnées.
- La tangente en $(0;1)$ a pour équation $y=x+1$ et la courbe est au-dessus : $e^x\ge x+1$ pour tout réel $x$.
- Les courbes de $\exp$ et de $\ln$ sont symétriques par rapport à la droite $y=x$.
:::

```figure
{"type":"graph","x":[-4,5],"y":[-3,6],"width":340,"orthonormal":true,
 "functions":[{"fn":"exp(x)","label":"y=e^x","color":"brand"},{"fn":"log(x)","label":"y=\\ln x","color":"saffron","domain":[0.02,5]},{"fn":"x","label":"y=x","color":"ink"}],
 "points":[{"x":0,"y":1,"label":"(0;1)"},{"x":1,"y":0,"label":"(1;0)"}],
 "caption":"$e^x$ et $\\ln x$ : courbes symétriques par rapport à la droite $y=x$."}
```

:::exemple Étude de $f(x)=(x-1)e^x+1$
- $\lim\limits_{x\to-\infty}f(x)=1$ (car $xe^x\to0$ et $e^x\to0$) : asymptote horizontale $y=1$ en $-\infty$.
- $\lim\limits_{x\to+\infty}f(x)=+\infty$ et $\dfrac{f(x)}x\to+\infty$ : branche parabolique de direction $(Oy)$.
- $f'(x)=xe^x$ : $f$ décroît sur $]-\infty;0]$, croît sur $[0;+\infty[$ ; minimum $f(0)=0$, donc $f(x)\ge0$ pour tout $x$.
:::

# VI. Fonction exponentielle de base $a$

:::definition
Soit $a>0$. Pour tout réel $x$, on pose
$$a^x=e^{x\ln a}.$$
Pour $a\ne1$, la fonction $x\mapsto a^x$ est la réciproque de $\log_a$.
:::

:::propriete
- $a^{x+y}=a^xa^y$, $a^{-x}=\dfrac1{a^x}$, $(a^x)^y=a^{xy}$, $(ab)^x=a^xb^x$.
- $(a^x)'=\ln a\times a^x$.
- $x\mapsto a^x$ est strictement croissante si $a>1$, strictement décroissante si $0<a<1$.
:::

:::exemple
$2^x=8\iff x\ln2=3\ln2\iff x=3$ ; $\left(\dfrac12\right)^x\le\dfrac14\iff x\ge2$ ; $\left(3^x\right)'=3^x\ln3$.
:::

# Exercices

:::exercice Simplifications
Simplifier : $A=e^{\ln5}-\ln\left(e^3\right)$ ; $B=\dfrac{e^{2x}\times e^{-x+1}}{e^{x}}$ ; $C=\ln\left(e^{2}\sqrt e\right)$.
:::

:::exercice Équations et inéquations
Résoudre : $e^{x^2}=e^{4}$ ; $e^{2x}-e^x-6=0$ ; $e^{x}-e^{-x}=0$ ; $e^{2x-3}<1$ ; $3^x=81$.
:::

:::exercice Limites
Calculer : $\lim\limits_{x\to+\infty}\dfrac{e^x}{x^2+1}$ ; $\lim\limits_{x\to-\infty}\left(x^2e^x\right)$ ; $\lim\limits_{x\to+\infty}\dfrac{e^x-x}{e^x+1}$ ; $\lim\limits_{x\to0}\dfrac{e^{3x}-1}{\sin x}$.
:::

:::exercice Dérivées et primitives
1. Dériver : $f(x)=e^{-2x}\cos x$ ; $g(x)=\dfrac{e^x}{e^x+1}$.
2. Déterminer une primitive de : $h(x)=e^{2x}-3e^{-x}$ ; $k(x)=\dfrac{e^x}{e^x+1}$ ; $m(x)=xe^{-x^2}$.
:::

:::exercice Étude
Soit $f(x)=x-e^{x-1}$.
1. Calculer les limites en $\pm\infty$ ; montrer que $y=x$ est asymptote en $-\infty$.
2. Étudier les variations de $f$ et en déduire que $e^{x-1}\ge x$ pour tout réel $x$.
:::

:::exercice Série — inéquations
Résoudre : $e^{2x}-4e^x+3\le0$ ; $e^{x}>2e^{-x}$.
:::

:::exercice Série — étude de $xe^{-x}$
Soit $f(x)=xe^{-x}$ sur $\mathbb R$.
1. Calculer les limites en $-\infty$ et $+\infty$.
2. Étudier les variations de $f$ et préciser son maximum.
3. Déterminer l’équation de la tangente en $0$.
:::

:::exercice Approfondissement — problème type bac
Soit $f(x)=(x+1)e^{-x}+x$ sur $\mathbb R$.
1. Calculer $\lim\limits_{+\infty}f$ et montrer que $(D):y=x$ est asymptote en $+\infty$ ; étudier la position relative.
2. Calculer $\lim\limits_{-\infty}f$ et $\lim\limits_{-\infty}\dfrac{f(x)}{x}$ ; interpréter.
3. Montrer que $f'(x)=1-xe^{-x}$, puis que $e^x\ge x$ pour tout $x$ ; en déduire que $f$ est croissante.
:::

:::exercice Approfondissement — équation avec paramètre
Discuter, selon le réel $m$, le nombre de solutions de l’équation $e^{x}-x=m$ (étudier $h(x)=e^x-x$).
:::

:::exercice Série d’entraînement — calculs
Simplifier : $A=e^{\ln3+\ln2}$ ; $B=\dfrac{e^{3x}}{e^{x-2}}$ ; $C=\left(e^{x}\right)^2e^{-2x+1}$ ; $D=\ln\left(e^{2x}\right)-e^{\ln x}$ ($x>0$).
:::

:::exercice Série d’entraînement — équations et inéquations
Résoudre : $e^{3x-1}=1$ ; $e^{x^2}=e^{x+2}$ ; $e^{2x}+e^x-2=0$ ; $e^{2x}\le e$ ; $2^x=10$.
:::

:::exercice Série d’entraînement — limites
Calculer : $\lim\limits_{x\to+\infty}\dfrac{e^x}{x^3}$ ; $\lim\limits_{x\to-\infty}x^2e^{x}$ ; $\lim\limits_{x\to+\infty}\dfrac{e^x+1}{e^x-1}$ ; $\lim\limits_{x\to0}\dfrac{e^{x}-1}{2x}$ ; $\lim\limits_{x\to+\infty}xe^{-x}$.
:::

:::exercice Série d’entraînement — dérivées et primitives
1. Dériver : $f(x)=e^{-x^2}$ ; $g(x)=\dfrac{e^x}{x}$ ; $h(x)=(x^2+1)e^{2x}$.
2. Primitives : $e^{-3x}$ ; $xe^{x^2}$ ; $\dfrac{e^x}{\left(e^x+1\right)^2}$.
:::

# Corrigés

:::corrige
$A=5-3=2$ ; $B=e^{2x-x+1-x}=e$ ; $C=2+\dfrac12=\dfrac52$.
:::

:::corrige
- $x^2=4$ : $S=\{-2;2\}$.
- $X=e^x$ : $X^2-X-6=0$, $X=3$ (car $X>0$) : $x=\ln3$.
- $e^x=e^{-x}\iff x=-x\iff x=0$.
- $2x-3<0\iff x<\dfrac32$.
- $3^x=3^4\iff x=4$.
:::

:::corrige
$+\infty$ ($\dfrac{e^x}{x^2}\to+\infty$) ; $0$ ; $\dfrac{1-xe^{-x}}{1+e^{-x}}\to1$ ; $\dfrac{e^{3x}-1}{3x}\times\dfrac{3x}{\sin x}\to3$.
:::

:::corrige
1. $f'(x)=-2e^{-2x}\cos x-e^{-2x}\sin x=-e^{-2x}(2\cos x+\sin x)$ ; $g'(x)=\dfrac{e^x(e^x+1)-e^xe^x}{(e^x+1)^2}=\dfrac{e^x}{(e^x+1)^2}$.
2. $H(x)=\dfrac12e^{2x}+3e^{-x}$ ; $K(x)=\ln\left(e^x+1\right)$ ; $M(x)=-\dfrac12e^{-x^2}$.
:::

:::corrige
1. En $-\infty$ : $e^{x-1}\to0$, donc $f(x)\to-\infty$ et $f(x)-x=-e^{x-1}\to0$ : $y=x$ est asymptote. En $+\infty$ : $f(x)=x\left(1-\dfrac{e^{x-1}}x\right)\to-\infty$.
2. $f'(x)=1-e^{x-1}$, positif sur $]-\infty;1]$ et négatif sur $[1;+\infty[$ : maximum $f(1)=0$. Donc $f(x)\le0$, soit $e^{x-1}\ge x$.
:::

:::corrige
- $X=e^x$ : $(X-1)(X-3)\le0\iff1\le e^x\le3\iff0\le x\le\ln3$.
- $e^{2x}>2\iff2x>\ln2\iff x>\dfrac{\ln2}{2}$.
:::

:::corrige
1. $\lim\limits_{-\infty}f=-\infty$ ; $\lim\limits_{+\infty}\dfrac{x}{e^x}=0$.
2. $f'(x)=(1-x)e^{-x}$ : croissante sur $]-\infty;1]$, décroissante sur $[1;+\infty[$, maximum $f(1)=\dfrac1e$.
3. $f(0)=0$, $f'(0)=1$ : $y=x$.
:::

:::corrige
1. $(x+1)e^{-x}\to0$ : $f\to+\infty$ et $f(x)-x\to0$. $f(x)-x=(x+1)e^{-x}$ : courbe au-dessus de $(D)$ pour $x>-1$, en dessous pour $x<-1$.
2. $(x+1)e^{-x}\to-\infty$ donc $f\to-\infty$ ; $\dfrac{f(x)}x=\left(1+\dfrac1x\right)e^{-x}+1\to+\infty$ : branche parabolique de direction $(Oy)$.
3. $f'(x)=e^{-x}-(x+1)e^{-x}+1=1-xe^{-x}=e^{-x}\left(e^x-x\right)$. Or $e^x\ge x+1>x$ : $f'>0$, $f$ croissante.
:::

:::corrige
$h'(x)=e^x-1$ : $h$ décroît sur $]-\infty;0]$, croît sur $[0;+\infty[$, minimum $h(0)=1$, et $h\to+\infty$ aux deux bornes. Si $m<1$ : aucune solution ; $m=1$ : une solution ($x=0$) ; $m>1$ : deux solutions.
:::

:::corrige
$A=6$ ; $B=e^{2x+2}$ ; $C=e$ ; $D=2x-x=x$.
:::

:::corrige
$x=\dfrac13$ ; $x^2-x-2=0$, $x=2$ ou $x=-1$ ; $X^2+X-2=0$, $X=1$ ($X=-2$ rejeté), $x=0$ ; $x\le\dfrac12$ ; $x=\dfrac{\ln10}{\ln2}$.
:::

:::corrige
$+\infty$ ; $0$ ; $1$ ; $\dfrac12$ ; $0$.
:::

:::corrige
1. $-2xe^{-x^2}$ ; $\dfrac{(x-1)e^x}{x^2}$ ; $\left(2x+2x^2+2\right)e^{2x}=2\left(x^2+x+1\right)e^{2x}$.
2. $-\dfrac13e^{-3x}$ ; $\dfrac12e^{x^2}$ ; $-\dfrac1{e^x+1}$.
:::
