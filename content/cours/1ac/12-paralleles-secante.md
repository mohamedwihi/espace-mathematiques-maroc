---
id: 1ac-paralleles-secante
titre: Deux droites parallèles et une sécante
niveau: 1ac
semestre: 1
duree: 7 heures
---

## Objectifs
- Reconnaître des angles alternes-internes, alternes-externes et correspondants.
- Connaître les propriétés des angles formés par deux parallèles et une sécante.
- Utiliser les réciproques pour démontrer que deux droites sont parallèles.

## Prérequis
- Angles : vocabulaire, angles supplémentaires, opposés par le sommet.
- Droites parallèles.

# I. Vocabulaire

:::definition
Deux droites $(D)$ et $(D')$ coupées par une troisième droite $(\Delta)$, appelée **sécante**, déterminent huit angles. Parmi eux :
- deux angles **alternes-internes** sont situés **entre** $(D)$ et $(D')$, de part et d’autre de la sécante, et ne sont pas adjacents ;
- deux angles **alternes-externes** sont situés **à l’extérieur** de $(D)$ et $(D')$, de part et d’autre de la sécante ;
- deux angles **correspondants** sont situés du **même côté** de la sécante, l’un entre les deux droites et l’autre à l’extérieur, « à la même place » à chaque intersection.
:::

```figure
{"type":"geometry","x":[-0.5,9.5],"y":[-0.6,5.6],"width":330,
 "segments":[{"from":[0,1],"to":[9,1]},{"from":[0,4],"to":[9,4]},{"from":[2.5,-0.4],"to":[6.8,5.4],"color":"brand"}],
 "points":[{"x":3.54,"y":1,"label":"A"},{"x":5.76,"y":4,"label":"B"},{"x":4.35,"y":1.4,"label":"1","dot":false},{"x":5.0,"y":3.6,"label":"2","dot":false},{"x":6.6,"y":4.4,"label":"3","dot":false},{"x":8.6,"y":1.35,"label":"(D)","dot":false},{"x":8.6,"y":4.35,"label":"(D')","dot":false},{"x":7.1,"y":5.1,"label":"(Δ)","dot":false}],
 "caption":"$\\widehat1$ et $\\widehat2$ sont alternes-internes ; $\\widehat1$ et $\\widehat3$ sont correspondants."}
```

:::exemple
Sur la figure, $\widehat1$ est l’angle de sommet $A$ situé au-dessus de $(D)$ et à droite de $(\Delta)$ ; $\widehat2$ est l’angle de sommet $B$ situé au-dessous de $(D')$ et à gauche de $(\Delta)$ : ils sont alternes-internes. $\widehat3$, de sommet $B$, au-dessus de $(D')$ et à droite de $(\Delta)$, est le correspondant de $\widehat1$.
:::

# II. Angles formés par deux parallèles et une sécante

:::propriete 1 Alternes-internes
Si deux droites **parallèles** sont coupées par une sécante, alors les angles **alternes-internes** qu’elles forment ont la **même mesure**.
:::

:::propriete 2 Correspondants
Si deux droites **parallèles** sont coupées par une sécante, alors les angles **correspondants** qu’elles forment ont la **même mesure**.
:::

:::propriete 3 Alternes-externes
Si deux droites **parallèles** sont coupées par une sécante, alors les angles **alternes-externes** ont la **même mesure**.
:::

:::demonstration Propriété 2 à partir de la propriété 1
Sur la figure, $\widehat3$ et $\widehat2$ sont opposés par le sommet, donc $\widehat3=\widehat2$. Si $(D)\parallel(D')$, alors $\widehat2=\widehat1$ (alternes-internes). Donc $\widehat3=\widehat1$.
:::

:::propriete Angles internes du même côté
Si deux droites parallèles sont coupées par une sécante, deux angles situés entre les droites et du même côté de la sécante sont **supplémentaires**.
:::

:::exemple
$(D)\parallel(D')$ et la sécante forme en $A$ un angle $\widehat1=55°$. Alors l’angle alterne-interne $\widehat2=55°$, l’angle correspondant $\widehat3=55°$, et l’angle adjacent à $\widehat1$ sur $(D)$ mesure $180°-55°=125°$.
:::

# III. Reconnaître des droites parallèles

:::propriete Réciproques
Si deux droites coupées par une sécante forment :
- deux angles **alternes-internes** de même mesure, ou
- deux angles **correspondants** de même mesure,

alors ces deux droites sont **parallèles**.
:::

:::methode Démontrer un parallélisme
On repère deux angles alternes-internes (ou correspondants), on montre qu’ils ont la même mesure, puis on conclut avec la réciproque.
:::

:::exemple
Deux droites $(D)$ et $(D')$ sont coupées par $(\Delta)$ ; les angles correspondants mesurent $72°$ et $72°$ : donc $(D)\parallel(D')$. S’ils mesuraient $72°$ et $70°$, les droites ne seraient pas parallèles.
:::

# Exercices

:::exercice Vocabulaire
Deux droites $(D)$ et $(D')$ sont coupées par une sécante $(\Delta)$ en $E$ et $F$. Faire une figure et colorier :
1. en bleu deux angles alternes-internes ;
2. en rouge deux angles correspondants ;
3. en vert deux angles alternes-externes.
:::

:::exercice Calcul d’angles
Les droites $(D)$ et $(D')$ sont parallèles, coupées par $(\Delta)$ en $A$ (sur $(D)$) et $B$ (sur $(D')$). L’un des angles de sommet $A$ mesure $48°$.
Calculer les mesures des quatre angles de sommet $A$ et des quatre angles de sommet $B$, en justifiant.
:::

:::exercice Parallèles ou non ?
Deux droites $(D_1)$ et $(D_2)$ sont coupées par une sécante.
1. Deux angles alternes-internes mesurent $117°$ et $117°$. Que peut-on conclure ?
2. Deux angles correspondants mesurent $64°$ et $66°$. Les droites sont-elles parallèles ?
3. Deux angles internes du même côté de la sécante mesurent $105°$ et $75°$. Les droites sont-elles parallèles ?
:::

:::exercice Démonstration
$ABC$ est un triangle. La droite $(L)$ passe par $A$ et est parallèle à $(BC)$. On note $M$ et $N$ deux points de $(L)$ situés de part et d’autre de $A$, $M$ du côté de $B$.
1. Montrer que $\widehat{MAB}=\widehat{ABC}$ et $\widehat{NAC}=\widehat{ACB}$.
2. En déduire que $\widehat{BAC}+\widehat{ABC}+\widehat{ACB}=180°$.
:::

:::exercice Approfondissement — le Z
$(D)\parallel(D')$ ; $A\in(D)$, $B\in(D')$, et $M$ est un point situé entre les deux droites. On donne $\widehat{xAM}=35°$ et $\widehat{MBy}=50°$, où $[Ax)\subset(D)$ et $[By)\subset(D')$ sont dirigées dans le même sens.
En traçant par $M$ la parallèle à $(D)$, montrer que $\widehat{AMB}=85°$.
:::

:::exercice Approfondissement — parallèles ou non ?
Deux droites $(D_1)$ et $(D_2)$ sont coupées par une sécante. Un angle formé avec $(D_1)$ mesure $3x+10$ et l’angle correspondant formé avec $(D_2)$ mesure $5x-30$ (en degrés).
1. Pour quelle valeur de $x$ les droites sont-elles parallèles ?
2. Donner alors la mesure de ces angles.
:::

# Corrigés

:::corrige
Les angles alternes-internes sont entre $(D)$ et $(D')$, de part et d’autre de $(\Delta)$ ; les correspondants sont du même côté de $(\Delta)$, à la même position en $E$ et en $F$ ; les alternes-externes sont à l’extérieur des deux droites, de part et d’autre de $(\Delta)$.
:::

:::corrige
En $A$ : $48°$, son opposé par le sommet $48°$, et deux angles de $180°-48°=132°$ (supplémentaires de $48°$). Comme $(D)\parallel(D')$, les angles correspondants sont égaux : en $B$ on retrouve aussi deux angles de $48°$ et deux angles de $132°$.
:::

:::corrige
1. Les angles alternes-internes sont égaux : $(D_1)\parallel(D_2)$.
2. Les angles correspondants ne sont pas égaux : les droites ne sont pas parallèles.
3. $105°+75°=180°$ : l’angle alterne-interne de l’angle de $105°$ mesure $180°-105°=75°$, égal à l’autre ; les droites sont parallèles.
:::

:::corrige
1. $(L)\parallel(BC)$, coupées par la sécante $(AB)$ : $\widehat{MAB}$ et $\widehat{ABC}$ sont alternes-internes, donc égaux. De même avec la sécante $(AC)$ : $\widehat{NAC}=\widehat{ACB}$.
2. $\widehat{MAB}+\widehat{BAC}+\widehat{NAC}=180°$ (angle plat $\widehat{MAN}$), donc $\widehat{ABC}+\widehat{BAC}+\widehat{ACB}=180°$.
:::

:::corrige
Soit $(L)$ la parallèle à $(D)$ passant par $M$ ; elle est aussi parallèle à $(D')$. Elle partage $\widehat{AMB}$ en deux angles qui sont alternes-internes avec $\widehat{xAM}$ et $\widehat{MBy}$ : ils mesurent $35°$ et $50°$. Donc $\widehat{AMB}=35°+50°=85°$.
:::

:::corrige
1. Il faut des angles correspondants égaux : $3x+10=5x-30\iff x=20$.
2. Ils mesurent $70°$.
:::
