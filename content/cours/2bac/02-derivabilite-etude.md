---
id: 2bac-derivabilite-etude
titre: Dérivabilité et étude des fonctions
niveau: 2bac
semestre: 1
duree: 18 heures
---

## Objectifs
- Étudier la dérivabilité (à droite, à gauche) et interpréter géométriquement ; utiliser l’approximation affine.
- Dériver une composée, une fonction $\sqrt[n]u$, $u^r$ et la réciproque d’une fonction.
- Utiliser la dérivée première (variations, extremums) et la dérivée seconde (concavité, points d’inflexion).
- Étudier les branches infinies et les éléments de symétrie ; mener l’étude complète d’une fonction.

## Prérequis
- Dérivation et étude des fonctions (1BAC).
- Limites et continuité ; fonction réciproque.
- Équations de droites.

# I. Dérivabilité (rappels et compléments)

:::definition
$f$ est **dérivable en $x_0$** si $\lim\limits_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}=f'(x_0)$ existe et est finie. La tangente à $(C_f)$ au point d’abscisse $x_0$ a pour équation $y=f'(x_0)(x-x_0)+f(x_0)$.
:::

:::propriete Interprétations géométriques
| Limite du taux d’accroissement en $x_0^+$ | Interprétation |
|---|---|
| $\ell$ réel | demi-tangente de coefficient directeur $\ell$ |
| $0$ | demi-tangente horizontale |
| $+\infty$ ou $-\infty$ | demi-tangente verticale |

Si les dérivées à droite et à gauche sont finies et différentes, le point est un **point anguleux**.
:::

:::propriete Approximation affine
Si $f$ est dérivable en $x_0$ : $f(x_0+h)\approx f(x_0)+hf'(x_0)$ pour $h$ proche de $0$. Par exemple $\sqrt{1+h}\approx1+\dfrac h2$.
:::

# II. Dérivée d’une composée et d’une réciproque

:::theoreme Dérivée d’une composée
Si $u$ est dérivable sur $I$ et $v$ dérivable sur $J$ avec $u(I)\subset J$, alors $v\circ u$ est dérivable sur $I$ et
$$\left(v\circ u\right)'(x)=u'(x)\times v'\left(u(x)\right).$$
:::

