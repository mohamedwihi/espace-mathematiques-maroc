---
id: 2bac-logarithmes
titre: Les fonctions logarithmes
niveau: 2bac
semestre: 1
duree: 16 heures
---

## Objectifs
- Définir la fonction logarithme népérien et connaître ses propriétés algébriques.
- Résoudre des équations et inéquations avec $\ln$.
- Connaître les limites de référence et étudier des fonctions comportant $\ln$.
- Dériver $\ln|u|$ et calculer des primitives de $\dfrac{u'}{u}$.
- Connaître la fonction logarithme de base $a$ et le logarithme décimal.

## Prérequis
- Primitives ; dérivation ; limites et continuité.
- Fonction réciproque.

# I. Définition

:::definition
La fonction $x\mapsto\dfrac1x$ est continue sur $]0;+\infty[$ ; elle y admet donc une unique primitive qui s’annule en $1$. Cette primitive est la fonction **logarithme népérien**, notée $\ln$.
:::

:::propriete Conséquences immédiates
- $\ln$ est définie et dérivable sur $]0;+\infty[$, et $(\ln x)'=\dfrac1x$.
- $\ln1=0$.
- Comme $\dfrac1x>0$, $\ln$ est **strictement croissante** sur $]0;+\infty[$ : pour $a>0$ et $b>0$,
$$\ln a=\ln b\iff a=b\qquad\ln a<\ln b\iff a<b.$$
- $\ln x>0\iff x>1$ et $\ln x<0\iff0<x<1$.
:::

:::definition Le nombre $e$
L’unique réel $e$ tel que $\ln e=1$ est appelé **nombre de Néper** ; $e\approx2{,}718$.
:::

# II. Propriétés algébriques

:::theoreme
Pour tous réels $a>0$, $b>0$ et tout rationnel $r$ :
$$\ln(ab)=\ln a+\ln b\qquad\ln\frac1a=-\ln a\qquad\ln\frac ab=\ln a-\ln b\qquad\ln a^r=r\ln a.$$
En particulier $\ln\sqrt a=\dfrac12\ln a$.
:::

:::demonstration $\ln(ab)=\ln a+\ln b$
Pour $b>0$ fixé, $g(x)=\ln(bx)-\ln x$ a pour dérivée $\dfrac{b}{bx}-\dfrac1x=0$ sur $]0;+\infty[$ ; $g$ est constante et $g(1)=\ln b$. Donc $\ln(bx)=\ln x+\ln b$.
:::

:::exemple
$\ln8-\ln2=\ln4=2\ln2$ ; $\ln\sqrt{e^3}=\dfrac32$ ; $A=\ln\left(\sqrt5-2\right)+\ln\left(\sqrt5+2\right)=\ln(5-4)=0$.
:::

:::methode Équations et inéquations
1. Déterminer le **domaine** où l’équation a un sens (arguments des $\ln$ strictement positifs).
2. Se ramener à $\ln A=\ln B$ (ou $\ln A<\ln B$), puis à $A=B$ (ou $A<B$).
3. Garder les solutions qui appartiennent au domaine.
:::

:::exemple
- $\ln(x-1)+\ln(x+1)=\ln3$ : domaine $x>1$ ; $\ln\left(x^2-1\right)=\ln3\iff x^2=4$ ; seul $x=2$ convient.
- $\ln(2x-1)\le0$ : domaine $x>\dfrac12$ ; $\ln(2x-1)\le\ln1\iff2x-1\le1\iff x\le1$. $S=\left]\dfrac12;1\right]$.
- $\ln x=2\iff x=e^2$ (car $\ln e^2=2$).
:::

# III. Limites

