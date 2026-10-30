---
id: 1ac-parallelogramme
titre: Le parallélogramme
niveau: 1ac
semestre: 2
duree: 7 heures
---

## Objectifs
- Connaître la définition du parallélogramme et le construire.
- Connaître les propriétés des diagonales, des côtés et des angles, et leurs réciproques.
- Démontrer qu’un quadrilatère est un parallélogramme.
- Connaître la hauteur d’un parallélogramme et calculer son aire.

## Prérequis
- Droites parallèles ; symétrie centrale.
- Angles formés par deux parallèles et une sécante.

# I. Définition

:::definition
Un **parallélogramme** est un quadrilatère dont les **côtés opposés** sont **parallèles** deux à deux.

$ABCD$ est un parallélogramme signifie : $(AB)\parallel(CD)$ et $(AD)\parallel(BC)$.
:::

```figure
{"type":"geometry","x":[-0.5,9],"y":[-0.6,4.4],"width":320,
 "polygons":[{"points":[[0,0],[6,0],[8,3.5],[2,3.5]],"color":"brand"}],
 "segments":[{"from":[0,0],"to":[8,3.5],"dashed":true},{"from":[6,0],"to":[2,3.5],"dashed":true}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":6,"y":0,"label":"B"},{"x":8,"y":3.5,"label":"C"},{"x":2,"y":3.5,"label":"D"},{"x":4,"y":1.75,"label":"O"}],
 "caption":"Un parallélogramme $ABCD$ ; ses diagonales se coupent en leur milieu $O$."}
```

:::remarque
- $[AC]$ et $[BD]$ sont les **diagonales**.
- On nomme un parallélogramme en citant ses sommets dans l’ordre (en tournant).
:::

:::methode Construire un parallélogramme $ABCD$ avec $AB=5$ cm, $AD=3$ cm
On trace $[AB]$ et $[AD]$ ; puis la parallèle à $(AD)$ passant par $B$ et la parallèle à $(AB)$ passant par $D$ ; elles se coupent en $C$. (On peut aussi utiliser le compas : $BC=3$ cm et $DC=5$ cm.)
:::

# II. Propriétés des diagonales

:::propriete Directe
Si un quadrilatère est un parallélogramme, alors ses **diagonales ont le même milieu**.
:::

:::propriete Réciproque
Si les diagonales d’un quadrilatère ont le **même milieu**, alors ce quadrilatère est un parallélogramme.
:::

:::remarque
Le point d’intersection des diagonales est le **centre de symétrie** du parallélogramme : le symétrique de $A$ par rapport à $O$ est $C$, celui de $B$ est $D$.
:::

# III. Propriétés des côtés

:::propriete Directe
Si un quadrilatère est un parallélogramme, alors ses **côtés opposés ont la même longueur** : $AB=CD$ et $AD=BC$.
:::

:::propriete Réciproques
- Si un quadrilatère **non croisé** a ses côtés opposés de même longueur deux à deux, alors c’est un parallélogramme.
- Si un quadrilatère non croisé a deux côtés opposés **parallèles et de même longueur**, alors c’est un parallélogramme.
:::

# IV. Propriétés des angles

:::propriete Directe
Si un quadrilatère est un parallélogramme, alors :
- ses **angles opposés** ont la même mesure : $\widehat A=\widehat C$ et $\widehat B=\widehat D$ ;
- deux **angles consécutifs** sont supplémentaires : $\widehat A+\widehat B=180°$.
:::

:::demonstration Angles consécutifs
$(AD)\parallel(BC)$ coupées par la sécante $(AB)$ : $\widehat{DAB}$ et $\widehat{ABC}$ sont deux angles internes du même côté de la sécante, donc supplémentaires.
:::

:::propriete Réciproque
Si un quadrilatère non croisé a ses angles opposés de même mesure deux à deux, alors c’est un parallélogramme.
:::

:::exemple
$ABCD$ est un parallélogramme et $\widehat A=65°$. Alors $\widehat C=65°$ et $\widehat B=\widehat D=180°-65°=115°$.
:::

# V. Hauteur et aire

:::definition
Une **hauteur** d’un parallélogramme est la distance entre deux côtés opposés (longueur d’un segment perpendiculaire à ces deux côtés).
:::

