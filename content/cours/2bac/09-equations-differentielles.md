---
id: 2bac-equations-differentielles
titre: Les équations différentielles
niveau: 2bac
semestre: 2
duree: 8 heures
---

## Objectifs
- Résoudre une équation différentielle de la forme $y'=ay+b$.
- Résoudre une équation différentielle de la forme $y''+ay'+by=0$ à l’aide de l’équation caractéristique.
- Déterminer la solution vérifiant des conditions initiales.
- Utiliser les équations différentielles pour modéliser des phénomènes (physique, biologie).

## Prérequis
- Fonction exponentielle ; dérivation.
- Nombres complexes : équations du second degré.
- Trigonométrie.

# I. Généralités

:::definition
Une **équation différentielle** est une équation dont l’inconnue est une fonction $y$ (dérivable sur un intervalle) et qui fait intervenir $y$ et ses dérivées $y'$, $y''$. **Résoudre** l’équation, c’est trouver toutes les fonctions qui la vérifient ; leur ensemble est la **solution générale**.
:::

:::exemple
La fonction $y=e^{2x}$ est solution de $y'=2y$ ; la fonction $y=\cos x$ est solution de $y''+y=0$.
:::

# II. L’équation $y'=ay+b$

:::theoreme Cas $b=0$
Soit $a$ un réel. Les solutions sur $\mathbb R$ de l’équation $y'=ay$ sont les fonctions
$$x\mapsto Ce^{ax}\qquad(C\in\mathbb R).$$
:::