:::theoreme
$$\lim_{x\to+\infty}\ln x=+\infty\qquad\lim_{x\to0^+}\ln x=-\infty$$
$$\lim_{x\to+\infty}\frac{\ln x}{x}=0\qquad\lim_{x\to0^+}x\ln x=0\qquad\lim_{x\to1}\frac{\ln x}{x-1}=1\qquad\lim_{x\to0}\frac{\ln(1+x)}{x}=1.$$
Plus généralement, pour $n\in\mathbb N^*$ : $\lim\limits_{x\to+\infty}\dfrac{\ln x}{x^n}=0$ et $\lim\limits_{x\to0^+}x^n\ln x=0$.
:::

:::remarque
Ces limites traduisent que, en $+\infty$, $x$ « l’emporte » sur $\ln x$. Les deux dernières viennent de ce que $\ln'(1)=1$.
:::

:::exemple
- $\lim\limits_{x\to+\infty}(x-\ln x)=\lim\limits_{x\to+\infty}x\left(1-\dfrac{\ln x}x\right)=+\infty$.
- $\lim\limits_{x\to0^+}\left(x^2-x\ln x\right)=0$.
- $\lim\limits_{x\to+\infty}\dfrac{\ln(x+1)}{\ln x}=\lim\dfrac{\ln x+\ln\left(1+\frac1x\right)}{\ln x}=1$.
:::

# IV. Étude de la fonction $\ln$

