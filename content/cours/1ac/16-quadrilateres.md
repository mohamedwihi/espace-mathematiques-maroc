---
id: 1ac-quadrilateres
titre: Les quadrilatères particuliers
niveau: 1ac
semestre: 2
duree: 7 heures
---

## Objectifs
- Connaître les définitions et les propriétés du rectangle, du losange et du carré.
- Démontrer qu’un quadrilatère est un rectangle, un losange ou un carré.
- Reconnaître les axes et le centre de symétrie de ces figures.

## Prérequis
- Parallélogramme et ses propriétés.
- Médiatrice d’un segment ; symétrie centrale.

# I. Le rectangle

:::definition
Un **rectangle** est un quadrilatère qui a **quatre angles droits**.
:::

:::remarque
Un rectangle a ses côtés opposés parallèles : c’est un **parallélogramme particulier**. Il en possède donc toutes les propriétés.
:::

:::propriete
- Les diagonales d’un rectangle ont le **même milieu** et la **même longueur**.
- Réciproquement, un parallélogramme dont les diagonales ont la même longueur est un rectangle.
- Un parallélogramme qui a **un angle droit** est un rectangle.
:::

:::propriete Symétries
Un rectangle (non carré) a **deux axes de symétrie** : les médiatrices de ses côtés, et un **centre de symétrie** : le point d’intersection de ses diagonales.
:::

```figure
{"type":"geometry","x":[-0.5,7],"y":[-0.6,4.2],"width":280,
 "polygons":[{"points":[[0,0],[6,0],[6,3.5],[0,3.5]],"color":"brand"}],
 "segments":[{"from":[0,0],"to":[6,3.5],"dashed":true},{"from":[6,0],"to":[0,3.5],"dashed":true}],
 "rightAngles":[{"at":[0,0],"u":[1,0],"v":[0,1]},{"at":[6,0],"u":[0,1],"v":[-1,0]},{"at":[6,3.5],"u":[-1,0],"v":[0,-1]},{"at":[0,3.5],"u":[0,-1],"v":[1,0]}],
 "points":[{"x":0,"y":0,"label":"A"},{"x":6,"y":0,"label":"B"},{"x":6,"y":3.5,"label":"C"},{"x":0,"y":3.5,"label":"D"},{"x":3,"y":1.75,"label":"O"}],
 "caption":"Rectangle : $AC=BD$ et $OA=OB=OC=OD$."}
```

# II. Le losange

:::definition
Un **losange** est un quadrilatère qui a **quatre côtés de même longueur**.
:::

:::remarque
Un losange a ses côtés opposés de même longueur : c’est aussi un **parallélogramme particulier**.
:::

:::propriete
- Les diagonales d’un losange ont le **même milieu** et sont **perpendiculaires**.
- Réciproquement, un parallélogramme dont les diagonales sont perpendiculaires est un losange.
- Un parallélogramme qui a **deux côtés consécutifs de même longueur** est un losange.
:::

:::propriete Symétries
Un losange (non carré) a **deux axes de symétrie** : ses diagonales, et un **centre de symétrie** : le point d’intersection des diagonales. Chaque diagonale est **bissectrice** des angles dont elle joint les sommets.
:::

```figure
{"type":"geometry","x":[-4,4],"y":[-2.8,2.8],"width":260,"orthonormal":true,
 "polygons":[{"points":[[-3.5,0],[0,2.2],[3.5,0],[0,-2.2]],"color":"saffron"}],
 "segments":[{"from":[-3.5,0],"to":[3.5,0],"dashed":true},{"from":[0,-2.2],"to":[0,2.2],"dashed":true}],
 "rightAngles":[{"at":[0,0],"u":[1,0],"v":[0,1]}],
 "points":[{"x":-3.5,"y":0,"label":"E"},{"x":0,"y":2.2,"label":"F"},{"x":3.5,"y":0,"label":"G"},{"x":0,"y":-2.2,"label":"H"}],
 "caption":"Losange : les diagonales sont perpendiculaires et se coupent en leur milieu."}
```

:::propriete Aire du losange
Si $D$ et $d$ sont les longueurs des diagonales : $\mathcal A=\dfrac{D\times d}2$.
:::

# III. Le carré

:::definition
Un **carré** est un quadrilatère qui a **quatre angles droits** et **quatre côtés de même longueur**.
:::

:::remarque
Un carré est à la fois un **rectangle** et un **losange** : il possède toutes leurs propriétés.
:::

:::propriete
- Les diagonales d’un carré ont le même milieu, la même longueur et sont perpendiculaires.
- Un rectangle qui a deux côtés consécutifs de même longueur est un carré ; un losange qui a un angle droit est un carré.
- Un carré a **quatre axes de symétrie** (ses deux diagonales et les deux médiatrices de ses côtés) et un centre de symétrie.
:::

# IV. Récapitulatif