:::demonstration
Si $y$ est solution, la fonction $z(x)=y(x)e^{-ax}$ vérifie $z'=y'e^{-ax}-aye^{-ax}=(y'-ay)e^{-ax}=0$ : $z$ est constante, égale à $C$, d’où $y=Ce^{ax}$. Réciproquement, ces fonctions sont solutions.
:::

:::theoreme Cas général
Soient $a\ne0$ et $b$ deux réels. Les solutions de $y'=ay+b$ sont les fonctions
$$x\mapsto Ce^{ax}-\frac ba\qquad(C\in\mathbb R).$$
Pour tout couple $(x_0;y_0)$, il existe une **unique** solution vérifiant $y(x_0)=y_0$.
:::

:::remarque
La fonction constante $x\mapsto-\dfrac ba$ est la **solution particulière constante** ; la solution générale s’obtient en lui ajoutant la solution générale de $y'=ay$.
:::

:::exemple
Résoudre $y'+2y=6$ avec $y(0)=1$. On a $y'=-2y+6$ : $y(x)=Ce^{-2x}+3$. Puis $y(0)=C+3=1$, donc $C=-2$ et $y(x)=3-2e^{-2x}$.
:::

```figure
{"type":"graph","x":[-0.3,3],"y":[-0.3,3.6],"width":330,
 "functions":[{"fn":"3-2*exp(-2*x)","label":"y=3-2e^{-2x}","color":"brand"},{"fn":"3","label":"y=3","color":"saffron"}],
 "points":[{"x":0,"y":1,"label":"(0;1)"}],
 "caption":"La solution tend vers la valeur constante $3$ (régime permanent)."}
```

:::exemple Application : charge d’un condensateur
Dans un circuit RC, la tension $u$ aux bornes du condensateur vérifie $RC\,u'+u=E$, soit $u'=-\dfrac1{RC}u+\dfrac E{RC}$. Avec $u(0)=0$ : $u(t)=E\left(1-e^{-\frac{t}{RC}}\right)$.
:::

# III. L’équation $y''+ay'+by=0$

:::definition
L’**équation caractéristique** associée à $y''+ay'+by=0$ ($a$, $b$ réels) est
$$r^2+ar+b=0,\qquad\Delta=a^2-4b.$$
:::

:::theoreme
Les solutions de $y''+ay'+by=0$ sur $\mathbb R$ sont, avec $\alpha$ et $\beta$ réels quelconques :
| Discriminant | Racines | Solution générale |
|---|---|---|
| $\Delta>0$ | deux réelles $r_1\ne r_2$ | $y=\alpha e^{r_1x}+\beta e^{r_2x}$ |
| $\Delta=0$ | une double $r$ | $y=(\alpha x+\beta)e^{rx}$ |
| $\Delta<0$ | complexes $p\pm iq$ | $y=e^{px}\left(\alpha\cos qx+\beta\sin qx\right)$ |

Pour des conditions initiales $y(x_0)=y_0$ et $y'(x_0)=y_1$ données, la solution est **unique**.
:::

:::exemple $\Delta>0$
$y''-3y'+2y=0$ : $r^2-3r+2=0$, racines $1$ et $2$ : $y=\alpha e^x+\beta e^{2x}$.
:::

:::exemple $\Delta=0$
$y''+4y'+4y=0$ : $r^2+4r+4=(r+2)^2$, racine double $-2$ : $y=(\alpha x+\beta)e^{-2x}$.
:::

:::exemple $\Delta<0$ avec conditions initiales
$y''-2y'+5y=0$ avec $y(0)=1$ et $y'(0)=3$. $r^2-2r+5=0$ : $\Delta=-16$, $r=1\pm2i$. Donc $y=e^x\left(\alpha\cos2x+\beta\sin2x\right)$.
- $y(0)=\alpha=1$.
- $y'(x)=e^x\left(\alpha\cos2x+\beta\sin2x\right)+e^x\left(-2\alpha\sin2x+2\beta\cos2x\right)$, donc $y'(0)=\alpha+2\beta=3$ et $\beta=1$.

Solution : $y(x)=e^x\left(\cos2x+\sin2x\right)$.
:::

:::exemple Oscillateur harmonique
$y''+\omega^2y=0$ ($\omega>0$) : $r=\pm i\omega$, donc $y=\alpha\cos\omega t+\beta\sin\omega t$, qu’on peut écrire $A\cos(\omega t+\varphi)$ : c’est le mouvement d’un ressort sans frottement.
:::

# Exercices

:::exercice Premier ordre
Résoudre : $y'=3y$ ; $2y'+y=0$ ; $y'=-y+4$. Déterminer ensuite la solution de $y'=-y+4$ telle que $y(0)=0$.
:::

:::exercice Second ordre
Résoudre : $y''+y'-6y=0$ ; $y''-6y'+9y=0$ ; $y''+9y=0$ ; $y''+2y'+2y=0$.
:::

:::exercice Conditions initiales
Déterminer la solution de $y''+4y=0$ telle que $y(0)=2$ et $y'(0)=-2$.
:::

:::exercice Croissance d’une population
Une population de bactéries évolue selon $N'(t)=0{,}2N(t)$ ($t$ en heures), avec $N(0)=1000$.
1. Exprimer $N(t)$.
2. Au bout de combien de temps la population aura-t-elle doublé ?
:::

:::exercice Changement de fonction
On considère $(E):y'-2y=e^{x}$.
1. Déterminer le réel $k$ pour que $y_0(x)=ke^{x}$ soit solution de $(E)$.
2. Montrer que $y$ est solution de $(E)$ si et seulement si $y-y_0$ est solution de $y'=2y$ ; en déduire les solutions de $(E)$.
:::

:::exercice Série — refroidissement
La température $\theta(t)$ d’un café (en °C, $t$ en minutes) vérifie $\theta'=-0{,}1\left(\theta-20\right)$ et $\theta(0)=80$.
1. Résoudre l’équation différentielle et exprimer $\theta(t)$.
2. Au bout de combien de minutes la température atteint-elle $40\,°$C ?
:::

:::exercice Série — second ordre avec conditions
Déterminer la solution de $y''-4y'+4y=0$ telle que $y(0)=1$ et $y'(0)=3$.
:::

:::exercice Approfondissement — second membre non constant
On considère $(E):y'-y=-x$.
1. Déterminer les réels $a$ et $b$ pour que $p(x)=ax+b$ soit solution de $(E)$.
2. Montrer que $y$ est solution de $(E)$ si et seulement si $y-p$ est solution de $y'=y$.
3. En déduire les solutions de $(E)$ et celle qui vérifie $y(0)=2$.
:::

:::exercice Approfondissement — circuit oscillant
Une tension $u$ vérifie $u''+100u=0$ avec $u(0)=2$ et $u'(0)=0$.
1. Déterminer $u(t)$.
2. Calculer la période des oscillations et la valeur maximale de $u$.
:::

:::exercice Série d’entraînement — premier ordre
Résoudre : $y'=-4y$ ; $3y'-y=0$ ; $y'=2y-6$ ; $y'+y=1$ avec $y(0)=3$.
:::

:::exercice Série d’entraînement — second ordre
Résoudre : $y''-5y'+6y=0$ ; $y''+2y'+y=0$ ; $y''+16y=0$ ; $y''-2y'+2y=0$.
:::

:::exercice Série d’entraînement — conditions initiales
Déterminer la solution de $y''+y'-2y=0$ vérifiant $y(0)=3$ et $y'(0)=0$.
:::

# Corrigés

:::corrige
$y=Ce^{3x}$ ; $y'=-\dfrac12y$ : $y=Ce^{-\frac x2}$ ; $y=Ce^{-x}+4$. Avec $y(0)=0$ : $C=-4$, $y=4-4e^{-x}$.
:::

:::corrige
- $r^2+r-6=(r-2)(r+3)$ : $y=\alpha e^{2x}+\beta e^{-3x}$.
- $(r-3)^2$ : $y=(\alpha x+\beta)e^{3x}$.
- $r=\pm3i$ : $y=\alpha\cos3x+\beta\sin3x$.
- $r=-1\pm i$ : $y=e^{-x}\left(\alpha\cos x+\beta\sin x\right)$.
:::

:::corrige
$y=\alpha\cos2x+\beta\sin2x$ ; $y(0)=\alpha=2$ ; $y'(0)=2\beta=-2$, $\beta=-1$. Solution : $y=2\cos2x-\sin2x$.
:::

:::corrige
1. $N(t)=1000e^{0{,}2t}$.
2. $e^{0{,}2t}=2\iff t=\dfrac{\ln2}{0{,}2}=5\ln2\approx3{,}47$ h.
:::

:::corrige
1. $y_0'-2y_0=ke^x-2ke^x=-ke^x=e^x$, donc $k=-1$.
2. $y'-2y=e^x$ et $y_0'-2y_0=e^x$ donnent, par différence, $(y-y_0)'=2(y-y_0)$, et réciproquement. Donc $y-y_0=Ce^{2x}$ : les solutions de $(E)$ sont $y=Ce^{2x}-e^x$ ($C\in\mathbb R$).
:::

:::corrige
1. $\theta'=-0{,}1\theta+2$ : $\theta(t)=Ce^{-0{,}1t}+20$ ; $\theta(0)=C+20=80$, $C=60$ : $\theta(t)=20+60e^{-0{,}1t}$.
2. $60e^{-0{,}1t}=20\iff e^{-0{,}1t}=\dfrac13\iff t=10\ln3\approx11$ min.
:::

:::corrige
$r^2-4r+4=(r-2)^2$ : $y=(\alpha x+\beta)e^{2x}$. $y(0)=\beta=1$ ; $y'(x)=\left(\alpha+2\alpha x+2\beta\right)e^{2x}$, $y'(0)=\alpha+2=3$, $\alpha=1$ : $y=(x+1)e^{2x}$.
:::

:::corrige
1. $p'-p=a-ax-b=-x$ : $a=1$ et $b=1$, $p(x)=x+1$.
2. $(y-p)'-(y-p)=(y'-y)-(p'-p)=-x+x=0$ si $y$ est solution, et réciproquement.
3. $y=Ce^x+x+1$ ; $y(0)=C+1=2$, $C=1$ : $y=e^x+x+1$.
:::

:::corrige
1. $r=\pm10i$ : $u=\alpha\cos10t+\beta\sin10t$ ; $u(0)=\alpha=2$, $u'(0)=10\beta=0$ : $u(t)=2\cos10t$.
2. Période $T=\dfrac{2\pi}{10}=\dfrac\pi5\approx0{,}63$ s ; amplitude $2$.
:::

:::corrige
$y=Ce^{-4x}$ ; $y=Ce^{\frac x3}$ ; $y=Ce^{2x}+3$ ; $y=Ce^{-x}+1$ et $y(0)=C+1=3$ : $y=2e^{-x}+1$.
:::

:::corrige
$r\in\{2;3\}$ : $\alpha e^{2x}+\beta e^{3x}$ ; $r=-1$ double : $(\alpha x+\beta)e^{-x}$ ; $r=\pm4i$ : $\alpha\cos4x+\beta\sin4x$ ; $r=1\pm i$ : $e^x(\alpha\cos x+\beta\sin x)$.
:::

:::corrige
$r^2+r-2=(r-1)(r+2)$ : $y=\alpha e^x+\beta e^{-2x}$. $\alpha+\beta=3$ et $\alpha-2\beta=0$ : $\beta=1$, $\alpha=2$, donc $y=2e^x+e^{-2x}$.
:::