:::propriete Conséquences
| Fonction | Dérivée | Condition |
|---|---|---|
| $u^n$ ($n\in\mathbb Z$) | $nu'u^{n-1}$ | $u\ne0$ si $n<0$ |
| $\sqrt u$ | $\dfrac{u'}{2\sqrt u}$ | $u>0$ |
| $\sqrt[n]u$ | $\dfrac{u'}{n\sqrt[n]{u^{n-1}}}$ | $u>0$ |
| $u^r$ ($r\in\mathbb Q^*$) | $ru'u^{r-1}$ | $u>0$ |
| $\cos(ax+b)$ | $-a\sin(ax+b)$ | |
| $\sin(ax+b)$ | $a\cos(ax+b)$ | |
:::

:::exemple
- $f(x)=\left(x^2+1\right)^5$ : $f'(x)=10x\left(x^2+1\right)^4$.
- $g(x)=\sqrt[3]{x^2+1}=\left(x^2+1\right)^{\frac13}$ : $g'(x)=\dfrac13\times2x\left(x^2+1\right)^{-\frac23}=\dfrac{2x}{3\sqrt[3]{\left(x^2+1\right)^2}}$.
- $h(x)=\cos^2x$ : $h'(x)=2\times(-\sin x)\cos x=-\sin2x$.
:::

:::theoreme Dérivée de la fonction réciproque
Soit $f$ continue et strictement monotone sur $I$, dérivable en $x_0\in I$ avec $f'(x_0)\ne0$, et $y_0=f(x_0)$. Alors $f^{-1}$ est dérivable en $y_0$ et
$$\left(f^{-1}\right)'(y_0)=\frac{1}{f'(x_0)}=\frac{1}{f'\left(f^{-1}(y_0)\right)}.$$
Si $f'$ ne s’annule pas sur $I$, $\left(f^{-1}\right)'=\dfrac{1}{f'\circ f^{-1}}$ sur $f(I)$.
:::

:::exemple
$f(x)=x^3+x$ est strictement croissante sur $\mathbb R$ et $f(1)=2$, $f'(1)=4$. Donc $\left(f^{-1}\right)'(2)=\dfrac14$.
:::

:::remarque
Si $f'(x_0)=0$, la courbe de $f^{-1}$ admet une tangente **verticale** au point d’abscisse $y_0$ (c’est le cas de $\sqrt[3]x$ en $0$, réciproque de $x^3$).
:::

# III. Applications de la dérivée première

:::theoreme
Soit $f$ dérivable sur un intervalle $I$.
- Si $f'>0$ sur $I$ (sauf en un nombre fini de points où elle s’annule), $f$ est strictement croissante sur $I$.
- Si $f'<0$ sur $I$ (même réserve), $f$ est strictement décroissante sur $I$.
- Si $f'$ s’annule en $x_0$ en changeant de signe, $f(x_0)$ est un **extremum local**.
:::

# IV. Applications de la dérivée seconde

:::propriete Concavité et position par rapport aux tangentes
Soit $f$ deux fois dérivable sur $I$.
- Si $f''\ge0$ sur $I$, $(C_f)$ est **convexe** : elle est **au-dessus** de toutes ses tangentes sur $I$.
- Si $f''\le0$ sur $I$, $(C_f)$ est **concave** : elle est **en dessous** de ses tangentes sur $I$.
- Si $f''$ s’annule en $x_0$ en changeant de signe, $A(x_0;f(x_0))$ est un **point d’inflexion** : la courbe traverse sa tangente en $A$.
:::

:::remarque
Si $f'$ s’annule en $x_0$ **sans changer de signe**, $(x_0;f(x_0))$ est un point d’inflexion à tangente horizontale (exemple : $x\mapsto x^3$ en $0$).
:::

# V. Éléments de symétrie et périodicité

:::propriete
- La droite $x=a$ est un **axe de symétrie** de $(C_f)$ si : pour tout $x\in D_f$, $2a-x\in D_f$ et $f(2a-x)=f(x)$.
- Le point $\Omega(a;b)$ est un **centre de symétrie** de $(C_f)$ si : pour tout $x\in D_f$, $2a-x\in D_f$ et $f(2a-x)+f(x)=2b$.
- Si $f$ est $T$-périodique, on l’étudie sur un intervalle de longueur $T$ et on complète la courbe par translations.
:::

# VI. Branches infinies

:::propriete Résumé
| Situation | Conclusion |
|---|---|
| $\lim\limits_{x\to a}f(x)=\pm\infty$ | asymptote verticale $x=a$ |
| $\lim\limits_{x\to\pm\infty}f(x)=b$ | asymptote horizontale $y=b$ |
| $\lim f=\pm\infty$ et $\lim\dfrac{f(x)}x=\pm\infty$ | branche parabolique de direction $(Oy)$ |
| $\lim f=\pm\infty$ et $\lim\dfrac{f(x)}x=0$ | branche parabolique de direction $(Ox)$ |
| $\lim\dfrac{f(x)}x=a\ne0$ et $\lim\left[f(x)-ax\right]=b$ | asymptote oblique $y=ax+b$ |
| $\lim\dfrac{f(x)}x=a\ne0$ et $\lim\left[f(x)-ax\right]=\pm\infty$ | branche parabolique de direction $y=ax$ |
:::

# VII. Étude complète d’une fonction

:::exemple Étude de $f(x)=x-2\sqrt x$ sur $[0;+\infty[$
1. **Dérivabilité en $0$** : $\dfrac{f(x)-f(0)}{x}=1-\dfrac{2}{\sqrt x}\to-\infty$ quand $x\to0^+$ : $f$ n’est pas dérivable à droite en $0$, la courbe admet une demi-tangente verticale en $O$.
2. **Dérivée** : pour $x>0$, $f'(x)=1-\dfrac1{\sqrt x}=\dfrac{\sqrt x-1}{\sqrt x}$ : $f$ est décroissante sur $[0;1]$, croissante sur $[1;+\infty[$ ; minimum $f(1)=-1$.
3. **Limite et branche infinie** : $f(x)=\sqrt x\left(\sqrt x-2\right)\to+\infty$ ; $\dfrac{f(x)}x=1-\dfrac2{\sqrt x}\to1$ ; $f(x)-x=-2\sqrt x\to-\infty$ : branche parabolique de direction la droite $y=x$.
4. **Concavité** : $f''(x)=\dfrac{1}{2x\sqrt x}>0$ : la courbe est convexe.
5. **Intersections avec l’axe des abscisses** : $f(x)=0\iff\sqrt x(\sqrt x-2)=0\iff x=0$ ou $x=4$.
:::

```figure
{"type":"graph","x":[-0.5,9],"y":[-1.5,4],"width":360,
 "functions":[{"fn":"x-2*sqrt(x)","label":"y=x-2\\sqrt x","color":"brand","domain":[0,9]},{"fn":"x","label":"y=x","color":"saffron"}],
 "points":[{"x":1,"y":-1,"label":"(1;−1)"},{"x":4,"y":0,"label":"(4;0)"}],
 "caption":"Courbe de $x-2\\sqrt x$ : demi-tangente verticale en $O$, minimum en $1$, branche parabolique de direction $y=x$."}
```

# Exercices

:::exercice Dérivées
Calculer les dérivées de : $f_1(x)=\left(3x-1\right)^4$ ; $f_2(x)=\sqrt{x^2-4x+5}$ ; $f_3(x)=\sqrt[3]{2x+1}$ ; $f_4(x)=\sin^3x$ ; $f_5(x)=\dfrac{1}{(x^2+1)^2}$.
:::

:::exercice Dérivabilité
Étudier la dérivabilité à droite en $1$ de $f(x)=(x-1)\sqrt{x-1}$ et de $g(x)=\sqrt{x-1}$, et interpréter.
:::

:::exercice Réciproque
Soit $f(x)=x+\sqrt{x}$ sur $[0;+\infty[$.
1. Montrer que $f$ admet une réciproque $f^{-1}$ définie sur un intervalle à préciser.
2. Calculer $f(4)$ puis $\left(f^{-1}\right)'(6)$.
:::

:::exercice Inflexion et tangente
Soit $f(x)=x^3-3x^2+1$. Déterminer le point d’inflexion de $(C_f)$, l’équation de la tangente en ce point et la position de la courbe par rapport à cette tangente.
:::

:::exercice Étude complète
Étudier la fonction $f(x)=\dfrac{x^2-x+1}{x-1}$ : ensemble de définition, limites, asymptotes, variations, centre de symétrie.
:::

:::exercice Série — dérivabilité en un point
Soit $f(x)=x\sqrt{x}$ pour $x\ge0$. Étudier la dérivabilité de $f$ à droite en $0$ et interpréter graphiquement.
:::

:::exercice Série — étude avec racine
Soit $g(x)=x-2\sqrt{x}$ sur $[0;+\infty[$.
1. Calculer $\lim\limits_{x\to+\infty}g(x)$ et $\lim\limits_{x\to+\infty}\dfrac{g(x)}{x}$ ; interpréter.
2. Étudier la dérivabilité de $g$ en $0$, puis les variations de $g$.
:::

:::exercice Approfondissement — problème complet
Soit $f(x)=x+\sqrt{x^2-1}$ sur $[1;+\infty[$.
1. Étudier la dérivabilité à droite en $1$ et interpréter.
2. Montrer que $f$ est strictement croissante et calculer $\lim\limits_{+\infty}f$.
3. Montrer que $f$ admet une fonction réciproque et déterminer $f^{-1}(y)$ pour $y\ge1$ (on montrera que $f^{-1}(y)=\dfrac12\left(y+\dfrac1y\right)$).
:::

:::exercice Approfondissement — théorème des accroissements finis
1. En appliquant les accroissements finis à $\sqrt{\ }$ sur $[100;101]$, montrer que $\dfrac{1}{2\sqrt{101}}\le\sqrt{101}-10\le\dfrac{1}{20}$.
2. En déduire un encadrement de $\sqrt{101}$ d’amplitude inférieure à $10^{-3}$.
:::

# Corrigés

:::corrige
- $f_1'(x)=12(3x-1)^3$.
- $f_2'(x)=\dfrac{2x-4}{2\sqrt{x^2-4x+5}}=\dfrac{x-2}{\sqrt{x^2-4x+5}}$.
- $f_3'(x)=\dfrac{2}{3\sqrt[3]{(2x+1)^2}}$ pour $2x+1>0$.
- $f_4'(x)=3\cos x\sin^2x$.
- $f_5'(x)=-2\times2x(x^2+1)^{-3}=\dfrac{-4x}{(x^2+1)^3}$.
:::

:::corrige
- $\dfrac{f(x)-f(1)}{x-1}=\sqrt{x-1}\to0$ : $f$ est dérivable à droite en $1$, demi-tangente horizontale.
- $\dfrac{g(x)-g(1)}{x-1}=\dfrac1{\sqrt{x-1}}\to+\infty$ : non dérivable, demi-tangente verticale.
:::

:::corrige
1. $f$ est continue et strictement croissante sur $[0;+\infty[$ (somme de deux fonctions strictement croissantes) ; $f(0)=0$ et $\lim\limits_{+\infty}f=+\infty$ : $f^{-1}$ est définie sur $[0;+\infty[$.
2. $f(4)=6$ ; $f'(x)=1+\dfrac1{2\sqrt x}$, $f'(4)=\dfrac54$. Donc $\left(f^{-1}\right)'(6)=\dfrac45$.
:::

:::corrige
$f''(x)=6x-6$ s’annule en changeant de signe en $1$ : point d’inflexion $I(1;-1)$. $f'(1)=-3$ : tangente $y=-3(x-1)-1=-3x+2$. $f(x)-(-3x+2)=x^3-3x^2+3x-1=(x-1)^3$ : la courbe est en dessous de la tangente pour $x<1$ et au-dessus pour $x>1$.
:::

:::corrige
$D_f=\mathbb R\setminus\{1\}$ et $f(x)=x+\dfrac{1}{x-1}$. Limites : $\pm\infty$ en $\pm\infty$ ; en $1^+$, $+\infty$ ; en $1^-$, $-\infty$ : asymptote verticale $x=1$ et oblique $y=x$. $f'(x)=1-\dfrac1{(x-1)^2}=\dfrac{x(x-2)}{(x-1)^2}$ : croissante sur $]-\infty;0]$, décroissante sur $[0;1[$ et $]1;2]$, croissante sur $[2;+\infty[$ ; maximum local $f(0)=-1$, minimum local $f(2)=3$. $f(2-x)+f(x)=(2-x)+\dfrac1{1-x}+x+\dfrac1{x-1}=2$ : centre de symétrie $\Omega(1;1)$.
:::

:::corrige
$\dfrac{f(x)-f(0)}{x-0}=\sqrt x\to0$ : $f$ est dérivable à droite en $0$, $f'_d(0)=0$ ; la courbe admet une demi-tangente horizontale à l’origine.
:::

:::corrige
1. $g(x)=\sqrt x\left(\sqrt x-2\right)\to+\infty$ ; $\dfrac{g(x)}x=1-\dfrac{2}{\sqrt x}\to1$ et $g(x)-x=-2\sqrt x\to-\infty$ : branche parabolique de direction $y=x$.
2. $\dfrac{g(x)}{x}=1-\dfrac2{\sqrt x}\to-\infty$ en $0^+$ : non dérivable, demi-tangente verticale. $g'(x)=1-\dfrac1{\sqrt x}=\dfrac{\sqrt x-1}{\sqrt x}$ : $g$ décroît sur $[0;1]$, croît sur $[1;+\infty[$, minimum $g(1)=-1$.
:::

:::corrige
1. $\dfrac{f(x)-1}{x-1}=1+\sqrt{\dfrac{x+1}{x-1}}\to+\infty$ : demi-tangente verticale en $(1;1)$.
2. $f'(x)=1+\dfrac{x}{\sqrt{x^2-1}}>0$ ; $\lim\limits_{+\infty}f=+\infty$.
3. $f$ est continue et strictement croissante de $[1;+\infty[$ sur $[1;+\infty[$. $y-x=\sqrt{x^2-1}$ donne $y^2-2xy+x^2=x^2-1$, d’où $x=\dfrac{y^2+1}{2y}=\dfrac12\left(y+\dfrac1y\right)$.
:::

:::corrige
1. Il existe $c\in]100;101[$ avec $\sqrt{101}-10=\dfrac1{2\sqrt c}$, et $\dfrac1{2\sqrt{101}}<\dfrac1{2\sqrt c}<\dfrac1{20}$.
2. $\sqrt{101}<11$, donc $\dfrac1{2\sqrt{101}}>\dfrac1{22}$ : $10+\dfrac1{22}<\sqrt{101}<10+\dfrac1{20}$, soit $10{,}0454<\sqrt{101}<10{,}05$ ; en raffinant avec $\sqrt{101}<10{,}05$ : $\dfrac1{20{,}1}\approx0{,}04975$, d’où $10{,}0497<\sqrt{101}<10{,}05$.
:::