:::methode Démontrer la nature d’un quadrilatère
| Pour démontrer qu’un parallélogramme est… | il suffit de montrer qu’il a… |
|---|---|
| un rectangle | un angle droit, ou des diagonales de même longueur |
| un losange | deux côtés consécutifs égaux, ou des diagonales perpendiculaires |
| un carré | les propriétés d’un rectangle et d’un losange |
:::

# Exercices

:::exercice Constructions
1. Construire un rectangle $ABCD$ tel que $AB=5$ cm et $BC=3$ cm ; tracer ses axes de symétrie.
2. Construire un losange $EFGH$ dont les diagonales mesurent $EG=6$ cm et $FH=4$ cm ; calculer son aire.
3. Construire un carré dont la diagonale mesure $5$ cm.
:::

:::exercice Rectangle
$ABCD$ est un rectangle de centre $O$ tel que $AC=10$ cm.
1. Calculer $BD$, $OA$ et $OB$ en justifiant.
2. Quelle est la nature du triangle $OAB$ ?
:::

:::exercice Losange
$EFGH$ est un losange de centre $O$, de côté $5$ cm, avec $\widehat{EFG}=120°$.
1. Calculer le périmètre du losange.
2. Calculer $\widehat{FGH}$, puis $\widehat{EFO}$ (la diagonale est bissectrice).
3. Quelle est la nature du triangle $EFG$ ?
:::

:::exercice Démontrer
$(\mathcal C)$ est un cercle de centre $O$ ; $[AC]$ et $[BD]$ sont deux diamètres distincts.
1. Montrer que $ABCD$ est un rectangle.
2. À quelle condition sur les diamètres $ABCD$ est-il un carré ?
:::

:::exercice Médiatrice et losange
$[AB]$ est un segment de milieu $I$ ; $M$ est un point de la médiatrice de $[AB]$ distinct de $I$, et $N$ est le symétrique de $M$ par rapport à $I$. Montrer que $AMBN$ est un losange.
:::

:::exercice Approfondissement — le rectangle caché
$ABC$ est un triangle rectangle en $A$ et $M$ le milieu de $[BC]$. $D$ est le symétrique de $A$ par rapport à $M$.
1. Montrer que $ABDC$ est un rectangle.
2. En déduire que $AM=\dfrac{BC}2$.
:::

:::exercice Approfondissement — losange ou carré ?
$ABCD$ est un losange de centre $O$ tel que $AC=8$ cm et $BD=6$ cm.
1. Calculer son aire.
2. Sachant que le côté mesure $5$ cm, calculer la hauteur du losange relative au côté $[AB]$.
3. À quelle condition sur $AC$ et $BD$ un losange est-il un carré ?
:::

# Corrigés

:::corrige
1. Les axes de symétrie sont les médiatrices de $[AB]$ et de $[BC]$.
2. On trace $[EG]$ et $[FH]$ perpendiculaires en leur milieu ; $\mathcal A=\dfrac{6\times4}2=12\ \text{cm}^2$.
3. On trace deux segments de $5$ cm perpendiculaires et de même milieu ; leurs extrémités sont les sommets du carré.
:::

:::corrige
1. Les diagonales d’un rectangle ont la même longueur : $BD=10$ cm ; elles se coupent en leur milieu : $OA=OB=5$ cm.
2. $OA=OB$ : le triangle $OAB$ est isocèle en $O$.
:::

:::corrige
1. $4\times5=20$ cm.
2. Angles consécutifs supplémentaires : $\widehat{FGH}=60°$ ; $[FH]$ est bissectrice de $\widehat{EFG}$ : $\widehat{EFO}=60°$.
3. $FE=FG$ et $\widehat{EFG}=120°$ : $EFG$ est isocèle en $F$ (ses angles à la base mesurent $30°$).
:::

:::corrige
1. Les diagonales $[AC]$ et $[BD]$ ont le même milieu $O$ : $ABCD$ est un parallélogramme. Elles ont la même longueur (deux diamètres) : c’est un rectangle.
2. Si les diamètres sont **perpendiculaires**, le rectangle est aussi un losange : c’est un carré.
:::

:::corrige
$I$ est le milieu de $[AB]$ et de $[MN]$ : $AMBN$ est un parallélogramme. $M$ est sur la médiatrice de $[AB]$, donc $MA=MB$ : deux côtés consécutifs égaux, c’est un losange.
:::

:::corrige
1. $M$ est le milieu de $[BC]$ et de $[AD]$ : $ABDC$ est un parallélogramme ; il a un angle droit en $A$ : c’est un rectangle.
2. Les diagonales d’un rectangle ont la même longueur et se coupent en leur milieu : $AM=\dfrac{AD}2=\dfrac{BC}2$.
:::

:::corrige
1. $\mathcal A=\dfrac{8\times6}2=24\ \text{cm}^2$.
2. Un losange est un parallélogramme : $\mathcal A=AB\times h$, donc $h=\dfrac{24}5=4{,}8$ cm.
3. Il faut des diagonales de même longueur.
:::