:::propriete Aire
Si $b$ est la longueur d’un côté (la **base**) et $h$ la hauteur relative à ce côté :
$$\mathcal A=b\times h.$$
:::

```figure
{"type":"geometry","x":[-0.5,9],"y":[-0.6,4.4],"width":300,
 "polygons":[{"points":[[0,0],[6,0],[8,3.5],[2,3.5]],"color":"brand"}],
 "segments":[{"from":[2,3.5],"to":[2,0],"dashed":true,"color":"saffron"}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":6,"y":0,"label":"B"},{"x":8,"y":3.5,"label":"C"},{"x":2,"y":3.5,"label":"D"},{"x":2,"y":0,"label":"H"},{"x":2.35,"y":1.75,"label":"h","dot":false}],
 "rightAngles":[{"at":[2,0],"u":[1,0],"v":[0,1]}],
 "caption":"$DH$ est la hauteur relative à la base $[AB]$ : $\\mathcal A=AB\\times DH$."}
```

:::exemple
Un parallélogramme de base $7$ cm et de hauteur $4$ cm a pour aire $7\times4=28\ \text{cm}^2$.
:::

# Exercices

:::exercice Construction
1. Construire un parallélogramme $ABCD$ tel que $AB=5$ cm, $BC=3$ cm et $\widehat{ABC}=60°$.
2. Construire un parallélogramme $EFGH$ de centre $O$ tel que $EG=8$ cm, $FH=6$ cm et $\widehat{EOF}=50°$.
:::

:::exercice Calculs
$ABCD$ est un parallélogramme de centre $O$ avec $AB=6$ cm, $AD=4$ cm, $AC=9$ cm et $\widehat{BAD}=70°$.
Calculer en justifiant : $CD$, $BC$, $OA$, $\widehat{BCD}$ et $\widehat{ABC}$, puis le périmètre de $ABCD$.
:::

:::exercice Démontrer
$[AC]$ et $[BD]$ sont deux segments de même milieu $I$.
1. Quelle est la nature de $ABCD$ ? Justifier.
2. $E$ est le symétrique de $B$ par rapport à $C$. Montrer que $ACED$ est un parallélogramme (on pourra montrer que $(AD)\parallel(CE)$ et $AD=CE$).
:::

:::exercice Aire
1. Calculer l’aire d’un parallélogramme de base $9$ cm et de hauteur $5{,}5$ cm.
2. Un parallélogramme a une aire de $42\ \text{cm}^2$ et une base de $12$ cm. Calculer la hauteur correspondante.
:::

# Corrigés

:::corrige
1. On trace $[AB]$ de $5$ cm, l’angle de $60°$ en $B$, on place $C$ avec $BC=3$ cm, puis $D$ par parallèles (ou au compas).
2. On trace $[EG]$ de $8$ cm de milieu $O$, puis la droite faisant $50°$ avec $[OE)$ en $O$, sur laquelle on place $F$ et $H$ à $3$ cm de $O$ ; les diagonales ont le même milieu.
:::

:::corrige
- $CD=AB=6$ cm et $BC=AD=4$ cm (côtés opposés).
- $OA=\dfrac{AC}2=4{,}5$ cm (les diagonales se coupent en leur milieu).
- $\widehat{BCD}=\widehat{BAD}=70°$ (angles opposés) ; $\widehat{ABC}=180°-70°=110°$ (angles consécutifs).
- Périmètre : $2\times(6+4)=20$ cm.
:::

:::corrige
1. Les diagonales $[AC]$ et $[BD]$ ont le même milieu : $ABCD$ est un parallélogramme.
2. $ABCD$ est un parallélogramme, donc $(AD)\parallel(BC)$ et $AD=BC$. Comme $E$ est le symétrique de $B$ par rapport à $C$, $E\in(BC)$ et $CE=BC$. Donc $(AD)\parallel(CE)$ et $AD=CE$ : $ACED$, non croisé, a deux côtés opposés parallèles et de même longueur, c’est un parallélogramme.
:::

:::corrige
1. $9\times5{,}5=49{,}5\ \text{cm}^2$.
2. $h=\dfrac{42}{12}=3{,}5$ cm.
:::