:::propriete
- $\ln$ est continue et strictement croissante sur $]0;+\infty[$, de limites $-\infty$ en $0^+$ et $+\infty$ en $+\infty$ : c’est une bijection de $]0;+\infty[$ sur $\mathbb R$.
- L’axe des ordonnées est **asymptote verticale** ; en $+\infty$, $\dfrac{\ln x}x\to0$ : **branche parabolique** de direction l’axe des abscisses.
- $(\ln x)''=-\dfrac1{x^2}<0$ : la courbe est **concave** ; elle est en dessous de sa tangente $y=x-1$ en $(1;0)$, d’où $\ln x\le x-1$ pour tout $x>0$.
:::

```figure
{"type":"graph","x":[-0.5,8],"y":[-3,3],"width":360,
 "functions":[{"fn":"log(x)","label":"y=\\ln x","color":"brand","domain":[0.03,8]},{"fn":"x-1","label":"y=x-1","color":"saffron"}],
 "points":[{"x":1,"y":0,"label":"(1;0)"},{"x":2.718,"y":1,"label":"(e;1)"}],
 "caption":"Courbe de $\\ln$ et sa tangente $y=x-1$ au point $(1;0)$."}
```

# V. Dérivée de $\ln|u|$ et primitives de $\dfrac{u'}{u}$

:::theoreme
Si $u$ est dérivable et ne s’annule pas sur un intervalle $I$, alors $x\mapsto\ln\left|u(x)\right|$ est dérivable sur $I$ et
$$\left(\ln|u|\right)'=\frac{u'}{u}.$$
Par conséquent, les primitives de $\dfrac{u'}{u}$ sur $I$ sont les fonctions $x\mapsto\ln\left|u(x)\right|+c$. En particulier, $\ln|x|$ est une primitive de $\dfrac1x$ sur $]-\infty;0[$ et sur $]0;+\infty[$.
:::

:::exemple
- $f(x)=\ln\left(x^2+1\right)$ : $f'(x)=\dfrac{2x}{x^2+1}$.
- $g(x)=\ln\left|\dfrac{x-1}{x+2}\right|$ : $g'(x)=\dfrac1{x-1}-\dfrac1{x+2}$.
- Une primitive de $\dfrac{3x^2}{x^3+1}$ sur $]-1;+\infty[$ est $\ln\left(x^3+1\right)$ ; une primitive de $\tan x=\dfrac{\sin x}{\cos x}$ sur $\left]-\dfrac\pi2;\dfrac\pi2\right[$ est $-\ln(\cos x)$.
:::

# VI. Logarithme de base $a$

:::definition
Soit $a>0$ et $a\ne1$. La fonction **logarithme de base $a$** est définie sur $]0;+\infty[$ par
$$\log_a x=\frac{\ln x}{\ln a}.$$
Le **logarithme décimal** est $\log x=\log_{10}x=\dfrac{\ln x}{\ln10}$ ; on a $\log10^n=n$.
:::

:::propriete
$\log_a$ vérifie les mêmes propriétés algébriques que $\ln$ ; $\log_a a=1$ ; $\log_a$ est croissante si $a>1$ et décroissante si $0<a<1$ ; $(\log_a x)'=\dfrac{1}{x\ln a}$.
:::

:::exemple
$\log_2 32=\dfrac{\ln32}{\ln2}=5$ ; $\log0{,}001=-3$. Le pH d’une solution est $-\log[H_3O^+]$.
:::

# Exercices

:::exercice Simplifications
Simplifier : $A=\ln12-2\ln2-\ln3$ ; $B=\ln\left(e^2\sqrt e\right)$ ; $C=\ln\dfrac{1}{8}+3\ln2$.
:::

:::exercice Équations et inéquations
Résoudre : $\ln(x+3)=\ln(2x-1)$ ; $\ln x+\ln(x-2)=\ln3$ ; $(\ln x)^2-\ln x-2=0$ ; $\ln(x+2)\le\ln(4-x)$.
:::

:::exercice Limites
Calculer : $\lim\limits_{x\to+\infty}\dfrac{\ln x}{\sqrt x}$ (poser $X=\sqrt x$) ; $\lim\limits_{x\to0^+}\left(\dfrac1x+\ln x\right)$ ; $\lim\limits_{x\to0}\dfrac{\ln(1+2x)}{x}$.
:::

:::exercice Étude
Soit $f(x)=x-1-\ln x$ sur $]0;+\infty[$.
1. Calculer les limites aux bornes.
2. Étudier les variations de $f$ ; en déduire que $\ln x\le x-1$ pour tout $x>0$.
:::

:::exercice Dérivées et primitives
1. Dériver $f(x)=x\ln x-x$ et $g(x)=\ln\left(\sqrt{x^2+1}\right)$.
2. Déterminer une primitive de $h(x)=\dfrac{2x-3}{x^2-3x+5}$ et de $k(x)=\dfrac{1}{x\ln x}$ sur $]1;+\infty[$.
:::

:::exercice Série — équations et inéquations
Résoudre : $\ln(x+1)+\ln(x-1)=\ln3$ ; $(\ln x)^2-\ln x-2=0$ ; $\ln(2x-1)\le0$.
:::

:::exercice Série — étude de $x\ln x$
Soit $f(x)=x\ln x$ sur $]0;+\infty[$.
1. Calculer $\lim\limits_{x\to0^+}f(x)$ et $\lim\limits_{x\to+\infty}f(x)$.
2. Étudier les variations de $f$ et préciser son minimum.
:::

:::exercice Approfondissement — problème type bac
Soit $f(x)=x-1-\dfrac{\ln x}{x}$ sur $]0;+\infty[$.
1. Soit $g(x)=x^2-1+\ln x$. Étudier les variations de $g$, calculer $g(1)$ et en déduire le signe de $g$.
2. Montrer que $f'(x)=\dfrac{g(x)}{x^2}$ et dresser le tableau de variations de $f$.
3. Montrer que la droite $(D):y=x-1$ est asymptote à $(C_f)$ en $+\infty$ et étudier leur position relative.
:::

:::exercice Approfondissement — inégalité classique
1. Montrer que pour tout $x>0$ : $\ln x\le x-1$.
2. En déduire que pour tout entier $n\ge1$ : $\ln\left(1+\dfrac1n\right)\le\dfrac1n$, puis que $\left(1+\dfrac1n\right)^n\le e$.
:::

# Corrigés

:::corrige
$A=\ln\dfrac{12}{4\times3}=0$ ; $B=2+\dfrac12=\dfrac52$ ; $C=-3\ln2+3\ln2=0$.
:::

:::corrige
- Domaine $x>\dfrac12$ : $x+3=2x-1$, $x=4$.
- Domaine $x>2$ : $x^2-2x=3$, $x=3$ ou $x=-1$ ; $S=\{3\}$.
- $X=\ln x$ : $X^2-X-2=0$, $X=2$ ou $X=-1$ ; $S=\left\{e^2;e^{-1}\right\}$.
- Domaine $-2<x<4$ : $x+2\le4-x$, $x\le1$ ; $S=]-2;1]$.
:::

:::corrige
- $\dfrac{\ln x}{\sqrt x}=\dfrac{2\ln X}{X}\to0$.
- $\dfrac1x+\ln x=\dfrac{1+x\ln x}{x}$ ; le numérateur tend vers $1$ et le dénominateur vers $0^+$ : $+\infty$.
- $2\times\dfrac{\ln(1+2x)}{2x}\to2$.
:::

:::corrige
1. En $0^+$ : $-\ln x\to+\infty$, donc $f\to+\infty$. En $+\infty$ : $f(x)=x\left(1-\dfrac1x-\dfrac{\ln x}x\right)\to+\infty$.
2. $f'(x)=1-\dfrac1x=\dfrac{x-1}x$ : décroissante sur $]0;1]$, croissante sur $[1;+\infty[$ ; minimum $f(1)=0$. Donc $f(x)\ge0$, soit $\ln x\le x-1$.
:::

:::corrige
1. $f'(x)=\ln x+1-1=\ln x$ ; $g(x)=\dfrac12\ln\left(x^2+1\right)$, $g'(x)=\dfrac{x}{x^2+1}$.
2. $x^2-3x+5>0$ ($\Delta<0$) : $H(x)=\ln\left(x^2-3x+5\right)$. $k=\dfrac{u'}{u}$ avec $u=\ln x>0$ : $K(x)=\ln(\ln x)$.
:::

:::corrige
- Domaine $x>1$ : $\ln(x^2-1)=\ln3\iff x^2=4$, $x=2$.
- $X=\ln x$ : $X=2$ ou $X=-1$, soit $x=e^2$ ou $x=e^{-1}$.
- $0<2x-1\le1\iff\dfrac12<x\le1$.
:::

:::corrige
1. $\lim\limits_{0^+}x\ln x=0$ (limite de référence) et $\lim\limits_{+\infty}f=+\infty$.
2. $f'(x)=\ln x+1$, nul pour $x=e^{-1}$ : $f$ décroît sur $\left]0;\dfrac1e\right]$, croît ensuite ; minimum $f\left(\dfrac1e\right)=-\dfrac1e$.
:::

:::corrige
1. $g'(x)=2x+\dfrac1x>0$ : $g$ croissante, $g(1)=0$ : $g<0$ sur $]0;1[$ et $g>0$ sur $]1;+\infty[$.
2. $f'(x)=1-\dfrac{1-\ln x}{x^2}=\dfrac{x^2-1+\ln x}{x^2}$ : $f$ décroît sur $]0;1]$, croît sur $[1;+\infty[$, minimum $f(1)=0$.
3. $f(x)-(x-1)=-\dfrac{\ln x}x\to0$ : asymptote. Courbe au-dessus de $(D)$ sur $]0;1[$, en dessous sur $]1;+\infty[$, et ils se coupent en $(1;0)$.
:::

:::corrige
1. $h(x)=\ln x-x+1$ : $h'(x)=\dfrac1x-1$, maximum $h(1)=0$.
2. Avec $x=1+\dfrac1n$ : $\ln\left(1+\dfrac1n\right)\le\dfrac1n$ ; en multipliant par $n$ : $n\ln\left(1+\dfrac1n\right)\le1$, puis par croissance de $\exp$ : $\left(1+\dfrac1n\right)^n\le e$.
:::
